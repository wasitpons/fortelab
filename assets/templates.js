// Template System for ForteLab Website (CORS-free alternative)
// This system embeds all templates in JavaScript to avoid CORS issues

const Templates = {
  
  navigation: `
    <!-- Nav -->
    <header class="nav">
      <div class="container nav-inner">
        <a class="brand" href="#">
          <img class="logo" src="./assets/fortelab_icon.svg" alt="ForteLab logo icon" />
          <span class="wordmark">ForteLab</span>
        </a>
        
        <!-- Desktop Navigation -->
        <nav class="menu desktop-menu">
          <div class="menu-item dropdown">
            <a href="#solutions" data-i18n="nav.solutions">Solutions</a>
            <div class="dropdown-content">
              <div class="dropdown-section">
                <h4>AI Tools</h4>
                <a href="#solutions">Content Studio</a>
                <a href="#solutions">Data Analytics</a>
                <a href="#solutions">Creative Tools</a>
              </div>
            </div>
          </div>
          <a href="#use-cases" data-i18n="nav.useCases">Use Cases</a>
          <a href="#newsletter" data-i18n="nav.newsletter">Newsletter</a>
          <a href="#why" data-i18n="nav.why">Why ForteLab</a>
          <div class="menu-item dropdown">
            <a href="#developers" data-i18n="nav.developers">Developers</a>
            <div class="dropdown-content">
              <div class="dropdown-section">
                <h4>Resources</h4>
                <a href="#developers">Documentation</a>
                <a href="#developers">API Reference</a>
                <a href="#developers">Code Samples</a>
              </div>
            </div>
          </div>
          
          <!-- Language Switcher -->
          <div class="language-switcher">
            <button class="lang-btn" data-lang-switch="en">EN</button>
            <button class="lang-btn" data-lang-switch="th">TH</button>
          </div>
          
        </nav>
        
        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <nav class="mobile-menu">
        <div class="mobile-menu-content">
          <a href="#solutions" data-i18n="nav.solutions">Solutions</a>
          <a href="#use-cases" data-i18n="nav.useCases">Use Cases</a>
          <a href="#newsletter" data-i18n="nav.newsletter">Newsletter</a>
          <a href="#why" data-i18n="nav.why">Why ForteLab</a>
          <a href="#developers" data-i18n="nav.developers">Developers</a>
          <div class="mobile-language-switcher">
            <button class="lang-btn" data-lang-switch="en">English</button>
            <button class="lang-btn" data-lang-switch="th">ไทย</button>
          </div>
        </div>
      </nav>
    </header>
  `,

  hero: `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-gradient"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 data-i18n="hero.title" class="animate-in">Build powerful AI‑first experiences</h1>
          <p data-i18n="hero.subtitle" class="animate-in">Connect people, data, and ideas with a single platform. Create content, analyze insights, and bring imagination to life — simply and securely.</p>
          <div class="hero-cta animate-in">
            <a class="btn" href="#contact" data-i18n="hero.cta1">Get Started</a>
            <a class="btn btn--ghost" href="#contact" data-i18n="hero.cta2">Talk to us</a>
          </div>
          <ul class="hero-bullets animate-in">
            <li data-i18n="hero.bullet1">99.99% reliability</li>
            <li data-i18n="hero.bullet2">SOC2‑ready mindset</li>
            <li data-i18n="hero.bullet3">GDPR‑aware design</li>
          </ul>
        </div>
        <div class="hero-art">
          <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
          </div>
        </div>
      </div>
      <!-- User Reviews -->
      <div class="container reviews animate-in">
        <h3 data-i18n="reviews.title" class="reviews-title">What Our Partners & Investors Say</h3>
        <div class="reviews-grid">
          <div class="review-card">
            <div class="review-content">
              <p data-i18n="reviews.review1.quote">"ForteLab's innovation approach has consistently delivered breakthrough solutions. Their ability to balance creativity with practical productivity tools makes them an ideal partner."</p>
            </div>
            <div class="review-author">
              <div class="author-info">
                <h4 data-i18n="reviews.review1.name">Sarah Chen</h4>
                <span data-i18n="reviews.review1.role">Managing Partner, Innovation Ventures</span>
              </div>
            </div>
          </div>
          
          <div class="review-card">
            <div class="review-content">
              <p data-i18n="reviews.review2.quote">"The team at ForteLab understands both the technical depth and market needs. Their dual focus on productivity and creativity sets them apart in the AI space."</p>
            </div>
            <div class="review-author">
              <div class="author-info">
                <h4 data-i18n="reviews.review2.name">Marcus Rodriguez</h4>
                <span data-i18n="reviews.review2.role">Strategic Partner, TechForward Capital</span>
              </div>
            </div>
          </div>

          <div class="review-card">
            <div class="review-content">
              <p data-i18n="reviews.review3.quote">"Working with ForteLab has accelerated our digital transformation. Their tools genuinely improve both efficiency and inspire creative solutions."</p>
            </div>
            <div class="review-author">
              <div class="author-info">
                <h4 data-i18n="reviews.review3.name">Dr. Priya Patel</h4>
                <span data-i18n="reviews.review3.role">Chief Innovation Officer, Global Solutions Inc.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  newsletter: `
    <!-- Newsletter -->
    <section id="newsletter" class="section research-insights">
      <div class="container">
        <div class="newsletter-header">
          <div class="research-badge animate-on-scroll">
            <i class="fas fa-microscope"></i>
            <span data-i18n="newsletter.badge">ForteLab Research</span>
          </div>
          <h2 data-i18n="newsletter.title" class="animate-on-scroll">Innovation Intelligence Reports</h2>
          <p class="sub research-subtitle" data-i18n="newsletter.subtitle">Deep insights and trend analysis from our research team — helping creators and innovators stay ahead of the technology curve.</p>
        </div>
        
        <div class="newsletter-content">
          <div class="research-stats animate-on-scroll">
            <div class="stat-item">
              <div class="stat-number">50K+</div>
              <div class="stat-label" data-i18n="newsletter.stats.readers">Research Subscribers</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">200+</div>
              <div class="stat-label" data-i18n="newsletter.stats.reports">Published Reports</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">95%</div>
              <div class="stat-label" data-i18n="newsletter.stats.accuracy">Trend Accuracy</div>
            </div>
          </div>
          
          <div class="newsletter-grid">
            <!-- Newsletter articles will be loaded here by JavaScript -->
          </div>
          
          <div class="newsletter-cta animate-on-scroll">
            <div class="cta-content">
              <h3 data-i18n="newsletter.cta.title">Join 50,000+ Innovation Leaders</h3>
              <p data-i18n="newsletter.cta.subtitle">Get exclusive research insights, trend forecasts, and actionable intelligence delivered to your inbox.</p>
            </div>
            <div class="cta-buttons">
              <a href="#faq" class="btn btn-research" data-i18n="newsletter.cta.primary">Subscribe to Research</a>
              <a href="#creative-hub" class="btn btn-research-outline" data-i18n="newsletter.cta.secondary">View Sample Reports</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  footer: `
    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="foot-brand">
          <div class="brand">
            <img class="logo" src="./assets/fortelab_icon.svg" alt="ForteLab logo icon" />
            <span class="wordmark">ForteLab</span>
          </div>
          <small data-i18n="footer.tagline">Innovation. Connection. Future.</small>
          
          <div class="foot-cta">
            <h4 data-i18n="footer.cta.title">Ready to innovate?</h4>
            <p data-i18n="footer.cta.subtitle">Join our creative community and start building the future.</p>
            <a href="#newsletter" class="btn" data-i18n="footer.cta.button">Get Started</a>
          </div>
        </div>
        
        <div class="foot-links">
          <div class="footer-section">
            <h4>Product</h4>
            <a href="#solutions" data-i18n="nav.solutions">Solutions</a>
            <a href="#use-cases" data-i18n="nav.useCases">Use Cases</a>
            <a href="#why" data-i18n="nav.why">Why ForteLab</a>
            <a href="#developers" data-i18n="nav.developers">Developers</a>
          </div>
          <div class="footer-section">
            <h4>Company</h4>
            <a href="#newsletter" data-i18n="nav.newsletter">Newsletter</a>
            <a href="#faq" data-i18n="nav.faq">FAQ</a>
            <a href="mailto:hello@fortelab.dev">Contact</a>
          </div>
          <div class="footer-section">
            <h4 data-i18n="footer.social.title">Follow Us</h4>
            <a href="https://www.facebook.com/profile.php?id=61579829097837" target="_blank" rel="noopener noreferrer" class="social-link">
              <span>Facebook</span>
            </a>
            <a href="https://www.linkedin.com/company/fortelab-ai" target="_blank" rel="noopener noreferrer" class="social-link">
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/fortelab" target="_blank" rel="noopener noreferrer" class="social-link">
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <div class="foot-legal">
          <a href="#hero" class="back-to-top" aria-label="Back to top"></a>
          <small data-i18n="footer.copyright">© 2025 ForteLab — All rights reserved.</small>
        </div>
      </div>
    </footer>
  `
};

