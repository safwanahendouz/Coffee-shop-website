// Smooth scrolling for navigation links
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

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '5px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '10px 0';
        header.style.boxShadow = 'none';
    }
});

// Add fade-in animation for product cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards when they exist
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add hover effect for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 5px 15px rgba(111, 78, 55, 0.3)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Smooth scroll for "Back to Top" button
document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        }); 
    });
});

// Product hover animaions
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(111, 78, 55, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// click buttons

function goTolink(mylink) {
    window.open(`https://${mylink}`)
}

// =============================================
//  BrewHaven – Animations & Interactions
// =============================================

/* ---- Utility ---- */
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

// =============================================
// 1. PAGE LOADER
// =============================================
function createLoader() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-inner">
            <div class="loader-cup">
                <i class="fa-solid fa-mug-hot"></i>
            </div>
            <div class="loader-steam">
                <span></span><span></span><span></span>
            </div>
            <p class="loader-text">Brewing your experience...</p>
        </div>
    `;
    document.body.prepend(loader);

    const style = document.createElement('style');
    style.textContent = `
        #page-loader {
            position: fixed;
            inset: 0;
            background: #0B0705;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            transition: opacity 0.6s ease, visibility 0.6s ease;
        }
        #page-loader.hidden {
            opacity: 0;
            visibility: hidden;
        }
        .loader-inner { text-align: center; }
        .loader-cup {
            font-size: 60px;
            color: #D4AF37;
            animation: cupPulse 1.2s ease-in-out infinite;
        }
        .loader-steam {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin: 10px 0;
        }
        .loader-steam span {
            width: 4px;
            height: 20px;
            background: linear-gradient(to top, #D4AF37, transparent);
            border-radius: 4px;
            animation: steam 1.4s ease-in-out infinite;
        }
        .loader-steam span:nth-child(2) { animation-delay: 0.2s; }
        .loader-steam span:nth-child(3) { animation-delay: 0.4s; }
        .loader-text {
            color: #C4A484;
            font-size: 14px;
            letter-spacing: 2px;
            margin-top: 10px;
            font-family: 'Montserrat', sans-serif;
        }
        @keyframes cupPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        @keyframes steam {
            0%, 100% { transform: translateY(0) scaleX(1); opacity: 0.8; }
            50% { transform: translateY(-10px) scaleX(0.5); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 700);
        }, 1400);
    });
}
createLoader();

// =============================================
// 2. HEADER – Shrink & Shadow on Scroll
// =============================================
const header = $('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.style.padding = '4px 0';
        header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
        header.style.background = 'rgba(22,21,21,0.97)';
    } else {
        header.style.padding = '10px 0';
        header.style.boxShadow = 'none';
        header.style.background = '#161515';
    }
});

// =============================================
// 3. SMOOTH SCROLLING
// =============================================
$$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = $(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// =============================================
// 4. SOCIAL LINKS – goTolink helper
// =============================================
function goTolink(url) {
    if (!url.startsWith('http')) url = 'https://' + url;
    window.open(url, '_blank');
}

// =============================================
// 5. HERO – Parallax Background
// =============================================
const hero = $('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const offset = window.scrollY;
        hero.style.backgroundPositionY = `calc(center + ${offset * 0.3}px)`;
    });
}

