window.translations = window.translations || {};

// 提取出任务的官方英文描述，方便管理
const enTaskData = [
  { title: "Welcome to Perle Labs", sub: "Social Onboarding", desc: "Help the Perle Labs platform identify the best tasks for you and stay up to date on new announcements by completing these 5 steps." },
  { title: "Clause Conflict Detection", sub: "Educational Task", desc: "You will be presented with two contract clauses from the same agreement. The clauses may work together harmoniously or they may conflict in subtle or significant ways." },
  { title: "Pet Bounding Box Quest", sub: "Educational Task", desc: "Review pet images from the pets dataset and draw a tight bounding box around the pet's head. Your goal is to create consistent, high-quality bounding boxes that tightly capture the visible head of the pet, not the full body. These annotations will be used to train object detection models, so precision and consistency matter." },
  { title: "Conversation Response Rating", sub: "Educational Task", desc: "Read short conversation exchanges between a person and an AI assistant. Each prompt shows a conversation context followed by a proposed response. Your job is to evaluate how well the response addresses the person's needs—not just whether it's technically accurate, but whether it's actually helpful and complete." },
  { title: "Logical Fallacy Detection Quest", sub: "Educational Task", desc: "Read short arguments from debates, opinion pieces, and everyday discussions. Each prompt contains a single argument that commits a logical fallacy—an error in reasoning that undermines the argument's validity. Your job is to identify which type of logical fallacy is present." },
  { title: "Ambiguous Instruction ID", sub: "Educational Task", desc: "Read short workplace-style passages that include one ambiguous instruction sentence. Each passage contains multiple sentences, but only one sentence is vague or underspecified in a way that could cause confusion or unsafe action by an AI system. Your job is to identify the ambiguous sentence." },
  { title: "Emotional Speech Recording", sub: "Educational Task", desc: "You will record short spoken responses based on written prompts. Each prompt represents a realistic frustrated or dissatisfied customer statement. Your job is to record one spoken version of each script, delivering it in a clearly frustrated, impatient, or dissatisfied tone, while keeping the wording exactly the same." },
  { title: "Legal Classification Quest", sub: "Educational Task", desc: "Read short excerpts from contracts and agreements. Each prompt contains a single clause. Your job is to identify what type of clause it represents based on the role it plays within the agreement. These classifications help train AI systems to understand how legal documents are organized." },
  { title: "Product Tagging Quest", sub: "Educational Task", desc: "Upload your responses by carefully reviewing customer complaint emails and identifying the product being referenced. Each email contains exactly one purchased item, which may appear in any sentence. Your job is to read the paragraph closely and correctly determine the product mentioned." },
  { title: "Meeting Caption Quest", sub: "Educational Task", desc: "Upload audio recordings of yourself reading natural meeting-style sentences aloud. Each prompt contains short conversational lines that reflect real workplace collaboration, planning, and discussion. Your job is to clearly read the full script in your normal speaking voice and submit the recording." }
];

