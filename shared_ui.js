/**
 * ==========================================
 * SHITHub — Shared UI Logic
 * Common functions for all sub-project pages
 * ==========================================
 */

// ==========================================
// 1. HTML Injection
// ==========================================
const _DISCORD_SVG = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>`;

function injectSharedHTML() {
  // 1. Discord auth area (injected into #headerAuthArea placeholder)
  const authArea = document.getElementById('headerAuthArea');
  if (authArea) {
    authArea.innerHTML = `
      <button id="btnDiscordLogin" type="button" onclick="loginWithDiscord()" class="inline-flex items-center gap-1.5 rounded-2xl bg-discord hover-bg-discord px-3 py-2 text-xs font-bold text-white shadow-sm transition-colors">
        ${_DISCORD_SVG}
        <span class="hidden sm:inline" data-i18n="btn_discord_login">Connect</span>
      </button>
      <div id="discordUserArea" onclick="logoutDiscord()" class="is-hidden flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-2 py-1.5 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors" title="Click to logout">
        <div class="w-5 h-5 rounded-full bg-slate-200 overflow-hidden shrink-0">
          <img id="discordAvatar" src="" class="w-full h-full object-cover hidden" />
          <svg id="discordAvatarFallback" class="w-full h-full text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </div>
        <span class="text-[11px] font-bold text-slate-700 hidden sm:inline mr-1" id="discordUserName">User</span>
      </div>
      <button id="langSwitcherMobile" onclick="toggleLang()" class="sm:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-2 py-2 text-[11px] font-bold text-slate-600 shadow-sm hover:bg-slate-50 transition-colors tracking-widest">
        中文
      </button>
    `;
  }

  // 2. Toasts (appended to body, outside any overflow:hidden wrapper)
  const accent = window.PAGE_ACCENT_HEX || '#10b981';
  const toastWrap = document.createElement('div');
  toastWrap.innerHTML = `
    <div id="discordToast" class="toast-hide fixed bottom-[100px] left-0 right-0 mx-auto w-[calc(100%-2rem)] max-w-[360px] bg-[#313338] text-[#dbdee1] p-4 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] flex gap-3 z-[9999] border border-white/10 pointer-events-none">
      <div class="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white" style="background-color:${accent}">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-baseline justify-between gap-2">
          <span class="font-bold text-white text-[13px]" data-i18n="toast_sender">System Bot</span>
          <span class="text-[10px] text-[#949ba4]" id="toastTime">Just now</span>
        </div>
        <div class="text-[12px] mt-1 leading-snug" id="discordToastMsg">Task Verified!</div>
      </div>
    </div>
    <div id="systemToast" class="toast-hide fixed bottom-[170px] left-0 right-0 mx-auto w-[calc(100%-2rem)] max-w-[360px] bg-slate-900 text-white p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] flex items-center gap-3 z-[9999] border border-slate-700 pointer-events-none">
      <div class="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white" style="background-color:${accent}">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
      </div>
      <div class="flex-1 min-w-0">
        <div class="font-bold text-[13px]" data-i18n="toast_sub_title">Subscription Active</div>
        <div class="text-[11px] text-slate-300 mt-0.5 leading-snug" data-i18n="toast_sub_desc">Our bot will DM you on Discord at 20:00 daily if tasks are incomplete.</div>
      </div>
    </div>
  `;
  while (toastWrap.firstChild) document.body.appendChild(toastWrap.firstChild);

  // 3. Standard modals (only inject if not already in page HTML)
  if (!document.getElementById('modalMask')) {
    const modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
      <div id="modalMask" data-modal class="is-hidden fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="closeAllModals()"></div>
      <div id="detailModal" data-modal class="is-hidden fixed inset-0 z-[80] flex items-center justify-center p-4 pointer-events-none">
        <div id="detailCard" class="w-full max-w-md rounded-3xl border border-slate-100 bg-white shadow-2xl flex flex-col max-h-[85vh] overflow-hidden pointer-events-auto">
          <div class="flex items-start justify-between gap-3 border-b border-slate-100 p-5 bg-slate-50/50 shrink-0">
            <div class="min-w-0">
              <div id="detailTitle" class="text-base font-bold text-slate-900"></div>
              <div id="detailSub" class="mt-0.5 text-[12px] font-medium text-slate-500"></div>
            </div>
            <button class="btnCloseModal rounded-full p-1.5 hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors" onclick="closeModal('detailModal')">
              <svg class="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div class="p-5 overflow-y-auto custom-scroll">
            <div id="detailBody" class="text-sm text-slate-700 leading-relaxed mb-6"></div>
            <div id="detailActions" class="flex flex-col gap-2"></div>
          </div>
        </div>
      </div>
      <div id="lightbox" data-modal class="is-hidden fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 cursor-zoom-out transition-opacity duration-300" onclick="closeModal('lightbox')">
        <img id="lightboxImg" src="" class="max-w-full max-h-full object-contain rounded-xl shadow-2xl" draggable="false" onclick="event.stopPropagation()" />
        <div class="absolute bottom-6 text-white/50 text-xs tracking-wider" data-i18n="lightbox_hint">Click anywhere to close</div>
      </div>
    `;
    while (modalWrap.firstChild) document.body.appendChild(modalWrap.firstChild);
  }
}

