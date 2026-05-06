PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('english', 'japanese', 'data_mining', 'agentic_ai')),
  level TEXT NOT NULL DEFAULT 'all',
  description TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'archived')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS course_modules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  module_order INTEGER NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT '',
  UNIQUE (course_id, module_order)
);

CREATE TABLE IF NOT EXISTS lessons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  module_id INTEGER NOT NULL REFERENCES course_modules(id) ON DELETE CASCADE,
  lesson_order INTEGER NOT NULL,
  title TEXT NOT NULL,
  objective TEXT NOT NULL DEFAULT '',
  content_markdown TEXT NOT NULL DEFAULT '',
  estimated_minutes INTEGER NOT NULL DEFAULT 15,
  UNIQUE (module_id, lesson_order)
);

CREATE TABLE IF NOT EXISTS learning_sources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  course_id INTEGER REFERENCES courses(id) ON DELETE SET NULL,
  source_type TEXT NOT NULL CHECK (source_type IN ('website', 'video', 'book', 'pdf', 'api', 'manual', 'dataset')),
  title TEXT NOT NULL,
  url TEXT,
  provider TEXT,
  language_code TEXT NOT NULL DEFAULT 'vi',
  license_note TEXT NOT NULL DEFAULT '',
  trust_level INTEGER NOT NULL DEFAULT 3 CHECK (trust_level BETWEEN 1 AND 5),
  crawl_status TEXT NOT NULL DEFAULT 'queued' CHECK (crawl_status IN ('queued', 'fetched', 'processed', 'blocked', 'failed')),
  fetched_at TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS source_documents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_id INTEGER NOT NULL REFERENCES learning_sources(id) ON DELETE CASCADE,
  external_id TEXT,
  title TEXT NOT NULL,
  raw_text TEXT NOT NULL,
  normalized_text TEXT NOT NULL DEFAULT '',
  content_hash TEXT NOT NULL,
  published_at TEXT,
  fetched_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (source_id, content_hash)
);

CREATE TABLE IF NOT EXISTS document_chunks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  document_id INTEGER NOT NULL REFERENCES source_documents(id) ON DELETE CASCADE,
  chunk_order INTEGER NOT NULL,
  text TEXT NOT NULL,
  token_estimate INTEGER NOT NULL DEFAULT 0,
  UNIQUE (document_id, chunk_order)
);

CREATE TABLE IF NOT EXISTS learning_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  source_document_id INTEGER REFERENCES source_documents(id) ON DELETE SET NULL,
  item_type TEXT NOT NULL CHECK (item_type IN ('vocabulary', 'grammar', 'sentence_pattern', 'reading', 'listening', 'exercise', 'concept', 'tool')),
  front_text TEXT NOT NULL,
  back_text TEXT NOT NULL DEFAULT '',
  example_text TEXT NOT NULL DEFAULT '',
  explanation TEXT NOT NULL DEFAULT '',
  difficulty INTEGER NOT NULL DEFAULT 1 CHECK (difficulty BETWEEN 1 AND 5),
  tags TEXT NOT NULL DEFAULT '[]',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS vocabulary_terms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  learning_item_id INTEGER NOT NULL UNIQUE REFERENCES learning_items(id) ON DELETE CASCADE,
  term TEXT NOT NULL,
  reading TEXT NOT NULL DEFAULT '',
  phonetic TEXT NOT NULL DEFAULT '',
  part_of_speech TEXT NOT NULL DEFAULT '',
  meaning_vi TEXT NOT NULL DEFAULT '',
  meaning_en TEXT NOT NULL DEFAULT '',
  example_sentence TEXT NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS study_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  learning_item_id INTEGER NOT NULL REFERENCES learning_items(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL CHECK (event_type IN ('viewed', 'answered', 'reviewed', 'mastered')),
  score INTEGER CHECK (score BETWEEN 0 AND 100),
  note TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_sources_course ON learning_sources(course_id);
CREATE INDEX IF NOT EXISTS idx_documents_source ON source_documents(source_id);
CREATE INDEX IF NOT EXISTS idx_chunks_document ON document_chunks(document_id);
CREATE INDEX IF NOT EXISTS idx_items_course_type ON learning_items(course_id, item_type);
CREATE INDEX IF NOT EXISTS idx_vocab_term ON vocabulary_terms(term);
