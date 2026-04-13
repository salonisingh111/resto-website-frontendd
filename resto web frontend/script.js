// Global Data Source for the entire application
const productsDB = [
    // Reliable Pexels Food Image Links
    // Starters
    { id: 's1', category: 'starters', name: 'Samosa Chaat', price: 90, type: 'veg', calories: '320 kcal', img: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Crispy samosas crushed and topped with yogurt, tamarind chutney, and sev.' },
    { id: 's2', category: 'starters', name: 'Paneer Tikka', price: 180, type: 'veg', calories: '400 kcal', img: 'https://images.pexels.com/photos/10580198/pexels-photo-10580198.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Cottage cheese cubes marinated in spiced yogurt and grilled in a clay oven.' },
    { id: 's3', category: 'starters', name: 'Hara Bhara Kebab', price: 150, type: 'veg', calories: '250 kcal', img: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Healthy and delicious pan-fried spinach and green peas patties.' },
    { id: 's4', category: 'starters', name: 'Chicken Tikka', price: 210, type: 'non-veg', calories: '450 kcal', img: 'https://images.pexels.com/photos/3928525/pexels-photo-3928525.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Succulent pieces of chicken marinated in fiery spices and roasted to perfection.' },
    { id: 's5', category: 'starters', name: 'Mutton Seekh Kebab', price: 260, type: 'non-veg', calories: '550 kcal', img: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Minced lamb mixed with aromatic spices, skewered and grilled over charcoal.' },
    
    // Mains - Veg
    { id: 'm1', category: 'mains', name: 'Paneer Butter Masala', price: 240, type: 'veg', calories: '600 kcal', img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Rich and creamy curry made with paneer, tomatoes, cashews, and butter.' },
    { id: 'm2', category: 'mains', name: 'Dal Makhani', price: 200, type: 'veg', calories: '450 kcal', img: 'https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Slow-cooked black lentils and kidney beans enriched with cream and butter.' },
    { id: 'm3', category: 'mains', name: 'Malai Kofta', price: 230, type: 'veg', calories: '580 kcal', img: 'https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Potato and paneer dumplings deep-fried and served in a creamy, velvety sauce.' },
    
    // Mains - Biryani
    { id: 'm4', category: 'mains', name: 'Vegetable Biryani', price: 220, type: 'veg', calories: '500 kcal', img: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices.' },
    { id: 'm5', category: 'mains', name: 'Chicken Biryani', price: 280, type: 'non-veg', calories: '800 kcal', img: 'https://images.pexels.com/photos/1111122/pexels-photo-1111122.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Traditional dum biryani with tender chicken pieces, saffron, and rich spices.' },
    { id: 'm6', category: 'mains', name: 'Mutton Dum Biryani', price: 340, type: 'non-veg', calories: '950 kcal', img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Slow-cooked tender mutton and long-grain basmati rice scented with kewra.' },
    
    // Mains - Non-veg
    { id: 'm7', category: 'mains', name: 'Butter Chicken', price: 290, type: 'non-veg', calories: '750 kcal', img: 'https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&w=800', desc: 'Classic Punjabi dish featuring roasted chicken simmered in a mildly spiced tomato gravy.' },
    { id: 'm8', category: 'mains', name: 'Rogan Josh', price: 320, type: 'non-veg', calories: '820 kcal', img: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Signature Kashmiri lamb curry cooked with intense flavors of ginger, fennel, and red chilies.' },
    
    // Breads
    { id: 'b1', category: 'breads', name: 'Garlic Naan', price: 50, type: 'veg', calories: '300 kcal', img: 'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Soft and fluffy Indian flatbread topped with minced garlic and butter.' },
    { id: 'b2', category: 'breads', name: 'Butter Roti', price: 30, type: 'veg', calories: '150 kcal', img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Whole wheat flatbread baked in a tandoor and brushed with melted butter.' },
    
    // Desserts
    { id: 'd1', category: 'desserts', name: 'Gulab Jamun', price: 80, type: 'veg', calories: '400 kcal', img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Deep-fried milk solid spheres soaked in rose-flavored sugar syrup.' },
    { id: 'd2', category: 'desserts', name: 'Rasmalai', price: 110, type: 'veg', calories: '350 kcal', img: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Soft cheese patties immersed in sweetened, thickened milk flavored with cardamom.' },
    { id: 'd3', category: 'desserts', name: 'Gajar Ka Halwa', price: 90, type: 'veg', calories: '450 kcal', img: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Classic winter dessert made with grated carrots, milk, nuts, and ghee.' },
    
    // Drinks
    { id: 'dr1', category: 'drinks', name: 'Sweet Lassi', price: 70, type: 'veg', calories: '250 kcal', img: 'https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Refreshing traditional yogurt-based drink, sweetened and chilled.' },
    { id: 'dr2', category: 'drinks', name: 'Masala Chai', price: 40, type: 'veg', calories: '120 kcal', img: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Aromatic Indian tea brewed with milk, ginger, cardamom, and special spices.' }
];

// Global Cart State
let cart = JSON.parse(localStorage.getItem('savora_cart')) || [];

function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    
    cartCountElements.forEach(el => {
        el.innerText = totalItems;
    });

    // Floating Cart Logic
    const floatingCart = document.getElementById('floating-cart');
    const floatCount = document.getElementById('float-cart-count');
    const floatTotal = document.getElementById('float-cart-total');

    if (floatingCart) {
        if (totalItems > 0) {
            floatingCart.classList.add('active');
            floatCount.innerText = totalItems;
            floatTotal.innerText = totalPrice;
        } else {
            floatingCart.classList.remove('active');
        }
    }
}

function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += product.quantity || 1;
    } else {
        cart.push({ ...product, quantity: product.quantity || 1 });
    }
    localStorage.setItem('savora_cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`Added ${product.name} to order`);
}

function processPayment() {
    // Redirect to Checkout page according to user requirement
    window.location.href = 'cart.html';
}

function closePaymentModal() {
    document.getElementById('payment-modal').classList.remove('active');
}

// Render Homepage Chef's Recommendations
document.addEventListener('DOMContentLoaded', () => {
    const homeDishesContainer = document.getElementById('homepage-dishes');
    if (homeDishesContainer) {
        // Select 3 premium items (e.g., Paneer Butter Masala, Mutton Biryani, Garlic Naan)
        const topDishes = [
            productsDB.find(p => p.id === 'm1'), // Paneer Butter Masala
            productsDB.find(p => p.id === 'm6'), // Mutton Dum Biryani 
            productsDB.find(p => p.id === 'b1')  // Garlic Naan
        ];

        topDishes.forEach(p => {
            if(!p) return;
            const card = document.createElement('div');
            card.className = 'luxury-dish-card gsap-fade-up';
            card.innerHTML = `
                <img src="${p.img}" alt="${p.name}">
                <div class="content">
                    <h3>${p.name}</h3>
                    <p>${p.desc}</p>
                    <div class="dish-footer">
                        <span class="dish-price">₹${p.price}</span>
                        <button class="btn" onclick='addToCart(${JSON.stringify({id: p.id, name: p.name, price: p.price, image: p.img})})'>Order Now</button>
                    </div>
                </div>
            `;
            homeDishesContainer.appendChild(card);
        });
    }
});

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        localStorage.setItem('savora_cart', JSON.stringify(cart));
        updateCartCount();
        if (typeof renderCart === 'function') renderCart();
    }
}

function showToast(message) {
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    
    // Toast Styles
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.backgroundColor = 'var(--text-dark)';
    toast.style.color = '#fff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '30px';
    toast.style.fontWeight = 'bold';
    toast.style.zIndex = '9999';
    toast.style.opacity = '0';
    toast.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Initialize GSAP Animations if available
    if (typeof gsap !== 'undefined') {
        
        // Register ScrollTrigger if available (for scroll animations)
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            gsap.utils.toArray('.gsap-fade-up').forEach((elem) => {
                gsap.fromTo(elem, 
                    { y: 50, opacity: 0 }, 
                    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", 
                      scrollTrigger: {
                          trigger: elem,
                          start: "top 85%",
                          toggleActions: "play none none reverse"
                      }
                    }
                );
            });
        }

        // Hero Intro Animations (Homepage specific)
        if (document.querySelector('.hero-left')) {
            gsap.from('.gsap-hero-left', { x: -50, opacity: 0, duration: 1, ease: "power3.out" });
            gsap.from('.gsap-hero-right', { x: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
            
            // Floating Tags
            gsap.from('.gsap-float-1', { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.7)", delay: 0.8 });
            gsap.from('.gsap-float-2', { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.7)", delay: 1 });

            // Continuous Floating Animation for Image Carousel
            if (document.getElementById('hero-carousel')) {
                gsap.to('#hero-carousel', {
                    y: -15,
                    duration: 2.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
            // Continuous Floating Animation for Tags
            gsap.to('.gsap-float-1', {
                y: -8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.5
            });
            gsap.to('.gsap-float-2', {
                y: 8,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }
});
