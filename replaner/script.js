/**
 * Replaner - Enhanced JavaScript
 * Modern interactions, smooth animations, and improved UX
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // MOBILE MENU
    // ============================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking links
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    let ticking = false;

    const updateNavbar = () => {
        const currentScroll = window.pageYOffset;
        
        if (navbar) {
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        lastScroll = currentScroll;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });

    // ============================================
    // FAQ ACCORDION
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // ============================================
    // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
    // ============================================
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const parent = card.parentElement;
                
                if (parent && (parent.classList.contains('steps-grid') || 
                              parent.classList.contains('benefits-grid') ||
                              parent.classList.contains('audience-grid') ||
                              parent.classList.contains('stats-grid'))) {
                    const siblings = Array.from(parent.children);
                    const index = siblings.indexOf(card);
                    card.style.transitionDelay = `${index * 0.1}s`;
                }
                
                card.classList.add('visible');
                observer.unobserve(card);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    animateElements.forEach(element => observer.observe(element));

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // PHONE MOCKUP TILT EFFECT (Desktop only)
    // ============================================
    const phoneMockup = document.querySelector('.phone-mockup');
    
    if (phoneMockup && window.matchMedia('(pointer: fine)').matches) {
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual) {
            heroVisual.addEventListener('mousemove', (e) => {
                const rect = heroVisual.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                phoneMockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });
            
            heroVisual.addEventListener('mouseleave', () => {
                phoneMockup.style.transform = '';
            });
        }
    }

    // ============================================
    // STAT COUNTER ANIMATION
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const text = element.textContent;
        const numMatch = text.match(/[\d.]+/);
        
        if (!numMatch) return;
        
        const targetNum = parseFloat(numMatch[0]);
        const suffix = text.replace(/[\d.]+/, '');
        const isDecimal = targetNum % 1 !== 0;
        const duration = 2000;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const currentNum = targetNum * easeProgress;
            
            if (isDecimal) {
                element.textContent = currentNum.toFixed(1) + suffix;
            } else {
                element.textContent = Math.floor(currentNum) + suffix;
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = text;
            }
        };
        
        requestAnimationFrame(updateCounter);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber) {
                    animateCounter(statNumber);
                }
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-card').forEach(card => {
        statsObserver.observe(card);
    });

    // ============================================
    // COMING SOON POPUP FOR LINKS
    // ============================================
    const placeholderLinks = document.querySelectorAll('a[href="#"]');
    
    placeholderLinks.forEach(link => {
        if (link.closest('.mobile-nav') || link.classList.contains('logo')) return;
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const toast = document.createElement('div');
            toast.textContent = 'Coming soon!';
            toast.style.cssText = `
                position: fixed;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                background: #132A13;
                color: white;
                padding: 0.75rem 1.5rem;
                border-radius: 999px;
                font-weight: 500;
                z-index: 9999;
                animation: fadeSlideUp 0.3s ease;
                box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'fadeSlideDown 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        });
    });

    // Add toast animations to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateX(-50%) translateY(20px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes fadeSlideDown {
            from { opacity: 1; transform: translateX(-50%) translateY(0); }
            to { opacity: 0; transform: translateX(-50%) translateY(20px); }
        }
    `;
    document.head.appendChild(style);

    console.log('Replaner initialized successfully');
});