// ==========================================
// 2. Modal Functions
// ==========================================
function openModal(id) {
  const mask = document.getElementById("modalMask");
  const modal = document.querySelector(id);
  if (mask) mask.classList.remove("is-hidden");
  if (modal) modal.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("is-hidden");
  checkMask();
}

function closeAllModals() {
  const mask = document.getElementById("modalMask");
  if (mask) mask.classList.add("is-hidden");
  // Close both injected modals and any page-specific ones with data-modal
  document.querySelectorAll('[data-modal]').forEach(el => el.classList.add("is-hidden"));
  // Also close detailModal and lightbox by ID if they exist without data-modal
  ["detailModal", "lightbox"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("is-hidden");
  });
  document.body.style.overflow = "";
}

function checkMask() {
  // Hide mask if no modals are visible
  const anyVisible = Array.from(document.querySelectorAll('[data-modal]')).some(
    el => !el.classList.contains("is-hidden")
  );
  if (!anyVisible) {
    const mask = document.getElementById("modalMask");
    if (mask) mask.classList.add("is-hidden");
    document.body.style.overflow = "";
  }
}

// ==========================================
// 3. Toast
// ==========================================
let discordToastTimer = null;

function showDiscordToast(taskTitleKey) {
  const toast = document.getElementById('discordToast');
  const msgEl = document.getElementById('discordToastMsg');
  const timeEl = document.getElementById('toastTime');
  if (!toast || !msgEl || !timeEl || !window.translations) return;
  const data = window.translations[window.currentLang || 'en'];
  if (!data) return;

  const now = new Date();
  timeEl.textContent = now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0');
  const taskName = data[taskTitleKey] || "Task";
  msgEl.innerHTML = data.toast_msg ? data.toast_msg.replace('{0}', taskName) : taskName;

  toast.classList.remove('toast-hide');
  toast.classList.add('toast-show');
  clearTimeout(discordToastTimer);
  discordToastTimer = setTimeout(() => {
    toast.classList.remove('toast-show');
    toast.classList.add('toast-hide');
  }, 3500);
}

// ==========================================
// 4. Translation Helper
// ==========================================
function applyBaseTranslation(lang) {
  if (!window.translations) return;
  const data = window.translations[lang];
  if (!data) return;

  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';

  ['langSwitcher', 'langSwitcherMobile'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = lang === 'en' ? '中文' : 'EN';
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) el.textContent = data[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (data[key]) el.innerHTML = data[key];
  });
}

// ==========================================
// 5. Task Functions
// ==========================================
function updateProgressUI() {
  // Daily tasks drive the progress bar
  const dailyTasks = document.querySelectorAll('.daily-task');
  const progressTasks = dailyTasks.length > 0 ? dailyTasks : document.querySelectorAll('.task-row');
  let completed = 0;

  progressTasks.forEach(row => {
    const id = row.getAttribute('data-task-id');
    const isChecked = localStorage.getItem(id) === 'true';
    const btn = row.querySelector('.check-btn');
    if (!btn) return;
    if (isChecked) {
      completed++;
      row.classList.add('checked');
      btn.classList.add('checked');
    } else {
      row.classList.remove('checked');
      btn.classList.remove('checked');
    }
  });

  if (progressTasks.length > 0) {
    const pct = Math.round((completed / progressTasks.length) * 100);
    const bar = document.getElementById('progressBar');
    const text = document.getElementById('progressText');
    if (bar) bar.style.width = pct + '%';
    if (text) text.textContent = pct + '%';
  }

  // Periodic / event tasks — just update check state, don't affect progress bar
  document.querySelectorAll('.periodic-task, .event-task').forEach(row => {
    // Skip if already handled above
    if (row.classList.contains('daily-task') || (dailyTasks.length === 0 && row.classList.contains('task-row'))) return;
    const id = row.getAttribute('data-task-id');
    const isChecked = localStorage.getItem(id) === 'true';
    const btn = row.querySelector('.check-btn');
    if (!btn) return;
    if (isChecked) {
      row.classList.add('checked');
      btn.classList.add('checked');
    } else {
      row.classList.remove('checked');
      btn.classList.remove('checked');
    }
  });
}

