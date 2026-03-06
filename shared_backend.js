/**
 * ==========================================
 * OSHIT Hub - 统一后端与 Discord 鉴权核心逻辑
 * 适用于: 主页(index) + 所有子项目页面(oshit, hashgame, rafa, satsume, perle)
 * ==========================================
 */

// ⚠️ 请填入你的真实 Ngrok 链接
const BACKEND_API_URL = "https://noninferable-brigida-vimineous.ngrok-free.dev/api/sync";
const BACKEND_BASE_URL = BACKEND_API_URL.replace("/api/sync", "");
const DISCORD_CLIENT_ID = '1476907202047508684'; 

let isDiscordLoggedIn = false;

// 1. 判断当前项目是否在首页订阅列表中
function isProjectTracked(projectId) {
  const subs = JSON.parse(localStorage.getItem('hub_subs')) || [];
  return subs.includes(projectId);
}

// 2. 获取当前所在页面的项目 ID (用于子页面判断自己是谁)
function getCurrentProjectId() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('oshit.html')) return 'oshit';
  if (path.includes('hashgame.html')) return 'hashgame';
  if (path.includes('rafa.html')) return 'rafa';
  if (path.includes('satsume.html')) return 'satsume';
  if (path.includes('perle.html')) return 'perle';
  return null; // 主页或其他页面返回 null
}

