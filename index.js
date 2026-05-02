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

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

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
    
    modalContent.innerHTML = `
        <div class="max-w-6xl mx-auto">
            <!-- Header Section -->
            <div class="mb-8">
                <div class="flex flex-col lg:flex-row gap-8">
                    <!-- Main Image -->
                    <div class="lg:w-1/2">
                        <div class="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img src="${cabin.image}" alt="${cabin.name}" class="w-full h-80 lg:h-96 object-cover" onerror="console.error('Image failed to load:', this.src)">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            <div class="absolute bottom-6 left-6 text-white">
                                <h1 class="text-4xl font-bold mb-2">${cabin.name}</h1>
                                <p class="text-2xl font-semibold text-green-300">${cabin.price}</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Quick Info -->
                    <div class="lg:w-1/2 space-y-6">
                        <div class="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100">
                            <h3 class="text-xl font-bold text-gray-800 mb-4">At a Glance</h3>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                    <span class="text-gray-700">${cabin.capacity}</span>
                                </div>
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                    </svg>
                                    <span class="text-gray-700">${cabin.size}</span>
                                </div>
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span class="text-gray-700">${cabin.location}</span>
                                </div>
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span class="text-gray-700">Verified</span>
                                </div>
                            </div>
                        </div>
                        
                        <p class="text-gray-600 leading-relaxed text-lg">${cabin.description}</p>
                        
                        <!-- Action Buttons -->
                        <div class="flex flex-col sm:flex-row gap-4">
                            <button class="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Reserve Now
                            </button>
                            <button class="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300">
                                View Gallery
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Detailed Information Tabs -->
            <div class="space-y-8">
                <!-- Amenities Section -->
                <div class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    <div class="bg-gradient-to-r from-green-600 to-blue-600 p-6">
                        <h3 class="text-2xl font-bold text-white">Amenities & Features</h3>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            ${cabin.amenities.map(amenity => `
                                <div class="flex items-center p-3 bg-gray-50 rounded-xl">
                                    <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-700 font-medium">${amenity}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Highlights Section -->
                <div class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                        <h3 class="text-2xl font-bold text-white">Highlights</h3>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${cabin.highlights.map(highlight => `
                                <div class="flex items-start p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500">
                                    <svg class="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                    </svg>
                                    <span class="text-gray-700 font-medium">${highlight}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Policies Section -->
                <div class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    <div class="bg-gradient-to-r from-gray-600 to-gray-700 p-6">
                        <h3 class="text-2xl font-bold text-white">Booking Policies</h3>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${cabin.policies.map(policy => `
                                <div class="flex items-center p-3 bg-gray-50 rounded-xl">
                                    <svg class="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span class="text-gray-700 font-medium">${policy}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
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
    
    // Close modal when clicking close button or modal backdrop
    if (e.target.closest('#close-modal') || e.target.id === 'cabin-modal') {
        console.log('Modal close triggered');
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