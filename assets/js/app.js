const state = {
  lang: localStorage.getItem("course_lang") || "vi",
  promptInitial: "",
  labInitial: ""
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function createEl(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function getData() {
  return window.COURSE_DATA[state.lang] || window.COURSE_DATA.vi;
}

function renderI18n(data) {
  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = data.ui[key] || key;
  });
  document.documentElement.lang = state.lang;
}

function renderModules(data) {
  const grid = $("#moduleGrid");
  if (!grid) return;
  grid.innerHTML = "";

  data.modules.forEach(([number, title, copy]) => {
    const card = createEl("article", "module");
    card.append(createEl("div", "module-num", number));
    card.append(createEl("h3", "", title));
    card.append(createEl("p", "", copy));
    grid.append(card);
  });
}

function renderCoursePicker(data) {
  const picker = $("#coursePicker");
  if (!picker) return;
  picker.innerHTML = "";

  data.coursePicker.forEach((course) => {
    const card = createEl("article", "picker-card");
    const top = createEl("div", "picker-card-top");
    top.append(createEl("div", "module-num", course.code));
    top.append(createEl("span", "course-status", course.status));

    const meta = createEl("div", "picker-meta");
    course.meta.forEach((item) => meta.append(createEl("span", "", item)));

    const action = createEl("a", `btn ${course.primary ? "primary" : ""}`, course.action);
    action.href = course.href;

    card.append(top);
    card.append(createEl("h2", "", course.title));
    card.append(createEl("p", "course-copy", course.copy));
    card.append(meta);
    card.append(action);
    picker.append(card);
  });
}

function renderLessonOne(data) {
  const lesson = data.lessonOne;
  const list = $("#lessonOneList");
  const flow = $("#lessonOneFlow");
  const checklist = $("#promptChecklist");
  const code = $("#lessonOneCode");
  const promptBox = $("#promptBox");
  if (!list || !flow || !checklist || !code || !promptBox) return;

  list.innerHTML = "";
  flow.innerHTML = "";
  checklist.innerHTML = "";
  code.textContent = lesson.code;
  promptBox.value = lesson.prompt;
  state.promptInitial = lesson.prompt;

  lesson.bullets.forEach(([badge, title, copy]) => {
    const item = createEl("li");
    item.append(createEl("div", "badge", badge));
    const body = createEl("div");
    body.append(createEl("strong", "", title));
    body.append(createEl("span", "", copy));
    item.append(body);
    list.append(item);
  });

  lesson.flow.forEach(([step, copy]) => {
    const row = createEl("div", "flow-step");
    row.append(createEl("code", "", step));
    row.append(createEl("p", "", copy));
    flow.append(row);
  });

  lesson.checklist.forEach(([type, copy]) => {
    const row = createEl("div", `check ${type === "good" ? "good" : ""}`);
    row.append(createEl("span", "box", type === "good" ? "✓" : "!"));
    row.append(createEl("span", "", copy));
    checklist.append(row);
  });
}

function renderCourseCards(data) {
  const grid = $("#courseGrid");
  if (!grid) return;
  grid.innerHTML = "";

  data.lessons.forEach((lesson) => {
    grid.append(createLessonCard(lesson));
  });
}

function createLessonCard(lesson) {
  const card = createEl("article", "course-card");
  const title = createEl("div", "course-title");
  title.append(createEl("div", "module-num", lesson.number));
  title.append(createEl("h3", "", lesson.title));

  const diagram = createEl("div", "mini-diagram");
  lesson.diagram.forEach(([label, copy]) => {
    const row = createEl("div", "diagram-row");
    row.append(createEl("code", "", label));
    row.append(createEl("span", "", copy));
    diagram.append(row);
  });

  const practice = createEl("div", "practice");
  practice.append(createEl("strong", "", state.lang === "vi" ? "Thực hành" : "Practice"));
  practice.append(createEl("p", "", lesson.practice));

  card.append(title);
  card.append(createEl("p", "course-copy", lesson.copy));
  card.append(diagram);
  card.append(practice);
  return card;
}

function renderAdvancedCourse(data) {
  const grid = $("#advancedGrid");
  if (!grid || !data.advanced) return;
  grid.innerHTML = "";

  data.advanced.forEach((lesson) => {
    grid.append(createLessonCard(lesson));
  });
}

function renderLab(data) {
  const lab = data.lab;
  const name = $("#labName");
  const labBox = $("#labBox");
  const steps = $("#labSteps");
  const rubric = $("#labRubric");
  if (!name || !labBox || !steps || !rubric) return;

  name.textContent = lab.name;
  labBox.value = lab.template;
  state.labInitial = lab.template;

  steps.innerHTML = "";
  lab.steps.forEach((step) => steps.append(createEl("li", "", step)));

  rubric.innerHTML = "";
  lab.rubric.forEach((item, index) => {
    const row = createEl("div", "rubric-item");
    row.append(createEl("b", "", String(index + 1)));
    row.append(createEl("span", "", item));
    rubric.append(row);
  });
}

