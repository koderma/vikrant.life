// AI-powered typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const h1 = document.querySelector('.hero h1');
    const originalText = h1.textContent;
    typeWriter(h1, originalText, 150);
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced scroll effects with parallax
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// AI-powered newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const button = this.querySelector('button');
    
    // AI processing animation
    button.innerHTML = '<i class="fas fa-robot"></i> Processing...';
    button.style.background = '#f39c12';
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
        button.style.background = '#27ae60';
        
        setTimeout(() => {
            alert('🤖 AI-powered subscription activated! You\'ll receive insights on future technologies.');
            this.reset();
            button.innerHTML = 'Subscribe';
            button.style.background = '#667eea';
        }, 1500);
    }, 2000);
});

// Enhanced animation on scroll with AI-like effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add AI-like glow effect
                if (entry.target.classList.contains('skill-category')) {
                    entry.target.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
                }
            }, index * 100);
        }
    });
}, observerOptions);

// AI-powered hover effects for tech stack
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(102, 126, 234, 0.3)';
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255,255,255,0.1)';
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Glitch effect for AI badge
function glitchEffect() {
    const aiBadge = document.querySelector('.ai-badge');
    if (aiBadge) {
        aiBadge.style.textShadow = '2px 0 #ff0000, -2px 0 #00ff00';
        setTimeout(() => {
            aiBadge.style.textShadow = 'none';
        }, 100);
    }
}

setInterval(glitchEffect, 5000);

// Observe all timeline items, skill categories, and blog cards
document.querySelectorAll('.timeline-item, .skill-category, .blog-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Matrix-like background effect
function createMatrixEffect() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-10';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = '01';
    const matrixArray = matrix.split('');
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#667eea';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 35);
}

// Cursor trail effect
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTrail() {
    trailX += (mouseX - trailX) * 0.1;
    trailY += (mouseY - trailY) * 0.1;
    
    const trail = document.querySelector('.cursor-trail');
    if (!trail) {
        const newTrail = document.createElement('div');
        newTrail.className = 'cursor-trail';
        newTrail.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newTrail);
    }
    
    document.querySelector('.cursor-trail').style.transform = `translate(${trailX - 10}px, ${trailY - 10}px)`;
    requestAnimationFrame(animateTrail);
}

// Initialize matrix effect and cursor trail
createMatrixEffect();
animateTrail();