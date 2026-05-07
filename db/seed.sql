INSERT OR IGNORE INTO courses (slug, title, category, level, description, status)
VALUES
  ('english-practical', 'Tiếng Anh ứng dụng', 'english', 'beginner-intermediate', 'Lưu từ vựng, mẫu câu, bài nghe, bài đọc và bài luyện phản xạ tiếng Anh.', 'active'),
  ('japanese-training', 'Rèn luyện tiếng Nhật', 'japanese', 'n5-n3', 'Lưu kanji, từ vựng, ngữ pháp, mẫu câu và bài luyện tiếng Nhật theo cấp độ.', 'active'),
  ('data-mining', 'Data Mining', 'data_mining', 'intermediate', 'Lưu khái niệm, dataset, bài lab, model evaluation và nguồn tham khảo khai phá dữ liệu.', 'active'),
  ('vibe-design', 'Vibe design', 'vibe_design', 'standard', 'Lưu prompt, normalized brief, UX plan, visual system, design spec, QA, handoff và contract cho single-screen pipeline.', 'active'),
  ('agentic-ai', 'Agentic AI', 'agentic_ai', 'intermediate', 'Lưu module, prompt template, tool schema, guardrails và lab Agentic AI.', 'active');

INSERT OR IGNORE INTO course_modules (course_id, module_order, title, summary)
SELECT id, 1, 'Nền tảng học tập', 'Module khởi động với dữ liệu mẫu và cấu trúc lưu trữ.'
FROM courses;

INSERT OR IGNORE INTO lessons (module_id, lesson_order, title, objective, content_markdown, estimated_minutes)
SELECT course_modules.id, 1, 'Bài nhập môn', 'Hiểu cách dữ liệu học tập được lưu và tái sử dụng.', 'Nội dung chi tiết sẽ được thêm từ nguồn cào hoặc nhập thủ công.', 15
FROM course_modules
WHERE course_modules.module_order = 1;

INSERT OR IGNORE INTO learning_items (course_id, item_type, front_text, back_text, example_text, explanation, difficulty, tags)
SELECT id, 'vocabulary', 'consistency', 'sự nhất quán', 'Consistency matters when learning every day.', 'Từ quan trọng khi nói về thói quen học tập.', 1, '["english","habit"]'
FROM courses
WHERE slug = 'english-practical';

INSERT OR IGNORE INTO vocabulary_terms (learning_item_id, term, phonetic, part_of_speech, meaning_vi, meaning_en, example_sentence)
SELECT learning_items.id, 'consistency', '/kənˈsɪstənsi/', 'noun', 'sự nhất quán', 'the quality of doing something regularly in the same way', 'Consistency matters when learning every day.'
FROM learning_items
JOIN courses ON courses.id = learning_items.course_id
WHERE courses.slug = 'english-practical' AND learning_items.front_text = 'consistency';

INSERT OR IGNORE INTO learning_items (course_id, item_type, front_text, back_text, example_text, explanation, difficulty, tags)
SELECT id, 'vocabulary', '勉強', 'học tập', '毎日日本語を勉強します。', 'Từ cơ bản dùng trong chủ đề học tập.', 1, '["japanese","n5"]'
FROM courses
WHERE slug = 'japanese-training';

INSERT OR IGNORE INTO vocabulary_terms (learning_item_id, term, reading, part_of_speech, meaning_vi, meaning_en, example_sentence)
SELECT learning_items.id, '勉強', 'べんきょう', 'noun/verb', 'học tập', 'study', '毎日日本語を勉強します。'
FROM learning_items
JOIN courses ON courses.id = learning_items.course_id
WHERE courses.slug = 'japanese-training' AND learning_items.front_text = '勉強';