window.translations.en = {
  page_title: "Perle Labs — AI Data Training Quests",
  header_desc: "Understand in 1 min, Earn instantly",
  btn_guide: "View Guide",
  btn_go_token: "Go to DApp",
  btn_go_token_short: "Execute",
  btn_go_link: "Open Link",
  btn_discord_login: "Connect",
  btn_go_token_mobile: "Execute on Website Now",
  btn_copy: "Copy Code",
  btn_copied: "Copied!",
  board_desc: "Track your Season 1 progress. Tick tasks as you complete them.",
  board_progress: "Quest Progress",
  sub_title: "Smart Daily Reminder",
  sub_desc: "Connect Discord and subscribe to get a direct message from our Bot if you haven't completed your daily tasks by 20:00 (UTC+8).",
  sub_btn_connect: "Connect Discord First",
  sub_status_on: "On", sub_status_off: "Off",
  toast_sender: "System Bot",
  toast_msg: "Successfully verified <span class='font-bold text-white'>{0}</span>!",
  toast_sub_title: "Subscription Active",
  toast_sub_desc: "Our bot will DM you on Discord at 20:00 daily if tasks are incomplete.",
  lightbox_hint: "Click anywhere to close",

  hero_title: "Enterprise-Grade AI Training: <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500\">Label to Earn</span>",
  hero_desc: "Perle Labs brings expert-level human feedback on-chain. Founded by Scale AI veterans, it provides verifiable enterprise-grade data for AI models. With over $17.5M in seed funding, join the Season 1 contributor network to build airdrop weight.",
  banner_title: "Core Expected Returns",
  banner_amount: "High <span class=\"text-indigo-200\">Airdrop Potential</span>",
  banner_sub1: "$17.5M Funding ($8.5M + $9M)",
  banner_sub2: "Season 1 Contributor Network",
  
  check1_title: "Zero Cost", check1_desc: "Tasks mostly require 0 Gas.",
  check2_title: "Scale AI Vets", check2_desc: "Top-tier team background.",
  check3_title: "High Traction", check3_desc: "200k+ users on S1 Day 1.",

  advice_title: "Heartfelt Advice for Grinders",
  advice_desc: "Currently, Perle Labs has launched specific AI labeling tasks. It's a bit of a 'grind' (like customer service screening, medical categorization, voice reading), but very interesting. <br><br><b>Core Strategy:</b> Gas costs for tasks are minimal, but minting certain badges might require a small fee. It's a highly recommended Zero-Cost/Low-Cost project right now!",

  board_s1_title: "Season 1 Training Quests",
  board_s1_desc: "(Complete these 10 core modules to maximize your contributor weight)",

  ai_workflow_title: "AI Workflow SOP",
  ai_workflow_desc: "<b>Universal rule for tasks below:</b><br>1. Copy prompt from Perle -> 2. Ask ChatGPT/Gemini -> 3. Select correct answer on Perle -> 4. Sign transaction.",

  task1_title: "1. Welcome to Perle Labs (Social)", task1_reward: "Reward: 500 Points",
  task2_title: "2. Clause Conflict Detection", task2_reward: "Reward: 1000 Points",
  task3_title: "3. Pet Bounding Box Quest", task3_reward: "Reward: 2000 Points",
  task4_title: "4. Conversation Response Rating", task4_reward: "Reward: 1000 Points",
  task5_title: "5. Logical Fallacy Detection", task5_reward: "Reward: 1000 Points",
  task6_title: "6. Ambiguous Instruction ID", task6_reward: "Reward: 1000 Points",
  task7_title: "7. Emotional Speech Recording", task7_reward: "Reward: 500 Points",
  task8_title: "8. Legal Classification Quest", task8_reward: "Reward: 1000 Points",
  task9_title: "9. Product Tagging Quest", task9_reward: "Reward: 1000 Points",
  task10_title: "10. Meeting Caption Quest", task10_reward: "Reward: 1000 Points",

  main_guide_title: "Walkthrough: Completing a Quest",
  main_guide_desc: "Example: How to complete the 'Clause Conflict Detection' Quest end-to-step.",
  slides1_pc: [
    { src: "perle/main_step1.png", title: "Step 1 — Open the Quest", caption: "Navigate to the tasks page and click on the 'Clause Conflict Detection' quest." },
    { src: "perle/main_step2.png", title: "Step 2 — Ask AI", caption: "Copy the text, use an AI tool to find the correct answer, and select it." },
    { src: "perle/main_step3.png", title: "Step 3 — Submit & Sign", caption: "Click submit and sign the transaction in your Web3 wallet to verify your action." },
    { src: "perle/main_step4.png", title: "Step 4 — Wait & Proceed", caption: "Wait for the signature to complete. If correct, start the next one; if wrong, retry and sign again." }
  ],

  details: {
    ...Object.fromEntries(enTaskData.map((task, i) => [
      `task${i+1}`, {
        title: task.title,
        sub: task.sub,
        body: `<div class="space-y-5 text-sm text-slate-700">
          <div class="space-y-2">
            <div class="text-[13px] text-slate-900 font-bold border-b border-slate-100 pb-1 flex items-center gap-1.5"><span class="flex items-center justify-center w-5 h-5 rounded bg-indigo-100 text-indigo-700 text-xs">1</span> Locate the Quest</div>
            <div class="text-[12px] text-slate-500 mb-1">Find this specific quest card on the official website.</div>
            <img src="perle/task${i+1}_1.png" class="w-full rounded-xl cursor-zoom-in border border-slate-200" onerror="this.outerHTML='<div class=\\'flex aspect-[21/9] w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300 rounded-xl\\'>[Please place website screenshot at: perle/task${i+1}_1.png]</div>'">
          </div>
          
          <div class="space-y-2">
            <div class="text-[13px] text-slate-900 font-bold border-b border-slate-100 pb-1 flex items-center gap-1.5"><span class="flex items-center justify-center w-5 h-5 rounded bg-indigo-100 text-indigo-700 text-xs">2</span> How to Participate</div>
            <div class="p-3 bg-slate-50 border border-slate-100 rounded-lg text-[12px] leading-relaxed text-slate-600 font-medium">${task.desc}</div>
            <img src="perle/task${i+1}_2.png" class="w-full rounded-xl cursor-zoom-in border border-slate-200 mt-2" onerror="this.outerHTML='<div class=\\'flex aspect-[4/3] w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300 rounded-xl mt-2\\'>[Please place participation guide at: perle/task${i+1}_2.png]</div>'">
          </div>
        </div>`,
        actions: [{ text: "Go to Platform", kind: "primary", url: "https://app.perle.xyz/" }]
      }
    ]))
  }
};

