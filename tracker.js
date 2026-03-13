// ==========================================
// 行为分析探针 (Analytics Tracker)
// ==========================================

const TRACK_API_URL = "https://api.alphabonsai.com/api/track";

(function() {
    const sessionId = Math.random().toString(36).substring(2, 15);
    let deviceId = localStorage.getItem('device_id');
    if (!deviceId) {
        deviceId = 'dev_' + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('device_id', deviceId);
    }

    const startTime = Date.now();
    const pagePath = window.location.pathname.split('/').pop() || 'index.html';

    function sendEvent(eventType, targetInfo = '', duration = 0) {
        let userId = 'anonymous';
        try {
            const user = JSON.parse(localStorage.getItem('discordUser'));
            if (user && user.id) userId = user.id;
        } catch (e) {}

        const payload = {
            device_id: deviceId,
            session_id: sessionId,
            user_id: userId,
            page: pagePath,
            event_type: eventType,
            target_info: targetInfo,
            duration: duration,
            timestamp: new Date().toISOString()
        };

        fetch(TRACK_API_URL, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            keepalive: true 
        }).catch(err => console.error("Tracker error:", err));
    }

    // 1. PV
    sendEvent('page_view');

    // 2. 点击追踪
    document.addEventListener('click', function(e) {
        const el = e.target.closest('button, a');
        if (!el) return;

        const elementType = el.tagName.toLowerCase();
        const action = elementType === 'a' ? 'link_click' : 'button_click';
        
        let identifier = el.id || el.getAttribute('data-i18n') || el.innerText.replace(/\n/g, ' ').trim().substring(0, 30);
        if (elementType === 'a' && el.href) identifier += ` -> ${el.href}`;
        if (!identifier) identifier = "Unknown Element";

        sendEvent(action, identifier);
    });

    // 3. 停留时间
    window.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
            const durationSecs = Math.round((Date.now() - startTime) / 1000);
            sendEvent('page_leave', `Stayed ${durationSecs}s`, durationSecs);
        }
    });
})();