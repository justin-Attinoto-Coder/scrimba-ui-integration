// Cabin data
const cabins = [
    {
        id: 1,
        name: "Pine Retreat",
        image: "images/cabin1.jpg",
        description: "A cozy cabin surrounded by towering pines, perfect for intimate getaways with modern amenities and rustic charm.",
        features: ["2 Bedrooms", "1 Bathroom", "Fireplace", "Hot Tub", "WiFi"],
        price: "$250/night"
    },
    {
        id: 2,
        name: "Maple Lodge",
        image: "images/cabin2.jpg",
        description: "Spacious family cabin with panoramic views, featuring a stone fireplace and private hot tub for ultimate relaxation.",
        features: ["3 Bedrooms", "2 Bathrooms", "Stone Fireplace", "Private Hot Tub", "Kitchen"],
        price: "$350/night"
    },
    {
        id: 3,
        name: "Oak Haven",
        image: "images/cabin3.jpg",
        description: "Luxurious cabin with vaulted ceilings, gourmet kitchen, and direct forest access for nature enthusiasts.",
        features: ["4 Bedrooms", "3 Bathrooms", "Gourmet Kitchen", "Forest Access", "Game Room"],
        price: "$450/night"
    },
    {
        id: 4,
        name: "Cedar Escape",
        image: "images/cabin2.jpg",
        description: "Intimate cabin with cedar walls, perfect for couples seeking privacy and romance in the woods.",
        features: ["1 Bedroom", "1 Bathroom", "Cedar Interior", "Private Deck", "Fire Pit"],
        price: "$200/night"
    },
    {
        id: 5,
        name: "Birch Retreat",
        image: "images/cabin3.jpg",
        description: "Modern cabin with birch accents, featuring smart home technology and outdoor fire pit.",
        features: ["2 Bedrooms", "1 Bathroom", "Smart Home", "Outdoor Fire Pit", "Sauna"],
        price: "$300/night"
    },
    {
        id: 6,
        name: "Spruce Sanctuary",
        image: "images/cabin1.jpg",
        description: "Secluded cabin with spruce forest views, ideal for writers and artists seeking inspiration.",
        features: ["Studio", "1 Bathroom", "Writing Desk", "Forest Views", "Quiet Location"],
        price: "$180/night"
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
const closeModal = document.getElementById('close-modal');

function openCabinModal(cabinId) {
    const cabin = cabins.find(c => c.id === cabinId);
    if (!cabin) return;

    modalContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-8">
            <div class="relative">
                <img src="${cabin.image}" alt="${cabin.name}" class="w-full h-64 md:h-full object-cover rounded-2xl shadow-lg">
                <div class="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-2xl"></div>
            </div>
            <div class="space-y-6">
                <div>
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">${cabin.name}</h2>
                    <p class="text-green-600 font-semibold text-xl">${cabin.price}</p>
                </div>
                <p class="text-gray-600 leading-relaxed">${cabin.description}</p>
                <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">Features</h3>
                    <ul class="grid grid-cols-2 gap-2">
                        ${cabin.features.map(feature => `<li class="flex items-center text-gray-600"><span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="flex gap-4 pt-4">
                    <button class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg">
                        Book Now
                    </button>
                    <button class="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-medium transition-colors">
                        View Gallery
                    </button>
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
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('click', (e) => {
    if (e.target.closest('.cabin-cta')) {
        e.preventDefault();
        const card = e.target.closest('.bg-white\\/10');
        const cabinId = Array.from(card.parentElement.children).indexOf(card) + 1;
        openCabinModal(cabinId);
    }
    
    if (e.target.id === 'close-modal' || e.target.id === 'cabin-modal') {
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
  .to("h1 span", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=.7")
  .from("ul.featured-cabins li", {y: 50, opacity: 0, stagger: .3}, "-=.7")