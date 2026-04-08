// Main JavaScript for RIT Techfest Website

document.addEventListener('DOMContentLoaded', () => {
    initMatrixBackground();
    initParticleBackground();
    initTypewriter();
    renderEvents();
    initFilters();
    initSmoothScroll();
    initScrollReveal();
    initMobileOptimizations();
    initCursorGlow();
    initNavScroll();
    initMobileMenu();
    initBackToTop();
    initDateBadgeClicks();
    updateHighlightStats();
});

// ================================
// Update Highlight Stats Dynamically
// ================================
function updateHighlightStats() {
    const eventsCount = eventsData.events.length;
    const depts = new Set(eventsData.events.map(e => e.department)).size;
    
    const eventsEl = document.getElementById('highlight-events');
    const deptsEl = document.getElementById('highlight-depts');
    
    if (eventsEl) eventsEl.textContent = eventsCount;
    if (deptsEl) deptsEl.textContent = depts;
}

// ================================
// Typewriter Effect
// ================================
function initTypewriter() {
    const phrases = [
        'Innovation • Technology • Excellence',
        'Code. Create. Conquer.',
        '17 Events • 3 Days • ₹1L+ Prizes',
        'Where Dreams Meet Reality',
        'Build The Future Today'
    ];
    
    const typewriterElement = document.querySelector('.typewriter-text');
    if (!typewriterElement) return;
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before next phrase
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// ================================
// Cursor Glow Effect
// ================================
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursor-glow');
    if (!cursorGlow || window.innerWidth < 768) return;
    
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorGlow.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
    
    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        
        requestAnimationFrame(animateGlow);
    }
    
    animateGlow();
}

// ================================
// Particle Background Effect
// ================================
function initParticleBackground() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const isMobile = window.innerWidth < 768;
    
    if (isMobile || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        canvas.style.display = 'none';
        return;
    }
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = ['#06b6d4', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)];
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = 0.5;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - distance / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        connectParticles();
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ================================
// Navigation Scroll Effect
// ================================
function initNavScroll() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ================================
// Mobile Menu
// ================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        
        if (mobileMenu.style.maxHeight) {
            mobileMenu.style.maxHeight = null;
        } else {
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        }
    });
    
    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileMenu.style.maxHeight = null;
        });
    });
}

