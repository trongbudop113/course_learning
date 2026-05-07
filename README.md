# Course Learning

Static course website with a lightweight SQLite data layer for learning content.

## Structure

```text
index.html
english.html
japanese.html
vibe-design.html
agentic-ai.html
assets/
  css/
    styles.css
  data/
    course-data.js
  js/
    app.js
db/
  schema.sql
  seed.sql
tools/
  init_db.py
  import_learning_source.py
  api_server.py
data/
  sample_sources.jsonl
```

## How to open

Open this file in a browser:

```text
file:///Users/luuhoangtrong/Project/course_learning/index.html
```

Agentic AI course page:

```text
file:///Users/luuhoangtrong/Project/course_learning/agentic-ai.html
```

English course page:

```text
file:///Users/luuhoangtrong/Project/course_learning/english.html
```

Japanese course page:

```text
file:///Users/luuhoangtrong/Project/course_learning/japanese.html
```

Vibe design lesson page:

```text
file:///Users/luuhoangtrong/Project/course_learning/vibe-design.html
```

## How to extend

- Add or edit course content in `assets/data/course-data.js`.
- Add a new language by adding a new top-level key next to `vi` and `en`.
- Adjust layout and visual style in `assets/css/styles.css`.
- Add rendering behavior in `assets/js/app.js`.

## Database

GitHub Pages only serves static files. The SQLite database and API below are for local development or a separate backend server.

Create the database:

```bash
python3 tools/init_db.py
```

Reset and recreate the database after schema changes:

```bash
python3 tools/init_db.py --reset
```

This creates:

```text
data/course_learning.sqlite
```

The database stores:

- courses and modules
- lessons
- crawled or manually collected learning sources
- raw source documents and searchable chunks
- learning items such as vocabulary, grammar, readings, exercises, concepts, and tools
- vocabulary details for English and Japanese
- study events for review history

Import collected source data:

```bash
python3 tools/import_learning_source.py data/sample_sources.jsonl
```

Accepted import formats are JSON, JSONL, and CSV. Useful fields:

```text
course_slug, source_type, title, raw_text, url, provider, language_code,
license_note, trust_level, published_at, external_id
```

Run the local API:

```bash
python3 tools/api_server.py
```

API endpoints:

```text
GET http://127.0.0.1:8787/api/health
GET http://127.0.0.1:8787/api/courses
GET http://127.0.0.1:8787/api/sources
GET http://127.0.0.1:8787/api/learning-items
GET http://127.0.0.1:8787/api/learning-items?course_slug=english-practical&item_type=vocabulary
```

## Data collection notes

Use `learning_sources` for source metadata and `source_documents` for fetched raw text. Keep `license_note` filled in so scraped or imported material can be filtered later. For production crawling, add one crawler per source type and pass its output into `tools/import_learning_source.py`.
