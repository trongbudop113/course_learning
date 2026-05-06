#!/usr/bin/env python3
"""Small local API for the learning database."""

from __future__ import annotations

import argparse
import json
import sqlite3
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DB = ROOT / "data" / "course_learning.sqlite"


def rows_to_dicts(cursor: sqlite3.Cursor) -> list[dict]:
    return [dict(row) for row in cursor.fetchall()]


class ApiHandler(BaseHTTPRequestHandler):
    db_path: Path = DEFAULT_DB

    def send_json(self, status: int, payload: dict | list) -> None:
        body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        query = parse_qs(parsed.query)

        try:
            with sqlite3.connect(self.db_path) as conn:
                conn.row_factory = sqlite3.Row
                conn.execute("PRAGMA foreign_keys = ON")

                if parsed.path == "/api/health":
                    self.send_json(200, {"status": "ok", "db": str(self.db_path)})
                    return

                if parsed.path == "/api/courses":
                    rows = conn.execute(
                        "SELECT slug, title, category, level, description, status FROM courses ORDER BY id"
                    )
                    self.send_json(200, rows_to_dicts(rows))
                    return

                if parsed.path == "/api/sources":
                    rows = conn.execute(
                        """
                        SELECT learning_sources.id,
                               courses.slug AS course_slug,
                               learning_sources.source_type,
                               learning_sources.title,
                               learning_sources.url,
                               learning_sources.provider,
                               learning_sources.language_code,
                               learning_sources.crawl_status,
                               learning_sources.fetched_at
                        FROM learning_sources
                        LEFT JOIN courses ON courses.id = learning_sources.course_id
                        ORDER BY learning_sources.created_at DESC
                        LIMIT 100
                        """
                    )
                    self.send_json(200, rows_to_dicts(rows))
                    return

                if parsed.path == "/api/learning-items":
                    course_slug = query.get("course_slug", [""])[0]
                    item_type = query.get("item_type", [""])[0]
                    params: list[str] = []
                    filters: list[str] = []
                    if course_slug:
                        filters.append("courses.slug = ?")
                        params.append(course_slug)
                    if item_type:
                        filters.append("learning_items.item_type = ?")
                        params.append(item_type)
                    where = f"WHERE {' AND '.join(filters)}" if filters else ""
                    rows = conn.execute(
                        f"""
                        SELECT learning_items.id,
                               courses.slug AS course_slug,
                               learning_items.item_type,
                               learning_items.front_text,
                               learning_items.back_text,
                               learning_items.example_text,
                               learning_items.explanation,
                               learning_items.difficulty,
                               learning_items.tags
                        FROM learning_items
                        JOIN courses ON courses.id = learning_items.course_id
                        {where}
                        ORDER BY learning_items.created_at DESC
                        LIMIT 200
                        """,
                        params,
                    )
                    self.send_json(200, rows_to_dicts(rows))
                    return

            self.send_json(404, {"error": "not_found"})
        except Exception as exc:
            self.send_json(500, {"error": str(exc)})

    def log_message(self, format: str, *args) -> None:
        return


def main() -> None:
    parser = argparse.ArgumentParser(description="Run local API for the course learning DB.")
    parser.add_argument("--db", default=str(DEFAULT_DB), help="SQLite database path.")
    parser.add_argument("--host", default="127.0.0.1", help="Host to bind.")
    parser.add_argument("--port", default=8787, type=int, help="Port to bind.")
    args = parser.parse_args()

    ApiHandler.db_path = Path(args.db).expanduser().resolve()
    server = ThreadingHTTPServer((args.host, args.port), ApiHandler)
    print(f"API server: http://{args.host}:{args.port}")
    print(f"Database: {ApiHandler.db_path}")
    server.serve_forever()


if __name__ == "__main__":
    main()