function toggleTask(taskId, titleKey, event) {
  if (event) event.stopPropagation();
  const newState = localStorage.getItem(taskId) !== 'true';
  localStorage.setItem(taskId, newState);
  updateProgressUI();
  if (newState) showDiscordToast(titleKey);
  if (typeof syncToBackend === 'function') syncToBackend();
}

// ==========================================
// 6. Detail Modal (shared implementation)
//    Each page wraps this with their own detailsNs + primaryBtnClass
// ==========================================
function __openDetailImpl(key, detailsNs, primaryBtnClass) {
  if (!window.translations) return;
  const lang = window.currentLang || 'en';
  const dict = window.translations[lang][detailsNs];
  if (!dict) return;
  const d = dict[key];
  if (!d) return;

  if (document.getElementById("detailTitle")) document.getElementById("detailTitle").textContent = d.title;
  if (document.getElementById("detailSub")) document.getElementById("detailSub").textContent = d.sub;
  if (document.getElementById("detailBody")) document.getElementById("detailBody").innerHTML = d.body;

  const actions = document.getElementById("detailActions");
  if (actions) {
    actions.innerHTML = "";
    const base = "w-full rounded-2xl px-4 py-3.5 text-sm font-bold shadow-sm transition-transform active:scale-95";
    const secondaryClass = base + " border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100";
    d.actions.forEach(a => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = a.kind === "primary" ? base + " " + primaryBtnClass : secondaryClass;
      btn.textContent = a.text;
      btn.addEventListener("click", () => {
        if (a.url) window.open(a.url, "_blank");
        closeModal("detailModal");
      });
      actions.appendChild(btn);
    });
  }

  openModal("#detailModal");
  const modalBody = document.getElementById("detailModal")?.querySelector('.custom-scroll');
  if (modalBody) modalBody.scrollTop = 0;
}

