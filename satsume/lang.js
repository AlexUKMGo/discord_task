window.translations = window.translations || {};

window.translations.en = {
  // ================== 公共/共享词汇 ==================
  page_title: "Satsume — Interactive Task Board",
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

  // ================== Satsume 专属词汇 ==================
  sat_hero_title: "CommerceFi Alpha: Turn Shopping into <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-500\">Fractional Ownership</span>",
  sat_hero_desc: "Satsume is an early-stage CommerceFi protocol blending e-commerce with DeFi. Support creators and early projects not just as a consumer, but as an investor. Mint NFT Receipts through testnet shopping to build mainnet airdrop weight.",
  sat_banner_title: "Core Expected Returns",
  sat_banner_amount: "High <span class=\"text-rose-200\">Airdrop Potential</span>",
  sat_banner_sub1: "+ Share of Zealy $5K+ USDT Pool",
  sat_banner_sub2: "Zero Cost (Sepolia Testnet)",
  
  sat_check1_title: "CommerceFi", sat_check1_desc: "Product discovery = Seed investing",
  sat_check2_title: "Zero Risk", sat_check2_desc: "Uses Sepolia ETH (No real funds)",
  sat_check3_title: "Airdrop Weight", sat_check3_desc: "Testnet actions map to future TGE",

  sat_advice_title: "Heartfelt Advice for Grinders",
  sat_advice_desc: "Satsume is currently in a very early, low-key phase with no massive VC rounds announced publicly yet. This is actually a good thing—it means <span class=\"font-bold text-rose-900\">less competition and pure behavior-based farming</span>. Don't go 'all-in' on your time, but consistently doing the daily mock shopping and Zealy tasks is a smart, zero-cost bet on the CommerceFi narrative.<br><br><span class=\"font-bold text-rose-600\">Crucial Note:</span> The <b>Neurobits</b> you earn from interacting on the official website act as Points, which are highly likely to be your primary credential for the post-TGE airdrop!",

  sat_board_daily_title: "Daily Testnet Tasks",
  sat_board_periodic_title: "Periodic & Advanced Tasks",
  sat_board_periodic_desc: "(Crucial milestones for airdrop tiers)",

  sat_daily_task1_title: "1. Faucet & Profile: Claim $NUSD", sat_daily_task1_reward: "Reward: Testing Funds & Genesis Setup",
  sat_daily_task2_title: "2. Mock Shopping: Mint Receipt", sat_daily_task2_reward: "Reward: On-chain TX & Volume",
  
  sat_periodic_task1_title: "1. Strange-Mind Creator Task", sat_periodic_task1_reward: "Reward: Exclusive Community Role",
  sat_periodic_task2_title: "2. Zealy Pioneer Sprint", sat_periodic_task2_reward: "Reward: USDT Pool & XP",

  sat_guide_title: "Satsume Setup Guide",
  sat_guide_desc: "Follow the steps below to execute your first mock purchase on the Testnet.",
  
  sat_slides1_pc: [
    { src: "satsume/step1.png", title: "Step 1 — Claim Testnet Gas", caption: "Go to the Discord faucet channel and enter your EVM address to claim Testnet gas fees." },
    { src: "satsume/step2.png", title: "Step 2 — Connect to Genesis", caption: "Visit the Genesis page on the official website and connect your wallet to the Sepolia Testnet." },
    { src: "satsume/step3.png", title: "Step 3 — Check-in & Claim NUSD", caption: "Scroll down to check-in (requires 2 clicks: first for web check-in, second to claim $NUSD on-chain)." },
    { src: "satsume/step4.png", title: "Step 4 — Shop & Review", caption: "Scroll further to browse goods. Buy 5 items (you get 1M tokens per check-in) and leave a review (must buy first)." }
  ],
  sat_slides1_mobile: [
    { src: "satsume/m_step1.png", title: "Step 1 — Claim Testnet Gas", caption: "Go to the Discord faucet channel and enter your EVM address to claim Testnet gas fees." },
    { src: "satsume/m_step2.png", title: "Step 2 — Connect to Genesis", caption: "Visit the Genesis page on your DApp browser and connect your wallet to the Sepolia Testnet." },
    { src: "satsume/m_step3.png", title: "Step 3 — Check-in & Claim NUSD", caption: "Scroll down to check-in (requires 2 clicks: first for web check-in, second to claim $NUSD on-chain)." },
    { src: "satsume/m_step4.png", title: "Step 4 — Shop & Review", caption: "Scroll further to browse goods. Buy 5 items (you get 1M tokens per check-in) and leave a review (must buy first)." }
  ],

  sat_details: {
    faucet: {
      title: "Genesis Profile & Faucet", sub: "Getting Started",
      body: `<div class="space-y-2 text-sm text-slate-600">Before shopping, you must set up your Genesis Profile and claim testing funds. Make sure your wallet has some Sepolia ETH for gas. Claim $NUSD from the official faucet page to start simulating purchases.</div>`,
      actions: [{ text: "Go to Faucet", kind: "primary", url: "https://satsume.com/" }]
    },
    shopping: {
      title: "Mock Shopping Mechanics", sub: "Minting Your Receipt",
      body: `<div class="space-y-2 text-sm text-slate-600">In the Satsume marketplace, supporting a project means 'buying' their virtual items. Every purchase mints an NFT Receipt. This receipt tracks the project's growth, P/S ratio, and potential yield. The more volume and receipts you generate on testnet, the higher your expected mainnet weight.</div>`,
      actions: [{ text: "Start Shopping", kind: "primary", url: "https://satsume.com/" }]
    },
    strangemind: {
      title: "Strange-Mind Creator Task", sub: "AI Design & Earn Roles",
      body: `<div class="space-y-4 text-sm text-slate-700">
        <div class="text-[13px] font-bold text-slate-900 border-b border-slate-100 pb-1">Visual Guide</div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 1:</span> Choose 1-2 Satsume logos or emojis (found in Discord stickers).</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="satsume/sm1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: satsume/sm1.png]</div>'"></div>
        </div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 2:</span> Use an AI tool like <a href="https://gemini.google.com/" target="_blank" class="text-rose-500 hover:underline font-bold">Gemini</a> to generate your product image.</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="satsume/sm2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: satsume/sm2.png]</div>'"></div>
        </div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 3:</span> Prompt Reference (Feel free to customize)</div>
          <div class="relative bg-[#1e293b] rounded-xl p-4 shadow-inner border border-slate-700">
            <div class="absolute top-0 left-0 bg-fuchsia-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-br-lg rounded-tl-xl uppercase tracking-wider">Prompt</div>
            <div class="text-[12px] font-mono text-fuchsia-100 leading-relaxed mt-2">High-quality 3D render, e-commerce product photography, cute enamel patterned Zippo lighter, lit state. Overall style is retro and exquisite. Background is a matching box printed with "Satsume". Soft warm lighting, shallow depth of field, rich details, 3:4 aspect ratio.</div>
          </div>
          <div class="text-[11px] text-slate-500 mt-1">💡 Tip: Swap "Zippo lighter" with your desired product and ask the AI to incorporate the Satsume emojis.</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 mt-2"><img src="satsume/sm3.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: satsume/sm3.png]</div>'"></div>
        </div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 4:</span> Ask Gemini to write a ~100-word English intro (Title + Body).</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="satsume/sm4.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: satsume/sm4.png]</div>'"></div>
        </div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 5:</span> Publish your text and image in the designated Satsume post channel.</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="satsume/sm5.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: satsume/sm5.png]</div>'"></div>
        </div>

        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 6:</span> Reach 50+ likes to get selected! Share your post link in general chat for support.</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="satsume/sm6.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[Image Missing: satsume/sm6.png]</div>'"></div>
        </div>
      </div>`,
      actions: [
        { text: "Open Gemini", kind: "primary", url: "https://gemini.google.com/" },
        { text: "Go to Discord", kind: "ghost", url: "https://discord.com/invite/nTr2dZMFwu" }
      ]
    },
    zealy: {
      title: "Zealy Pioneer Sprint", sub: "Compete for USDT",
      body: `<div class="space-y-2 text-sm text-slate-600">Satsume is running a Pioneer Sprint on Zealy with a $5,000+ USDT prize pool. Completing daily social tasks and testnet milestones here is currently the most direct way to secure rewards and future airdrop allocations.</div>`,
      actions: [{ text: "Open Zealy", kind: "primary", url: "https://zealy.io/" }]
    }
  }
};

