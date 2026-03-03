window.translations = window.translations || {};

window.translations.en = {
  // ================== 公共/共享词汇 ==================
  page_title: "HashGame — Interactive Task Board",
  header_desc: "Understand in 1 min, Earn instantly",
  btn_guide: "View Guide",
  btn_go_token: "Go to DApp",
  btn_go_token_short: "Execute",
  btn_go_link: "Open Link",
  btn_discord_login: "Connect",
  btn_go_token_mobile: "Execute on Website Now",
  btn_copy: "Copy Code",
  btn_copied: "Copied!",
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

  // ================== HashGame 专属词汇 ==================
  hg_hero_title: "Zero-Cost Alpha: Farm the <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-[#f2a30a] to-orange-400\">TGE Genesis Airdrop</span>",
  hg_hero_desc: "HashGame is a fully on-chain prediction protocol driven by BTC block hashes. 100% transparent. Farm $HASH via Testnet gameplay, stake it, and grind Discord roles (OG/ON) to secure massive future TGE allocations.",
  hg_banner_title: "Core Expected Returns",
  hg_banner_amount: "Massive <span class=\"text-orange-900\">TGE Airdrop</span>",
  hg_banner_sub1: "+ Periodic Tournament Spot USDT",
  hg_banner_sub2: "OG/ON Role High Valuation",
  
  hg_check1_title: "Zero Cost", hg_check1_desc: "BSC Testnet (Zero real gas required)",
  hg_check2_title: "Provably Fair", hg_check2_desc: "BTC Hash as sole random seed",
  hg_check3_title: "Role = Wealth", hg_check3_desc: "Discord Roles dictate airdrop weight",
  
  hg_advice_title: "Heartfelt Advice for Newcomers",
  hg_advice_desc: "In HashGame, <span class=\"font-bold text-[#f2a30a]\">accumulating $HASH tokens and earning Discord roles are equally important</span>. Betting in the game earns you $HASH, while securing high-tier community roles serves as your ticket to the Strategy Tournaments, allowing you to share real prize pools of over 4000 USDT per season (~3 events every 2 months).<br><br>The team strictly bans botting. <span class=\"text-red-500 font-bold\">Never spam in Discord channels, and bind your Twitter immediately upon joining to avoid getting muted!</span> Chat genuinely and help newcomers. Here, patience and authenticity are your ultimate edge.",

  hg_board_daily_title: "Daily Mining Tasks",
  hg_board_periodic_title: "Advanced Role & Event Tasks",
  hg_board_periodic_desc: "(Crucial milestones for airdrop multipliers)",

  hg_daily_task1_title: "1. Discord Faucet: Claim Testnet Funds", hg_daily_task1_reward: "Reward: USDC & tBNB Gas",
  hg_daily_task2_title: "2. Play Games: Predict BTC Hash", hg_daily_task2_reward: "Reward: Earn $HASH Tokens",
  
  hg_periodic_task1_title: "1. Community Building: Grind Discord Roles", hg_periodic_task1_reward: "Reward: Future Airdrop Multiplier",
  hg_periodic_task2_title: "2. Strategy Tournament", hg_periodic_task2_reward: "Reward: Spot USDT + Roles",

  hg_guide_title: "HashGame Guide",
  hg_guide_desc: "Follow the steps below to setup and execute your first prediction.",
  
  hg_slides1_pc: [
    { src: "hashgame/hg_step1.png", title: "Step 1 — Enter Website & Connect", caption: "Open the official website and prepare to connect your Web3 wallet." },
    { src: "hashgame/hg_step2.png", title: "Step 2 — Network Setup (OKX Demo)", caption: "Switch to EVM network. If connecting without BSC Testnet (Chain ID 97), it prompts to add automatically." },
    { src: "hashgame/hg_step3.png", title: "Step 3 — Select Asset & Language", caption: "Select USDC (since faucet funds are in USDC) and set your preferred language." },
    { src: "hashgame/hg_step4.png", title: "Step 4 — Bind Referral & Bet", caption: "CRITICAL: Click 'Referral' (top left) and bind code '168' to earn HASH. We suggest Classic Mode, betting on Numbers (62.5% win rate)." },
    { src: "hashgame/hg_step5.png", title: "Step 5 — Verifiable Result", caption: "Games use BTC block height as Game ID (~10 mins/round). Winners claim immediately." }
  ],
  hg_slides1_mobile: [
    { src: "hashgame/hg_m_step1.png", title: "Step 1 — Enter Website & Connect", caption: "Open the official website and prepare to connect your Web3 wallet." },
    { src: "hashgame/hg_m_step2.png", title: "Step 2 — Network Setup", caption: "Switch to EVM network. If connecting without BSC Testnet (Chain ID 97), it prompts to add automatically." },
    { src: "hashgame/hg_m_step3.png", title: "Step 3 — Select Asset & Language", caption: "Select USDC (since faucet funds are in USDC) and set your preferred language." },
    { src: "hashgame/hg_m_step4.png", title: "Step 4 — Bind Referral & Bet", caption: "CRITICAL: Bind code '168' first! Suggest Classic Mode betting on Numbers." },
    { src: "hashgame/hg_m_step5.png", title: "Step 5 — Verifiable Result", caption: "Games use BTC block height as Game ID. Claim rewards every ~10 mins." }
  ],

  hg_details: {
    faucet: {
      title: "Discord Faucet Guide", sub: "Claim Testnet Funds",
      body: `<div class="space-y-2"><div><b>Rule:</b> You must chat genuinely in Discord to reach Level 1 before claiming faucet. Use <code>!rank</code> to check progress.</div></div>
        <div class="mt-6 space-y-4">
        <div class="text-[13px] font-bold text-slate-900 border-b border-slate-100 pb-1">Visual Guide</div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">1. Chat to Lv 1 & check with !rank</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_faucet1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: hashgame/hg_faucet1.png]</div>'"></div></div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">2. Once Lv 1, go to #testnet-faucet and use /gas to claim 0.2 tBNB.</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_faucet2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: hashgame/hg_faucet2.png]</div>'"></div></div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">3. Use /faucet in the same channel to claim 40 USDC (Once per hour).</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_faucet3.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: hashgame/hg_faucet3.png]</div>'"></div></div>
      </div>`,
      actions: [{ text: "Join Discord", kind: "primary", url: "https://discord.gg/ZMHbbNQjyn" }]
    },
    roles: {
      title: "Discord Roles Strategy", sub: "The real wealth code",
      body: `<ul class="space-y-4 text-xs text-slate-600">
        <li><b class="text-slate-900 text-sm">Founder & Growth Leader</b><br>Highest authority and market expansion drivers.</li>
        <li><b class="text-slate-900 text-sm">Oracle Node (ON) & OG</b><br>ONs validate game data. Testnet gives ~100 free spots to top contributors. OGs are early supporters. Estimated value $10,000+.</li>
        <li><b class="text-slate-900 text-sm">Whitelist & Airdrop Eligible</b><br>Chat genuinely to earn these baseline airdrop qualifiers.</li>
        <li><b class="text-slate-900 text-sm">Community Tiers</b><br>Diamond (Lv 50), Platinum (Lv 40), Gold (Lv 30), Silver (Lv 20), Bronze (Lv 10). Reached purely by chatting.</li>
      </ul>
      <div class="mt-6 space-y-4">
        <div class="text-[13px] font-bold text-slate-900 border-b border-slate-100 pb-1">Visual Guide</div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">1. Chat to level up</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_role1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: hashgame/hg_role1.png]</div>'"></div></div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">2. Secure high-tier roles</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_role2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: hashgame/hg_role2.png]</div>'"></div></div>
      </div>`,
      actions: [{ text: "Join Discord", kind: "primary", url: "https://discord.gg/ZMHbbNQjyn" }]
    },
    tournament: {
      title: "Strategy Tournament", sub: "Compete for Mainnet USDT",
      body: `<div class="space-y-3 text-xs text-slate-700 leading-relaxed">
        <div class="font-bold text-sm text-slate-900">HashGame Strategy Tournament</div>
        <div>Over 2,000 BTC blocks (~14 days), seasons routinely reach billions in total trading volume. Top 10 ROI >200%. All bets and settlements are 100% on-chain and fully transparent.</div>
        
        <div class="font-bold mt-2 text-slate-900">Prize Pool (Distributed on BSC Mainnet)</div>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>1st: 750 USDT | 2nd: 500 USDT | 3rd: 300 USDT</li>
          <li>4th–10th: 100 USDT</li>
          <li>11th–20th: 50 USDT</li>
          <li>21th–50th: 25 USDT</li>
        </ul>

        <div class="p-3 bg-orange-50 rounded-lg text-orange-900 border border-orange-200 mt-2">
          <b>Entry Requirements (Meet ONE):</b><br>
          1. Discord <b>Level 10</b> + Follow and interact with official X (Twitter).<br>
          2. Discord <b>Level 5</b> + X (Twitter) Blue Tick subscription.
        </div>
      </div>
      
      <div class="mt-6 space-y-4">
        <div class="text-[13px] font-bold text-slate-900 border-b border-slate-100 pb-1">Tournament Guide</div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">1. Watch for Registration popup on the Tournament page.</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_tourney1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: hashgame/hg_tourney1.png]</div>'"></div></div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">2. Past High-ROI Leaderboard.</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_tourney2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: hashgame/hg_tourney2.png]</div>'"></div></div>
      </div>`,
      actions: [{ text: "Got it", kind: "ghost" }]
    }
  }
};

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
  btn_copy: "复制内容",
  btn_copied: "已复制!",
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

  // ================== HashGame 专属词汇 ==================
  hg_page_title: "HashGame — 交互式任务看板",
  hg_hero_title: "预测赛道零撸大毛：赢取 <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-[#f2a30a] to-orange-400\">TGE 创世空投</span>",
  hg_hero_desc: "HashGame 是一个以 BTC 区块哈希作为唯一随机源的预测游戏协议，完全上链、公开透明。通过测试网零成本下注获取 $HASH，积极建设 Discord 社区获取高权重角色（OG/ON），锁定未来的超级大毛。",
  hg_banner_title: "核心收益预期",
  hg_banner_amount: "海量 <span class=\"text-orange-900\">TGE 份额</span>",
  hg_banner_sub1: "+ 锦标赛现货 USDT 奖励",
  hg_banner_sub2: "OG/ON 角色高溢价估值",
  
  hg_check1_title: "绝对零撸", hg_check1_desc: "BSC 测试网交互 (0 真实 Gas)",
  hg_check2_title: "透明公平", hg_check2_desc: "BTC 哈希为唯一随机源",
  hg_check3_title: "角色=财富", hg_check3_desc: "Discord 身份决定空投权重",
  
  hg_advice_title: "给新人的防坑与暴富建议",
  hg_advice_desc: "玩 HashGame，<span class=\"font-bold text-[#f2a30a]\">积累 $HASH 凭证和获取 Discord 角色同等重要</span>。参与游戏下注可以持续获取 $HASH 虚拟币；而积极建设社区拿到高级角色，更是参与「策略锦标赛」的门票，能让你参与瓜分每期超 4000 USDT 的真实奖池（每两个月约3期活动）。<br><br>官方严打脚本工作室，<span class=\"text-red-500 font-bold\">切记千万不要在 DC 频道乱刷屏（水发言），进群第一时间绑定推特，否则会被禁言！</span>多去中文区或英文区正常聊天帮助新人。在这个项目，真诚和耐心是最大的必杀技。",
  
  hg_board_daily_title: "每日日常打卡",
  hg_board_periodic_title: "进阶与角色任务",
  hg_board_periodic_desc: "(一次性设置 / 长期积累)",
  
  hg_daily_task1_title: "1. DC 频道：领取测试水和 Gas", hg_daily_task1_reward: "奖励：每日弹药 (USDC)",
  hg_daily_task2_title: "2. 官网下注：玩经典模式", hg_daily_task2_reward: "奖励：产生 $HASH 凭证",
  
  hg_periodic_task1_title: "1. 社区建设：获取 Discord 高级角色", hg_periodic_task1_reward: "奖励：极高空投乘数与大额变现",
  hg_periodic_task2_title: "2. 策略锦标赛 (Strategy Tournament)", hg_periodic_task2_reward: "奖励：主网现货 USDT + 角色",
  
  hg_guide_title: "HashGame 图文指引",
  hg_guide_desc: "跟着下方步骤，零基础完成你的第一次下注预测。",
  
  hg_slides1_pc: [
    { src: "hashgame/hg_step1.png", title: "Step 1 — 进入官网并连接钱包", caption: "打开官网并准备连接你的 Web3 钱包。" },
    { src: "hashgame/hg_step2.png", title: "Step 2 — 切换网络 (以 OKX 钱包为例)", caption: "切换到 EVM 网络，连接钱包时如果没有 BSC Testnet (链ID: 97)，系统会自动提示添加。" },
    { src: "hashgame/hg_step3.png", title: "Step 3 — 选择币种与语言", caption: "选择 USDC（因为领的水是USDC）和自己熟悉的语言。" },
    { src: "hashgame/hg_step4.png", title: "Step 4 — 绑定邀请码并下注", caption: "下注前务必点击左上角推荐绑定邀请码 168 获取奖励资格。建议玩经典模式，小倍数下注全数字。" },
    { src: "hashgame/hg_step5.png", title: "Step 5 — 等待开奖", caption: "每局以 BTC 区块高度为 Game ID，约10分钟一局。产生新区块后中奖者可立即领奖。" }
  ],
  hg_slides1_mobile: [
    { src: "hashgame/hg_m_step1.png", title: "Step 1 — 钱包内打开官网", caption: "在 Web3 钱包浏览器输入官网并准备连接。" },
    { src: "hashgame/hg_m_step2.png", title: "Step 2 — 确认网络状态", caption: "确保连接的是 EVM 网络下的 BSC Testnet。" },
    { src: "hashgame/hg_m_step3.png", title: "Step 3 — 选择币种与语言", caption: "选择 USDC 作为下注资产并切换语言。" },
    { src: "hashgame/hg_m_step4.png", title: "Step 4 — 绑定邀请码并下注", caption: "关键步骤：绑定推荐码 168。建议参与经典模式数字预测。" },
    { src: "hashgame/hg_m_step5.png", title: "Step 5 — 等待开奖", caption: "每局约10分钟。新区块产生后可查看结果与领奖。" }
  ],

  hg_details: {
    faucet: {
      title: "DC 领水与 Gas 教程", sub: "每日弹药补给站",
      body: `<div class="space-y-2"><div><b>核心规则：</b> 必须先在常规频道真实聊天升到1级，再去指定频道领水。</div></div>
        <div class="mt-6 space-y-4">
        <div class="text-[13px] font-bold text-slate-900 border-b border-slate-100 pb-1">操作步骤演示</div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">1. 进入 Discord 正常聊天，持续 30 分钟左右升到 1 级。可在 <code>bot-commands</code> 输入 <code>!rank</code> 查看进度。</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_faucet1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: hashgame/hg_faucet1.png]</div>'"></div></div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">2. 到达 1 级后，前往 <code>#testnet-faucet</code> 频道，输入 <code>/gas</code> 和你的 EVM 钱包地址领取 0.2 tBNB。</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_faucet2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: hashgame/hg_faucet2.png]</div>'"></div></div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">3. 继续在同频道输入 <code>/faucet</code> 和你的地址，领取 40 USDC 筹码（每小时可领取一次）。</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_faucet3.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: hashgame/hg_faucet3.png]</div>'"></div></div>
      </div>`,
      actions: [{ text: "立即前往 Discord", kind: "primary", url: "https://discord.gg/ZMHbbNQjyn" }]
    },
    roles: {
      title: "Discord 角色图鉴", sub: "决定未来空投大小的核心",
      body: `<ul class="space-y-4 text-[13px] leading-relaxed text-slate-600">
        <li><b class="text-slate-900 text-sm">Founder (创始人) & Growth Leader (增长领袖)</b><br>拥有最高权限；推动项目用户增长与市场扩展，具极强社交影响力。</li>
        <li><b class="text-slate-900 text-sm">Oracle Node (ON 共识节点)</b><br>负责比赛数据验证与结果确认。主网阶段需质押等值 $10,000 以上获得；测试网期间仅赠送最多100个名额给高质量裂变贡献者。</li>
        <li><b class="text-slate-900 text-sm">OG (Original Gangster)</b><br>早期核心支持者，享有特殊荣誉，单号保守估值破万U。</li>
        <li><b class="text-slate-900 text-sm">Whitelist (白名单) & Airdrop Eligible (空投资格)</b><br>完成指定任务或在社区活跃聊天即可获批，是防身必备的基础角色。</li>
        <li><b class="text-slate-900 text-sm">会员等级 (Diamond to Bronze)</b><br>社区等级达到 50/40/30/20/10 级自动获取，等级越高，关联未来空投量越大，并解锁更多官方比赛权限。</li>
      </ul>
      <div class="mt-6 space-y-4">
        <div class="text-[13px] font-bold text-slate-900 border-b border-slate-100 pb-1">角色获取演示</div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">1. 活跃聊天获取社区等级</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_role1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: hashgame/hg_role1.png]</div>'"></div></div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">2. 申请或分配高级身份组</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_role2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: hashgame/hg_role2.png]</div>'"></div></div>
      </div>`,
      actions: [{ text: "加入官方 Discord 开肝", kind: "primary", url: "https://discord.gg/ZMHbbNQjyn" }]
    },
    tournament: {
      title: "策略锦标赛", sub: "瓜分主网现货 USDT",
      body: `<div class="space-y-3 text-xs text-slate-700 leading-relaxed">
        <div class="font-bold text-sm text-slate-900">HashGame 策略锦标赛介绍</div>
        <div>往期赛季历时 14 天 (2000 个 BTC 区块)，总交易量能达到惊人的 22.2 亿美元。前十名 ROI 轻松超过 200%。所有预测和结算完全上链，公开透明。</div>
        
        <div class="font-bold mt-2 text-slate-900">主网 USDT 奖池分配 (示例)</div>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>第1名: 750 USDT | 第2名: 500 USDT | 第3名: 300 USDT</li>
          <li>第4-10名: 100 USDT</li>
          <li>第11-20名: 50 USDT</li>
          <li>第21-50名: 25 USDT</li>
        </ul>

        <div class="p-3 bg-orange-50 rounded-lg text-orange-900 border border-orange-200 mt-2">
          <b>参赛硬性要求（二选一）：</b><br>
          1. Discord 达到 <b>10级</b>，且关注并与官方 X (Twitter) 互动。<br>
          2. Discord 达到 <b>5级</b>，且 X (Twitter) 拥有蓝标订阅 (Blue Tick)。
        </div>
      </div>
      
      <div class="mt-6 space-y-4">
        <div class="text-[13px] font-bold text-slate-900 border-b border-slate-100 pb-1">报名与锦标赛指南</div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">1. 留意报名窗口：活动开始时会在官网 Tournament 页面出现报名弹窗，需多留意官方公告。</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_tourney1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: hashgame/hg_tourney1.png]</div>'"></div></div>
        <div class="space-y-2"><div class="text-[12px] text-slate-600 font-medium">2. 往期高额收益展示：前十名 ROI 轻松突破 200%。</div><div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="hashgame/hg_tourney2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: hashgame/hg_tourney2.png]</div>'"></div></div>
      </div>`,
      actions: [{ text: "我知道了", kind: "ghost" }]
    }
  }
};