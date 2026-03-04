window.translations = window.translations || {};

window.translations.en = {
  // ================== 公共/共享词汇 ==================
  page_title: "Interactive Task Board",
  header_desc: "Understand in 1 min, Earn instantly",
  btn_guide: "View Guide",
  btn_go_token: "Go to DApp",
  btn_go_token_short: "Execute",
  btn_go_link: "Open Link",
  btn_discord_login: "Connect",
  btn_go_token_mobile: "Execute on Website Now",
  board_desc: "Track your yield. Daily tasks trigger reminders; periodic tasks are tracked separately.",
  board_reset: "(Resets daily at 00:00 UTC)",
  board_progress: "Daily Progress",
  sub_title: "Smart Daily Reminder",
  sub_desc: "Connect Discord and subscribe to get a direct message from our Bot if you haven't completed your daily tasks by <span class=\"font-bold text-white\">20:00 (UTC+8)</span>.",
  sub_btn_connect: "Connect Discord First",
  sub_status_on: "On", sub_status_off: "Off",
  toast_sender: "AirdropHub Bot",
  toast_msg: "Successfully verified <span class='font-bold text-white'>{0}</span>! Reward criteria met.",
  toast_sub_title: "Subscription Active",
  toast_sub_desc: "Our bot will DM you on Discord at 20:00 daily if tasks are incomplete.",
  btn_pc_guide: "PC Guide",
  btn_mobile_guide: "Mobile Guide",
  lightbox_hint: "Click anywhere to close",

  // ================== RAFA.AI 专属词汇 ==================
  rafa_page_title: "RAFA.AI — Interactive Task Board",
  rafa_hero_title: "Hardcore Grinding under AI Narrative: Collect Badges, Aim for <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-[#4aeacd] to-teal-400\">300U+ Airdrops</span>",
  rafa_hero_desc: "Don't worry if RAFA's 'AI Investment' whitepaper can be realized. In this highly competitive project, the rule is brutal but simple: Discord Badges dictate everything. The team filters bots via Poker, Rumble Royales, and Lucky Tickets. Collect core role badges, and you replicate the massive returns of their previous project (Portal To Bitcoin).",
  rafa_banner_title: "Core Expected Returns",
  rafa_banner_amount: "Aiming for <span class=\"text-teal-200\">300U+</span> per account",
  rafa_banner_sub1: "+ High premium for rare Purple Roles",
  rafa_banner_sub2: "Zero cost, pure execution",
  rafa_check1_title: "Historical Proof", rafa_check1_desc: "Previous Portal To Bitcoin dropped >300U",
  rafa_check2_title: "Anti-Bot Moat", rafa_check2_desc: "Poker & Rumble filter scripts",
  rafa_check3_title: "Badge = Wealth", rafa_check3_desc: "Transparent tier airdrop mechanism",
  
  rafa_advice_title: "Heartfelt Advice for Grinders",
  rafa_advice_desc: "This project is a supreme test of patience. Don't get discouraged if you miss hundreds of Rumble Royales—everyone does. <span class=\"font-bold text-teal-900\">Your first goal: Post 3 tweets to secure the 'Blue Role' (baseline defense).</span> Then, consistently draw lucky tickets and play weekly Texas Hold'em. Survive this 'grindfest' for a month, and your chances of securing the core 'Yellow Role' are huge. Just grind.",

  rafa_board_daily_title: "Daily Grinding Task",
  rafa_board_periodic_title: "Periodic Badges & Roles",
  rafa_board_periodic_desc: "The core milestone collection for airdrop weights.",

  rafa_daily_task1_title: "1. Community: Chat & Level Up", rafa_daily_task1_reward: "Reward: Level Badges & Weight",
  
  rafa_periodic_task1_title: "1. Account: Connected Profiles", rafa_periodic_task1_reward: "Reward: Basic Qualification",
  rafa_periodic_task2_title: "2. Roles: Discord Progression", rafa_periodic_task2_reward: "Reward: High Airdrop Weight",
  rafa_periodic_task3_title: "3. Badges: Activity & Exclusive", rafa_periodic_task3_reward: "Reward: Milestone Tiers",
  rafa_periodic_task4_title: "4. Progress: Check /stats", rafa_periodic_task4_reward: "Reward: Track your grinding",

  rafa_guide_title: "RAFA Setup Guide",
  rafa_guide_desc: "Follow the steps below to setup your profile and start collecting badges.",

  rafa_branch1_title: "Leveling Strategy",
  rafa_branch1_badge: "Must Read",
  rafa_branch1_desc: "Tips on how to chat genuinely to level up without getting banned.",
  
  rafa_branch2_title: "Comprehensive Badge Wiki",
  rafa_branch2_desc: "Detailed conditions for every role, badge, and activity in RAFA.",

  rafa_slides1_pc: [
    { src: "rafa/step1.png", title: "Step 1 — Join Discord", caption: "Join the RAFA.AI Discord community (Crucial! All badges come from community events). Link: discord.com/invite/J8SVJq7qAP" },
    { src: "rafa/step2.png", title: "Step 2 — Bind Accounts", caption: "Go to hub.rafa.ai/dashboard to bind your Discord, Twitter, and EVM wallet address." },
    { src: "rafa/step3.png", title: "Step 3 — Check Badges", caption: "Go to the 'Badges' page to view your current badges and track your collection progress." }
  ],
  rafa_slides1_mobile: [
    { src: "rafa/m_step1.png", title: "Step 1 — Join Discord", caption: "Join the RAFA.AI Discord community (Crucial! All badges come from community events). Link: discord.com/invite/J8SVJq7qAP" },
    { src: "rafa/m_step2.png", title: "Step 2 — Bind Accounts", caption: "Go to hub.rafa.ai/dashboard to bind your Discord, Twitter, and EVM wallet address." },
    { src: "rafa/m_step3.png", title: "Step 3 — Check Badges", caption: "Go to the 'Badges' page to view your current badges and track your collection progress." }
  ],

  rafa_details: {
    chatting: {
      title: "Leveling Up via Chat", sub: "Fragmented Time Strategy",
      body: `<div class="space-y-4 text-sm text-slate-700">
        <div>Manual chatting in the community is highly required. Bots and spammers will be banned. Use your fragmented time to engage in genuine conversations to accumulate XP.</div>
        
        <div class="mt-4 space-y-4">
          <div class="text-[13px] font-bold text-slate-900 border-b border-slate-100 pb-1">Visual Guide</div>
          
          <div class="space-y-2">
            <div class="text-[12px] text-slate-600 leading-relaxed">
              <span class="font-bold text-teal-600">1.</span> Chat genuinely in general channels. Do not spam short meaningless words.
            </div>
            <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="rafa/chat1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: rafa/chat1.png]</div>'"></div>
          </div>
          
          <div class="space-y-2">
            <div class="text-[12px] text-slate-600 leading-relaxed">
              <span class="font-bold text-teal-600">2.</span> Check your progress by typing <code>/level</code> in the bot-commands channel. Reach milestone levels (e.g., Lv 10, 20, 50) for core badges.
            </div>
            <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="rafa/chat2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: rafa/chat2.png]</div>'"></div>
          </div>
        </div>
      </div>`,
      actions: [{ text: "Open Discord", kind: "primary", url: "https://discord.com/invite/J8SVJq7qAP" }]
    },
    profiles: {
      title: "Connected Profiles", sub: "Account Binding",
      body: `<div class="space-y-3 text-sm text-slate-700">
        <div>To qualify for rewards, you must link your accounts to RAFA:</div>
        <ul class="list-disc pl-5 space-y-1">
          <li><b>X (Twitter) Linked</b></li>
          <li><b>Discord Linked</b></li>
          <li><b>Portal Wallet Linked</b></li>
        </ul>
        <div class="mt-4"><img src="rafa/profiles.png" class="w-full rounded-xl border border-slate-200 object-cover cursor-zoom-in" onerror="this.outerHTML='<div class=\\'w-full py-6 text-center bg-slate-100 text-slate-400 text-xs rounded-xl border border-dashed border-slate-300\\'>[Image Missing: rafa/profiles.png]</div>'"></div>
      </div>`,
      actions: [{ text: "Go to Hub", kind: "primary", url: "https://hub.rafa.ai/" }]
    },
    roles: {
      title: "Discord Roles Progression", sub: "Upgrade to earn more",
      body: `<div class="space-y-3 text-sm text-slate-700">
        <ul class="space-y-3">
          <li><b class="text-slate-900">@Egg</b> – Granted automatically. Complete verification on the server.</li>
          <li><b class="text-slate-900">@Kestrel</b> – Granted automatically. Reach level 3–5 on the server.</li>
          <li><b class="text-[#4aeacd]">@Hawk</b> - Granted manually. Reach level 10–15, show meaningful activity, and create tweets/content.</li>
          <li><b class="text-yellow-500">@Falcon</b> – Granted manually. Reach level 20–25, show meaningful activity, create tweets. (Secret conditions apply).</li>
          <li><b class="text-orange-500">@Eagle</b> – Granted manually. Conditions are secret.</li>
          <li><b class="text-purple-500">@Silver Wing</b> - Exclusive role for Poker Top 10 or Early members.</li>
          <li><b class="text-purple-600">@Portal Veteran</b> - For Bitcoin community ecosystem supporters.</li>
        </ul>
        <div class="mt-4"><img src="rafa/roles.png" class="w-full rounded-xl border border-slate-200 object-cover cursor-zoom-in" onerror="this.outerHTML='<div class=\\'w-full py-6 text-center bg-slate-100 text-slate-400 text-xs rounded-xl border border-dashed border-slate-300\\'>[Image Missing: rafa/roles.png]</div>'"></div>
      </div>`,
      actions: [{ text: "Got it", kind: "ghost" }]
    },
    activity: {
      title: "Badges & Activity", sub: "The Complete Wiki",
      body: `<div class="space-y-4 text-sm text-slate-700">
        <div><b class="text-slate-900 text-base">1. Discord Activity Badges</b></div>
        <ul class="list-disc pl-5 space-y-1">
          <li><b>Adventurer I:</b> Reach Discord Lv 5 (10 levels total).</li>
          <li><b>Good Morning I:</b> 7-day GM/GN streak (5 levels).</li>
          <li><b>Rumble I:</b> Survive Rumble Royale 5 times (5 levels).</li>
          <li><b>Referral King I:</b> Invite 3 friends (5 levels).</li>
          <li><b>Poker I:</b> Top 50 in Poker 5 times (5 levels). Top 10 get Silver Wing.</li>
          <li><b>Richi Hangout:</b> Participate in AMA.</li>
          <li><b>Eagle Grandmaster I:</b> Chess tournament.</li>
        </ul>
        
        <div><b class="text-slate-900 text-base">2. Social & Hub Activity</b></div>
        <ul class="list-disc pl-5 space-y-1">
          <li><b>Lucky I:</b> Win ticket_claim 5 times.</li>
          <li>
            <b>Researcher I:</b> (1 chance/day, need 5 total)
            <div class="mt-2 mb-2 space-y-2 border-l-2 border-teal-200 pl-3">
              <div class="text-[12px] text-slate-600"><b>Step 1:</b> Type <code>/ticket_claim</code> in Discord.</div>
              <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="rafa/ticket1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: rafa/ticket1.png]</div>'"></div>
              <div class="text-[12px] text-slate-600"><b>Step 2:</b> Go to <a href="https://hub.rafa.ai/lucky-tickets" target="_blank" class="text-teal-500 hover:underline font-bold">hub.rafa.ai/lucky-tickets</a> to check and open it.</div>
              <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="rafa/ticket2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: rafa/ticket2.png]</div>'"></div>
            </div>
          </li>
          <li><b>Hawk on X:</b> Follow RAFA Twitter.</li>
        </ul>

        <div><b class="text-slate-900 text-base">3. Exclusive Badges</b></div>
        <ul class="list-disc pl-5 space-y-1">
          <li><b>Server Booster</b></li>
          <li><b>Emerald Frost Eagle:</b> Special New Year Badge</li>
          <li><b>Valentine Wings:</b> Special Valentine Badge</li>
        </ul>
        <div class="mt-4"><img src="rafa/activity.png" class="w-full rounded-xl border border-slate-200 object-cover cursor-zoom-in" onerror="this.outerHTML='<div class=\\'w-full py-6 text-center bg-slate-100 text-slate-400 text-xs rounded-xl border border-dashed border-slate-300\\'>[Image Missing: rafa/activity.png]</div>'"></div>
      </div>`,
      actions: [{ text: "Got it", kind: "ghost" }]
    },
    stats: {
      title: "Using the /stats Command", sub: "Track Your Progress",
      body: `<div class="space-y-3 text-sm text-slate-700">
        <div>In the Discord server, use the <code>/stats</code> command to open your Statistics Dashboard.</div>
        <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono text-xs">
          Statistics Dashboard for user<br>
          Use the buttons below to navigate between categories<br><br>
          <b>Quick Stats:</b><br>
          - 1 day streak (best: 1)<br>
          - Level 3 on MEE6<br>
          - 0 raid points
        </div>
        <div>Use the interactive buttons below the bot's response to navigate through your Badges, Tickets, and Rumble stats.</div>
        <div class="mt-4"><img src="rafa/stats.png" class="w-full rounded-xl border border-slate-200 object-cover cursor-zoom-in" onerror="this.outerHTML='<div class=\\'w-full py-6 text-center bg-slate-100 text-slate-400 text-xs rounded-xl border border-dashed border-slate-300\\'>[Image Missing: rafa/stats.png]</div>'"></div>
      </div>`,
      actions: [{ text: "Got it", kind: "ghost" }]
    }
  }
};