// 3. 初始化 Discord 状态
function initDiscordAuth() {
  const fragment = new URLSearchParams(window.location.hash.slice(1));
  const accessToken = fragment.get('access_token');
  const tokenType = fragment.get('token_type');

  if (accessToken) {
    const btn = document.getElementById('btnDiscordLogin');
    if(btn) btn.innerHTML = "Connecting...";

    window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
    
    fetch('https://discord.com/api/users/@me', {
      headers: { authorization: `${tokenType} ${accessToken}` }
    })
    .then(res => {
       if(!res.ok) throw new Error("Discord Token Rejected");
       return res.json();
    })
    .then(async response => {
      const { username, avatar, id } = response;
      const avatarUrl = avatar ? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png` : '';
      isDiscordLoggedIn = true;
      localStorage.setItem('discordUser', JSON.stringify({ id, username, avatarUrl }));
      
      await pullFromBackend(id);
      syncToBackend();
    })
    .catch(err => {
      console.error("Discord API fetch error:", err);
      alert("Discord Login Failed! Please check your network.");
      isDiscordLoggedIn = false;
      renderDiscordUI();
    });
  } else {
    const savedUserStr = localStorage.getItem('discordUser');
    if (savedUserStr) {
      try { 
        const u = JSON.parse(savedUserStr); 
        isDiscordLoggedIn = true; 
        if(u.id) pullFromBackend(u.id);
        else renderDiscordUI();
      } catch(e) { 
        localStorage.removeItem('discordUser'); 
        isDiscordLoggedIn = false; 
        renderDiscordUI(); 
      }
    } else {
      renderDiscordUI();
    }
  }
}

// 4. 发起 Discord 登录跳转
function loginWithDiscord() {
  const redirectUri = encodeURIComponent(window.location.origin + window.location.pathname);
  const oauthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token&scope=identify`;
  if(window.location.protocol === 'file:') {
    alert("Error: Discord OAuth2 requires a valid web server (http:// or https://).");
    return;
  }
  window.location.href = oauthUrl;
}

// 5. 渲染页面上的登录 UI 状态 (兼容所有页面)
function renderDiscordUI() {
  const btn = document.getElementById('btnDiscordLogin');
  const userArea = document.getElementById('discordUserArea');
  const btnReqLogin = document.getElementById('btnSubRequireLogin');
  const toggleSub = document.getElementById('toggleSubWrapper');
  const subCheckbox = document.getElementById('toggleReminder');

  if(isDiscordLoggedIn) {
    try {
      const userData = JSON.parse(localStorage.getItem('discordUser'));
      if(btn) btn.classList.add('is-hidden');
      if(userArea) userArea.classList.remove('is-hidden');
      if(document.getElementById('discordUserName')) document.getElementById('discordUserName').textContent = userData.username || 'User';
      if(userData.avatarUrl) {
         if(document.getElementById('discordAvatar')) {
           document.getElementById('discordAvatar').src = userData.avatarUrl;
           document.getElementById('discordAvatar').classList.remove('hidden');
         }
         if(document.getElementById('discordAvatarFallback')) document.getElementById('discordAvatarFallback').classList.add('hidden');
      }
    } catch(e) {
      isDiscordLoggedIn = false;
      localStorage.removeItem('discordUser');
      renderDiscordUI();
      return;
    }
    
    if(btnReqLogin) btnReqLogin.classList.add('is-hidden');
    if(toggleSub) {
        toggleSub.classList.remove('is-hidden');
        toggleSub.classList.add('inline-flex'); // 确保它显示为 flex
    }
    
    // 子页面：智能提醒开关跟随当前项目在主页的订阅状态
    const currentProjectId = getCurrentProjectId();
    if(subCheckbox && currentProjectId) {
        subCheckbox.checked = isProjectTracked(currentProjectId);
    }
    updateSubscriptionText();
  } else {
    if(btn) {
      btn.classList.remove('is-hidden');
      // 恢复原有的按钮内 SVG
      btn.innerHTML = `<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg><span class="hidden sm:inline" data-i18n="btn_discord_login">Connect</span>`;
    }
    if(userArea) userArea.classList.add('is-hidden');
    if(btnReqLogin) btnReqLogin.classList.remove('is-hidden');
    if(toggleSub) toggleSub.classList.add('is-hidden');
  }
}

// 6. 退出登录
function logoutDiscord() {
  if(confirm("Log out of Discord?")) {
     // 1. 清除账户数据
     localStorage.removeItem('discordUser');
     isDiscordLoggedIn = false;
     
     // 2. 清除提醒与订阅缓存
     localStorage.removeItem('isSubscribed');
     localStorage.removeItem('hub_subs');
     localStorage.removeItem('hub_tree');
     
     // 3. 深度清理所有打卡痕迹
     let keysToRemove = [];
     for (let i = 0; i < localStorage.length; i++) {
       let key = localStorage.key(i);
       if (key && (key.startsWith('hub_done_') || key.startsWith('task_') || key.includes('_task_'))) {
         keysToRemove.push(key);
       }
     }
     keysToRemove.forEach(k => localStorage.removeItem(k));
     
     // 4. 刷新页面 UI
     renderDiscordUI();
     
     // 如果当前页面有进度条/复选框等函数，顺便让它们重置为未完成状态
     if (typeof updateProgressUI === 'function') updateProgressUI();
     if (typeof updateSubscriptionText === 'function') updateSubscriptionText();
     if (typeof renderDailies === 'function') renderDailies(); // 兼容主页
  }
}

// 7. 子页面的 "智能提醒" 开关逻辑
function updateSubscriptionText() {
  const isChecked = document.getElementById('toggleReminder') ? document.getElementById('toggleReminder').checked : false;
  const textEl = document.getElementById('subStatusText');
  if(!textEl) return;

  // 使用当前页面的语言变量，或者提供默认回退
  let statusText = isChecked ? "On" : "Off";
  if(window.translations && typeof currentLang !== 'undefined' && window.translations[currentLang]) {
      const data = window.translations[currentLang];
      if (data.sub_status_on) statusText = isChecked ? data.sub_status_on : data.sub_status_off;
  }
  
  textEl.textContent = statusText;
  
  // 保持字体颜色锁定为灰色 (不使用特定的项目颜色，防止越界错误)
  textEl.className = "ml-3 text-xs font-bold text-slate-300";
}

function toggleSubscription() {
  const toggle = document.getElementById('toggleReminder');
  if(!toggle) return;
  const isChecked = toggle.checked;

  let subs = JSON.parse(localStorage.getItem('hub_subs')) || [];
  
  // 动态获取当前正在哪个子页面
  const projectId = getCurrentProjectId();
  if(!projectId) return; // 如果找不到项目ID，直接中止

  if (isChecked) {
    if (!subs.includes(projectId)) subs.push(projectId);
    localStorage.setItem('isSubscribed', 'true'); 
  } else {
    subs = subs.filter(id => id !== projectId);
    if (subs.length === 0) localStorage.setItem('isSubscribed', 'false'); 
  }
  
  localStorage.setItem('hub_subs', JSON.stringify(subs));
  updateSubscriptionText();
  
  syncToBackend();

  if(isChecked) {
    const toast = document.getElementById('systemToast');
    if(toast) {
      toast.classList.remove('toast-hide');
      toast.classList.add('toast-show');
      setTimeout(() => {
        toast.classList.remove('toast-show');
        toast.classList.add('toast-hide');
      }, 4000);
    }
  }
}

// 8. 从云端拉取数据
async function pullFromBackend(discordId) {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/api/user/${discordId}`, {
        headers: { "ngrok-skip-browser-warning": "true" }
    });
    const result = await res.json();
    
    if (result.status === 'success' && result.data) {
      const d = result.data;
      localStorage.setItem('isSubscribed', d.reminder_on);
      
      let treeState = { xp: d.xp || 0, level: d.level || 1, streak: d.streak || 0, lastActive: d.last_active || null };
      localStorage.setItem('hub_tree', JSON.stringify(treeState));
      localStorage.setItem('hub_subs', JSON.stringify(d.subs || []));

      if (d.done_tasks) {
        Object.keys(d.done_tasks).forEach(k => {
          if(d.done_tasks[k]) localStorage.setItem(k, 'true');
          else localStorage.removeItem(k);
        });
      }
      console.log("📥 [Backend] Data pulled successfully.");
    }
  } catch (error) { 
    console.error("❌ Pull error:", error); 
  } finally {
    // 兼容调用：根据当前所在的页面，触发相应的刷新函数
    if (typeof updateProgressUI === 'function') updateProgressUI(); // 子页面进度条
    if (typeof updateProjectTrackButton === 'function') updateProjectTrackButton(); // 主页右上角关注按钮
    if (typeof renderDailies === 'function') renderDailies(); // 主页任务列表
    if (typeof updateBonsaiUI === 'function') updateBonsaiUI(); // 主页盆景树
    renderDiscordUI(); 
  }
}

// 9. 推送本地数据至云端
async function syncToBackend() {
  const discordUserStr = localStorage.getItem('discordUser');
  if (!discordUserStr) return;
  try {
    const userData = JSON.parse(discordUserStr);
    const isSubOn = localStorage.getItem('isSubscribed') === 'true';

    let done_tasks = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.startsWith('hub_done_') || key.startsWith('task_') || key.includes('_task_')) {
         done_tasks[key] = localStorage.getItem(key) === 'true';
      }
    }

    const subs = JSON.parse(localStorage.getItem('hub_subs')) || [];
    let allDone = true;
    if (subs.length > 0) {
      for (let id of subs) {
        if (localStorage.getItem(`hub_done_${id}`) !== 'true') {
          allDone = false; break;
        }
      }
    } else { allDone = false; }

    let treeState = JSON.parse(localStorage.getItem('hub_tree')) || { xp: 0, level: 1, streak: 0, lastActive: null };

    await fetch(BACKEND_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "ngrok-skip-browser-warning": "true" },
      body: JSON.stringify({
        discord_id: userData.id,
        username: userData.username,
        reminder_on: isSubOn,
        tasks_done_today: allDone,
        xp: treeState.xp,
        level: treeState.level,
        streak: treeState.streak,
        last_active: treeState.lastActive,
        subs: subs,
        done_tasks: done_tasks
      })
    });
    console.log("📤 [Backend] Data synced successfully.");
  } catch (error) { console.error("Backend sync failed:", error); }
}

// 10. 主页 (index.html) 专用的关注按钮控制
function toggleProjectTrack(projectId) {
  let subs = JSON.parse(localStorage.getItem('hub_subs')) || [];
  const idx = subs.indexOf(projectId);
  
  if (idx > -1) { 
    subs.splice(idx, 1); 
    if(subs.length === 0) localStorage.setItem('isSubscribed', 'false'); // 联动提醒关闭
  } else { 
    subs.push(projectId); 
    localStorage.setItem('isSubscribed', 'true'); // 联动提醒开启
  }
  
  localStorage.setItem('hub_subs', JSON.stringify(subs));
  
  if(typeof updateProjectTrackButton === 'function') updateProjectTrackButton();
  renderDiscordUI();
  syncToBackend();
}