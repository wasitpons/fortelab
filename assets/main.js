// Main JavaScript for ForteLab website
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initMobileMenu();
  initScrollAnimations();
  initSmoothScrolling();
  initNavScrollEffect();
  initFormHandling();
});

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = mobileMenuBtn.querySelectorAll('span');
      if (mobileMenuBtn.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans.forEach(span => {
          span.style.transform = '';
          span.style.opacity = '';
        });
      }
    });

    // Close mobile menu when clicking on links
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = '';
          span.style.opacity = '';
        });
      });
    });
  }
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Add staggered animation for cards in the same section
        const cards = entry.target.parentElement?.querySelectorAll('.animate-on-scroll');
        if (cards && cards.length > 1) {
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 100);
          });
        }
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Navigation Scroll Effect
function initNavScrollEffect() {
  const nav = document.querySelector('.nav');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    
    if (nav) {
      if (currentScrollY > 100) {
        nav.style.background = 'rgba(255,255,255,0.98)';
        nav.style.borderBottomColor = 'rgba(237,240,245,1)';
      } else {
        nav.style.background = 'rgba(255,255,255,0.95)';
        nav.style.borderBottomColor = 'rgba(237,240,245,0.8)';
      }
    }
    
    lastScrollY = currentScrollY;
  });
}

// Form Handling
function initFormHandling() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
}

// Form Submit Handler
function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Get current language for success message
  const currentLang = document.body.classList.contains('lang-th') ? 'th' : 'en';
  const successMessage = translations[currentLang].contact.form.success;
  
  // Show loading state
  submitBtn.textContent = currentLang === 'th' ? 'กำลังส่ง...' : 'Sending...';
  submitBtn.disabled = true;
  
  // Simulate form submission (replace with actual form handling)
  setTimeout(() => {
    alert(successMessage);
    form.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1000);
}

// Utility function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add floating animation to hero shapes
function initFloatingShapes() {
  const shapes = document.querySelectorAll('.shape');
  
  shapes.forEach((shape, index) => {
    const randomDelay = Math.random() * 2;
    const randomDuration = 4 + Math.random() * 4;
    
    shape.style.animationDelay = `${randomDelay}s`;
    shape.style.animationDuration = `${randomDuration}s`;
  });
}

// Initialize floating shapes after DOM load
document.addEventListener('DOMContentLoaded', initFloatingShapes);

// Add parallax effect to hero gradient
function initParallaxEffect() {
  const heroGradient = document.querySelector('.hero-gradient');
  
  if (heroGradient) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      heroGradient.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
  }
}

// Add hover effects for cards
function initCardHoverEffects() {
  const cards = document.querySelectorAll('.card, .pill');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// Initialize additional effects
document.addEventListener('DOMContentLoaded', function() {
  initParallaxEffect();
  initCardHoverEffects();
});

// Add typing animation for hero title
function initTypingAnimation() {
  const heroTitle = document.querySelector('.hero h1[data-i18n="hero.title"]');
  
  if (heroTitle && window.innerWidth > 768) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid var(--blue)';
    
    let i = 0;
    const typeWriter = function() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        setTimeout(() => {
          heroTitle.style.borderRight = 'none';
        }, 1000);
      }
    };
    
    setTimeout(typeWriter, 500);
  }
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
  // Any scroll-based animations can be added here
}, 16)); // ~60fps