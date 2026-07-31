/* ==========================================================
   AuKLM — common.js
   Logique COMMUNE aux 4 pages : menu burger + bandeau cookies.
   Une seule clé localStorage ('auklm_consent') pour tout le site :
   le choix de l'utilisateur sur une page vaut pour toutes les autres.
   ========================================================== */

function toggleMenu() {
    const menu = document.getElementById('menu-overlay');
    if (!menu) return;
    menu.style.right = (menu.style.right === '0px') ? '-100%' : '0px';
}

function acceptCookies() {
    localStorage.setItem('auklm_consent', 'accepted');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
    if (typeof gtag === 'function') {
        gtag('consent', 'update', { 'analytics_storage': 'granted' });
    }
}

function denyCookies() {
    localStorage.setItem('auklm_consent', 'denied');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
    if (typeof gtag === 'function') {
        gtag('consent', 'update', { 'analytics_storage': 'denied' });
    }
}

window.addEventListener('load', function () {
    const consent = localStorage.getItem('auklm_consent');
    const banner = document.getElementById('cookie-banner');
    if (!consent && banner) {
        banner.style.display = 'block';
    } else if (consent === 'accepted' && typeof gtag === 'function') {
        gtag('consent', 'update', { 'analytics_storage': 'granted' });
    }
});