const practiceArtifacts = {
  fast: ["screen_run.yaml", "prompt.md", "design_spec.summary.md", "design_spec.json", "design_qa.md"],
  standard: [
    "screen_run.yaml",
    "normalized_brief.json",
    "ux_plan.json",
    "visual_system.json",
    "design_spec.summary.md",
    "design_spec.json",
    "design_qa.md",
    "revision_log.md"
  ],
  strict: [
    "screen_run.yaml",
    "prompt.md",
    "normalized_brief.json",
    "ux_plan.json",
    "visual_system.json",
    "design_spec.summary.md",
    "design_spec.json",
    "design_qa.md",
    "revision_log.md",
    "handoff.md",
    "contract.md",
    "fidelity_review.md"
  ]
};

function slugifyPractice(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 48) || "practice_screen";
}

function getPracticeRuns() {
  try {
    return JSON.parse(localStorage.getItem("vibe_practice_runs") || "[]");
  } catch {
    return [];
  }
}

function savePracticeRuns(runs) {
  localStorage.setItem("vibe_practice_runs", JSON.stringify(runs.slice(0, 12)));
}

function buildPracticeOutline(run) {
  const artifacts = practiceArtifacts[run.mode] || practiceArtifacts.standard;
  const folder = `artifacts/${run.slug}/`;
  const gate = run.mode === "strict"
    ? "Cần approval trước Pencil render, handoff phải freeze trước contract/codegen."
    : "Validate design_spec.json trước Pencil render, QA fail thì sửa upstream artifact.";

  return `# ${run.title}

Mode: ${run.mode}
Slug: ${run.slug}
Folder: ${folder}

## Prompt
${run.prompt}

## Artifact cần tạo
${artifacts.map((item) => `- ${folder}${item}`).join("\n")}

## Output chain
1. Chọn mode và tạo screen_run.yaml.
2. Normalize prompt thành brief.
3. Lập UX plan và visual system nếu mode là standard/strict.
4. Tạo design_spec.json và design_spec.summary.md.
5. Validate design_spec.json.
6. Render Pencil từ design_spec.json.
7. Chạy design_qa.md.
8. ${run.mode === "strict" ? "Tạo handoff.md, contract.md và fidelity_review.md." : "Ghi revision_log.md nếu có lỗi QA."}

## Gate
${gate}

## Gợi ý lệnh yêu cầu Codex
Dùng single-input-screen-pipeline mode ${run.mode} cho prompt sau:
${run.prompt}`;
}

function renderPracticeRuns() {
  const list = $("#savedPracticeRuns");
  if (!list) return;
  const runs = getPracticeRuns();
  list.innerHTML = "";

  if (!runs.length) {
    list.append(createEl("p", "section-note", "Chưa có run nào được lưu trong trình duyệt này."));
    return;
  }

  runs.forEach((run) => {
    const button = createEl("button", "saved-run");
    button.type = "button";
    button.append(createEl("strong", "", run.title));
    button.append(createEl("span", "", `${run.mode} · ${run.slug}`));
    button.addEventListener("click", () => {
      $("#practiceOutput").textContent = buildPracticeOutline(run);
      $("#practiceTitle").value = run.title;
      $("#practiceMode").value = run.mode;
      $("#practicePrompt").value = run.prompt;
    });
    list.append(button);
  });
}

function initVibePracticeWorkspace() {
  const form = $("#vibePracticeForm");
  if (!form) return;

  const title = $("#practiceTitle");
  const mode = $("#practiceMode");
  const prompt = $("#practicePrompt");
  const output = $("#practiceOutput");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const run = {
      id: Date.now(),
      title: title.value.trim() || "Bài thực hành Vibe design",
      mode: mode.value,
      prompt: prompt.value.trim(),
      slug: slugifyPractice(title.value)
    };
    output.textContent = buildPracticeOutline(run);
    savePracticeRuns([run, ...getPracticeRuns()]);
    renderPracticeRuns();
  });

  $("#loadSamplePractice")?.addEventListener("click", () => {
    title.value = "Checkout khóa Vibe design";
    mode.value = "strict";
    prompt.value = "Thiết kế checkout mua khóa Vibe design, có coupon, billing info, order summary, confirm payment, loading, validation error, disabled state và approval gate trước action thanh toán.";
    output.textContent = "Đã nạp mẫu strict. Bấm “Tạo bài thực hành” để lưu run.";
  });

  $("#clearPracticeRuns")?.addEventListener("click", () => {
    localStorage.removeItem("vibe_practice_runs");
    output.textContent = "Đã xóa lịch sử thực hành trong trình duyệt này.";
    renderPracticeRuns();
  });

  renderPracticeRuns();
}

function getDmLabs() {
  try {
    return JSON.parse(localStorage.getItem("data_mining_labs") || "[]");
  } catch {
    return [];
  }
}

function saveDmLabs(labs) {
  localStorage.setItem("data_mining_labs", JSON.stringify(labs.slice(0, 12)));
}

