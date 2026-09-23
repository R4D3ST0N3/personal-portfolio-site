document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }

        const navContent = document.getElementById('nav-content');
        const navToggle = document.getElementById('nav-toggle');
        if (navContent && navToggle) {
            navContent.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

const navToggle = document.getElementById('nav-toggle');
const navContent = document.getElementById('nav-content');

if (navToggle && navContent) {
    navToggle.addEventListener('click', () => {
        const isOpen = navContent.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for reaching out! This demo form is ready to connect to a backend.');
        this.reset();
    });
}