// ==========================================
// 7. Carousel
// ==========================================
class UnifiedCarousel {
  constructor(config) {
    this.cfg = config;
    this.index = 0;
    this.isDragging = false;
    this._btnsBound = false;
    this.init();
  }
  updateData(newSlides) {
    this.cfg.slides = newSlides;
    this.index = 0;
    this.init();
  }
  init() {
    const track = document.querySelector(this.cfg.trackId);
    const dots = document.querySelector(this.cfg.dotsId);
    if (!track || !dots) return;
    track.innerHTML = ""; dots.innerHTML = "";
    const total = document.querySelector(this.cfg.totalId);
    if (total) total.textContent = this.cfg.slides ? this.cfg.slides.length : 0;
    if (!this.cfg.slides || this.cfg.slides.length === 0) {
      track.innerHTML = `<div class="w-full aspect-[4/3] sm:max-h-[600px] flex flex-col gap-2 items-center justify-center bg-slate-50 text-slate-400 text-xs border border-dashed border-slate-300 rounded-2xl"><span>[Image Missing]</span></div>`;
      return;
    }

    const accent = this.cfg.accentColor || '#64748b';
    const useAspectLayout = this.cfg.slideLayout === 'aspect';

    this.cfg.slides.forEach((s, i) => {
      const slide = document.createElement("div");
      if (useAspectLayout) {
        slide.className = "w-full flex-none bg-slate-50 relative group";
        slide.innerHTML = `<img src="${s.src}" class="w-full aspect-[4/3] sm:aspect-auto sm:max-h-[600px] object-contain bg-slate-50 cursor-zoom-in hover:opacity-95 transition-opacity" draggable="false" onerror="this.outerHTML='<div class=\\'flex flex-col gap-2 aspect-[4/3] sm:max-h-[600px] w-full items-center justify-center bg-slate-50 text-slate-400 text-xs border border-dashed border-slate-300\\'><span>[Image Missing]</span><span>${s.src}</span></div>'"/>`;
      } else {
        slide.className = "w-full flex-none flex items-center justify-center bg-slate-50/50";
        slide.innerHTML = `<img src="${s.src}" class="w-full h-auto max-h-[65vh] object-contain cursor-zoom-in hover:opacity-90 transition-opacity" draggable="false" onerror="this.outerHTML='<div class=\\'flex flex-col gap-2 w-full aspect-video items-center justify-center bg-slate-100 text-slate-400 text-[10px] sm:text-xs border border-dashed border-slate-300\\'><span>[Image Missing]</span><span>${s.src}</span></div>'"/>`;
      }
      track.appendChild(slide);

      const d = document.createElement("button"); d.type = "button";
      d.className = "h-1.5 transition-all duration-300 rounded-full border border-slate-300 " + (i === this.index ? "w-4" : "w-1.5 bg-white");
      if (i === this.index) d.style.backgroundColor = accent;
      d.addEventListener("click", () => this.setSlide(i));
      dots.appendChild(d);
    });

    if (!this._btnsBound) {
      const prevBtn = document.getElementById(this.cfg.prevBtn);
      const nextBtn = document.getElementById(this.cfg.nextBtn);
      if (prevBtn) prevBtn.addEventListener("click", () => this.prevSlide());
      if (nextBtn) nextBtn.addEventListener("click", () => this.nextSlide());
      this._btnsBound = true;
    }

    const area = document.getElementById(this.cfg.areaId);
    if (area) area.carouselInstance = this;
    this.applySlide();
    this.bindSwipe();
  }
  setSlide(i) {
    if (!this.cfg.slides || this.cfg.slides.length === 0) return;
    this.index = Math.max(0, Math.min(this.cfg.slides.length - 1, i));
    this.applySlide();
  }
  applySlide() {
    if (!this.cfg.slides || this.cfg.slides.length === 0) return;
    const track = document.querySelector(this.cfg.trackId);
    if (!track) return;
    track.style.transform = `translateX(-${this.index * 100}%)`;
    const idxEl = document.querySelector(this.cfg.indexId);
    if (idxEl) idxEl.textContent = this.index + 1;
    const titleEl = document.querySelector(this.cfg.titleId);
    if (titleEl) titleEl.textContent = this.cfg.slides[this.index].title;
    const captionEl = document.querySelector(this.cfg.captionId);
    if (captionEl) captionEl.textContent = this.cfg.slides[this.index].caption;

    const accent = this.cfg.accentColor || '#64748b';
    const dots = document.querySelector(this.cfg.dotsId);
    if (dots) {
      [...dots.children].forEach((dot, i) => {
        if (i === this.index) {
          dot.className = "h-1.5 transition-all duration-300 rounded-full w-4";
          dot.style.backgroundColor = accent;
          dot.style.borderColor = accent;
        } else {
          dot.className = "h-1.5 transition-all duration-300 rounded-full w-1.5 bg-slate-200 border-transparent hover:bg-slate-300";
          dot.style.backgroundColor = '';
          dot.style.borderColor = '';
        }
      });
    }
  }
  nextSlide() { this.setSlide(this.index + 1); }
  prevSlide() { this.setSlide(this.index - 1); }
  bindSwipe() {
    const area = document.getElementById(this.cfg.areaId);
    if (!area || area._bound) return;
    area._bound = true;
    area.addEventListener("touchstart", e => { if (e.touches.length !== 1) return; this.isDragging = true; this.startX = e.touches[0].clientX; this.deltaX = 0; }, { passive: true });
    area.addEventListener("touchmove", e => { if (!this.isDragging || e.touches.length !== 1) return; this.deltaX = e.touches[0].clientX - this.startX; }, { passive: true });
    area.addEventListener("touchend", () => {
      if (!this.isDragging) return; this.isDragging = false;
      if (this.deltaX > 40) this.prevSlide(); else if (this.deltaX < -40) this.nextSlide();
      this.deltaX = 0;
    }, { passive: true });
  }
}

// ==========================================
// 8. Carousel Observer
// ==========================================
function initObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.carouselInstance) {
        window.activeCarousel = entry.target.carouselInstance;
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[id^="carouselArea"]').forEach(el => observer.observe(el));
}

// ==========================================
// 9. Common Event Listeners
// ==========================================
function initCommonListeners() {
  // Keyboard: Escape closes modals, arrows navigate carousel
  document.addEventListener("keydown", e => {
    if (['input', 'textarea'].includes((document.activeElement?.tagName || "").toLowerCase())) return;
    if (e.key === "Escape") {
      const lb = document.getElementById("lightbox");
      if (lb && !lb.classList.contains("is-hidden")) closeModal("lightbox");
      else closeAllModals();
    }
    const lb = document.getElementById("lightbox");
    const lbHidden = !lb || lb.classList.contains("is-hidden");
    if (e.key === "ArrowLeft" && window.activeCarousel && lbHidden) window.activeCarousel.prevSlide();
    if (e.key === "ArrowRight" && window.activeCarousel && lbHidden) window.activeCarousel.nextSlide();
  });

  // Click on image to open lightbox
  document.body.addEventListener('click', e => {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('cursor-zoom-in') && !e.target.closest('#lightbox')) {
      const lb = document.getElementById("lightbox");
      const lbImg = document.getElementById("lightboxImg");
      if (lb && lbImg) {
        lbImg.src = e.target.src;
        lb.classList.remove("is-hidden");
        document.body.style.overflow = "hidden";
      }
    }
  });
}
