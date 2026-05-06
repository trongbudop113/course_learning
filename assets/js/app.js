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
    grid.append(card);
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

function render() {
  const data = getData();
  renderI18n(data);
  renderCoursePicker(data);
  renderModules(data);
  renderLessonOne(data);
  renderCourseCards(data);
  renderLab(data);

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
