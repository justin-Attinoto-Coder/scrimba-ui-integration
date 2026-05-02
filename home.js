// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    // Hero animations
    gsap.from('.hero-content h1', {
        duration: 1.2,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });
    
    gsap.from('.hero-content p', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power2.out",
        delay: 0.3
    });
    
    gsap.from('.hero-content .flex', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power2.out",
        delay: 0.6
    });
    
    // Features animation
    const features = document.querySelectorAll('.features-grid > div');
    gsap.from(features, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.features-section',
            start: 'top 80%'
        }
    });
    
    // Destinations animation
    const destinations = document.querySelectorAll('.destinations-grid > div');
    gsap.from(destinations, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '#destinations',
            start: 'top 80%'
        }
    });
    
    // Testimonials animation
    const testimonials = document.querySelectorAll('.testimonials-grid > div');
    gsap.from(testimonials, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 80%'
        }
    });
});

console.log("Scenic Forests — home page loaded 🚀");