window.translations.zh = {
  // ================== 公共/共享词汇 ==================
  page_title: "交互式任务看板",
  header_desc: "1分钟看懂，立刻拿收益",
  btn_guide: "查看指南",
  btn_go_token: "前往测试网",
  btn_go_token_short: "去执行",
  btn_go_link: "打开链接",
  btn_discord_login: "连接账号",
  btn_go_token_mobile: "立即前往测试网执行",
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

  // ================== Satsume 专属词汇 ==================
  sat_hero_title: "CommerceFi 早期红利：将购物支持转化为 <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-500\">链上股权凭证</span>",
  sat_hero_desc: "Satsume 是一个融合了电商与 DeFi 的协议。你购买东西支持早期项目，不再仅仅是消费，而是像天使投资一样获取 NFT Receipt（数字收据）。通过测试网 0 成本购物刷流水，积攒未来主网的空投权重。",
  sat_banner_title: "核心收益预期",
  sat_banner_amount: "高潜力 <span class=\"text-rose-200\">TGE 空投预期</span>",
  sat_banner_sub1: "+ 瓜分 Zealy $5000+ 现货奖池",
  sat_banner_sub2: "测试网绝对零撸",
  
  sat_check1_title: "CommerceFi", sat_check1_desc: "购物发现即为种子轮投资",
  sat_check2_title: "零本金风险", sat_check2_desc: "使用 Sepolia 测试币进行交互",
  sat_check3_title: "权重迁移", sat_check3_desc: "测试网行为关联未来空投",

  sat_advice_title: "给新人的真心建议",
  sat_advice_desc: "Satsume 目前极其早期且非常低调，并没有满天飞的大额融资宣发。但这反而是好事——<span class=\"font-bold text-rose-900\">意味着没那么卷，不需要和海量工作室拼刺刀</span>。纯靠行为撸空投，不要 All-in 你的全部时间，但每天坚持花两分钟领水、模拟购物、做一下 Zealy，是一笔极具性价比的“零撸”投资。<br><br><span class=\"font-bold text-rose-600\">重要提示：</span>当前官网交互获得的 <b>Neurobits</b> 本质上就是积分（Points），这极有可能就是未来 TGE 后的空投兑换凭证！",

  sat_board_daily_title: "每日测试网打卡",
  sat_board_periodic_title: "进阶与深度任务",
  sat_board_periodic_desc: "(提升空投乘数与防身权重)",

  sat_daily_task1_title: "1. 领水与设置：领取 $NUSD", sat_daily_task1_reward: "奖励：获取测试资金与积分系统激活",
  sat_daily_task2_title: "2. 模拟购物：购买商品铸造凭证", sat_daily_task2_reward: "奖励：链上 TX 活跃度与交易流水",
  
  sat_periodic_task1_title: "1. Strange-Mind 创意发帖", sat_periodic_task1_reward: "奖励：获取专属社区角色",
  sat_periodic_task2_title: "2. 积分 Farming：Zealy 冲刺", sat_periodic_task2_reward: "奖励：瓜分现货奖池与经验值",

  sat_guide_title: "Satsume 新手图文指引",
  sat_guide_desc: "跟着下方步骤，零基础完成你的第一次测试网购物。",
  
  sat_slides1_pc: [
    { src: "satsume/step1.png", title: "Step 1 — 领取测试网 Gas", caption: "进入 Discord 的 faucet 频道，输入自己的 EVM 地址领取测试网 Gas 费。" },
    { src: "satsume/step2.png", title: "Step 2 — 访问 Genesis 页面", caption: "进入官网 Genesis 页面，链接自己的测试网钱包，网络选择 Sepolia 测试网。" },
    { src: "satsume/step3.png", title: "Step 3 — 签到与领取测试币", caption: "滑动页面进行签到（需点击两次）：第一次是网页签到，第二次是链上领取测试币 $NUSD。" },
    { src: "satsume/step4.png", title: "Step 4 — 购物与评价", caption: "再次下滑页面查看商品。完成购买 5 次（注意一次签到只有1M测试币），并完成商品评价（需先购买才能评价）。" }
  ],
  sat_slides1_mobile: [
    { src: "satsume/m_step1.png", title: "Step 1 — 领取测试网 Gas", caption: "进入 Discord 的 faucet 频道，输入自己的 EVM 地址领取测试网 Gas 费。" },
    { src: "satsume/m_step2.png", title: "Step 2 — 访问 Genesis 页面", caption: "在钱包内进入官网 Genesis 页面，链接测试网钱包，网络选择 Sepolia 测试网。" },
    { src: "satsume/m_step3.png", title: "Step 3 — 签到与领取测试币", caption: "滑动页面进行签到（需点击两次）：第一次是网页签到，第二次是链上领取测试币 $NUSD。" },
    { src: "satsume/m_step4.png", title: "Step 4 — 购物与评价", caption: "再次下滑页面查看商品。完成购买 5 次（注意一次签到只有1M测试币），并完成商品评价（需先购买才能评价）。" }
  ],

  sat_details: {
    faucet: {
      title: "领水与每日签到", sub: "获取测试资金指南",
      body: `<div class="space-y-4 text-sm text-slate-700">
        <div class="text-[13px] font-bold text-slate-900 border-b border-slate-100 pb-1">图文操作指引</div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium">1. 去 Discord 领取测试网 Gas 费</div>
          <div class="text-[11px] text-slate-500">进入官方 Discord 的 faucet 频道，输入你的 EVM 钱包地址领取测试用的 Sepolia ETH。</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
            <img src="satsume/faucet1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: satsume/faucet1.png]</div>'">
          </div>
        </div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium">2. 每天签到领取 $NUSD 测试币</div>
          <div class="text-[11px] text-slate-500">进入官网 Genesis 页面，完成每日网页签到与链上 Claim 操作，获取用于购物的 $NUSD 测试金。</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
            <img src="satsume/faucet2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: satsume/faucet2.png]</div>'">
          </div>
        </div>
      </div>`,
      actions: [
        { text: "去 Discord 领水", kind: "ghost", url: "https://discord.com/invite/nTr2dZMFwu" },
        { text: "去官网签到", kind: "primary", url: "https://satsume.com/" }
      ]
    },
    strangemind: {
      title: "Strange-Mind AI 创作指南", sub: "生图拿赞赢取角色",
      body: `<div class="space-y-4 text-sm text-slate-700">
        <div class="text-[13px] font-bold text-slate-900 border-b border-slate-100 pb-1">图文操作指引</div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 1：</span>选择 1-2 个 Satsume 的 logo 或表情包（可在 Discord 贴纸中找到）。</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="satsume/sm1.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: satsume/sm1.png]</div>'"></div>
        </div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 2：</span>使用 AI 工具（例如 <a href="https://gemini.google.com/" target="_blank" class="text-rose-500 hover:underline font-bold">Gemini</a>）生成商品图片。</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="satsume/sm2.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: satsume/sm2.png]</div>'"></div>
        </div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 3：</span>AI 提示词（Prompt）参考</div>
          <div class="relative bg-[#1e293b] rounded-xl p-4 shadow-inner border border-slate-700">
            <div class="absolute top-0 left-0 bg-fuchsia-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-br-lg rounded-tl-xl uppercase tracking-wider">Prompt</div>
            <div class="text-[12px] font-mono text-fuchsia-100 leading-relaxed mt-2">高质量 3D 渲染，电商主图摄影，可爱的珐琅花纹 Zippo 打火机，正在点燃的状态，机身立体图案如图。整体风格复古又精致。背景是配套精致的盒子，盒子上印有 “Satsume” 文字。整体风格柔和暖光，浅景深，画面比例 3:4，细节丰富，质感细腻。</div>
          </div>
          <div class="text-[11px] text-slate-500 mt-1">💡 提示：可将“Zippo 打火机”替换成你想做的商品，并要求 AI 融合你挑选的表情包元素。</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 mt-2"><img src="satsume/sm3.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: satsume/sm3.png]</div>'"></div>
        </div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 4：</span>让 Gemini 帮你生成一段 100 字左右的英文介绍（包含 Title 和正文）。</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="satsume/sm4.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: satsume/sm4.png]</div>'"></div>
        </div>
        
        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 5：</span>将介绍 + 图片发布到 Satsume 社区指定的 Post 频道。</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="satsume/sm5.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: satsume/sm5.png]</div>'"></div>
        </div>

        <div class="space-y-2">
          <div class="text-[12px] text-slate-600 font-medium"><span class="font-bold text-fuchsia-600">Step 6：</span>超过 50 个点赞即有极高概率被选中！可把帖子链接发到群聊让大家帮忙。</div>
          <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50"><img src="satsume/sm6.png" class="w-full h-auto object-cover cursor-zoom-in hover:opacity-90 transition-opacity" onerror="this.outerHTML='<div class=\\'flex aspect-video w-full items-center justify-center bg-slate-100 text-slate-400 text-xs border border-dashed border-slate-300\\'>[图片占位: satsume/sm6.png]</div>'"></div>
        </div>
      </div>`,
      actions: [
        { text: "打开 Gemini 生图", kind: "primary", url: "https://gemini.google.com/" },
        { text: "前往 Discord 发帖", kind: "ghost", url: "https://discord.com/invite/nTr2dZMFwu" }
      ]
    },
    zealy: {
      title: "Zealy 冲刺任务", sub: "Pioneer Sprint",
      body: `<div class="space-y-2 text-sm text-slate-600">Satsume 目前在 Zealy 上开放了先锋冲刺活动，包含超过 $5,000 USDT 的奖金池。每天完成指定的社交任务、测试网交互里程碑，是目前能获取现货奖励和高权重空投最直接的途径。</div>`,
      actions: [{ text: "打开 Zealy", kind: "primary", url: "https://zealy.io/" }] 
    }
  }
};