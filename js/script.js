const navToggle = document.getElementById('nav-toggle');
const navContent = document.getElementById('nav-content');

function closeNavigation() {
    if (!navToggle || !navContent) return;
    navContent.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
}

if (navToggle && navContent) {
    navToggle.addEventListener('click', () => {
        const isOpen = navContent.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    navContent.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeNavigation);
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeNavigation();
    });
}

document.querySelectorAll('[data-placeholder-link]').forEach(link => {
    link.addEventListener('click', event => event.preventDefault());
});
