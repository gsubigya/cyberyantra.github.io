// Cyberyantra Website JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav__link");

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });

  // Header scroll effect
  const header = document.getElementById("header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
      header.style.backdropFilter = "blur(20px)";
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.backdropFilter = "blur(10px)";
      header.style.boxShadow = "none";
    }

    // Check for dark mode
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      if (scrollTop > 100) {
        header.style.background = "rgba(31, 33, 33, 0.98)";
      } else {
        header.style.background = "rgba(31, 33, 33, 0.95)";
      }
    }

    lastScrollTop = scrollTop;
  });

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Animated counter for statistics
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(function () {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      // Format number with + for display
      if (target >= 1000) {
        element.textContent = Math.floor(current / 1000) + "K+";
      } else {
        element.textContent = Math.floor(current) + "+";
      }
    }, 16);
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Animate counters when stats section is visible
        if (entry.target.classList.contains("hero__stats")) {
          const counters = entry.target.querySelectorAll(".stat__number");
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute("data-target"));
            animateCounter(counter, target);
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add fade-in animation to sections
  const animatedElements = document.querySelectorAll(
    ".hero__stats, .alert-card, .resource-card, .event-card, .involvement-card"
  );
  animatedElements.forEach((element) => {
    element.classList.add("fade-in");
    observer.observe(element);
  });

  // Active navigation link highlighting
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(
        `.nav__link[href="#${sectionId}"]`
      );

      if (
        navLink &&
        scrollPos >= sectionTop &&
        scrollPos < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink);

  // Card hover effects
  const cards = document.querySelectorAll(
    ".alert-card, .resource-card, .event-card, .involvement-card"
  );
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Button click effects
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

      // Add ripple animation CSS if not exists
      if (!document.querySelector("#ripple-styles")) {
        const style = document.createElement("style");
        style.id = "ripple-styles";
        style.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(2);
                            opacity: 0;
                        }
                    }
                    .btn {
                        position: relative;
                        overflow: hidden;
                    }
                `;
        document.head.appendChild(style);
      }

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Service item hover animations
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px) scale(1.02)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Lazy loading for better performance
  const lazyElements = document.querySelectorAll(
    ".card, .alert-card, .resource-card, .event-card"
  );
  const lazyObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          lazyObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  lazyElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease-out";
    lazyObserver.observe(element);
  });

  // Keyboard navigation support
  document.addEventListener("keydown", function (e) {
    // Close mobile menu with Escape key
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    }
  });

  // Focus management for accessibility
  const focusableElements = document.querySelectorAll(
    'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  );

  // Skip link functionality (if added)
  const skipLink = document.querySelector(".skip-link");
  if (skipLink) {
    skipLink.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.focus();
        target.scrollIntoView();
      }
    });
  }

  // Form validation (for future contact forms)
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      const requiredFields = form.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("error");
          field.addEventListener("input", function () {
            this.classList.remove("error");
          });
        }
      });

      if (!isValid) {
        e.preventDefault();
        const firstError = form.querySelector(".error");
        if (firstError) {
          firstError.focus();
        }
      }
    });
  });

  // Theme detection and handling
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  function handleThemeChange(e) {
    // Update header background on theme change
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      if (e.matches) {
        header.style.background = "rgba(31, 33, 33, 0.98)";
      } else {
        header.style.background = "rgba(255, 255, 255, 0.98)";
      }
    }
  }

  prefersDarkScheme.addEventListener("change", handleThemeChange);

  // Performance monitoring
  let scrollTicking = false;

  function requestScrollUpdate() {
    if (!scrollTicking) {
      requestAnimationFrame(updateActiveNavLink);
      scrollTicking = true;
    }
  }

  // Throttled scroll event
  window.addEventListener("scroll", function () {
    scrollTicking = false;
    requestScrollUpdate();
  });

  // Error handling for external links
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      try {
        // Add security attributes for external links
        this.setAttribute("rel", "noopener noreferrer");
      } catch (error) {
        console.warn(
          "Could not set security attributes for external link:",
          error
        );
      }
    });
  });

  // Loading animation (if needed)
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");

    // Remove any loading overlays
    const loader = document.querySelector(".loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 300);
    }
  });

  // Initialize tooltips (if any)
  const tooltipElements = document.querySelectorAll("[data-tooltip]");
  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      const tooltipText = this.getAttribute("data-tooltip");
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = tooltipText;
      tooltip.style.cssText = `
                position: absolute;
                background: var(--color-charcoal-800);
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 12px;
                white-space: nowrap;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
            `;

      document.body.appendChild(tooltip);

      const rect = this.getBoundingClientRect();
      tooltip.style.left =
        rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
      tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + "px";

      setTimeout(() => {
        tooltip.style.opacity = "1";
      }, 10);

      this.addEventListener(
        "mouseleave",
        function () {
          tooltip.remove();
        },
        { once: true }
      );
    });
  });

  // Console welcome message
  console.log(
    "%cCyberyantra",
    "color: #2563eb; font-size: 16px; font-weight: bold;"
  );
  console.log(
    "%cEmpowering Digital Safety & Security Awareness",
    "color: #6b7280; font-size: 12px;"
  );
  console.log(
    "%cFor security reports: security@cyberyantra.com",
    "color: #059669; font-size: 12px;"
  );
});

// Utility functions
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Export functions for potential use in other scripts
window.CyberyantraUtils = {
  debounce,
  throttle,
};