// ============================================================================
// ============================================================================

window.translations.zh = {
  // ================== 公共/共享词汇 ==================
  page_title: "交互式任务看板",
  header_desc: "1分钟看懂，立刻拿收益",
  btn_guide: "查看指南",
  btn_go_token: "前往 DApp",
  btn_go_token_short: "去执行",
  btn_go_link: "打开链接",
  btn_discord_login: "连接账号",
  btn_go_token_mobile: "立即前往官网执行",
  board_desc: "你的进度将自动保存在本地。日常任务系统会自动提醒，周期性任务进度将被独立追踪。",
  board_reset: "(每日 00:00 UTC 重置)",
  board_progress: "日常打卡进度",
  sub_title: "智能打卡提醒",
  sub_desc: "连接 Discord 并开启订阅。如果你在当天 <span class=\"font-bold text-slate-300\">20:00 (UTC+8)</span> 前未完成日常任务，系统将通过私信提醒你。",
  sub_btn_connect: "先连接 Discord",
  sub_status_on: "已开启",
  sub_status_off: "未开启",
  toast_sender: "系统提醒",
  toast_msg: "成功确认完成 <span class='font-bold text-white'>{0}</span>！奖励条件已满足。",
  toast_sub_title: "订阅已激活",
  toast_sub_desc: "如果日常任务未完成，机器人每天 20:00 将在 Discord 私信提醒您。",
  btn_pc_guide: "电脑版教程",
  btn_mobile_guide: "手机版教程",
  lightbox_hint: "点击任意区域关闭",

  // ================== RAFA.AI 专属词汇 ==================
  rafa_page_title: "RAFA.AI — 交互式任务看板",
  rafa_hero_title: "AI 叙事下的肝帝盛宴：集齐勋章，博取 <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-[#4aeacd] to-teal-400\">300U+ 高优预期空投</span>",
  rafa_hero_desc: "不要在意 RAFA 的“AI 投资理财”白皮书能不能落地，在这个印度卷王项目里，规则极其简单粗暴：Discord 勋章决定一切。官方通过德州扑克、大逃杀、幸运票等硬核玩法过滤机器人。只要你有耐心集齐核心角色勋章，就能复刻同团队老项目（Portal To Bitcoin）的丰厚回报。",
  rafa_banner_title: "核心收益预期",
  rafa_banner_amount: "单号预期 <span class=\"text-teal-200\">300U+</span>",
  rafa_banner_sub1: "+ 稀有紫名角色极高溢价",
  rafa_banner_sub2: "绝对零撸，全凭执行力",
  rafa_check1_title: "历史背书", rafa_check1_desc: "前作 Portal To Bitcoin 发放超 300U 奖励",
  rafa_check2_title: "防卷护城河", rafa_check2_desc: "大逃杀/德州扑克玩法隔离脚本",
  rafa_check3_title: "勋章即财富", rafa_check3_desc: "完全透明的角色等级空投机制",
  
  rafa_advice_title: "给新人的防坑与暴富建议",
  rafa_advice_desc: "这是一个极度考验耐心的项目。不要因为大逃杀（Rumble）点了几百次都没中而气馁，大家都是一样的。<span class=\"font-bold text-teal-900\">新人的首要目标是发 3 篇推文拿下『蓝色名字』防身</span>，然后每天坚持抽幸运票、打德州扑克。只要你不是机器脚本，在这个“卷王”社区里坚持一个月，拿到第二档核心角色（黄色名字）的概率非常大。肝，就完事了。",

  rafa_board_daily_title: "每日日常肝帝任务",
  rafa_board_periodic_title: "周期与进阶勋章任务",
  rafa_board_periodic_desc: "(获取核心空投乘数的关键)",

  rafa_daily_task1_title: "1. 社区活跃：碎片时间水群升级", rafa_daily_task1_reward: "奖励：等级勋章与空投权重",
  
  rafa_periodic_task1_title: "1. 基础门槛：链接三方账号", rafa_periodic_task1_reward: "奖励：获取空投发放大门",
  rafa_periodic_task2_title: "2. 核心进阶：Discord 角色等级体系", rafa_periodic_task2_reward: "奖励：极高空投乘数与大额变现",
  rafa_periodic_task3_title: "3. 爆肝目标：活动与专属徽章图鉴", rafa_periodic_task3_reward: "奖励：获取各个赛道对应的空投份额",
  rafa_periodic_task4_title: "4. 进度查询：使用 /stats 命令", rafa_periodic_task4_reward: "奖励：随时追踪自己的数据",

  rafa_guide_title: "RAFA 新手图文指引",
  rafa_guide_desc: "完成基础认证，开启你的勋章收集之旅。",

  rafa_branch1_title: "防封水群升级策略",
  rafa_branch1_badge: "必读核心",
  rafa_branch1_desc: "如何在 Discord 中安全、有效地聊天升级获取角色。",
  
  rafa_branch2_title: "全勋章/称号 WIKI 图鉴",
  rafa_branch2_desc: "详细查阅每一个角色与徽章的获取条件。",

  rafa_slides1_pc: [
    { src: "rafa/step1.png", title: "Step 1 — 进入 Discord 社区", caption: "进入 RAFA Discord 社区（重要！所有勋章均来自社区活动），链接：discord.com/invite/J8SVJq7qAP" },
    { src: "rafa/step2.png", title: "Step 2 — 绑定三方账号", caption: "进入 hub.rafa.ai/dashboard 绑定自己的 Discord、推特和 EVM 地址。" },
    { src: "rafa/step3.png", title: "Step 3 — 查看与收集勋章", caption: "进入 badges 页面，查看自己获得的勋章情况，以及收集勋章进度。" }
  ],
  rafa_slides1_mobile: [
    { src: "rafa/m_step1.png", title: "Step 1 — 进入 Discord 社区", caption: "进入 RAFA Discord 社区（重要！所有勋章均来自社区活动），链接：discord.com/invite/J8SVJq7qAP" },
    { src: "rafa/m_step2.png", title: "Step 2 — 绑定三方账号", caption: "进入 hub.rafa.ai/dashboard 绑定自己的 Discord、推特和 EVM 地址。" },
    { src: "rafa/m_step3.png", title: "Step 3 — 查看与收集勋章", caption: "进入 badges 页面，查看自己获得的勋章情况，以及收集勋章进度。" }
  ],

  rafa_details: {
    chatting: {
      title: "碎片时间聊天策略", sub: "安全升级拿勋章",
      body: `<div class="space-y-4 text-sm text-slate-700">
        <div>官方严打脚本和机器号，直接开脚本挂机极易被封。建议每天利用碎片时间，在中文区或闲聊区进行真实的交流。</div>
        
        <div class="mt-4 space-y-4">
          <div class="text-[13px] font-bold text-slate-900 border-b border-slate-100 pb-1">图文操作步骤</div>
          
          <div class="space-y-2">
            <div class="text-[12px] text-slate-600 leading-relaxed">
              <span class="font-bold text-teal-600">1.</span> 在常规频道（如中文区）参与真实话题讨论，切勿连续发送无意义的短字符拼凑。
            </div>
            <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="rafa/chat1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: rafa/chat1.png]</div>'"></div>
          </div>
          
          <div class="space-y-2">
            <div class="text-[12px] text-slate-600 leading-relaxed">
              <span class="font-bold text-teal-600">2.</span> 前往机器人指令频道，输入 <code>/level</code> 随时查看自己的等级和经验值进度，目标是冲向 50 级。
            </div>
            <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="rafa/chat2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: rafa/chat2.png]</div>'"></div>
          </div>
        </div>
      </div>`,
      actions: [{ text: "立即前往 Discord", kind: "primary", url: "https://discord.com/invite/J8SVJq7qAP" }]
    },
    profiles: {
      title: "链接基础账号", sub: "获取空投的必要门槛",
      body: `<div class="space-y-3 text-sm text-slate-700">
        <div>你必须将以下平台账号与 RAFA 系统进行绑定（Connected Profiles）：</div>
        <ul class="list-disc pl-5 space-y-1">
          <li><b>X (Twitter) Linked</b></li>
          <li><b>Discord Linked</b></li>
          <li><b>Portal Wallet Linked</b></li>
        </ul>
        <div class="mt-4"><img src="rafa/profiles.png" class="w-full rounded-xl border border-slate-200 object-cover cursor-zoom-in" onerror="this.outerHTML='<div class=\\'w-full py-6 text-center bg-slate-100 text-slate-400 text-xs rounded-xl border border-dashed border-slate-300\\'>[图片占位: rafa/profiles.png]</div>'"></div>
      </div>`,
      actions: [{ text: "前往官网绑定", kind: "primary", url: "https://hub.rafa.ai/" }]
    },
    roles: {
      title: "Discord 核心角色晋升", sub: "从 Egg 到 Eagle",
      body: `<div class="space-y-3 text-sm text-slate-700">
        <ul class="space-y-3">
          <li><b class="text-slate-900">@Egg</b> – 自动授予。进服务器完成验证即可。</li>
          <li><b class="text-slate-900">@Kestrel</b> – 自动授予。服务器等级达到 3–5 级。</li>
          <li><b class="text-[#4aeacd]">@Hawk</b> - 手动授予。等级达到 10–15 级，表现出有意义的活跃度，并创作推文和内容。</li>
          <li><b class="text-yellow-500">@Falcon</b> – 手动授予。等级达到 20–25 级，表现出有意义的活跃度，发推。（具体条件对用户保密）。</li>
          <li><b class="text-orange-500">@Eagle</b> – 手动授予。（条件完全保密，通常需极高贡献）。</li>
          <li><b class="text-purple-500">@Silver Wing</b> - 早期成员专属，或扑克排名前十获得。</li>
          <li><b class="text-purple-600">@Portal Veteran</b> - 生态支持者专属。</li>
        </ul>
        <div class="mt-4"><img src="rafa/roles.png" class="w-full rounded-xl border border-slate-200 object-cover cursor-zoom-in" onerror="this.outerHTML='<div class=\\'w-full py-6 text-center bg-slate-100 text-slate-400 text-xs rounded-xl border border-dashed border-slate-300\\'>[图片占位: rafa/roles.png]</div>'"></div>
      </div>`,
      actions: [{ text: "我知道了", kind: "ghost" }]
    },
    activity: {
      title: "活动与专属徽章图鉴", sub: "肝帝的目标清单",
      body: `<div class="space-y-4 text-sm text-slate-700">
        <div><b class="text-slate-900 text-base">1. Discord 活动徽章 (Activity)</b></div>
        <ul class="list-disc pl-5 space-y-1">
          <li><b>Adventurer I:</b> 升到 5 级获得，共 10 个等级。</li>
          <li><b>Good Morning I:</b> 连续 7 天发送 gm/gn 获得，共 5 级。</li>
          <li><b>Rumble I:</b> 大逃杀生存 5 次获得 1 个，共 5 级。</li>
          <li><b>Referral King I:</b> 邀请 3 人获得 1 个，共 5 级。</li>
          <li><b>Poker I:</b> 扑克进前 50 名 5 次获得，共 5 级。（前1-10名额外得 Silver Wing）。</li>
          <li><b>Richi Hangout:</b> 参与 AMA 活动。</li>
          <li><b>Eagle Grandmaster I:</b> Chess 锦标赛获得。</li>
        </ul>
        
        <div><b class="text-slate-900 text-base">2. 社交与 Hub 活动</b></div>
        <ul class="list-disc pl-5 space-y-1">
          <li><b>Lucky I:</b> Win ticket_claim 5 次。</li>
          <li>
            <b>Researcher I:</b> (一天一次机会，共需完成 5 次)
            <div class="mt-2 mb-2 space-y-2 border-l-2 border-teal-200 pl-3">
              <div class="text-[12px] text-slate-600"><b>Step 1:</b> 在 Discord 内输入 <code>/ticket_claim</code>。</div>
              <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="rafa/ticket1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: rafa/ticket1.png]</div>'"></div>
              <div class="text-[12px] text-slate-600"><b>Step 2:</b> 去 <a href="https://hub.rafa.ai/lucky-tickets" target="_blank" class="text-teal-500 hover:underline font-bold">hub.rafa.ai/lucky-tickets</a> 查看并且点击开奖。</div>
              <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="rafa/ticket2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: rafa/ticket2.png]</div>'"></div>
            </div>
          </li>
          <li><b>Hawk on X:</b> 关注官推。</li>
        </ul>

        <div><b class="text-slate-900 text-base">3. 专属徽章 (Exclusive)</b></div>
        <ul class="list-disc pl-5 space-y-1">
          <li><b>Server Booster:</b> Boost 服务器。</li>
          <li><b>Emerald Frost Eagle:</b> 新年特殊勋章。</li>
          <li><b>Valentine Wings:</b> 情人节特殊勋章。</li>
        </ul>
        <div class="mt-4"><img src="rafa/activity.png" class="w-full rounded-xl border border-slate-200 object-cover cursor-zoom-in" onerror="this.outerHTML='<div class=\\'w-full py-6 text-center bg-slate-100 text-slate-400 text-xs rounded-xl border border-dashed border-slate-300\\'>[图片占位: rafa/activity.png]</div>'"></div>
      </div>`,
      actions: [{ text: "我知道了", kind: "ghost" }]
    },
    stats: {
      title: "查看个人数据 (/stats)", sub: "如何使用统计面板",
      body: `<div class="space-y-3 text-sm text-slate-700">
        <div>在 Discord 服务器任意指令频道，输入 <code>/stats</code> 即可调出你的个人数据面板。</div>
        <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono text-xs leading-relaxed">
          Statistics Dashboard for user<br>
          Use the buttons below to navigate between categories<br><br>
          <b>Quick Stats (快速统计):</b><br>
          - 1 day streak (连续打卡天数)<br>
          - Level 3 on MEE6 (当前等级)<br>
          - 0 raid points (突袭积分)
        </div>
        <div>通过点击机器人回复下方的按钮，可以切换查看你的徽章进度、幸运票和 Rumble 统计。</div>
        <div class="mt-4"><img src="rafa/stats.png" class="w-full rounded-xl border border-slate-200 object-cover cursor-zoom-in" onerror="this.outerHTML='<div class=\\'w-full py-6 text-center bg-slate-100 text-slate-400 text-xs rounded-xl border border-dashed border-slate-300\\'>[图片占位: rafa/stats.png]</div>'"></div>
      </div>`,
      actions: [{ text: "我知道了", kind: "ghost" }]
    }
  }
};