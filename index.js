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
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Cabin data
const cabins = [
    {
        id: 1,
        name: "Pine Retreat",
        image: "images/cabin1.jpg",
        description: "A cozy cabin surrounded by towering pines, perfect for intimate getaways with modern amenities and rustic charm.",
        features: ["2 Bedrooms", "1 Bathroom", "Fireplace", "Hot Tub", "WiFi"],
        price: "$250/night",
        gallery: ["images/cabin1.jpg", "images/cabin2.jpg", "images/cabin3.jpg"],
        amenities: ["King Bed", "Full Kitchen", "Gas Fireplace", "Private Hot Tub", "High-Speed WiFi", "Smart TV", "Outdoor Seating"],
        location: "Pine Forest Trail, 0.5 miles from main lodge",
        capacity: "Up to 4 guests",
        size: "850 sq ft",
        highlights: ["Panoramic pine forest views", "Recently renovated interior", "Pet-friendly", "Mountain biking trails nearby"],
        policies: ["2 night minimum", "No smoking", "Pets allowed with fee", "Check-in: 3 PM, Check-out: 11 AM"]
    },
    {
        id: 2,
        name: "Maple Lodge",
        image: "images/cabin2.jpg",
        description: "Spacious family cabin with panoramic views, featuring a stone fireplace and private hot tub for ultimate relaxation.",
        features: ["3 Bedrooms", "2 Bathrooms", "Stone Fireplace", "Private Hot Tub", "Kitchen"],
        price: "$350/night",
        gallery: ["images/cabin2.jpg", "images/cabin1.jpg", "images/cabin3.jpg"],
        amenities: ["Master Suite with King Bed", "Two Guest Rooms", "Stone Fireplace", "Private Hot Tub", "Fully Equipped Kitchen", "Dining Area", "Living Room with Sofa Bed", "Deck with BBQ"],
        location: "Maple Ridge, 1 mile from hiking trails",
        capacity: "Up to 6 guests",
        size: "1,200 sq ft",
        highlights: ["360-degree mountain views", "Family-friendly layout", "Game room downstairs", "Hot tub with forest views"],
        policies: ["3 night minimum weekends", "Children welcome", "No smoking", "Check-in: 4 PM, Check-out: 10 AM"]
    },
    {
        id: 3,
        name: "Oak Haven",
        image: "images/cabin3.jpg",
        description: "Luxurious cabin with vaulted ceilings, gourmet kitchen, and direct forest access for nature enthusiasts.",
        features: ["4 Bedrooms", "3 Bathrooms", "Gourmet Kitchen", "Forest Access", "Game Room"],
        price: "$450/night",
        gallery: ["images/cabin3.jpg", "images/cabin2.jpg", "images/cabin1.jpg"],
        amenities: ["Master Suite with California King", "Three Guest Bedrooms", "Gourmet Kitchen with Island", "Game Room with Pool Table", "Home Theater", "Vaulted Ceilings", "Floor-to-Ceiling Windows", "Private Forest Path"],
        location: "Oak Grove Estate, Direct forest access",
        capacity: "Up to 8 guests",
        size: "2,100 sq ft",
        highlights: ["Architectural design award winner", "Chef's kitchen", "Entertainment suite", "Wildlife viewing deck"],
        policies: ["4 night minimum peak season", "No smoking", "Event-friendly", "Check-in: 3 PM, Check-out: 11 AM"]
    },
    {
        id: 4,
        name: "Cedar Escape",
        image: "images/cabin2.jpg",
        description: "Intimate cabin with cedar walls, perfect for couples seeking privacy and romance in the woods.",
        features: ["1 Bedroom", "1 Bathroom", "Cedar Interior", "Private Deck", "Fire Pit"],
        price: "$200/night",
        gallery: ["images/cabin2.jpg", "images/cabin3.jpg", "images/cabin1.jpg"],
        amenities: ["Queen Platform Bed", "Cedar-Lined Walls", "Rainfall Shower", "Private Deck", "Outdoor Fire Pit", "Hammock", "Stargazing Platform"],
        location: "Cedar Grove, Secluded location",
        capacity: "Up to 2 guests",
        size: "600 sq ft",
        highlights: ["Romantic retreat", "Handcrafted cedar interior", "Stargazing platform", "Complete privacy"],
        policies: ["2 night minimum", "Adults only", "No smoking", "Check-in: 3 PM, Check-out: 11 AM"]
    },
    {
        id: 5,
        name: "Birch Retreat",
        image: "images/cabin3.jpg",
        description: "Modern cabin with birch accents, featuring smart home technology and outdoor fire pit.",
        features: ["2 Bedrooms", "1 Bathroom", "Smart Home", "Outdoor Fire Pit", "Sauna"],
        price: "$300/night",
        gallery: ["images/cabin3.jpg", "images/cabin1.jpg", "images/cabin2.jpg"],
        amenities: ["Smart Home Controls", "Birch Wood Accents", "Infrared Sauna", "Outdoor Fire Pit", "Wireless Charging Stations", "Sound System", "Rain Shower", "Mudroom"],
        location: "Birch Trail, 0.8 miles from amenities",
        capacity: "Up to 4 guests",
        size: "950 sq ft",
        highlights: ["Smart home technology", "Wellness-focused design", "Birch forest surroundings", "Modern amenities"],
        policies: ["2 night minimum", "No smoking", "Technology-friendly", "Check-in: 3 PM, Check-out: 11 AM"]
    },
    {
        id: 6,
        name: "Spruce Sanctuary",
        image: "images/cabin1.jpg",
        description: "Secluded cabin with spruce forest views, ideal for writers and artists seeking inspiration.",
        features: ["Studio", "1 Bathroom", "Writing Desk", "Forest Views", "Quiet Location"],
        price: "$180/night",
        gallery: ["images/cabin1.jpg", "images/cabin2.jpg", "images/cabin3.jpg"],
        amenities: ["Studio Layout", "Writing Desk with View", "Art Supplies Storage", "Forest View Windows", "Quiet Location", "Reading Nook", "Minimalist Design"],
        location: "Spruce Grove, Most secluded location",
        capacity: "Up to 2 guests",
        size: "550 sq ft",
        highlights: ["Artist's retreat", "Inspiring forest views", "Creative workspace", "Peaceful solitude"],
        policies: ["2 night minimum", "No smoking", "Quiet hours enforced", "Check-in: 3 PM, Check-out: 11 AM"]
    }
];

