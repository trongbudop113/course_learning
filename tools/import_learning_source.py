#!/usr/bin/env python3
"""Import crawled or manually collected learning material into SQLite.

Accepted input formats:
- JSON object
- JSON array of objects
- JSONL, one object per line
- CSV with headers

Expected fields:
title, raw_text, url, provider, source_type, course_slug, language_code,
license_note, trust_level, published_at, external_id
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import sqlite3
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DB = ROOT / "data" / "course_learning.sqlite"


def load_records(path: Path) -> list[dict[str, Any]]:
    text = path.read_text(encoding="utf-8")
    suffix = path.suffix.lower()

    if suffix == ".csv":
        with path.open("r", encoding="utf-8", newline="") as handle:
            return [dict(row) for row in csv.DictReader(handle)]

    try:
        parsed = json.loads(text)
        if isinstance(parsed, list):
            return [item for item in parsed if isinstance(item, dict)]
        if isinstance(parsed, dict):
            return [parsed]
    except json.JSONDecodeError:
        pass

    records: list[dict[str, Any]] = []
    for line in text.splitlines():
        line = line.strip()
        if line:
            records.append(json.loads(line))
    return records


def normalize_text(value: str) -> str:
    return " ".join(value.split())


def get_course_id(conn: sqlite3.Connection, slug: str | None) -> int | None:
    if not slug:
        return None
    row = conn.execute("SELECT id FROM courses WHERE slug = ?", (slug,)).fetchone()
    if not row:
        raise ValueError(f"Unknown course_slug: {slug}")
    return int(row[0])


def upsert_source(conn: sqlite3.Connection, record: dict[str, Any], course_id: int | None) -> int:
    url = record.get("url") or None
    title = record.get("source_title") or record.get("title") or "Untitled source"
    source_type = record.get("source_type") or "manual"
    language_code = record.get("language_code") or "vi"
    provider = record.get("provider") or None
    license_note = record.get("license_note") or ""
    trust_level = int(record.get("trust_level") or 3)

    existing = None
    if url:
        existing = conn.execute("SELECT id FROM learning_sources WHERE url = ?", (url,)).fetchone()

    if existing:
        source_id = int(existing[0])
        conn.execute(
            """
            UPDATE learning_sources
            SET course_id = COALESCE(?, course_id),
                title = ?,
                source_type = ?,
                provider = ?,
                language_code = ?,
                license_note = ?,
                trust_level = ?,
                crawl_status = 'fetched',
                fetched_at = CURRENT_TIMESTAMP
            WHERE id = ?
            """,
            (course_id, title, source_type, provider, language_code, license_note, trust_level, source_id),
        )
        return source_id

    cursor = conn.execute(
        """
        INSERT INTO learning_sources
          (course_id, source_type, title, url, provider, language_code, license_note, trust_level, crawl_status, fetched_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'fetched', CURRENT_TIMESTAMP)
        """,
        (course_id, source_type, title, url, provider, language_code, license_note, trust_level),
    )
    return int(cursor.lastrowid)


def chunk_text(text: str, max_chars: int = 900) -> list[str]:
    paragraphs = [part.strip() for part in text.split("\n") if part.strip()]
    chunks: list[str] = []
    current = ""

    for paragraph in paragraphs or [text]:
        if len(current) + len(paragraph) + 1 <= max_chars:
            current = f"{current}\n{paragraph}".strip()
        else:
            if current:
                chunks.append(current)
            current = paragraph

    if current:
        chunks.append(current)
    return chunks


def import_record(conn: sqlite3.Connection, record: dict[str, Any]) -> None:
    raw_text = record.get("raw_text") or record.get("content") or record.get("text") or ""
    raw_text = str(raw_text).strip()
    if not raw_text:
        raise ValueError("Record is missing raw_text/content/text")

    course_id = get_course_id(conn, record.get("course_slug"))
    source_id = upsert_source(conn, record, course_id)
    normalized = normalize_text(raw_text)
    content_hash = hashlib.sha256(normalized.encode("utf-8")).hexdigest()

    cursor = conn.execute(
        """
        INSERT OR IGNORE INTO source_documents
          (source_id, external_id, title, raw_text, normalized_text, content_hash, published_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        """,
        (
            source_id,
            record.get("external_id") or None,
            record.get("title") or "Untitled document",
            raw_text,
            normalized,
            content_hash,
            record.get("published_at") or None,
        ),
    )

    document_id = cursor.lastrowid
    if not document_id:
        row = conn.execute(
            "SELECT id FROM source_documents WHERE source_id = ? AND content_hash = ?",
            (source_id, content_hash),
        ).fetchone()
        document_id = int(row[0])
        conn.execute("DELETE FROM document_chunks WHERE document_id = ?", (document_id,))

    for index, chunk in enumerate(chunk_text(raw_text), start=1):
        conn.execute(
            """
            INSERT INTO document_chunks (document_id, chunk_order, text, token_estimate)
            VALUES (?, ?, ?, ?)
            """,
            (document_id, index, chunk, max(1, len(chunk) // 4)),
        )


def main() -> None:
    parser = argparse.ArgumentParser(description="Import crawled learning source data.")
    parser.add_argument("input", help="JSON, JSONL, or CSV file to import.")
    parser.add_argument("--db", default=str(DEFAULT_DB), help="SQLite database path.")
    args = parser.parse_args()

    input_path = Path(args.input).expanduser().resolve()
    db_path = Path(args.db).expanduser().resolve()
    records = load_records(input_path)

    with sqlite3.connect(db_path) as conn:
        conn.execute("PRAGMA foreign_keys = ON")
        for record in records:
            import_record(conn, record)
        conn.commit()

    print(f"Imported {len(records)} record(s) into {db_path}")


if __name__ == "__main__":
    main()
