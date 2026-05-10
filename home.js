console.log("home.js loaded");

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log("GSAP loaded:", gsap, ScrollTrigger);

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

if (themeToggle && sunIcon && moonIcon) {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Apply the initial theme
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');

        if (isDark) {
            // Switch to light mode
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
            localStorage.setItem('theme', 'dark');
        }
    });
}

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
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animations
    if (document.querySelector('.hero-content h1')) {
        gsap.from('.hero-content h1', {
            duration: 1.2,
            y: -50,
            opacity: 0,
            ease: "power2.out"
        });
    }
    
    if (document.querySelector('.hero-content p')) {
        gsap.from('.hero-content p', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power2.out",
            delay: 0.3
        });
    }
    
    if (document.querySelector('.hero-content .flex')) {
        gsap.from('.hero-content .flex', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: "power2.out",
            delay: 0.6
        });
    }
    
    // Features animation
    const features = document.querySelectorAll('.features-grid > div');
    if (features.length > 0) {
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
    }
    
    // Destinations animation
    const destinations = document.querySelectorAll('.destinations-grid > div');
    if (destinations.length > 0) {
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
    }
    
    // Testimonials animation
    const testimonials = document.querySelectorAll('.testimonials-grid > div');
    if (testimonials.length > 0) {
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
    }
});

// Destination card click handlers
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('click', () => {
        // Navigate to cabins page
        window.location.href = 'index.html';
    });
});

// Contact modal functionality
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const closeContactModal = document.getElementById('close-contact-modal');

if (contactBtn && contactModal && closeContactModal) {
    // Open contact modal
    contactBtn.addEventListener('click', () => {
        contactModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    // Close contact modal
    closeContactModal.addEventListener('click', () => {
        contactModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // Close on backdrop click
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !contactModal.classList.contains('hidden')) {
            contactModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}