const zhTaskData = [
  { title: "欢迎来到 Perle Labs", sub: "社媒基础绑定", desc: "完成这 5 个基础步骤，帮助 Perle Labs 平台为你匹配最适合的任务，并获取最新公告。这是参与后续所有高分数据标注任务的前提条件。" },
  { title: "多重合同条款冲突检测", sub: "Educational Task", desc: "系统会向你展示同一份协议中的两个合同条款。你需要判断这些条款是可以和谐共存的，还是在细微或重大方面存在冲突。" },
  { title: "宠物头像框选标注", sub: "Educational Task", desc: "这是一个图像识别任务。你需要查看宠物数据集中的图片，并在宠物的头部画一个紧密的边界框。只需紧密捕捉宠物可见的头部，不要框选全身。精度和一致性非常重要。" },
  { title: "AI 对话回复质量评分", sub: "Educational Task", desc: "阅读人类与 AI 助手之间的简短对话。你的工作是评估拟议的回复在多大程度上满足了人类的需求——不仅仅是技术上是否准确，而是它是否真正有帮助且完整。" },
  { title: "逻辑谬误漏洞检测", sub: "Educational Task", desc: "阅读来自辩论、评论文章和日常讨论的简短论点。每个提示包含一个存在逻辑谬误的论点。你的工作是识别存在哪种类型的逻辑谬误，帮助 AI 识别有缺陷的推理。" },
  { title: "职场模糊指令识别", sub: "Educational Task", desc: "阅读包含模糊指令句子的职场风格短文。你需要从多个句子中，找出那个可能因为模糊不清而导致 AI 系统混淆或采取不安全行动的句子。" },
  { title: "愤怒情绪语音录制", sub: "Educational Task", desc: "根据文字提示录制简短的语音。你需要扮演一个沮丧或不满的客户（例如投诉未解决的问题）。用明显沮丧、不耐烦的语气朗读脚本，保持用词完全一致。" },
  { title: "法律文件条款分类", sub: "Educational Task", desc: "阅读合同和协议的简短摘录。你需要根据条款在协议中扮演的角色，确定它代表什么类型的条款。这将帮助 AI 系统理解法律文件是如何组织的。" },
  { title: "客诉邮件产品标记", sub: "Educational Task", desc: "仔细审查客户投诉电子邮件，识别提到的产品。每封电子邮件只包含一件购买的物品，你的工作是仔细阅读段落并正确确定它。" },
  { title: "职场会议情景录音", sub: "Educational Task", desc: "大声朗读自然的会议风格句子并上传录音。每个提示包含反映真实职场协作和讨论的简短对话线。用你正常的语速清晰地朗读完整脚本。" }
];

