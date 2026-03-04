// ==========================================
// SHITHub - 首页后端交互与 Discord 鉴权核心逻辑
// 文件位置: index/backend.js
// ==========================================

const BACKEND_API_URL = "https://noninferable-brigida-vimineous.ngrok-free.dev/api/sync";
const BACKEND_BASE_URL = BACKEND_API_URL.replace("/api/sync", "");
const DISCORD_CLIENT_ID = '1476907202047508684'; 

let isDiscordLoggedIn = false;

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

function loginWithDiscord() {
  const redirectUri = encodeURIComponent(window.location.origin + window.location.pathname);
  const oauthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token&scope=identify`;
  if(window.location.protocol === 'file:') {
    alert("Error: Discord OAuth2 requires a valid web server.");
    return;
  }
  window.location.href = oauthUrl;
}

function renderDiscordUI() {
  const btn = document.getElementById('btnDiscordLogin');
  const userArea = document.getElementById('discordUserArea');

  if(isDiscordLoggedIn) {
    try {
      const userDataStr = localStorage.getItem('discordUser');
      if(!userDataStr) throw new Error("Missing user data");
      const userData = JSON.parse(userDataStr);
      
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
  } else {
    if(btn) {
      btn.classList.remove('is-hidden');
      btn.innerHTML = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg> <span class="hidden sm:inline" data-i18n="btn_discord_login">Connect</span>`;
    }
    if(userArea) userArea.classList.add('is-hidden');
  }
}

function logoutDiscord() {
  if(confirm("Log out of Discord?")) {
     localStorage.removeItem('discordUser');
     isDiscordLoggedIn = false;
     
     localStorage.removeItem('isSubscribed');
     
     if (typeof subscriptions !== 'undefined') subscriptions = [];
     if (typeof treeState !== 'undefined') treeState = { xp: 0, level: 1, streak: 0, lastActive: null };
     localStorage.removeItem('hub_subs');
     localStorage.removeItem('hub_tree');
     
     let keysToRemove = [];
     for (let i = 0; i < localStorage.length; i++) {
       let key = localStorage.key(i);
       if (key && (key.startsWith('hub_done_') || key.includes('_task_'))) {
         keysToRemove.push(key);
       }
     }
     keysToRemove.forEach(k => localStorage.removeItem(k));

     renderDiscordUI();
     if (typeof updateBonsaiUI === 'function') updateBonsaiUI();
     if (typeof renderDailies === 'function') renderDailies();
  }
}

// ✨ 这里补全了数据拉取与推送函数！
async function pullFromBackend(discordId) {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/api/user/${discordId}`);
    const result = await res.json();
    
    if (result.status === 'success' && result.data) {
      const d = result.data;
      
      if (typeof treeState !== 'undefined') {
          treeState = { xp: d.xp || 0, level: d.level || 1, streak: d.streak || 0, lastActive: d.last_active || null };
          localStorage.setItem('hub_tree', JSON.stringify(treeState));
      }
      if (typeof subscriptions !== 'undefined') {
          subscriptions = d.subs || [];
          localStorage.setItem('hub_subs', JSON.stringify(subscriptions));
      }
      
      if (d.done_tasks) {
        Object.keys(d.done_tasks).forEach(k => {
          if(d.done_tasks[k]) localStorage.setItem(k, 'true');
          else localStorage.removeItem(k);
        });
      }
      console.log("📥 数据拉取成功");
    }
  } catch (error) { 
    console.error("❌ Pull error:", error); 
  } finally {
    if(typeof updateBonsaiUI === 'function') updateBonsaiUI();
    if(typeof renderDailies === 'function') renderDailies();
    renderDiscordUI();
  }
}

async function syncToBackend() {
  const discordUserStr = localStorage.getItem('discordUser');
  if (!discordUserStr) return; 
  
  try {
    const userData = JSON.parse(discordUserStr);
    
    let done_tasks = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key && (key.startsWith('hub_done_') || key.includes('_task_'))) {
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

    const currentTreeState = JSON.parse(localStorage.getItem('hub_tree')) || { xp: 0, level: 1, streak: 0, lastActive: null };

    await fetch(BACKEND_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        discord_id: userData.id,
        username: userData.username,
        reminder_on: localStorage.getItem('isSubscribed') === 'true',
        tasks_done_today: allDone,
        xp: currentTreeState.xp,
        level: currentTreeState.level,
        streak: currentTreeState.streak,
        last_active: currentTreeState.lastActive,
        subs: subs,
        done_tasks: done_tasks
      })
    });
  } catch (error) { console.error("❌ Backend sync failed:", error); }
}