// Modal functionality
const modal = document.getElementById('cabin-modal');
const modalContent = document.getElementById('modal-content');

if (!modal || !modalContent) {
    console.error('Modal elements not found!');
}
const closeModal = document.getElementById('close-modal');

function openCabinModal(cabinId) {
    const cabin = cabins.find(c => c.id === cabinId);
    if (!cabin) {
        console.error('Cabin not found:', cabinId);
        return;
    }

    console.log('Opening modal for cabin:', cabin.name);
    console.log('Cabin data:', cabin);
    
    // Clear any existing content first
    modalContent.innerHTML = '';
    
    // Generate content
    const content = `
        <div class="max-w-6xl mx-auto">
            <!-- Header Section -->
            <div class="mb-8">
                <div class="flex flex-col lg:flex-row gap-8">
                    <!-- Main Image -->
                    <div class="lg:w-1/2">
                        <div class="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img src="${cabin.image}" alt="${cabin.name}" class="w-full h-80 lg:h-96 object-cover" onerror="console.error('Image failed to load:', this.src)">
                            <div class="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>
                            <div class="absolute bottom-6 left-6 text-white">
                                <h1 class="text-4xl font-bold mb-2">${cabin.name}</h1>
                                <p class="text-2xl font-semibold text-green-300">${cabin.price}</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Quick Info -->
                    <div class="lg:w-1/2 space-y-6">
                        <div class="bg-linear-to-br from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100">
                            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">At a Glance</h3>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                    <span class="text-gray-700 dark:text-gray-200">${cabin.capacity}</span>
                                </div>
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                    </svg>
                                    <span class="text-gray-700 dark:text-gray-200">${cabin.size}</span>
                                </div>
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span class="text-gray-700 dark:text-gray-200">${cabin.location}</span>
                                </div>
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span class="text-gray-700 dark:text-gray-200">Verified</span>
                                </div>
                            </div>
                        </div>
                        
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">${cabin.description}</p>
                        
                        <!-- Action Buttons -->
                        <div class="flex flex-col sm:flex-row gap-4">
                            <button class="bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 reserve-btn">
                                Reserve Now
                            </button>
                            <button class="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 gallery-btn">
                                View Gallery
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Detailed Information Tabs -->
            <div class="space-y-8">
                <!-- Amenities Section -->
                <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div class="bg-linear-to-r from-green-600 to-blue-600 p-6">
                        <h3 class="text-2xl font-bold text-white">Amenities & Features</h3>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            ${cabin.amenities.map(amenity => `
                                <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                                    <svg class="w-5 h-5 text-green-600 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-700 dark:text-gray-200 font-medium">${amenity}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Highlights Section -->
                <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div class="bg-linear-to-r from-blue-600 to-purple-600 p-6">
                        <h3 class="text-2xl font-bold text-white">Highlights</h3>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${cabin.highlights.map(highlight => `
                                <div class="flex items-start p-4 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border-l-4 border-blue-500">
                                    <svg class="w-6 h-6 text-blue-600 mr-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                    </svg>
                                    <span class="text-gray-700 dark:text-gray-200 font-medium">${highlight}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Policies Section -->
                <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div class="bg-linear-to-r from-gray-600 to-gray-700 p-6">
                        <h3 class="text-2xl font-bold text-white">Booking Policies</h3>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${cabin.policies.map(policy => `
                                <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                                    <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span class="text-gray-700 dark:text-gray-200 font-medium">${policy}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    modalContent.innerHTML = content;
    console.log('Modal content set, length:', modalContent.innerHTML.length);
    console.log('Modal content preview:', modalContent.innerHTML.substring(0, 200) + '...');

    modal.classList.remove('hidden');
    console.log('Modal classList after remove hidden:', modal.classList);
    document.body.style.overflow = 'hidden';
    
    // Animate modal entrance
    gsap.from(modalContent, {
        duration: 0.5,
        y: 50,
        opacity: 0,
        ease: "power2.out"
    });
}

function closeCabinModal() {
    console.log('Closing modal');
    gsap.to(modalContent, {
        duration: 0.3,
        y: 50,
        opacity: 0,
        ease: "power2.in",
        onComplete: () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            // Clear content after animation
            setTimeout(() => {
                modalContent.innerHTML = '';
            }, 100);
            console.log('Modal closed');
        }
    });
}

// Event listeners
document.addEventListener('click', (e) => {
    if (e.target.closest('.cabin-cta')) {
        e.preventDefault();
        console.log('Cabin CTA clicked');
        const card = e.target.closest('.bg-white\\/10');
        console.log('Card found:', card);
        if (card) {
            const cabinId = Array.from(card.parentElement.children).indexOf(card) + 1;
            console.log('Cabin ID:', cabinId);
            openCabinModal(cabinId);
        }
    }
    
    // Reserve button functionality
    if (e.target.closest('.reserve-btn')) {
        e.preventDefault();
        console.log('Reserve button clicked');
        // Get the cabin name from the modal
        const cabinName = document.querySelector('#cabin-modal h1')?.textContent;
        if (cabinName) {
            alert(`🎉 Thank you for your interest in ${cabinName}!\n\nOur reservation system is coming soon. Please contact us at reservations@scenicforests.com or call (555) 123-4567 to make your reservation.`);
        } else {
            alert('🎉 Thank you for your interest!\n\nOur reservation system is coming soon. Please contact us at reservations@scenicforests.com or call (555) 123-4567 to make your reservation.');
        }
    }
    
    // Gallery button functionality
    if (e.target.closest('.gallery-btn')) {
        e.preventDefault();
        console.log('Gallery button clicked');
        // Get the cabin name from the modal
        const cabinName = document.querySelector('#cabin-modal h1')?.textContent;
        const cabinImage = document.querySelector('#cabin-modal img')?.src;
        
        if (cabinName && cabinImage) {
            // Create a simple gallery modal
            const galleryModal = document.createElement('div');
            galleryModal.className = 'fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4';
            galleryModal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                    <div class="relative">
                        <button class="absolute top-4 right-4 z-20 w-8 h-8 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors shadow-lg close-gallery">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div class="p-8">
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">${cabinName} - Photo Gallery</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-4">
                                    <img src="${cabinImage}" alt="${cabinName}" class="w-full h-64 object-cover rounded-xl shadow-lg">
                                    <p class="text-gray-600 dark:text-gray-300 text-center">Main cabin view</p>
                                </div>
                                <div class="space-y-4">
                                    <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-8 text-center">
                                        <svg class="w-16 h-16 text-emerald-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">More Photos Coming Soon</h3>
                                        <p class="text-gray-600 dark:text-gray-300">We're currently updating our photo gallery. Check back soon for more beautiful images of ${cabinName}!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(galleryModal);
            
            // Close gallery functionality
            const closeGallery = () => {
                galleryModal.remove();
            };
            
            galleryModal.addEventListener('click', (e) => {
                if (e.target.closest('.close-gallery') || e.target === galleryModal) {
                    closeGallery();
                }
            });
            
            document.addEventListener('keydown', function closeOnEscape(e) {
                if (e.key === 'Escape') {
                    closeGallery();
                    document.removeEventListener('keydown', closeOnEscape);
                }
            });
        }
    }
    
    // Close modal when clicking close button or modal backdrop
    if (e.target.closest('#close-modal')) {
        console.log('Close button clicked');
        closeCabinModal();
    } else if (e.target.id === 'cabin-modal') {
        console.log('Backdrop clicked');
        closeCabinModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeCabinModal();
    }
});

// GSAP animations for cabin cards
document.addEventListener('DOMContentLoaded', () => {
    const cabinCards = document.querySelectorAll('.bg-white\\/10');
    
    if (cabinCards.length > 0) {
        gsap.from(cabinCards, {
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        });
    }
    
    // Hero title animation
    const heroTitle = document.querySelector('h1');
    if (heroTitle) {
        gsap.from(heroTitle, {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: "power2.out",
            delay: 0.3
        });
    }
    
    // Hero description animation
    const heroDesc = document.querySelector('.text-lg.md\\:text-xl');
    if (heroDesc) {
        gsap.from(heroDesc, {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power2.out",
            delay: 0.6
        });
    }
});

console.log("Scenic Forests — cabins page loaded 🚀");