// =============================================
// 6. SCROLL-REVEAL (Intersection Observer)
// =============================================
function addRevealStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.7s cubic-bezier(.22,.61,.36,1),
                        transform 0.7s cubic-bezier(.22,.61,.36,1);
        }
        .reveal.visible {
            opacity: 1;
            transform: translate(0);
        }
    `;
    document.head.appendChild(style);
}
addRevealStyles();

function applyReveal() {
    $$('.section-header').forEach(el => el.classList.add('reveal'));

    $$('.product-card').forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.12}s`;
    });

    $$('.footer-column').forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.1}s`;
    });

    // Hero entrance
    const heroContainer = $('.hero-container');
    if (heroContainer) {
        heroContainer.style.opacity = '0';
        heroContainer.style.transform = 'translateY(30px)';
        heroContainer.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
        setTimeout(() => {
            heroContainer.style.opacity = '1';
            heroContainer.style.transform = 'translateY(0)';
        }, 300);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    $$('.reveal').forEach(el => observer.observe(el));
}

// =============================================
// 7. PRODUCT CARDS – Hover Tilt Effect
// =============================================
function addCardTilt() {
    $$('.product-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = ((y - rect.height / 2) / rect.height) * -6;
            const rotateY = ((x - rect.width  / 2) / rect.width)  *  6;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            card.style.transition = 'transform 0.1s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
            card.style.transition = 'transform 0.5s ease';
        });
    });
}

// =============================================
// 8. BUTTON – Ripple Effect
// =============================================
function addRipple() {
    const style = document.createElement('style');
    style.textContent = `
        .btn { position: relative; overflow: hidden; }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.25);
            transform: scale(0);
            animation: rippleAnim 0.6s linear;
            pointer-events: none;
        }
        @keyframes rippleAnim {
            to { transform: scale(4); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    $$('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const circle = document.createElement('span');
            circle.classList.add('ripple');
            const d = Math.max(btn.clientWidth, btn.clientHeight);
            const rect = btn.getBoundingClientRect();
            circle.style.width = circle.style.height = `${d}px`;
            circle.style.left = `${e.clientX - rect.left - d / 2}px`;
            circle.style.top  = `${e.clientY - rect.top  - d / 2}px`;
            btn.appendChild(circle);
            circle.addEventListener('animationend', () => circle.remove());
        });
    });
}

// =============================================
// 9. HERO SUBTITLE – Typewriter Effect
// =============================================
function typewriterHeroText() {
    const subtitle = $('.hero-subtitle');
    if (!subtitle) return;
    const fullText = ' Ethically Sourced Beans';
    subtitle.innerHTML = '<i class="fas fa-seedling"></i>';
    const span = document.createElement('span');
    subtitle.appendChild(span);
    let i = 0;
    const interval = setInterval(() => {
        span.textContent += fullText[i] || '';
        i++;
        if (i >= fullText.length) clearInterval(interval);
    }, 60);
}

// =============================================
// 10. FOOTER SOCIAL ICONS – Bounce on Hover
// =============================================
function socialHoverFx() {
    const style = document.createElement('style');
    style.textContent = `
        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), color 0.3s ease;
        }
        .social-links a:hover {
            transform: translateY(-6px) scale(1.2);
            color: var(--coffee-gold) !important;
        }
    `;
    document.head.appendChild(style);
}

// =============================================
// 11. ACTIVE NAV LINK on Scroll
// =============================================
function activeNavOnScroll() {
    const sections = $$('section[id]');
    const navLinks = $$('nav a');

    const style = document.createElement('style');
    style.textContent = `
        nav a.active { color: var(--coffee-gold) !important; }
        nav a.active::after { width: 100% !important; background: var(--coffee-gold); }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });
}

// =============================================
// 12. PRODUCT TAG – Animated Pulse Badge
// =============================================
function animateTags() {
    const style = document.createElement('style');
    style.textContent = `
        .product-tag {
            animation: tagPulse 2s ease-in-out infinite;
        }
        @keyframes tagPulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.5); }
            50% { box-shadow: 0 0 0 6px rgba(212,175,55,0); }
        }
    `;
    document.head.appendChild(style);
}

// =============================================
// 13. SCROLL-TO-TOP BUTTON
// =============================================
function createScrollTop() {
    const btn = document.createElement('button');
    btn.id = 'scrollTop';
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

    const style = document.createElement('style');
    style.textContent = `
        #scrollTop {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: var(--coffee-gold);
            color: #0B0705;
            border: none;
            font-size: 18px;
            cursor: pointer;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.4s ease, transform 0.4s ease;
            z-index: 999;
            box-shadow: 0 4px 15px rgba(212,175,55,0.4);
        }
        #scrollTop.visible {
            opacity: 1;
            transform: translateY(0);
        }
        #scrollTop:hover {
            background: #c9a227;
            transform: translateY(-3px);
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =============================================
// 14. CURSOR GLOW EFFECT
// =============================================
function cursorGlow() {
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    const style = document.createElement('style');
    style.textContent = `
        #cursor-glow {
            pointer-events: none;
            position: fixed;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            transition: left 0.1s ease, top 0.1s ease;
            z-index: 0;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(glow);

    window.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top  = e.clientY + 'px';
    });
}

// =============================================
// INIT – Run everything on DOM ready
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    applyReveal();
    addCardTilt();
    addRipple();
    socialHoverFx();
    activeNavOnScroll();
    animateTags();
    createScrollTop();
    cursorGlow();

    // Delay typewriter so loader finishes first
    setTimeout(typewriterHeroText, 1600);
});