// ================================
// Back to Top Button
// ================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ================================
// Date Badge Click Handlers
// ================================
function initDateBadgeClicks() {
    const dateBadges = document.querySelectorAll('.date-badge');
    
    dateBadges.forEach(badge => {
        badge.addEventListener('click', () => {
            const date = badge.getAttribute('data-date');
            
            // Find and click the corresponding filter button
            const filterBtn = document.querySelector(`.date-filter-btn[data-date="${date}"]`);
            if (filterBtn) {
                filterBtn.click();
                
                // Scroll to events section
                document.getElementById('events').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ================================
// Scroll Reveal Animation (60fps)
// ================================
function initScrollReveal() {
    // Use Intersection Observer for performant scroll detection
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Trigger slightly before element enters
        threshold: 0.1
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Use requestAnimationFrame for smooth 60fps animations
                requestAnimationFrame(() => {
                    entry.target.classList.add('revealed');
                });
                
                // Unobserve after revealing (one-time animation)
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Select all elements with reveal classes
    const revealElements = document.querySelectorAll(
        '.reveal-fade-up, .reveal-fade-down, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-stagger, .scroll-reveal, .timeline-item'
    );
    
    revealElements.forEach(el => revealObserver.observe(el));
    
    // Store observer reference for dynamic content
    window.revealObserver = revealObserver;
}

// Re-initialize reveal for dynamically added content
function refreshScrollReveal() {
    if (window.revealObserver) {
        const newElements = document.querySelectorAll(
            '.reveal-fade-up:not(.revealed), .reveal-fade-down:not(.revealed), .reveal-fade-left:not(.revealed), .reveal-fade-right:not(.revealed), .reveal-scale:not(.revealed), .reveal-stagger:not(.revealed), .scroll-reveal:not(.revealed), .timeline-item:not(.revealed)'
        );
        newElements.forEach(el => window.revealObserver.observe(el));
    }
}

// ================================
// Mobile Optimizations
// ================================
function initMobileOptimizations() {
    // Detect if device prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.body.classList.add('reduce-motion');
    }
    
    // Fix 100vh issue on mobile browsers
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVH();
    
    // Throttled resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) cancelAnimationFrame(resizeTimeout);
        resizeTimeout = requestAnimationFrame(setVH);
    });
    
    // Passive touch listeners for better scroll performance
    document.addEventListener('touchstart', () => {}, { passive: true });
    document.addEventListener('touchmove', () => {}, { passive: true });
    
    // Prevent pull-to-refresh on modal
    const modal = document.getElementById('event-modal');
    if (modal) {
        modal.addEventListener('touchmove', (e) => {
            if (modal.classList.contains('active')) {
                e.stopPropagation();
            }
        }, { passive: false });
    }
    
    // Add touch feedback for cards
    if ('ontouchstart' in window) {
        document.querySelectorAll('.event-card, .date-filter-btn').forEach(el => {
            el.addEventListener('touchstart', () => {
                el.style.transform = 'scale(0.98)';
            }, { passive: true });
            
            el.addEventListener('touchend', () => {
                el.style.transform = '';
            }, { passive: true });
        });
    }
}

// ================================
// Matrix/Tech Background Animation (Tokyo Cyberpunk - 60fps optimized)
// ================================
function initMatrixBackground() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        canvas.style.display = 'none';
        return;
    }
    
    // Performance: reduce density on mobile
    const isMobile = window.innerWidth < 768;
    const densityFactor = isMobile ? 2.5 : 1.5; // Reduced density for cleaner look
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    
    // Throttled resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeCanvas, 250);
    });
    
    // Japanese characters - mix of katakana and tech symbols
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ01010111';
    const charArray = chars.split('');
    
    const fontSize = isMobile ? 14 : 16;
    const columns = Math.floor(canvas.width / (fontSize * densityFactor));
    
    // Array to track y position and properties of each column
    const drops = [];
    const speeds = [];
    const colorIndices = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
        speeds[i] = 0.3 + Math.random() * 0.7; // Variable speeds for depth effect
        colorIndices[i] = Math.floor(Math.random() * 4);
    }
    
    // Enhanced Tokyo cyberpunk colors - brighter with glow
    const colors = [
        { main: '#22d3ee', glow: 'rgba(34, 211, 238, 0.8)' },   // Electric cyan
        { main: '#a78bfa', glow: 'rgba(167, 139, 250, 0.8)' },  // Soft neon purple
        { main: '#f472b6', glow: 'rgba(244, 114, 182, 0.8)' },  // Light magenta
        { main: '#4ade80', glow: 'rgba(74, 222, 128, 0.6)' }    // Soft green
    ];
    
    // Floating particles
    const particles = [];
    const particleCount = isMobile ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            colorIndex: Math.floor(Math.random() * colors.length),
            pulse: Math.random() * Math.PI * 2
        });
    }
    
    // Use requestAnimationFrame for 60fps
    let lastTime = 0;
    const targetFPS = 24; // Smoother animation
    const frameInterval = 1000 / targetFPS;
    
    function draw(currentTime) {
        // Throttle to target FPS
        if (currentTime - lastTime < frameInterval) {
            requestAnimationFrame(draw);
            return;
        }
        lastTime = currentTime;
        
        // Fade effect - slower fade for longer trails
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw floating particles
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.pulse += 0.05;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5;
            const color = colors[particle.colorIndex];
            
            // Draw glow
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, pulseSize * 3, 0, Math.PI * 2);
            ctx.fillStyle = color.glow.replace('0.8', '0.1');
            ctx.fill();
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
            ctx.fillStyle = color.main;
            ctx.globalAlpha = 0.6 + Math.sin(particle.pulse) * 0.2;
            ctx.fill();
            ctx.globalAlpha = 1;
        });
        
        // Draw matrix characters
        ctx.font = `${fontSize}px 'Courier New', monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const char = charArray[Math.floor(Math.random() * charArray.length)];
            const color = colors[colorIndices[i]];
            
            const x = i * fontSize * densityFactor;
            const y = drops[i] * fontSize;
            
            // Draw character glow
            ctx.shadowColor = color.glow;
            ctx.shadowBlur = 8;
            
            // Gradient opacity - brighter at the leading edge
            const distFromTop = drops[i] * fontSize;
            const brightness = Math.min(1, distFromTop / 200);
            ctx.globalAlpha = 0.4 + brightness * 0.4;
            
            ctx.fillStyle = color.main;
            ctx.fillText(char, x, y);
            
            // Draw brighter leading character
            if (Math.random() > 0.95) {
                ctx.globalAlpha = 0.9;
                ctx.fillStyle = '#ffffff';
                ctx.fillText(char, x, y);
            }
            
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
            
            // Reset drop if it reaches bottom
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
                drops[i] = 0;
                colorIndices[i] = Math.floor(Math.random() * colors.length);
            }
            
            drops[i] += speeds[i];
        }
        
        requestAnimationFrame(draw);
    }
    
    // Start animation
    requestAnimationFrame(draw);
    
    // Pause animation when tab is not visible (save battery)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            canvas.style.display = 'none';
        } else {
            canvas.style.display = 'block';
        }
    });
}

// ================================
// Animated Counters
// ================================
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    
    function update() {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    update();
}

// ================================
// Event Cards Rendering
// ================================
function renderEvents(filter = 'all') {
    const grid = document.getElementById('events-grid');
    grid.innerHTML = '';
    grid.classList.remove('revealed');
    
    let events = eventsData.events;
    
    // Filter by date if specified
    if (filter !== 'all') {
        events = events.filter(event => event.date === filter);
    }
    
    // Sort by date and time
    events.sort((a, b) => {
        const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, '$1'));
        const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, '$1'));
        return dateA - dateB;
    });
    
    events.forEach((event, index) => {
        const card = createEventCard(event, index);
        grid.appendChild(card);
    });
    
    // Trigger reveal animation with requestAnimationFrame for 60fps
    requestAnimationFrame(() => {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
            grid.classList.add('revealed');
            
            // Re-observe for scroll reveal if needed
            if (window.revealObserver) {
                refreshScrollReveal();
            }
        }, 50);
    });
}

function createEventCard(event, index) {
    const card = document.createElement('div');
    card.className = 'event-card';
    // GPU accelerated transform for smooth animations
    card.style.transform = 'translateZ(0)';
    
    card.innerHTML = `
        <div class="department-badge">${event.department}</div>
        <h3 class="event-title">${event.name}</h3>
        <div class="event-info">
            <span>
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                ${event.date}
            </span>
            <span>
                <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                ${event.time}
            </span>
        </div>
        <div class="event-info">
            <span>
                <svg class="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                ${event.venue}
            </span>
        </div>
        <div class="prize-pool">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            ${event.prize_pool}
        </div>
    `;
    
    card.addEventListener('click', () => openModal(event));
    
    return card;
}

// ================================
// Timeline Rendering
// ================================
function renderTimeline() {
    const timelineContent = document.getElementById('timeline-content');
    if (!timelineContent) return;
    
    // Sort all events by date
    const parseDate = (dateStr) => {
        const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)\s+/, '$1 ');
        return new Date(cleaned);
    };
    
    const sortedEvents = [...eventsData.events].sort((a, b) => {
        return parseDate(a.date) - parseDate(b.date);
    });
    
    // Group events by date for milestones
    const eventsByDate = {};
    sortedEvents.forEach(event => {
        if (!eventsByDate[event.date]) {
            eventsByDate[event.date] = [];
        }
        eventsByDate[event.date].push(event);
    });
    
    let timelineHTML = '';
    let cardIndex = 0;
    
    Object.keys(eventsByDate).forEach((date) => {
        const events = eventsByDate[date];
        
        // Add date milestone marker
        timelineHTML += `
            <div class="timeline-milestone">
                <div class="timeline-milestone-dot"></div>
                <h3 class="timeline-milestone-date font-orbitron">${date}</h3>
            </div>
        `;
        
        // Add events for this date
        events.forEach(event => {
            const isLeft = cardIndex % 2 === 0;
            const side = isLeft ? 'left' : 'right';
            
            timelineHTML += `
                <div class="timeline-item timeline-item-${side}" data-event-id="${event.id}">
                    <div class="timeline-connector"></div>
                    <div class="timeline-dot-wrapper">
                        <div class="timeline-dot"></div>
                    </div>
                    <div class="timeline-card">
                        <div class="timeline-card-dept">${event.department}</div>
                        <h4 class="timeline-card-title">${event.name}</h4>
                        <div class="timeline-card-meta">
                            <span class="timeline-meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                ${event.time}
                            </span>
                            <span class="timeline-meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                </svg>
                                ${event.venue}
                            </span>
                        </div>
                        ${event.prize_pool ? `<div class="timeline-card-prize">${event.prize_pool}</div>` : ''}
                    </div>
                </div>
            `;
            
            cardIndex++;
        });
    });
    
    timelineContent.innerHTML = timelineHTML;
    
    // Add click handlers to timeline cards
    timelineContent.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            const eventId = parseInt(item.dataset.eventId);
            const event = eventsData.events.find(e => e.id === eventId);
            if (event) openModal(event);
        });
    });
    
    // Refresh scroll reveal for timeline cards
    setTimeout(() => {
        refreshScrollReveal();
    }, 100);
}

// ================================
// Timeline Scroll Animation
// ================================
function initTimelineScroll() {
    const timelineLine = document.querySelector('.timeline-line');
    const timelineSection = document.getElementById('schedule');
    if (!timelineLine || !timelineSection) return;
    
    // Create glowing dot
    const glowDot = document.createElement('div');
    glowDot.className = 'timeline-glow-dot';
    timelineLine.appendChild(glowDot);
    
    function updateDotPosition() {
        const sectionRect = timelineSection.getBoundingClientRect();
        const timelineRect = timelineLine.getBoundingClientRect();
        
        // Calculate how far we've scrolled into the timeline section
        const viewportHeight = window.innerHeight;
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        
        // Start when section enters viewport, end when section leaves
        const progress = Math.max(0, Math.min(1, 
            (viewportHeight - sectionTop) / (sectionHeight + viewportHeight * 0.5)
        ));
        
        // Position the dot along the timeline
        const dotY = progress * (timelineRect.height - 20);
        glowDot.style.top = `${dotY}px`;
        glowDot.style.opacity = progress > 0 && progress < 1 ? '1' : '0';
    }
    
    // Throttled scroll handler
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateDotPosition();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    updateDotPosition();
}

// ================================
// Modal Functions
// ================================
function openModal(event) {
    const modal = document.getElementById('event-modal');
    const modalBody = document.getElementById('modal-body');
    
    // Check if poster image exists
    const posterHTML = event.poster_image_path ? `
        <div class="poster-preview">
            <img src="${event.poster_image_path}" alt="${event.name} Poster" onerror="this.parentElement.style.display='none'">
        </div>
    ` : '';
    
    // Build rounds/sections HTML
    let roundsHTML = '';
    if (event.rounds_or_sections && event.rounds_or_sections.length > 0) {
        if (typeof event.rounds_or_sections[0] === 'string') {
            // Simple string array
            roundsHTML = `
                <div class="modal-rounds">
                    <h4>📋 What You'll Do</h4>
                    <ul>
                        ${event.rounds_or_sections.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        } else {
            // Object array with detailed rounds
            roundsHTML = `
                <div class="modal-rounds">
                    <h4>🎯 Event Rounds</h4>
                    ${event.rounds_or_sections.map(round => `
                        <div class="round-card">
                            <div class="round-name">${round.name}</div>
                            ${round.tagline ? `<div class="round-tagline text-gray-400 text-sm italic mb-2">"${round.tagline}"</div>` : ''}
                            ${round.time ? `<div class="round-time">⏰ ${round.time}</div>` : ''}
                            ${round.venue ? `<div class="round-venue">📍 ${round.venue}</div>` : ''}
                            ${round.deadline ? `<div class="round-venue">📅 Deadline: ${round.deadline}</div>` : ''}
                            ${round.description ? `<div class="round-desc">${round.description}</div>` : ''}
                            ${round.registration_link ? `<a href="${round.registration_link}" target="_blank" class="inline-block mt-2 text-sm text-cyan-400 hover:text-cyan-300">Register for this round →</a>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }
    
    // Build contacts HTML
    let contactsHTML = '';
    if (event.contact_numbers && event.contact_numbers.length > 0) {
        contactsHTML = `
            <div class="modal-contacts">
                <h4>📞 Contact Coordinators</h4>
                ${event.contact_numbers.map(contact => `
                    <div class="contact-item">
                        <svg class="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        <span>${contact.name}</span>
                        <span class="text-cyan-400">–</span>
                        <a href="tel:${contact.phone}" class="text-cyan-400 hover:text-cyan-300">${contact.phone}</a>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Build actions HTML
    let actionsHTML = '<div class="modal-actions">';
    
    if (event.registration_link && event.registration_link !== 'Scan QR code on poster' && event.registration_link !== 'See individual events') {
        actionsHTML += `
            <a href="${event.registration_link}" target="_blank" class="btn-register">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
                </svg>
                Register Now
            </a>
        `;
    } else if (event.registration_link) {
        actionsHTML += `
            <div class="text-center text-gray-400 py-3 px-6 bg-gray-800/50 rounded-lg flex-1">
                📱 ${event.registration_link}
            </div>
        `;
    }
    
    if (event.whatsapp_group) {
        actionsHTML += `
            <a href="${event.whatsapp_group}" target="_blank" class="btn-whatsapp">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Group
            </a>
        `;
    }
    
    actionsHTML += '</div>';
    
    modalBody.innerHTML = `
        ${posterHTML}
        
        <div class="modal-header">
            <div class="modal-department">${event.department}</div>
            <h2 class="modal-title">${event.name}</h2>
            <p class="modal-description">${event.description}</p>
        </div>
        
        <div class="modal-info-grid">
            <div class="modal-info-item">
                <div class="label">Date</div>
                <div class="value">📅 ${event.date}</div>
            </div>
            <div class="modal-info-item">
                <div class="label">Time</div>
                <div class="value">⏰ ${event.time}</div>
            </div>
            <div class="modal-info-item">
                <div class="label">Venue</div>
                <div class="value">📍 ${event.venue}</div>
            </div>
            <div class="modal-info-item">
                <div class="label">Team Size</div>
                <div class="value">👥 ${event.team_size}</div>
            </div>
        </div>
        
        <div class="modal-prize">
            <div class="prize-amount">🏆 ${event.prize_pool}</div>
            ${event.prize_breakdown ? `<div class="prize-breakdown">${event.prize_breakdown}</div>` : ''}
        </div>
        
        ${roundsHTML}
        ${contactsHTML}
        ${actionsHTML}
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('event-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ================================
// Filter Functions
// ================================
function initFilters() {
    const filterBtns = document.querySelectorAll('.date-filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get filter value and render events
            const filter = btn.getAttribute('data-date');
            renderEvents(filter);
        });
    });
}

// ================================
// Smooth Scroll (60fps optimized)
// ================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Use native smooth scroll for 60fps performance
                const navHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without triggering scroll
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Throttled scroll handler for nav effects
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateNavOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

function updateNavOnScroll() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.3)';
    }
}

// ================================
// Utility: Check if poster exists
// ================================
function checkPosterExists(path) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = path;
    });
}
