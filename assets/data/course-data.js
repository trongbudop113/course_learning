window.COURSE_DATA = {
  vi: {
    ui: {
      brand: "Course Learning",
      navCourses: "Khóa học",
      navAgenticAI: "Agentic AI",
      navMap: "Lộ trình",
      navLesson: "Bài 1",
      navNext: "Bài 2-8",
      navLab: "Lab",
      navAdvanced: "Nâng cao",
      courseSelectEyebrow: "Chọn khóa học",
      courseSelectTitle: "Bạn muốn học gì hôm nay?",
      courseSelectLead: "Chọn một lộ trình phù hợp với mục tiêu hiện tại. Mỗi khóa học được thiết kế thành các bài ngắn, có bài tập và luồng thực hành rõ ràng.",
      heroEyebrow: "Khóa học thực hành",
      heroTitle: "Agentic AI từ mô hình đến sản phẩm",
      heroLead: "Một trang học trực quan giúp bạn nhìn thấy agent hoạt động như một hệ thống: nhận mục tiêu, lập kế hoạch, gọi công cụ, ghi nhớ, đánh giá và trả kết quả.",
      startLesson: "Bắt đầu bài 1",
      viewRoadmap: "Xem lộ trình",
      nodeGoal: "Người dùng đưa mục tiêu cần hoàn thành.",
      nodePlan: "Chia mục tiêu thành các bước nhỏ.",
      nodeTools: "Gọi API, file, database hoặc browser.",
      nodeMemory: "Lưu context, lịch sử, tri thức ngoài.",
      nodeEval: "Kiểm tra kết quả trước khi trả lời.",
      roadmapTitle: "Lộ trình học",
      roadmapNote: "Mỗi module tập trung vào một năng lực lõi. Học xong từng phần là có thể ghép thành agent hoàn chỉnh.",
      lessonOneLabel: "Bài 1",
      lessonOneTitle: "Prompting có cấu trúc",
      exerciseTitle: "Bài tập đầu tiên",
      exerciseNote: "Viết prompt cho agent phân loại ticket. Checklist bên phải giúp tự kiểm tra prompt đã đủ chặt chưa.",
      copyPrompt: "Copy prompt",
      reset: "Reset",
      nextLessonsTitle: "Các bài tiếp theo",
      nextLessonsNote: "Mỗi bài có một hình dung hệ thống, một mục tiêu kỹ năng và một bài thực hành nhỏ để ghép dần thành agent hoàn chỉnh.",
      labTitle: "Lab thực hành một lượt",
      labNote: "Bài tổng hợp này dùng cùng một kịch bản để luyện đủ Prompting, Tool Calling, Agent Loop, Planning, Memory, Guardrails và Evaluation.",
      fullTemplate: "Template hoàn chỉnh",
      copyLab: "Copy lab",
      resetLab: "Reset lab",
      advancedTitle: "Khóa nâng cao: Agentic AI vận hành thật",
      advancedNote: "Phần nâng cao dành cho người đã nắm agent loop cơ bản và muốn thiết kế agent bền vững trong workflow thật: có đánh giá, quan sát, phân quyền, chi phí và cải tiến liên tục.",
      footer: "Agentic AI Course Map. Học một lượt: Prompting -> Tool Calling -> Agent Loop -> Memory -> Planning -> Guardrails -> Multi-Agent -> Production.",
      courseFooter: "Course Learning. Chọn khóa học và bắt đầu theo lộ trình phù hợp."
    },
    coursePicker: [
      {
        code: "EN",
        title: "Tiếng Anh ứng dụng",
        copy: "Luyện nghe, nói, đọc, viết theo tình huống học tập và công việc. Tập trung từ vựng thực dụng, phản xạ câu và bài tập ngắn mỗi ngày.",
        meta: ["12 tuần", "CEFR A1-B1", "Nguồn học liệu"],
        status: "Đang học",
        action: "Vào khóa học",
        href: "./english.html#roadmap",
        primary: true
      },
      {
        code: "JP",
        title: "Rèn luyện tiếng Nhật",
        copy: "Lộ trình N5 tới N2 với kanji, ngữ pháp, nghe hiểu, đọc hiểu và hội thoại. Kanji lấy khung tham chiếu từ Kanji Look and Learn.",
        meta: ["N5-N2", "Kanji", "JLPT + Can-do"],
        status: "Đang học",
        action: "Vào khóa học",
        href: "./japanese.html#roadmap",
        primary: true
      },
      {
        code: "DM",
        title: "Data Mining",
        copy: "Học khai phá dữ liệu từ profiling, cleaning, EDA, feature engineering, clustering, classification, association rules đến capstone portfolio.",
        meta: ["10 tuần", "Notebook lab", "Portfolio"],
        status: "Đang học",
        action: "Vào khóa học",
        href: "./data-mining.html#roadmap",
        primary: true
      },
      {
        code: "VD",
        title: "Vibe design",
        copy: "Học quy trình biến prompt thô thành design spec, Pencil render, QA, handoff, contract và codegen, kèm nhiều bài thực hành nâng cao theo single-input-screen-pipeline.",
        meta: ["Prompt -> Spec", "12 bài nâng cao", "Handoff"],
        status: "Đang học",
        action: "Vào bài học",
        href: "./vibe-design.html#map",
        primary: true
      },
      {
        code: "AI",
        title: "Agentic AI",
        copy: "Khóa hiện có về prompt, tool calling, agent loop, memory, planning, guardrails và production để biến LLM thành hệ thống làm việc.",
        meta: ["8 bài học", "Lab tổng hợp", "Template agent"],
        status: "Đang học",
        action: "Vào khóa học",
        href: "./agentic-ai.html#map",
        primary: false
      },
      {
        code: "A+",
        title: "Agentic AI nâng cao",
        copy: "Đi sâu vào orchestration, long-term memory, eval harness, human-in-the-loop, observability, cost control và triển khai agent trong sản phẩm thật.",
        meta: ["6 module nâng cao", "Production eval", "Ops playbook"],
        status: "Nâng cao",
        action: "Vào khóa học",
        href: "./agentic-ai.html#advanced",
        primary: false
      },
      {
        code: "IT",
        title: "IT Agent Lab",
        copy: "Bài thực hành xây dựng Agentic AI cho team IT 10 người: triage ticket, runbook search, approval gate, observability và eval.",
        meta: ["Team 10 người", "5 ngày lab", "Ops template"],
        status: "Thực hành",
        action: "Vào lab",
        href: "./agentic-it-team.html#sprint-lab",
        primary: false
      }
    ],
    modules: [
      ["01", "Prompting", "Vai trò, context, luật trả lời và JSON output ổn định."],
      ["02", "Tool Calling", "Thiết kế tool schema để agent biết khi nào cần hành động."],
      ["03", "Agent Loop", "Reason, act, observe, rồi tự quyết định bước tiếp theo."],
      ["04", "Memory", "Short-term context, long-term memory và retrieval từ tài liệu."],
      ["05", "Planning", "Tách task lớn thành checklist có thể thực thi và kiểm tra."],
      ["06", "Guardrails", "Quyền hạn, human review, validation và giới hạn rủi ro."],
      ["07", "Multi-Agent", "Planner, executor, reviewer phối hợp theo vai trò rõ ràng."],
      ["08", "Production", "Logging, tracing, retry, cost control và đóng gói thành API."]
    ],
    lessonOne: {
      bullets: [
        ["S", "System prompt", "Đặt vai trò, nguyên tắc, giới hạn và cách xử lý khi thiếu dữ liệu."],
        ["U", "User prompt", "Nêu yêu cầu cụ thể cần giải quyết trong lần chạy hiện tại."],
        ["C", "Context", "Cung cấp dữ liệu thật để model không phải đoán."],
        ["J", "JSON output", "Ép định dạng để phần mềm phía sau đọc được kết quả."]
      ],
      code: `{
  "role": "ticket_classifier_agent",
  "rules": [
    "billing: thanh toán, hóa đơn, bị trừ tiền",
    "technical: lỗi kỹ thuật, app, đăng nhập",
    "account: tài khoản, mật khẩu, xác minh",
    "other: không thuộc nhóm trên"
  ],
  "output": {
    "category": "billing | technical | account | other",
    "confidence": "0.0 - 1.0",
    "reason": "string",
    "next_action": "string"
  }
}`,
      flow: [
        ["Input", "Tôi bị trừ tiền 2 lần cho cùng một đơn hàng."],
        ["Classify", "Agent đối chiếu dữ liệu với luật phân loại."],
        ["Output", "Trả về JSON để hệ thống có thể routing ticket tự động."]
      ],
      prompt: `Bạn là một AI agent phân loại ticket hỗ trợ khách hàng.

Nhiệm vụ:
Phân loại ticket vào một trong bốn nhóm: billing, technical, account, other.

Luật:
- billing: liên quan thanh toán, hóa đơn, hoàn tiền, bị trừ tiền.
- technical: lỗi app, lỗi website, lỗi hệ thống, không dùng được tính năng.
- account: đăng nhập, mật khẩu, xác minh, thông tin tài khoản.
- other: không đủ dữ liệu hoặc không thuộc các nhóm trên.

Chỉ dựa trên dữ liệu được cung cấp. Trả về JSON hợp lệ.

Dữ liệu ticket:
"Tôi bị trừ tiền 2 lần cho cùng một đơn hàng, vui lòng kiểm tra giúp."

Format:
{
  "category": "billing | technical | account | other",
  "confidence": 0.0,
  "reason": "string",
  "next_action": "string"
}`,
      checklist: [
        ["good", "Có vai trò rõ ràng cho agent."],
        ["good", "Có luật phân loại từng category."],
        ["good", "Có dữ liệu ticket cụ thể."],
        ["good", "Có JSON schema để máy đọc được."],
        ["warn", "Bước tiếp theo: thêm validator để kiểm tra JSON có đúng schema."]
      ]
    },
    lessons: [
      {
        number: "02",
        title: "Tool Calling",
        copy: "Agent không chỉ trả lời. Nó cần biết khi nào phải gọi công cụ, gọi công cụ nào, truyền input gì và đọc kết quả ra sao.",
        diagram: [["User", "Kiểm tra hóa đơn quá hạn của khách A."], ["LLM", "Chọn tool phù hợp thay vì đoán dữ liệu."], ["get_invoice", "Nhận customer_id, trả danh sách invoice."], ["Answer", "Tổng hợp kết quả từ observation."]],
        practice: "Viết 3 tool schema: search_customer, get_invoice, create_followup_task. Mỗi tool phải có input, output và lỗi có thể xảy ra."
      },
      {
        number: "03",
        title: "Agent Loop",
        copy: "Agent loop là vòng lặp giúp hệ thống làm nhiều bước: suy nghĩ bước tiếp theo, hành động, quan sát kết quả, rồi quyết định tiếp.",
        diagram: [["Reason", "Agent xác định cần làm gì tiếp."], ["Act", "Gọi tool hoặc yêu cầu người dùng xác nhận."], ["Observe", "Đọc output, lỗi hoặc dữ liệu thiếu."], ["Stop", "Dừng khi đã đủ thông tin để trả lời."]],
        practice: "Mô phỏng vòng lặp tối đa 5 lượt. Nếu tool trả lỗi customer_not_found, agent phải hỏi lại tên khách hàng."
      },
      {
        number: "04",
        title: "Memory và RAG",
        copy: "Memory giúp agent nhớ trong phiên làm việc. RAG giúp agent lấy tri thức từ tài liệu, database hoặc vector search.",
        diagram: [["Question", "Người dùng hỏi chính sách hoàn tiền."], ["Retrieve", "Tìm đoạn tài liệu liên quan."], ["Context", "Đưa nguồn đã tìm vào prompt."], ["Cited answer", "Trả lời có căn cứ, không bịa."]],
        practice: "Tạo 5 đoạn tài liệu nhỏ, viết prompt bắt agent chỉ trả lời dựa trên tài liệu và nói không đủ dữ liệu khi thiếu nguồn."
      },
      {
        number: "05",
        title: "Planning",
        copy: "Planning biến mục tiêu lớn thành các bước nhỏ có thể chạy được, có thứ tự, có điều kiện dừng và có tiêu chí kiểm tra.",
        diagram: [["Goal", "Tạo báo cáo khách hàng chậm thanh toán."], ["Plan", "Lấy dữ liệu, nhóm khách, tính tổng, nhận xét."], ["Execute", "Chạy từng bước bằng tool hoặc code."], ["Replan", "Điều chỉnh nếu thiếu dữ liệu."]],
        practice: "Viết plan 6 bước cho Invoice Follow-up Agent, trong đó bước gửi email phải chờ người dùng duyệt."
      },
      {
        number: "06",
        title: "Guardrails",
        copy: "Guardrails xác định agent được phép làm gì, cần xin duyệt khi nào, output phải hợp lệ ra sao và hành động nào bị cấm.",
        diagram: [["Allow", "Đọc dữ liệu, tạo draft, gợi ý hành động."], ["Review", "Gửi email, tạo task thật, cập nhật CRM."], ["Block", "Xóa dữ liệu, gửi hàng loạt, tự quyết định hoàn tiền."], ["Validate", "Kiểm tra JSON, quyền hạn và dữ liệu nhạy cảm."]],
        practice: "Viết policy cho agent: 5 việc được làm, 3 việc cần duyệt, 3 việc bị cấm. Sau đó viết prompt bắt agent tuân thủ policy."
      },
      {
        number: "07",
        title: "Multi-Agent",
        copy: "Multi-agent hữu ích khi công việc có nhiều vai trò rõ ràng. Mỗi agent nên có nhiệm vụ hẹp, input/output cụ thể.",
        diagram: [["Manager", "Nhận goal và chia việc."], ["Analyst", "Phân tích dữ liệu và tạo insight."], ["Writer", "Viết báo cáo hoặc email draft."], ["Reviewer", "Kiểm tra lỗi, thiếu dữ liệu và rủi ro."]],
        practice: "Thiết kế 3 agent cho bài toán hỗ trợ khách hàng: triage agent, knowledge agent, escalation reviewer."
      },
      {
        number: "08",
        title: "Production",
        copy: "Agent dùng thật cần logging, tracing, retry, timeout, cost control, test case và cách debug từng tool call.",
        diagram: [["Trace", "Lưu từng prompt, tool call, observation."], ["Retry", "Thử lại có giới hạn khi API lỗi tạm thời."], ["Budget", "Giới hạn token, số vòng lặp và số tool call."], ["Eval", "Chạy bộ test cố định sau mỗi thay đổi."]],
        practice: "Viết checklist production gồm: log fields, max iteration, timeout, fallback message, test case và human approval."
      },
      {
        number: "+",
        title: "Bản đồ ghép nối",
        copy: "Khi học xong, các phần không đứng riêng lẻ. Chúng tạo thành một runtime có kiểm soát cho agent.",
        diagram: [["Prompt", "Đặt vai trò và output contract."], ["Tools", "Kết nối agent với thế giới thật."], ["Loop", "Điều phối các bước thực thi."], ["Guard", "Giữ hành động trong ranh giới an toàn."]],
        practice: "Lấy một use case thật của bạn, điền đủ 6 phần: goal, tools, memory, plan, guardrails, evaluation."
      }
    ],
    lab: {
      name: "Invoice Follow-up Agent",
      steps: [
        "Nhận mục tiêu: tìm khách hàng có hóa đơn quá hạn và tạo đề xuất follow-up.",
        "Viết system prompt bắt agent không bịa dữ liệu và trả JSON.",
        "Thiết kế tools: search_customer, list_overdue_invoices, create_email_draft, create_task.",
        "Viết plan 5-7 bước, có bước hỏi lại khi thiếu customer_id.",
        "Thêm guardrail: không gửi email thật nếu chưa được duyệt.",
        "Thêm evaluator: kiểm tra tổng tiền, số ngày quá hạn, tone email và nguồn dữ liệu."
      ],
      rubric: ["Output cuối cùng có JSON schema rõ ràng.", "Mỗi tool có input/output và lỗi dự kiến.", "Plan có điều kiện dừng và human approval.", "Evaluator có tiêu chí kiểm tra cụ thể."],
      template: `Use case:
Invoice Follow-up Agent

Goal:
Tìm khách hàng có hóa đơn quá hạn, tóm tắt rủi ro, tạo draft email nhắc thanh toán và chờ người dùng duyệt.

System prompt:
Bạn là agent hỗ trợ thu hồi công nợ. Chỉ dùng dữ liệu từ tools hoặc context. Không tự gửi email thật. Nếu thiếu dữ liệu, trả về status = "need_input".

Tools:
1. search_customer({ "query": "string" })
2. list_overdue_invoices({ "customer_id": "string" })
3. create_email_draft({ "customer_id": "string", "invoice_ids": ["string"], "tone": "polite | firm" })
4. create_followup_task({ "customer_id": "string", "due_date": "YYYY-MM-DD", "note": "string" })

Agent loop:
1. Hiểu goal.
2. Tìm customer_id.
3. Lấy hóa đơn quá hạn.
4. Tính tổng nợ và mức rủi ro.
5. Tạo email draft.
6. Đưa kết quả cho người dùng duyệt.
7. Chỉ tạo task hoặc gửi email khi người dùng xác nhận.

Guardrails:
- Được phép đọc dữ liệu và tạo draft.
- Cần duyệt trước khi gửi email hoặc tạo task thật.
- Bị cấm xóa dữ liệu, hoàn tiền, hoặc thay đổi invoice.

Evaluation:
- Có đúng customer không?
- Tổng tiền có khớp danh sách invoice không?
- Email có nhắc rõ số hóa đơn và hạn thanh toán không?
- Có xin duyệt trước action thật không?

Final JSON:
{
  "status": "ready_for_review | need_input | blocked",
  "customer": {},
  "overdue_summary": {},
  "draft_email": "string",
  "recommended_actions": [],
  "approval_required": true,
  "evaluation_notes": []
}`
    },
    advanced: [
      {
        number: "A1",
        title: "Agent Orchestration",
        copy: "Thiết kế workflow có state machine, queue, retry policy và checkpoint để agent không chỉ chạy một lượt mà có thể tiếp tục sau lỗi.",
        diagram: [["State", "Định nghĩa pending, running, waiting_review, failed, done."], ["Queue", "Tách tác vụ dài khỏi request/response."], ["Checkpoint", "Lưu step, input, output và quyết định."], ["Resume", "Chạy tiếp từ điểm dừng thay vì làm lại toàn bộ."]],
        practice: "Vẽ state machine cho Research Agent chạy qua 5 bước: intake, search, synthesize, review, publish. Mỗi state phải có trigger và failure path."
      },
      {
        number: "A2",
        title: "Long-term Memory Design",
        copy: "Xây bộ nhớ dài hạn có taxonomy, retention rule, privacy boundary và cơ chế ghi nhớ có kiểm soát thay vì lưu mọi thứ.",
        diagram: [["Capture", "Chọn dữ kiện đáng nhớ."], ["Classify", "Phân loại preference, fact, decision, artifact."], ["Store", "Ghi kèm nguồn, thời gian, quyền truy cập."], ["Recall", "Truy xuất theo task và độ tin cậy."]],
        practice: "Thiết kế schema memory cho Personal Learning Agent gồm user preference, skill gap, completed lesson và rejected recommendation."
      },
      {
        number: "A3",
        title: "Evaluation Harness",
        copy: "Xây bộ eval cố định để đo agent qua từng phiên bản: task success, tool accuracy, groundedness, latency, cost và approval compliance.",
        diagram: [["Dataset", "Tập test case đại diện."], ["Runner", "Chạy agent với cùng input."], ["Judge", "Chấm bằng rule, schema và reviewer."], ["Report", "So sánh regression trước khi deploy."]],
        practice: "Tạo 10 eval case cho Invoice Follow-up Agent, mỗi case có expected status, required tool calls và tiêu chí fail."
      },
      {
        number: "A4",
        title: "Human-in-the-loop Operations",
        copy: "Đưa người dùng vào đúng điểm quyết định: duyệt hành động rủi ro, sửa plan, override output và audit quyết định.",
        diagram: [["Draft", "Agent tạo đề xuất."], ["Review", "Người dùng duyệt, sửa hoặc từ chối."], ["Commit", "Chỉ thực thi khi có approval."], ["Audit", "Lưu ai duyệt, duyệt gì và vì sao."]],
        practice: "Viết approval contract cho agent gửi email khách hàng: payload cần hiện, action được phép, timeout và rollback."
      },
      {
        number: "A5",
        title: "Observability và Cost Control",
        copy: "Thiết kế trace để debug được từng prompt, tool call, observation, token, latency và lỗi, kèm budget guard theo user hoặc workflow.",
        diagram: [["Trace", "Ghi run_id, step_id, model, prompt hash."], ["Metrics", "Latency, token, cost, tool error rate."], ["Alert", "Cảnh báo loop dài, fail nhiều, chi phí vượt ngưỡng."], ["Budget", "Giới hạn theo tenant, user hoặc job."]],
        practice: "Liệt kê log fields tối thiểu cho một agent production và định nghĩa 5 alert cần bật trước khi release."
      },
      {
        number: "A6",
        title: "Agent Productization",
        copy: "Đóng gói agent thành tính năng sản phẩm với UX rõ ràng, permission model, fallback, eval gate, rollout plan và changelog prompt.",
        diagram: [["UX", "Hiển thị trạng thái agent đang làm gì."], ["Permission", "Áp quyền theo vai trò và dữ liệu."], ["Rollout", "Beta, canary, full release."], ["Improve", "Dùng eval và feedback để cải tiến."]],
        practice: "Lập launch checklist cho agent trong SaaS: scope, risks, roles, metrics, rollback và learning loop sau release."
      }
    ]
  },
  en: {
    ui: {
      brand: "Course Learning",
      navCourses: "Courses",
      navAgenticAI: "Agentic AI",
      navMap: "Roadmap",
      navLesson: "Lesson 1",
      navNext: "Lessons 2-8",
      navLab: "Lab",
      navAdvanced: "Advanced",
      courseSelectEyebrow: "Choose a course",
      courseSelectTitle: "What do you want to learn today?",
      courseSelectLead: "Pick a path that matches your current goal. Each course is structured into short lessons with practice tasks and a clear learning flow.",
      heroEyebrow: "Hands-on course",
      heroTitle: "Agentic AI from model to product",
      heroLead: "A visual course that shows an agent as a system: receive a goal, plan, call tools, remember context, evaluate, and return a result.",
      startLesson: "Start lesson 1",
      viewRoadmap: "View roadmap",
      nodeGoal: "The user gives the goal to complete.",
      nodePlan: "Break the goal into executable steps.",
      nodeTools: "Call APIs, files, databases, or browsers.",
      nodeMemory: "Store context, history, and external knowledge.",
      nodeEval: "Check the result before responding.",
      roadmapTitle: "Learning roadmap",
      roadmapNote: "Each module focuses on one core capability. Once combined, they form a complete agent.",
      lessonOneLabel: "Lesson 1",
      lessonOneTitle: "Structured prompting",
      exerciseTitle: "First exercise",
      exerciseNote: "Write a prompt for a ticket classification agent. The checklist helps you check whether the prompt is tight enough.",
      copyPrompt: "Copy prompt",
      reset: "Reset",
      nextLessonsTitle: "Next lessons",
      nextLessonsNote: "Each lesson includes a system picture, a skill target, and one small practice task.",
      labTitle: "One-pass practice lab",
      labNote: "This capstone uses one scenario to practice Prompting, Tool Calling, Agent Loop, Planning, Memory, Guardrails, and Evaluation.",
      fullTemplate: "Complete template",
      copyLab: "Copy lab",
      resetLab: "Reset lab",
      advancedTitle: "Advanced course: production-grade Agentic AI",
      advancedNote: "This advanced track is for learners who already understand the basic agent loop and want durable agents for real workflows: evaluation, observability, permissions, cost control, and continuous improvement.",
      footer: "Agentic AI Course Map. One path: Prompting -> Tool Calling -> Agent Loop -> Memory -> Planning -> Guardrails -> Multi-Agent -> Production.",
      courseFooter: "Course Learning. Choose a course and start with the path that fits your goal."
    },
    coursePicker: [
      {
        code: "EN",
        title: "Practical English",
        copy: "Practice listening, speaking, reading, and writing through study and work situations, with useful vocabulary and short daily exercises.",
        meta: ["12 weeks", "CEFR A1-B1", "Learning sources"],
        status: "Active",
        action: "Open course",
        href: "./english.html#roadmap",
        primary: true
      },
      {
        code: "JP",
        title: "Japanese Training",
        copy: "A path from N5 to N2 with kanji, grammar, listening, reading, and conversation. Kanji planning references Kanji Look and Learn.",
        meta: ["N5-N2", "Kanji", "JLPT + Can-do"],
        status: "Active",
        action: "Open course",
        href: "./japanese.html#roadmap",
        primary: true
      },
      {
        code: "DM",
        title: "Data Mining",
        copy: "Learn data mining from profiling, cleaning, EDA, feature engineering, clustering, classification, association rules, and capstone portfolio work.",
        meta: ["10 weeks", "Notebook labs", "Portfolio"],
        status: "Active",
        action: "Open course",
        href: "./data-mining.html#roadmap",
        primary: true
      },
      {
        code: "VD",
        title: "Vibe design",
        copy: "Learn the path from raw prompt to design spec, Pencil render, QA, handoff, contract, and codegen, with advanced practice labs for single-input-screen-pipeline.",
        meta: ["Prompt -> Spec", "12 advanced labs", "Handoff"],
        status: "Active",
        action: "Open lesson",
        href: "./vibe-design.html#map",
        primary: true
      },
      {
        code: "AI",
        title: "Agentic AI",
        copy: "The current course on prompting, tool calling, agent loops, memory, planning, guardrails, and production-ready agent systems.",
        meta: ["8 lessons", "Capstone lab", "Agent template"],
        status: "Active",
        action: "Open course",
        href: "./agentic-ai.html#map",
        primary: false
      },
      {
        code: "A+",
        title: "Advanced Agentic AI",
        copy: "Go deeper into orchestration, long-term memory, eval harnesses, human-in-the-loop workflows, observability, cost control, and production deployment.",
        meta: ["6 advanced modules", "Production eval", "Ops playbook"],
        status: "Advanced",
        action: "Open course",
        href: "./agentic-ai.html#advanced",
        primary: false
      },
      {
        code: "IT",
        title: "IT Agent Lab",
        copy: "A hands-on lab for building Agentic AI for a 10-person IT team: ticket triage, runbook search, approval gates, observability, and evals.",
        meta: ["10-person team", "5-day lab", "Ops template"],
        status: "Practice",
        action: "Open lab",
        href: "./agentic-it-team.html#sprint-lab",
        primary: false
      }
    ],
    modules: [
      ["01", "Prompting", "Roles, context, answer rules, and stable JSON output."],
      ["02", "Tool Calling", "Design tool schemas so the agent knows when to act."],
      ["03", "Agent Loop", "Reason, act, observe, then choose the next step."],
      ["04", "Memory", "Short-term context, long-term memory, and document retrieval."],
      ["05", "Planning", "Break large tasks into executable and checkable steps."],
      ["06", "Guardrails", "Permissions, human review, validation, and risk boundaries."],
      ["07", "Multi-Agent", "Planner, executor, and reviewer working with clear roles."],
      ["08", "Production", "Logging, tracing, retry, cost control, and API packaging."]
    ],
    lessonOne: {
      bullets: [
        ["S", "System prompt", "Sets the role, rules, limits, and behavior when data is missing."],
        ["U", "User prompt", "States the concrete request for the current run."],
        ["C", "Context", "Provides real data so the model does not guess."],
        ["J", "JSON output", "Constrains the shape so downstream software can parse it."]
      ],
      code: `{
  "role": "ticket_classifier_agent",
  "rules": [
    "billing: payment, invoice, refund, double charge",
    "technical: app, website, system, feature error",
    "account: login, password, verification",
    "other: not covered by the rules"
  ],
  "output": {
    "category": "billing | technical | account | other",
    "confidence": "0.0 - 1.0",
    "reason": "string",
    "next_action": "string"
  }
}`,
      flow: [["Input", "I was charged twice for the same order."], ["Classify", "The agent compares the ticket against the rules."], ["Output", "Return JSON so the system can route the ticket."]],
      prompt: `You are an AI agent that classifies customer support tickets.

Task:
Classify the ticket into one of four groups: billing, technical, account, other.

Rules:
- billing: payment, invoice, refund, double charge.
- technical: app, website, system, or feature error.
- account: login, password, verification, account details.
- other: not enough data or not covered by the groups above.

Only use the provided data. Return valid JSON.

Ticket:
"I was charged twice for the same order. Please check."

Format:
{
  "category": "billing | technical | account | other",
  "confidence": 0.0,
  "reason": "string",
  "next_action": "string"
}`,
      checklist: [["good", "The agent role is clear."], ["good", "Each category has classification rules."], ["good", "The ticket data is specific."], ["good", "A JSON schema is provided."], ["warn", "Next step: add a validator to check schema compliance."]]
    },
    lessons: [
      {
        number: "02",
        title: "Tool Calling",
        copy: "An agent should not only answer. It must know when to call a tool, which tool to call, what input to pass, and how to read the result.",
        diagram: [["User", "Check overdue invoices for customer A."], ["LLM", "Selects the right tool instead of guessing data."], ["get_invoice", "Receives customer_id and returns invoice rows."], ["Answer", "Summarizes the observation into a response."]],
        practice: "Write 3 tool schemas: search_customer, get_invoice, create_followup_task. Each tool needs input, output, and expected errors."
      },
      {
        number: "03",
        title: "Agent Loop",
        copy: "The agent loop lets the system work through multiple steps: decide the next move, act, observe the result, then continue.",
        diagram: [["Reason", "The agent decides what needs to happen next."], ["Act", "Call a tool or ask the user for approval."], ["Observe", "Read output, errors, or missing data."], ["Stop", "Stop when enough information is available."]],
        practice: "Simulate a loop with max 5 turns. If a tool returns customer_not_found, the agent must ask for the customer name again."
      },
      {
        number: "04",
        title: "Memory and RAG",
        copy: "Memory helps the agent keep context during a session. RAG lets the agent retrieve knowledge from documents, databases, or vector search.",
        diagram: [["Question", "The user asks about the refund policy."], ["Retrieve", "Find relevant document chunks."], ["Context", "Put the retrieved source into the prompt."], ["Cited answer", "Answer from evidence instead of guessing."]],
        practice: "Create 5 short documents, then write a prompt that only answers from those documents and says insufficient data when sources are missing."
      },
      {
        number: "05",
        title: "Planning",
        copy: "Planning turns a large goal into smaller executable steps with order, stop conditions, and quality checks.",
        diagram: [["Goal", "Create an overdue customer report."], ["Plan", "Fetch data, group customers, compute totals, write insight."], ["Execute", "Run each step through tools or code."], ["Replan", "Adjust if data is missing."]],
        practice: "Write a 6-step plan for an Invoice Follow-up Agent. The email sending step must wait for user approval."
      },
      {
        number: "06",
        title: "Guardrails",
        copy: "Guardrails define what the agent may do, when it needs approval, what output must be valid, and which actions are blocked.",
        diagram: [["Allow", "Read data, create drafts, suggest actions."], ["Review", "Send email, create real tasks, update CRM."], ["Block", "Delete data, mass send, decide refunds alone."], ["Validate", "Check JSON, permissions, and sensitive data."]],
        practice: "Write a policy with 5 allowed actions, 3 approval-required actions, and 3 blocked actions. Then write a prompt that enforces it."
      },
      {
        number: "07",
        title: "Multi-Agent",
        copy: "Multi-agent systems help when the work has clear roles. Each agent should have a narrow responsibility and explicit input/output.",
        diagram: [["Manager", "Receives the goal and delegates work."], ["Analyst", "Analyzes data and creates insights."], ["Writer", "Writes reports or email drafts."], ["Reviewer", "Checks errors, missing data, and risks."]],
        practice: "Design 3 agents for customer support: triage agent, knowledge agent, and escalation reviewer."
      },
      {
        number: "08",
        title: "Production",
        copy: "Real agents need logging, tracing, retry, timeout, cost control, test cases, and a way to debug every tool call.",
        diagram: [["Trace", "Store prompts, tool calls, and observations."], ["Retry", "Retry limited transient API failures."], ["Budget", "Limit tokens, loop count, and tool calls."], ["Eval", "Run fixed tests after each change."]],
        practice: "Write a production checklist with log fields, max iterations, timeout, fallback message, test cases, and human approval."
      },
      {
        number: "+",
        title: "Assembly map",
        copy: "After the lessons, the parts do not stand alone. They become a controlled runtime for agentic work.",
        diagram: [["Prompt", "Set the role and output contract."], ["Tools", "Connect the agent to the real world."], ["Loop", "Coordinate execution steps."], ["Guard", "Keep actions inside safe boundaries."]],
        practice: "Pick one real use case and fill in 6 parts: goal, tools, memory, plan, guardrails, and evaluation."
      }
    ],
    lab: {
      name: "Invoice Follow-up Agent",
      steps: [
        "Receive the goal: find customers with overdue invoices and propose follow-up actions.",
        "Write a system prompt that prevents guessing and requires JSON output.",
        "Design tools: search_customer, list_overdue_invoices, create_email_draft, create_task.",
        "Write a 5-7 step plan, including a clarification step when customer_id is missing.",
        "Add a guardrail: do not send real email without user approval.",
        "Add an evaluator: check total amount, overdue days, email tone, and data source."
      ],
      rubric: ["The final output has a clear JSON schema.", "Each tool has input/output and expected errors.", "The plan includes stop conditions and human approval.", "The evaluator has specific quality checks."],
      template: `Use case:
Invoice Follow-up Agent

Goal:
Find customers with overdue invoices, summarize risk, create a payment reminder email draft, and wait for user approval.

System prompt:
You are an accounts receivable follow-up agent. Only use data from tools or context. Do not send real emails. If data is missing, return status = "need_input".

Tools:
1. search_customer({ "query": "string" })
2. list_overdue_invoices({ "customer_id": "string" })
3. create_email_draft({ "customer_id": "string", "invoice_ids": ["string"], "tone": "polite | firm" })
4. create_followup_task({ "customer_id": "string", "due_date": "YYYY-MM-DD", "note": "string" })

Agent loop:
1. Understand the goal.
2. Find customer_id.
3. Fetch overdue invoices.
4. Calculate total debt and risk level.
5. Create an email draft.
6. Present the result for user approval.
7. Only create a task or send email after user confirmation.

Guardrails:
- Allowed: read data and create drafts.
- Approval required: send email or create a real task.
- Blocked: delete data, issue refunds, or modify invoices.

Evaluation:
- Is this the right customer?
- Does total amount match the invoice list?
- Does the email mention invoice numbers and payment due date?
- Does the agent request approval before real action?

Final JSON:
{
  "status": "ready_for_review | need_input | blocked",
  "customer": {},
  "overdue_summary": {},
  "draft_email": "string",
  "recommended_actions": [],
  "approval_required": true,
  "evaluation_notes": []
}`
    },
    advanced: [
      {
        number: "A1",
        title: "Agent Orchestration",
        copy: "Design workflows with state machines, queues, retry policies, and checkpoints so an agent can continue after failures.",
        diagram: [["State", "Define pending, running, waiting_review, failed, done."], ["Queue", "Move long tasks out of request/response."], ["Checkpoint", "Store step, input, output, and decisions."], ["Resume", "Continue from the stop point instead of restarting."]],
        practice: "Draw a state machine for a Research Agent with 5 steps: intake, search, synthesize, review, publish. Each state needs triggers and failure paths."
      },
      {
        number: "A2",
        title: "Long-term Memory Design",
        copy: "Build memory with taxonomy, retention rules, privacy boundaries, and controlled writes instead of storing everything.",
        diagram: [["Capture", "Select facts worth remembering."], ["Classify", "Label preference, fact, decision, artifact."], ["Store", "Save source, time, and access scope."], ["Recall", "Retrieve by task and confidence."]],
        practice: "Design a memory schema for a Personal Learning Agent with user preferences, skill gaps, completed lessons, and rejected recommendations."
      },
      {
        number: "A3",
        title: "Evaluation Harness",
        copy: "Build a fixed eval suite to measure task success, tool accuracy, groundedness, latency, cost, and approval compliance across agent versions.",
        diagram: [["Dataset", "Representative test cases."], ["Runner", "Run the agent with the same inputs."], ["Judge", "Score with rules, schema checks, and reviewers."], ["Report", "Compare regressions before deployment."]],
        practice: "Create 10 eval cases for an Invoice Follow-up Agent. Each case needs expected status, required tool calls, and fail criteria."
      },
      {
        number: "A4",
        title: "Human-in-the-loop Operations",
        copy: "Place user review at the right decision points: approve risky actions, edit plans, override output, and audit decisions.",
        diagram: [["Draft", "The agent creates a proposal."], ["Review", "The user approves, edits, or rejects."], ["Commit", "Execute only after approval."], ["Audit", "Store who approved what and why."]],
        practice: "Write an approval contract for an agent that sends customer emails: visible payload, allowed action, timeout, and rollback."
      },
      {
        number: "A5",
        title: "Observability and Cost Control",
        copy: "Design traces that expose every prompt, tool call, observation, token count, latency, and error, with budget guards by user or workflow.",
        diagram: [["Trace", "Store run_id, step_id, model, prompt hash."], ["Metrics", "Latency, tokens, cost, tool error rate."], ["Alert", "Detect long loops, repeated failures, budget spikes."], ["Budget", "Limit by tenant, user, or job."]],
        practice: "List the minimum log fields for a production agent and define 5 alerts that must be enabled before release."
      },
      {
        number: "A6",
        title: "Agent Productization",
        copy: "Package the agent as a product feature with clear UX, permissions, fallback, eval gates, rollout planning, and prompt changelogs.",
        diagram: [["UX", "Show what the agent is doing."], ["Permission", "Apply role and data access rules."], ["Rollout", "Beta, canary, full release."], ["Improve", "Use evals and feedback to improve."]],
        practice: "Write a launch checklist for a SaaS agent: scope, risks, roles, metrics, rollback, and post-release learning loop."
      }
    ]
  }
};