// Template Loader Class (CORS-free)
class TemplateLoader {
  constructor() {
    this.templates = Templates;
  }

  insertTemplate(templateName, targetSelector) {
    const target = document.querySelector(targetSelector);
    if (target && this.templates[templateName]) {
      target.innerHTML = this.templates[templateName];
    } else {
      console.warn(`Template ${templateName} or target ${targetSelector} not found`);
    }
  }

  init() {
    // Insert templates
    this.insertTemplate('navigation', '#navigation-container');
    this.insertTemplate('hero', '#hero-container');
    this.insertTemplate('newsletter', '#newsletter-container');
    this.insertTemplate('footer', '#footer-container');
    
    // Initialize page functionality after templates load
    setTimeout(() => {
      if (typeof initMobileMenu === 'function') initMobileMenu();
      if (typeof initScrollAnimations === 'function') initScrollAnimations();
      if (typeof initSmoothScrolling === 'function') initSmoothScrolling();
      if (typeof initNavScrollEffect === 'function') initNavScrollEffect();
      if (typeof initFormHandling === 'function') initFormHandling();
      if (typeof initNewsletter === 'function') initNewsletter();
      if (typeof initLanguageToggle === 'function') initLanguageToggle();
      if (typeof initFloatingShapes === 'function') initFloatingShapes();
      if (typeof initParallaxEffect === 'function') initParallaxEffect();
      if (typeof initCardHoverEffects === 'function') initCardHoverEffects();
      if (typeof initFAQ === 'function') initFAQ();
    }, 100);
  }
}

// Initialize template loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const loader = new TemplateLoader();
  loader.init();
});