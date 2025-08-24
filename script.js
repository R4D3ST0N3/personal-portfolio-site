// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target element by its ID
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close mobile nav after clicking a link
        if (window.innerWidth < 1024) { // Check if it's a mobile viewport
            const navContent = document.getElementById('nav-content');
            if (navContent && !navContent.classList.contains('hidden')) {
                navContent.classList.add('hidden');
            }
        }
    });
});

// Mobile navigation toggle functionality
const navToggle = document.getElementById('nav-toggle');
const navContent = document.getElementById('nav-content');

if (navToggle && navContent) {
    navToggle.addEventListener('click', () => {
        navContent.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide
    });
}

// Simple form submission (for demonstration purposes, no actual backend)
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // In a real application, you would send this data to a server.
        // For Code.org or a simple static site, this just simulates submission.
        // We're using alert() for now, but in a real app, you'd show a custom message.
        alert('Message sent! (This is a demo, no actual message was sent.)');
        
        this.reset(); // Clear the form fields after "submission"
    });
}