function buildDmLabOutline(lab) {
  const folder = `data_mining_labs/${lab.slug}/`;
  const techniqueSteps = {
    eda: ["profile data", "define questions", "clean fields", "visualize distributions", "write insights"],
    clustering: ["profile data", "create features", "scale numeric features", "run clustering", "evaluate silhouette", "write cluster profile"],
    classification: ["profile data", "define target", "split train/test", "build baseline", "evaluate metrics", "write error analysis"],
    association_rules: ["prepare transactions", "encode baskets", "mine rules", "rank by lift", "filter weak rules", "write recommendations"],
    anomaly_detection: ["profile data", "define anomaly candidates", "create features", "run detector", "review false positives", "write risk notes"]
  };
  const steps = techniqueSteps[lab.technique] || techniqueSteps.eda;

  return `# ${lab.title}

Technique: ${lab.technique}
Slug: ${lab.slug}
Folder: ${folder}

## Dataset và mục tiêu
${lab.prompt}

## Pipeline đề xuất
${steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}

## Deliverables
- ${folder}notebook.ipynb
- ${folder}data_profile.md
- ${folder}cleaning_log.md
- ${folder}evaluation_report.md
- ${folder}insight_summary.md

## Quality gate
- Có data dictionary hoặc mô tả column.
- Có xử lý missing/duplicate/outlier rõ quyết định.
- Có metric phù hợp với kỹ thuật đã chọn.
- Có limitation và next step.
- Insight phải gắn với bằng chứng từ dữ liệu.`;
}

function renderDmLabs() {
  const list = $("#savedDmLabs");
  if (!list) return;
  const labs = getDmLabs();
  list.innerHTML = "";

  if (!labs.length) {
    list.append(createEl("p", "section-note", "Chưa có lab nào được lưu trong trình duyệt này."));
    return;
  }

  labs.forEach((lab) => {
    const button = createEl("button", "saved-run");
    button.type = "button";
    button.append(createEl("strong", "", lab.title));
    button.append(createEl("span", "", `${lab.technique} · ${lab.slug}`));
    button.addEventListener("click", () => {
      $("#dmLabOutput").textContent = buildDmLabOutline(lab);
      $("#dmLabTitle").value = lab.title;
      $("#dmLabTechnique").value = lab.technique;
      $("#dmLabPrompt").value = lab.prompt;
    });
    list.append(button);
  });
}

function initDataMiningWorkspace() {
  const form = $("#dataMiningLabForm");
  if (!form) return;

  const title = $("#dmLabTitle");
  const technique = $("#dmLabTechnique");
  const prompt = $("#dmLabPrompt");
  const output = $("#dmLabOutput");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const lab = {
      id: Date.now(),
      title: title.value.trim() || "Data Mining Lab",
      technique: technique.value,
      prompt: prompt.value.trim(),
      slug: slugifyPractice(title.value)
    };
    output.textContent = buildDmLabOutline(lab);
    saveDmLabs([lab, ...getDmLabs()]);
    renderDmLabs();
  });

  $("#loadDmSample")?.addEventListener("click", () => {
    title.value = "Predict student pass/fail";
    technique.value = "classification";
    prompt.value = "Dataset gồm study_hours, attendance_rate, previous_score, assignment_score và final_result. Mục tiêu: dự đoán pass/fail, đánh giá precision/recall/F1, phân tích lỗi và đề xuất nhóm học sinh cần hỗ trợ.";
    output.textContent = "Đã nạp mẫu classification. Bấm “Tạo outline lab” để lưu lab.";
  });

  $("#clearDmLabs")?.addEventListener("click", () => {
    localStorage.removeItem("data_mining_labs");
    output.textContent = "Đã xóa lịch sử lab trong trình duyệt này.";
    renderDmLabs();
  });

  renderDmLabs();
}

function render() {
  const data = getData();
  renderI18n(data);
  renderCoursePicker(data);
  renderModules(data);
  renderLessonOne(data);
  renderCourseCards(data);
  renderAdvancedCourse(data);
  renderLab(data);
  initVibePracticeWorkspace();
  initDataMiningWorkspace();

  $$(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

async function copyFrom(textareaSelector, button, labelKey) {
  const data = getData();
  await navigator.clipboard.writeText($(textareaSelector).value);
  button.textContent = "Copied";
  window.setTimeout(() => {
    button.textContent = data.ui[labelKey];
  }, 1200);
}

$("#copyBtn")?.addEventListener("click", (event) => copyFrom("#promptBox", event.currentTarget, "copyPrompt"));
$("#copyLabBtn")?.addEventListener("click", (event) => copyFrom("#labBox", event.currentTarget, "copyLab"));
$("#resetBtn")?.addEventListener("click", () => {
  $("#promptBox").value = state.promptInitial;
  $("#promptBox").focus();
});
$("#resetLabBtn")?.addEventListener("click", () => {
  $("#labBox").value = state.labInitial;
  $("#labBox").focus();
});

$$(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    localStorage.setItem("course_lang", state.lang);
    render();
  });
});

render();