window.translations.zh = {
  page_title: "Perle Labs — 交互式任务看板",
  header_desc: "1分钟看懂，立刻拿收益",
  btn_guide: "查看指南",
  btn_go_token: "前往测试网",
  btn_go_token_short: "去执行",
  btn_go_link: "打开链接",
  btn_discord_login: "连接账号",
  btn_go_token_mobile: "立即前往官网执行",
  btn_copy: "复制内容",
  btn_copied: "已复制!",
  board_desc: "记录你的第一季任务进度。完成后请打钩以防遗忘。",
  board_progress: "当前进度",
  sub_title: "智能打卡提醒",
  sub_desc: "连接 Discord 并开启订阅。如果你在当天 20:00 前未完成日常任务，系统将通过私信提醒你。",
  sub_btn_connect: "先连接 Discord",
  sub_status_on: "已开启",
  sub_status_off: "未开启",
  toast_sender: "系统提醒",
  toast_msg: "成功确认完成 <span class='font-bold text-white'>{0}</span>！",
  toast_sub_title: "订阅已激活",
  toast_sub_desc: "如果日常任务未完成，机器人每天 20:00 将在 Discord 私信提醒您。",
  lightbox_hint: "点击任意区域关闭",

  hero_title: "企业级 AI 数据训练协议：将 <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500\">打工转化为空投</span>",
  hero_desc: "Perle Labs 是一个将专家级人工反馈引入链上的协议。由 Scale AI 的资深人士创立，旨在为 AI 训练提供可验证的企业级数据质量。在获得 1750 万美元巨额融资后，其第一季贡献者大赛已火热开启。",
  banner_title: "核心收益预期",
  banner_amount: "高潜力 <span class=\"text-indigo-200\">代币空投预期</span>",
  banner_sub1: "累计融资 $1750 万美元",
  banner_sub2: "Season 1 第一季大赛红利",
  
  check1_title: "绝对零撸", check1_desc: "任务基本不耗费 Gas",
  check2_title: "顶级背景", check2_desc: "Scale AI 前员工创办",
  check3_title: "极高热度", check3_desc: "S1 首日涌入 20 万玩家",

  advice_title: "给新人的真心建议",
  advice_desc: "这个项目目前就是大家俗称的“黑奴项目”（数据标注打工）。除了基础的社交任务外，上线了很多答题、语音阅读的任务，甚至有医学分类等特定领域的内容。<br><br><b>核心优势：</b>非常有趣且属于<b>零撸</b>，任务本身花不了多少 Gas，但后期领徽章可能需要一点点费用。目前处于早期红利阶段，强烈建议防身！",

  board_s1_title: "Season 1 核心任务列表",
  board_s1_desc: "(当前已发布的 10 个数据模块，完成后请打钩防遗忘)",

  ai_workflow_title: "AI 辅助答题标准流程 (SOP)",
  ai_workflow_desc: "<b>下方标注任务通用逻辑：</b><br>1. 从官网复制题目 -> 2. 扔给 ChatGPT / Gemini 寻找最优解 -> 3. 回到官网选中答案 -> 4. 钱包签名确认。",

  task1_title: "1. 欢迎来到 Perle Labs (社媒绑定)", task1_reward: "奖励：500 积分",
  task2_title: "2. 多重合同条款冲突检测", task2_reward: "奖励：1000 积分",
  task3_title: "3. 宠物头像框选标注", task3_reward: "奖励：2000 积分 (最高)",
  task4_title: "4. AI 对话回复质量评分", task4_reward: "奖励：1000 积分",
  task5_title: "5. 逻辑谬误漏洞检测", task5_reward: "奖励：1000 积分",
  task6_title: "6. 职场模糊指令识别", task6_reward: "奖励：1000 积分",
  task7_title: "7. 愤怒情绪语音录制", task7_reward: "奖励：500 积分",
  task8_title: "8. 法律文件条款分类", task8_reward: "奖励：1000 积分",
  task9_title: "9. 客诉邮件产品标记", task9_reward: "奖励：1000 积分",
  task10_title: "10. 职场会议情景录音", task10_reward: "奖励：1000 积分",

  main_guide_title: "新手实操演示：如何完成一个完整任务",
  main_guide_desc: "以「多重合同条款冲突检测」为例，演示完整答题与链上交互闭环。",
  slides1_pc: [
    { src: "perle/main_step1.png", title: "Step 1 — 打开任务卡片", caption: "在官网任务大厅找到对应任务（如合同条款检测），点击进入答题页面。" },
    { src: "perle/main_step2.png", title: "Step 2 — AI 辅助找答案", caption: "复制页面上的问题文本，使用 AI 工具寻找最优解，并在页面中选中正确选项。" },
    { src: "perle/main_step3.png", title: "Step 3 — 提交与钱包签名", caption: "点击提交按钮，并在弹出的 Web3 钱包中确认并签名发送交易。" },
    { src: "perle/main_step4.png", title: "Step 4 — 验证与下一步", caption: "等待验证。如果回答正确即可开启下一题；若回答错误，可重新选择并再次签名提交。" }
  ],

  details: {
    ...Object.fromEntries(zhTaskData.map((task, i) => [
      `task${i+1}`, {
        title: task.title,
        sub: task.sub,
        body: `<div class="space-y-5 text-sm text-slate-700">
          <div class="space-y-2">
            <div class="text-[13px] text-slate-900 font-bold border-b border-slate-100 pb-1 flex items-center gap-1.5"><span class="flex items-center justify-center w-5 h-5 rounded bg-indigo-100 text-indigo-700 text-xs">1</span> 官网对应入口</div>
            <div class="text-[12px] text-slate-500 mb-1">请在官网的任务大厅中找到对应长相的卡片。</div>
            <img src="perle/task${i+1}_1.png" class="w-full rounded-xl cursor-zoom-in border border-slate-200" onerror="this.outerHTML='<div class=\\'flex aspect-[21/9] w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300 rounded-xl\\'>[请将官网截图保存为: perle/task${i+1}_1.png]</div>'">
          </div>
          
          <div class="space-y-2">
            <div class="text-[13px] text-slate-900 font-bold border-b border-slate-100 pb-1 flex items-center gap-1.5"><span class="flex items-center justify-center w-5 h-5 rounded bg-indigo-100 text-indigo-700 text-xs">2</span> 如何参与任务</div>
            <div class="p-3 bg-slate-50 border border-slate-100 rounded-lg text-[12px] leading-relaxed text-slate-600 font-medium">${task.desc}</div>
            <img src="perle/task${i+1}_2.png" class="w-full rounded-xl cursor-zoom-in border border-slate-200 mt-2" onerror="this.outerHTML='<div class=\\'flex aspect-[4/3] w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300 rounded-xl mt-2\\'>[请将操作截图保存为: perle/task${i+1}_2.png]</div>'">
          </div>
        </div>`,
        actions: [{ text: "去官网执行", kind: "primary", url: "https://app.perle.xyz/" }]
      }
    ]))
  }
};