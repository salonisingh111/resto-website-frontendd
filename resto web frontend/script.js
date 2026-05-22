// Global Data Source for the entire application
// Global Data Source for the entire application
// Global Data Source for the entire application
const productsDB = [
    // Starters
    { id: 's1', category: 'starters', name: 'Zaffrani Samosa Chaat', price: 160, type: 'veg', calories: '320 kcal', img: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Hand-crafted pastry filled with spiced potatoes, topped with saffron yogurt and tangy chutneys.' },
    { id: 's2', category: 'starters', name: 'Hara Bhara Kebab', price: 280, type: 'veg', calories: '250 kcal', img: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Delicate patties of garden-fresh spinach and green peas, lightly spiced and pan-seared.' },
    { id: 's3', category: 'starters', name: 'Chilli Paneer Dry', price: 320, type: 'veg', calories: '400 kcal', img: 'https://images.pexels.com/photos/10580198/pexels-photo-10580198.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Indo-Chinese fusion: Wok-tossed cottage cheese with bell peppers and green chilies.' },
    
    // Veg
    { id: 'v1', category: 'veg', name: 'Royal Paneer Lababdar', price: 420, type: 'veg', calories: '600 kcal', img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Soft paneer in a rich tomato-cashew gravy, finished with a touch of butter and dry fenugreek.' },
    { id: 'v2', category: 'veg', name: 'Dal Savora (Makhani)', price: 380, type: 'veg', calories: '450 kcal', img: 'https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Black lentils slow-cooked for 24 hours, enriched with cream and churned white butter.' },
    { id: 'v3', category: 'veg', name: 'Kashmiri Malai Kofta', price: 450, type: 'veg', calories: '580 kcal', img: 'https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Vegetable and nut dumplings simmered in a velvety onion-tomato gravy with exotic spices.' },
    
    // Non-Veg
    { id: 'nv1', category: 'non-veg', name: 'Old Delhi Butter Chicken', price: 550, type: 'non-veg', calories: '750 kcal', img: 'https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&w=800', desc: 'Tandoori chicken tikkas simmered in a creamy, mildly sweet tomato and butter sauce.' },
    { id: 'nv2', category: 'non-veg', name: 'Mutton Rogan Josh', price: 620, type: 'non-veg', calories: '820 kcal', img: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Traditional Kashmiri lamb curry cooked with alkanet root and intense aromatic spices.' },
    { id: 'nv3', category: 'non-veg', name: 'Kochi Prawn Curry', price: 680, type: 'non-veg', calories: '420 kcal', img: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Fresh prawns simmered in a coconut-based gravy with curry leaves and mustard seeds.' },
    
    // Tandoor
    { id: 't1', category: 'tandoor', name: 'Murgh Angara Tikka', price: 450, type: 'non-veg', calories: '450 kcal', img: 'https://images.pexels.com/photos/3928525/pexels-photo-3928525.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Boneless chicken marinated in a fiery blend of Kashmiri chilies and aromatic spices.' },
    { id: 't2', category: 'tandoor', name: 'Lucknowi Mutton Seekh', price: 520, type: 'non-veg', calories: '550 kcal', img: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Fine minced lamb infused with cloves and cinnamon, skewered and charred over charcoal.' },
    { id: 't3', category: 'tandoor', name: 'Tandoori Malai Paneer', price: 380, type: 'veg', calories: '400 kcal', img: 'https://images.pexels.com/photos/10580198/pexels-photo-10580198.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Creamy cottage cheese marinated in cardamom-infused yogurt, grilled to a smoky finish.' },
    
    // Biryani
    { id: 'b1', category: 'biryani', name: 'Subz-e-Awadh Biryani', price: 380, type: 'veg', calories: '500 kcal', img: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Long-grain basmati rice cooked with seasonal vegetables and fragrant dum spices.' },
    { id: 'b2', category: 'biryani', name: 'Hyderabadi Dum Murgh Biryani', price: 520, type: 'non-veg', calories: '800 kcal', img: 'https://images.pexels.com/photos/1111122/pexels-photo-1111122.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Tender chicken and rice slow-cooked in a sealed pot with saffron and fresh mint.' },
    { id: 'b3', category: 'biryani', name: 'Nizami Mutton Dum Biryani', price: 650, type: 'non-veg', calories: '950 kcal', img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Succulent lamb and aged basmati rice infused with secret spices and kewra water.' },
    
    // Indian Breads
    { id: 'br1', category: 'breads', name: 'Truffle Garlic Naan', price: 110, type: 'veg', calories: '300 kcal', img: 'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Classic naan topped with minced garlic, fresh coriander, and a hint of truffle oil.' },
    { id: 'br2', category: 'breads', name: 'Butter Tandoori Roti', price: 60, type: 'veg', calories: '180 kcal', img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Traditional whole wheat bread baked in a clay oven and glazed with butter.' },
    { id: 'br3', category: 'breads', name: 'Laccha Paratha', price: 90, type: 'veg', calories: '250 kcal', img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Multi-layered whole wheat bread baked to a crispy, flaky perfection.' },
    
    // Desserts
    { id: 'd1', category: 'desserts', name: 'Kesari Gulab Jamun', price: 180, type: 'veg', calories: '400 kcal', img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Golden milk dumplings soaked in saffron-infused syrup, garnished with pistachios.' },
    { id: 'd2', category: 'desserts', name: 'Rabri Rasmalai', price: 220, type: 'veg', calories: '350 kcal', img: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Poached cheese discs immersed in thick, cardamom-flavored milk and rabri.' },
    
    // Drinks
    { id: 'dr1', category: 'drinks', name: 'Royal Saffron Lassi', price: 150, type: 'veg', calories: '250 kcal', img: 'https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Thick, creamy yogurt drink blended with saffron, cardamom, and nuts.' },
    { id: 'dr2', category: 'drinks', name: 'Masala Chai', price: 90, type: 'veg', calories: '120 kcal', img: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Strong Indian tea brewed with milk, ginger, and a house-special spice blend.' }
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
            productsDB.find(p => p.id === 'nv1'), // Butter Chicken
            productsDB.find(p => p.id === 'b3'),  // Mutton Dum Biryani 
            productsDB.find(p => p.id === 'v1')   // Paneer Lababdar
        ];

        topDishes.forEach(p => {
            if(!p) return;
            const card = document.createElement('div');
            card.className = 'luxury-dish-card gsap-fade-up';
            card.innerHTML = `
                <div class="img-container">
                    <img src="${p.img}" alt="${p.name}">
                </div>
                <div class="content">
                    <h3>${p.name}</h3>
                    <p>${p.desc}</p>
                    <div class="dish-footer">
                        <span class="dish-price">₹${p.price}</span>
                        <button class="btn" onclick='addToCart(${JSON.stringify({id: p.id, name: p.name, price: p.price, img: p.img})})'>Order Now</button>
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

    document.querySelectorAll('a[href*="menu.html"]').forEach((link) => {
        link.addEventListener('click', () => {
            sessionStorage.setItem('savora_menu_open_allowed', 'true');
        });
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });


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
