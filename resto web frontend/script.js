// Global Data Source for the entire application
const productsDB = [
    // Starters
    { id: 's1', category: 'starters', name: 'Zaffrani Samosa Chaat', price: 160, type: 'veg', calories: '320 kcal', img: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Hand-crafted pastry filled with spiced potatoes, topped with saffron yogurt and tangy chutneys.' },
    { id: 's2', category: 'starters', name: 'Hara Bhara Kebab', price: 280, type: 'veg', calories: '250 kcal', img: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Delicate patties of garden-fresh spinach and green peas, lightly spiced and pan-seared.' },
    { id: 's3', category: 'starters', name: 'Murgh Angara Tikka', price: 450, type: 'non-veg', calories: '450 kcal', img: 'https://images.pexels.com/photos/3928525/pexels-photo-3928525.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Boneless chicken marinated in a fiery blend of Kashmiri chilies and aromatic spices.' },
    { id: 's4', category: 'starters', name: 'Tandoori Malai Paneer', price: 380, type: 'veg', calories: '400 kcal', img: 'https://images.pexels.com/photos/10580198/pexels-photo-10580198.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Creamy cottage cheese marinated in cardamom-infused yogurt, grilled to a smoky finish.' },
    { id: 's5', category: 'starters', name: 'Lucknowi Mutton Seekh', price: 520, type: 'non-veg', calories: '550 kcal', img: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Fine minced lamb infused with cloves and cinnamon, skewered and charred over charcoal.' },
    
    // Mains
    { id: 'm1', category: 'non-veg', name: 'Old Delhi Butter Chicken', price: 550, type: 'non-veg', calories: '750 kcal', img: 'https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&w=800', desc: 'Tandoori chicken tikkas simmered in a creamy, mildly sweet tomato and butter sauce.' },
    { id: 'm2', category: 'non-veg', name: 'Mutton Rogan Josh', price: 620, type: 'non-veg', calories: '820 kcal', img: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Traditional Kashmiri lamb curry cooked with alkanet root and intense aromatic spices.' },
    { id: 'm3', category: 'veg', name: 'Royal Paneer Lababdar', price: 420, type: 'veg', calories: '600 kcal', img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Soft paneer in a rich tomato-cashew gravy, finished with a touch of butter and dry fenugreek.' },
    { id: 'm4', category: 'veg', name: 'Dal Savora (Makhani)', price: 380, type: 'veg', calories: '450 kcal', img: 'https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Black lentils slow-cooked for 24 hours, enriched with cream and churned white butter.' },
    { id: 'm5', category: 'non-veg', name: 'Kochi Fish Curry', price: 680, type: 'non-veg', calories: '420 kcal', img: 'https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Fresh fish simmered in a coconut-based gravy with curry leaves and mustard seeds.' },

    // Biryani
    { id: 'b1', category: 'biryani', name: 'Hyderabadi Dum Murgh Biryani', price: 520, type: 'non-veg', calories: '800 kcal', img: 'https://images.pexels.com/photos/1111122/pexels-photo-1111122.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Tender chicken and rice slow-cooked in a sealed pot with saffron and fresh mint.' },
    { id: 'b2', category: 'biryani', name: 'Nizami Mutton Dum Biryani', price: 650, type: 'non-veg', calories: '950 kcal', img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Succulent lamb and aged basmati rice infused with secret spices and kewra water.' },

    // Desserts
    { id: 'd1', category: 'desserts', name: 'Kesari Gulab Jamun', price: 180, type: 'veg', calories: '400 kcal', img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Golden milk dumplings soaked in saffron-infused syrup, garnished with pistachios.' },
    { id: 'd2', category: 'desserts', name: 'Rabri Rasmalai', price: 220, type: 'veg', calories: '350 kcal', img: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Poached cheese discs immersed in thick, cardamom-flavored milk and rabri.' },
    { id: 'd3', category: 'desserts', name: 'Royal Saffron Lassi', price: 150, type: 'veg', calories: '250 kcal', img: 'https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Thick, creamy yogurt drink blended with saffron, cardamom, and nuts.' }
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
    window.location.href = 'cart.html';
}

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
    toast.style.backgroundColor = '#1c1c1e';
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

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });

    // Render Homepage Chef's Recommendations
    const homeDishesContainer = document.getElementById('homepage-dishes');
    if (homeDishesContainer) {
        const topDishes = [
            productsDB.find(p => p.id === 'm1'),
            productsDB.find(p => p.id === 'b2'),
            productsDB.find(p => p.id === 'm3')
        ];

        topDishes.forEach(p => {
            if(!p) return;
            const card = document.createElement('div');
            card.className = 'luxury-dish-card gsap-fade-up';
            card.innerHTML = `
                <div class="img-container">
                    <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800';">
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

    // Initialize GSAP Animations
    if (typeof gsap !== 'undefined') {
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

        // Hero Intro Animations
        if (document.querySelector('.hero-left')) {
            gsap.from('.gsap-hero-left', { x: -50, opacity: 0, duration: 1, ease: "power3.out" });
            gsap.from('.gsap-hero-right', { x: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
            gsap.from('.gsap-float-1', { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.7)", delay: 0.8 });
            gsap.from('.gsap-float-2', { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.7)", delay: 1 });

            if (document.getElementById('hero-carousel')) {
                gsap.to('#hero-carousel', {
                    y: -15,
                    duration: 2.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
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

// ─── Canvas Particle Background ───────────────────────────────────────────
(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const canvas = document.getElementById('bg-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        const PARTICLE_COUNT = 60;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        function rand(min, max) { return Math.random() * (max - min) + min; }

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = rand(0, canvas.width);
                this.y = rand(0, canvas.height);
                this.r = rand(1, 3);
                this.alpha = rand(0.1, 0.5);
                this.vx = rand(-0.3, 0.3);
                this.vy = rand(-0.5, -0.1);
                this.color = Math.random() > 0.5 ? '212,175,55' : '255,160,60';
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= 0.001;
                if (this.alpha <= 0 || this.y < -10) this.reset();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        }
        animate();
    });
})();

// ─── Scroll Progress Bar & Scroll To Top ──────────────────────────────────
window.addEventListener('scroll', function () {
    const bar = document.getElementById('scroll-progress');
    if (bar) {
        const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = scrolled + '%';
    }
    
    const topBtn = document.getElementById('scroll-top-btn');
    if (topBtn) {
        topBtn.classList.toggle('visible', window.scrollY > 400);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const topBtn = document.getElementById('scroll-top-btn');
    if (topBtn) {
        topBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// ─── Hero Carousel ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    if (track) {
        setInterval(() => {
            track.style.transition = 'transform 1.2s cubic-bezier(0.65,0,0.35,1)';
            track.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                track.style.transition = 'none';
                track.appendChild(track.firstElementChild);
                track.style.transform = 'translateX(0)';
            }, 1200);
        }, 4000);
    }
});

// ─── Stats Counter ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    function animateCounter(el) {
        const target = +el.dataset.target;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = target >= 1000 ? Math.floor(current / 1000) + 'K' : Math.floor(current);
        }, 16);
    }

    const counters = document.querySelectorAll('.stat-num');
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(c => counterObserver.observe(c));
    }
});
