/**
 * Cyberyantra Landing Page JavaScript
 * Handles interactions, animations, and user experience enhancements
 */

(function() {
    'use strict';

    // DOM elements
    const linkButtons = document.querySelectorAll('.link-button');
    const logoPlaceholder = document.querySelector('.logo-placeholder');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    // Initialize the application
    function init() {
        setupLinkInteractions();
        setupLogoInteraction();
        setupSmoothScrolling();
        setupKeyboardNavigation();
        handlePageLoad();
    }

    /**
     * Setup link button interactions and analytics
     */
    function setupLinkInteractions() {
        linkButtons.forEach((button, index) => {
            // Add hover sound effect preparation (visual feedback)
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });

            // Add click tracking - Fixed to properly handle new tab opening
            button.addEventListener('click', function(e) {
                const platform = this.getAttribute('data-platform');
                const linkText = this.querySelector('.link-text').textContent;
                const url = this.href;
                
                // Add click animation without preventing default
                this.style.transform = 'translateY(1px) scale(0.98)';
                
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);

                // Track the click (ready for analytics integration)
                trackLinkClick(platform, linkText, url);
                
                // Let the browser handle the link normally (target="_blank" will work)
                // No preventDefault() here to allow normal link behavior
            });

            // Add keyboard interaction
            button.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Simulate click which will open in new tab
                    const url = this.href;
                    window.open(url, '_blank');
                    
                    // Track the interaction
                    const platform = this.getAttribute('data-platform');
                    const linkText = this.querySelector('.link-text').textContent;
                    trackLinkClick(platform, linkText, url);
                }
            });
        });
    }

    /**
     * Setup logo interactions
     */
    function setupLogoInteraction() {
        if (logoPlaceholder) {
            let clickCount = 0;
            
            logoPlaceholder.addEventListener('click', function() {
                clickCount++;
                
                // Easter egg: Multiple clicks trigger special animation
                if (clickCount >= 5) {
                    this.style.animation = 'spin 1s ease-in-out';
                    clickCount = 0;
                    
                    setTimeout(() => {
                        this.style.animation = '';
                    }, 1000);
                } else {
                    // Regular click animation
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 200);
                }
            });
        }
    }

    /**
     * Setup smooth scrolling for any anchor links
     */
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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
    }

    /**
     * Setup keyboard navigation improvements
     */
    function setupKeyboardNavigation() {
        // Allow navigation through links with arrow keys
        let currentFocusIndex = -1;
        const focusableElements = Array.from(linkButtons);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                
                if (e.key === 'ArrowDown') {
                    currentFocusIndex = Math.min(currentFocusIndex + 1, focusableElements.length - 1);
                } else {
                    currentFocusIndex = Math.max(currentFocusIndex - 1, 0);
                }
                
                if (focusableElements[currentFocusIndex]) {
                    focusableElements[currentFocusIndex].focus();
                }
            }
        });
    }

    /**
     * Handle page load optimizations
     */
    function handlePageLoad() {
        // Optimize for performance
        if ('requestIdleCallback' in window) {
            requestIdleCallback(function() {
                // Preload critical resources
                preloadCriticalResources();
            });
        }

        // Add loaded class for any additional styling
        document.body.classList.add('page-loaded');
    }

    /**
     * Preload critical external resources
     */
    function preloadCriticalResources() {
        const links = [
            'https://cyberyantra.com',
            'https://linkedin.com/company/cyberyantra',
            'https://instagram.com/cyberyantra'
        ];

        links.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'dns-prefetch';
            link.href = url;
            document.head.appendChild(link);
        });
    }

    /**
     * Track link clicks (ready for analytics integration)
     */
    function trackLinkClick(platform, linkText, url) {
        // Placeholder for analytics tracking
        console.log(`Link clicked: ${platform} - ${linkText} - ${url}`);
        
        // This is where you would integrate with analytics services like:
        // - Google Analytics
        // - Mixpanel
        // - Custom tracking solution
        
        // Example for future Google Analytics integration:
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'click', {
        //         'event_category': 'Social Links',
        //         'event_label': platform,
        //         'value': 1
        //     });
        // }
    }

    /**
     * Theme detection and handling
     */
    function handleThemePreference() {
        // Respect user's color scheme preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        prefersDark.addEventListener('change', function(e) {
            // Handle theme changes if needed
            document.body.classList.toggle('dark-mode', e.matches);
        });
    }

    /**
     * Error handling for robustness
     */
    function setupErrorHandling() {
        window.addEventListener('error', function(e) {
            console.log('Page error handled gracefully:', e.error);
            // Could send error reports to monitoring service
        });
    }

    /**
     * Performance monitoring
     */
    function setupPerformanceMonitoring() {
        // Monitor page load performance
        window.addEventListener('load', function() {
            if ('performance' in window) {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log(`Page loaded in ${loadTime}ms`);
            }
        });
    }

    /**
     * Add spin animation for logo easter egg
     */
    function addSpinAnimation() {
        if (!document.getElementById('spin-keyframes')) {
            const style = document.createElement('style');
            style.id = 'spin-keyframes';
            style.textContent = `
                @keyframes spin {
                    from { transform: rotate(0deg) scale(1); }
                    50% { transform: rotate(180deg) scale(1.1); }
                    to { transform: rotate(360deg) scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    /**
     * Setup intersection observer for animation triggers
     */
    function setupIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            }, {
                threshold: 0.1
            });

            // Observe elements that need animation triggers
            [header, footer, ...linkButtons].forEach(el => {
                if (el) observer.observe(el);
            });
        }
    }

    /**
     * Mobile-specific optimizations
     */
    function setupMobileOptimizations() {
        // Prevent zoom on form inputs on iOS
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            const viewport = document.querySelector('meta[name=viewport]');
            if (viewport) {
                viewport.setAttribute('content', 
                    viewport.getAttribute('content') + ', user-scalable=no'
                );
            }
        }

        // Optimize touch interactions
        linkButtons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.classList.add('touched');
            }, { passive: true });

            button.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touched');
                }, 300);
            }, { passive: true });
        });
    }

    // Initialize everything when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            init();
            addSpinAnimation();
            setupIntersectionObserver();
            handleThemePreference();
            setupErrorHandling();
            setupPerformanceMonitoring();
            setupMobileOptimizations();
        });
    } else {
        init();
        addSpinAnimation();
        setupIntersectionObserver();
        handleThemePreference();
        setupErrorHandling();
        setupPerformanceMonitoring();
        setupMobileOptimizations();
    }

    // Expose useful functions to global scope if needed for debugging
    window.CyberyantraLanding = {
        trackLinkClick: trackLinkClick,
        version: '1.0.1'
    };

})();
