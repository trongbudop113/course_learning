#!/usr/bin/env python3
"""Initialize the course learning SQLite database."""

from __future__ import annotations

import argparse
import sqlite3
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DB = ROOT / "data" / "course_learning.sqlite"
SCHEMA = ROOT / "db" / "schema.sql"
SEED = ROOT / "db" / "seed.sql"


def run_sql(conn: sqlite3.Connection, path: Path) -> None:
    conn.executescript(path.read_text(encoding="utf-8"))


def main() -> None:
    parser = argparse.ArgumentParser(description="Create or update the learning database.")
    parser.add_argument("--db", default=str(DEFAULT_DB), help="SQLite database path.")
    parser.add_argument("--no-seed", action="store_true", help="Skip seed data.")
    args = parser.parse_args()

    db_path = Path(args.db).expanduser().resolve()
    db_path.parent.mkdir(parents=True, exist_ok=True)

    with sqlite3.connect(db_path) as conn:
        conn.execute("PRAGMA foreign_keys = ON")
        run_sql(conn, SCHEMA)
        if not args.no_seed:
            run_sql(conn, SEED)
        conn.commit()

    print(f"Database ready: {db_path}")


if __name__ == "__main__":
    main()
