// ===== LINGUABRIDGE — SHARED COMPONENTS =====
// Language Coaching & Translation Service
// Shared navbar + footer injected across all pages

(function () {
    'use strict';

    // --- Configuration ---
    const BRAND_NAME = 'LinguaBridge';
    const BRAND_TAGLINE = 'Language Coaching & Translation Service';
    const CURRENT_YEAR = new Date().getFullYear();
    const PHONE = '+1 (555) 724-8190';
    const EMAIL = 'hello@linguabridge.co';
    const ADDRESS = '42 Polyglot Avenue, Suite 300';

    const NAV_LINKS = [
        { label: 'Home', href: 'index.html' },
        { label: 'Home 2', href: 'home2.html' },
        { label: 'About', href: 'about.html' },
        { label: 'Services', href: 'services.html' },
        { label: 'Coaching', href: 'coaching.html' },
        { label: 'Pricing', href: 'pricing.html' },
        { label: 'Contact', href: 'contact.html' }
    ];

    const SOCIAL_LINKS = [
        { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
        { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
        { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
        { icon: 'fab fa-instagram', href: '#', label: 'Instagram' }
    ];

    // --- Brand Logo SVG (Globe with L) ---
    const LOGO_SVG = `<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="var(--logo-primary)"/>
                <stop offset="50%" stop-color="#93C5FD"/>
                <stop offset="100%" stop-color="var(--logo-primary)"/>
            </linearGradient>
        </defs>
        <!-- Outer globe circle -->
        <circle cx="50" cy="50" r="45" stroke="var(--logo-primary)" stroke-width="2" stroke-opacity="0.5" fill="none"/>
        <!-- Globe lines -->
        <ellipse cx="50" cy="50" rx="28" ry="45" stroke="var(--logo-primary)" stroke-width="1" stroke-opacity="0.3" fill="none"/>
        <line x1="5" y1="50" x2="95" y2="50" stroke="var(--logo-primary)" stroke-width="1" stroke-opacity="0.3"/>
        <ellipse cx="50" cy="35" rx="38" ry="8" stroke="var(--logo-primary)" stroke-width="0.8" stroke-opacity="0.2" fill="none"/>
        <ellipse cx="50" cy="65" rx="38" ry="8" stroke="var(--logo-primary)" stroke-width="0.8" stroke-opacity="0.2" fill="none"/>
        <!-- Inner circle glow -->
        <circle cx="50" cy="50" r="22" fill="url(#blueGrad)" fill-opacity="0.10" stroke="url(#blueGrad)" stroke-width="1.5"/>
        <!-- L Letter -->
        <path d="M42 35 L42 65 L60 65" stroke="var(--logo-primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`;

    // --- Get current page filename ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // --- Render Navbar ---
    function renderNavbar() {
        const navLinksDesktop = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage ||
                             (currentPage === '' && link.href === 'index.html') ||
                             (currentPage === 'language' && link.href === 'index.html');
            return `<a href="${link.href}" class="nav-link whitespace-nowrap text-[12.5px] font-semibold tracking-widest uppercase transition-all duration-300 hover:text-[#2563EB] relative group ${isActive ? 'text-[#2563EB]' : 'text-neutral-700 dark:text-neutral-300'}">
                ${link.label}
                <span class="absolute -bottom-1 left-0 h-[1.5px] bg-[#2563EB] transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}"></span>
            </a>`;
        }).join('');

        const navLinksMobile = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage || (currentPage === '' && link.href === 'index.html');
            return `<a href="${link.href}" class="nav-link flex items-center px-5 py-4 text-sm font-semibold uppercase tracking-wider border-b border-neutral-100 dark:border-[#334155] hover:text-[#2563EB] transition-all ${isActive ? 'text-[#2563EB] bg-blue-50/40 dark:bg-[#2563EB]/5' : 'text-neutral-700 dark:text-neutral-200'}">
                ${link.label}
            </a>`;
        }).join('');

        return `
        <nav id="main-nav" class="sticky top-0 z-50 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#334155] transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-6">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <a href="index.html" class="flex items-center gap-2.5 group shrink-0">
                        ${LOGO_SVG}
                        <span class="font-bold text-xl tracking-tight text-[#0F172A] dark:text-[#F1F5F9] group-hover:text-[#2563EB] transition-colors" style="font-family: 'Playfair Display', serif;">
                            ${BRAND_NAME}
                        </span>
                    </a>

                    <!-- Desktop Nav -->
                    <div id="desktop-links" class="hidden xl:flex items-center gap-4 xl:gap-5">
                        ${navLinksDesktop}
                    </div>

                    <!-- Right Actions -->
                    <div class="flex items-center gap-2">
                        <!-- RTL Toggle -->
                        <button id="dir-toggle" class="js-dir-toggle hidden xl:flex w-10 h-10 items-center justify-center rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] hover:border-[#2563EB] text-neutral-500 dark:text-neutral-400 hover:text-[#2563EB] transition-all shadow-sm" aria-label="Toggle RTL">
                            <i class="fas fa-exchange-alt text-sm"></i>
                        </button>

                        <!-- Theme Toggle -->
                        <button id="theme-toggle-desktop" class="js-theme-toggle hidden xl:flex w-10 h-10 items-center justify-center rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] hover:border-[#2563EB] text-neutral-500 dark:text-neutral-400 hover:text-[#2563EB] transition-all shadow-sm" aria-label="Toggle theme">
                            <i class="fas fa-moon text-sm"></i>
                        </button>

                        <!-- Secondary CTA -->
                        <a href="signup.html" class="hidden xl:inline-flex items-center gap-2 border border-[#2563EB] text-[#2563EB] px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-[#2563EB] hover:text-white transition-all whitespace-nowrap">
                            Sign Up
                        </a>

                        <!-- Mobile Menu Btn -->
                        <button id="mobile-menu-btn" class="xl:hidden p-2.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-neutral-700 dark:text-neutral-300 transition-all" aria-label="Toggle menu">
                            <i class="fas fa-bars text-lg" id="menu-icon"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden xl:hidden border-b border-[#E2E8F0] dark:border-[#334155]" style="position: absolute; top: 100%; left: 0; right: 0; z-index: 100; max-height: 85vh; overflow-y: auto;">
                <div class="max-w-7xl mx-auto pt-2 pb-6">
                    <div class="flex flex-col gap-0 mb-4">
                        ${navLinksMobile}
                    </div>
                    <div class="flex flex-col sm:flex-row items-center gap-3 px-5 pt-4 border-t border-neutral-100 dark:border-[#334155]">
                        <div class="flex gap-2 w-full sm:w-auto">
                            <button class="js-dir-toggle flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-neutral-600 dark:text-neutral-400 flex-1 sm:flex-none justify-center text-sm">
                                <i class="fas fa-exchange-alt text-sm"></i>
                                <span class="text-xs font-bold uppercase tracking-wider">LTR / RTL</span>
                            </button>
                            <button class="js-theme-toggle flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-neutral-600 dark:text-neutral-400 flex-1 sm:flex-none justify-center text-sm">
                                <i class="fas fa-moon text-sm"></i>
                                <span class="text-xs font-bold uppercase tracking-wider">Theme</span>
                            </button>
                        </div>
                        <div class="flex gap-2 w-full sm:w-auto">
                            <a href="signup.html" class="flex-1 sm:flex-none text-center border border-[#2563EB] text-[#2563EB] px-5 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#2563EB] hover:text-white transition-all">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`;
    }

    // --- Render Footer ---
    function renderFooter() {
        const socialLinksHtml = SOCIAL_LINKS.map(s =>
            `<a href="${s.href}" aria-label="${s.label}" class="w-10 h-10 flex items-center justify-center rounded-full border border-[#E2E8F0] dark:border-[#334155] text-neutral-500 dark:text-neutral-400 hover:text-[#2563EB] hover:border-[#2563EB] hover:-translate-y-1 transition-all duration-300">
                <i class="${s.icon} text-sm"></i>
            </a>`
        ).join('');

        return `
        <footer class="bg-[#F1F5F9] dark:bg-[#060C1A] border-t border-[#E2E8F0] dark:border-[#334155] pt-16 pb-6 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <!-- Main Footer Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
                    <!-- Brand -->
                    <div class="lg:col-span-1 space-y-5">
                        <a href="index.html" class="flex items-center gap-2.5 group">
                            ${LOGO_SVG}
                            <span class="font-bold text-xl tracking-tight text-[#0F172A] dark:text-[#F1F5F9]" style="font-family: 'Playfair Display', serif;">${BRAND_NAME}</span>
                        </a>
                        <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            ${BRAND_TAGLINE}. Connecting people and businesses across languages with precision, speed, and cultural expertise.
                        </p>
                        <div class="flex gap-3">${socialLinksHtml}</div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="font-bold mb-5 text-[#0F172A] dark:text-white uppercase text-xs tracking-[0.15em]">Quick Links</h4>
                        <ul class="space-y-2.5">
                            <li><a href="index.html" class="footer-link">Home</a></li>
                            <li><a href="home2.html" class="footer-link">Home 2 — Premium</a></li>
                            <li><a href="services.html" class="footer-link">Services</a></li>
                            <li><a href="pricing.html" class="footer-link">Pricing</a></li>
                            <li><a href="about.html" class="footer-link">About Us</a></li>
                        </ul>
                    </div>

                    <!-- Resources -->
                    <div>
                        <h4 class="font-bold mb-5 text-[#0F172A] dark:text-white uppercase text-xs tracking-[0.15em]">Resources</h4>
                        <ul class="space-y-2.5">
                            <li><a href="contact.html" class="footer-link">Contact Us</a></li>
                            <li><a href="coming-soon.html" class="footer-link">Coming Soon</a></li>
                            <li><a href="404.html" class="footer-link">404 Page</a></li>
                            <li><a href="login.html" class="footer-link">Sign In</a></li>
                        </ul>
                    </div>

                    <!-- Newsletter -->
                    <div class="bg-white dark:bg-[#111827] p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#334155]">
                        <h4 class="font-bold mb-2 text-[#0F172A] dark:text-white" style="font-family:'Playfair Display',serif;font-size:1.1rem;">Stay Connected</h4>
                        <p class="text-xs text-neutral-500 dark:text-neutral-400 mb-4">Subscribe for language tips, industry insights & exclusive offers.</p>
                        <form id="newsletter-form" class="space-y-2.5">
                            <input type="email" required placeholder="your@email.com"
                                class="w-full px-4 py-3 text-sm bg-[#F8FAFC] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 rounded-xl outline-none transition-all dark:text-white placeholder:text-neutral-400" />
                            <button type="submit" class="w-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#3B82F6] hover:to-[#2563EB] text-white text-sm font-bold py-3 rounded-xl transition-all">
                                Subscribe
                            </button>
                        </form>
                        <p id="newsletter-success" class="hidden text-xs text-emerald-500 mt-2 font-bold text-center">✦ Thank you for subscribing!</p>
                    </div>
                </div>

                <!-- Bottom Bar -->
                <div class="border-t border-[#E2E8F0] dark:border-[#334155] pt-8">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p class="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                            &copy; ${CURRENT_YEAR} ${BRAND_NAME}. Bridging languages worldwide.
                        </p>
                        <div class="flex items-center gap-6">
                            <a href="#" class="text-[11px] uppercase tracking-widest text-neutral-400 hover:text-[#2563EB] transition-colors">Privacy</a>
                            <a href="#" class="text-[11px] uppercase tracking-widest text-neutral-400 hover:text-[#2563EB] transition-colors">Terms</a>
                            <span class="text-[11px] uppercase tracking-widest text-neutral-400">${PHONE}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Back to Top -->
        <button id="back-to-top" aria-label="Back to top" class="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white border-none cursor-pointer opacity-0 translate-y-5 transition-all duration-300 hover:-translate-y-1 hover:scale-110 shadow-lg shadow-[#2563EB]/30 active:scale-95">
            <i class="fas fa-chevron-up text-sm"></i>
        </button>`;
    }

    // --- Inject Global Styles ---
    function injectGlobalStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .card { display: flex !important; flex-direction: column !important; height: 100% !important; align-self: stretch !important; }
            .card > *:last-child { margin-top: auto !important; }
            .pricing-card { display: flex !important; flex-direction: column !important; height: 100% !important; align-self: stretch !important; }
            .pricing-card .btn { margin-top: auto !important; }
            .grid-2 { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; align-items: stretch !important; }
            .grid-3 { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 24px !important; align-items: stretch !important; }
            .grid-4 { display: grid !important; grid-template-columns: repeat(4, 1fr) !important; gap: 24px !important; align-items: stretch !important; }
            .animate-on-scroll.visible { transform: none !important; will-change: auto !important; }
            @media (max-width: 1024px) {
                .grid-2 { grid-template-columns: 1fr !important; }
                .grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
                .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 769px) and (max-width: 1024px) {
                .grid-3 > *:last-child:nth-child(odd),
                .grid-4 > *:last-child:nth-child(odd) {
                    grid-column: 1 / span 2 !important;
                    max-width: calc(50% - 12px) !important;
                    width: 100% !important;
                    margin: 0 auto !important;
                }
            }
            @media (max-width: 768px) {
                .grid-3 { grid-template-columns: 1fr !important; }
                .grid-4 { grid-template-columns: 1fr !important; }
            }
        `;
        document.head.appendChild(style);
    }

    // --- Initialize ---
    function init() {
        injectGlobalStyles();

        const navContainer = document.getElementById('navbar-container');
        if (navContainer) navContainer.innerHTML = renderNavbar();

        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) footerContainer.innerHTML = renderFooter();

        initTheme();
        initDirection();
        initMobileMenu();
        initScrollEffects();
        initNewsletter();
        initScrollReveal();
    }

    // --- Theme ---
    function initTheme() {
        const html = document.documentElement;
        const themeBtns = document.querySelectorAll('.js-theme-toggle');

        const setTheme = (isDark) => {
            if (isDark) {
                html.classList.add('dark');
                themeBtns.forEach(btn => {
                    const icon = btn.querySelector('i');
                    if (icon) icon.className = 'fas fa-sun text-sm text-yellow-400';
                    const span = btn.querySelector('span');
                    if (span) span.textContent = 'Light Mode';
                });
                localStorage.setItem('lb-dark-mode', 'true');
            } else {
                html.classList.remove('dark');
                themeBtns.forEach(btn => {
                    const icon = btn.querySelector('i');
                    if (icon) icon.className = 'fas fa-moon text-sm';
                    const span = btn.querySelector('span');
                    if (span) span.textContent = 'Dark Mode';
                });
                localStorage.setItem('lb-dark-mode', 'false');
            }
        };

        themeBtns.forEach(btn => btn.addEventListener('click', () => setTheme(!html.classList.contains('dark'))));

        const stored = localStorage.getItem('lb-dark-mode');
        if (stored === 'true' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    }

    // --- Direction ---
    function initDirection() {
        const html = document.documentElement;
        const dirBtns = document.querySelectorAll('.js-dir-toggle');

        const setDir = (dir) => {
            html.setAttribute('dir', dir);
            localStorage.setItem('lb-rtl', dir === 'rtl' ? 'true' : 'false');
            dirBtns.forEach(btn => {
                const span = btn.querySelector('span');
                if (span) span.textContent = dir === 'rtl' ? 'RTL' : 'LTR';
            });
        };

        dirBtns.forEach(btn => btn.addEventListener('click', () => {
            setDir((html.getAttribute('dir') || 'ltr') === 'ltr' ? 'rtl' : 'ltr');
        }));

        localStorage.getItem('lb-rtl') === 'true' ? setDir('rtl') : setDir('ltr');
    }

    // --- Mobile Menu ---
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.toggle('hidden');
                if (menuIcon) menuIcon.className = isHidden ? 'fas fa-bars text-lg' : 'fas fa-times text-lg';
            });
        }
    }

    // --- Scroll Effects ---
    function initScrollEffects() {
        const backToTop = document.getElementById('back-to-top');
        const nav = document.getElementById('main-nav');

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            if (backToTop) {
                backToTop.classList.toggle('opacity-0', scrollTop <= 400);
                backToTop.classList.toggle('translate-y-5', scrollTop <= 400);
                backToTop.classList.toggle('opacity-100', scrollTop > 400);
                backToTop.classList.toggle('translate-y-0', scrollTop > 400);
            }
            if (nav) nav.classList.toggle('shadow-lg', scrollTop > 10);
        });

        if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // --- Newsletter ---
    function initNewsletter() {
        const form = document.getElementById('newsletter-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const btn = this.querySelector('button[type="submit"]');
                const success = document.getElementById('newsletter-success');
                btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Subscribing...';
                setTimeout(() => {
                    this.classList.add('hidden');
                    if (success) success.classList.remove('hidden');
                }, 1500);
            });
        }
    }

    // --- Scroll Reveal ---
    function initScrollReveal() {
        const revealEls = document.querySelectorAll('.reveal');
        if (!revealEls.length) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealEls.forEach(el => observer.observe(el));
    }

    // --- DOM Ready ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
