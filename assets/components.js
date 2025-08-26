// Component Loader for ForteLab Website
// This script loads HTML partials and assembles the full page

class ComponentLoader {
  constructor() {
    this.components = [
      'navigation',
      'hero', 
      'solutions',
      'use-cases',
      'newsletter',
      'why-fortelab',
      'faq',
      'footer'
    ];
    this.loadedComponents = {};
  }

  async loadComponent(name) {
    try {
      const response = await fetch(`./partials/${name}.html`);
      if (!response.ok) {
        throw new Error(`Failed to load ${name}: ${response.status}`);
      }
      const html = await response.text();
      this.loadedComponents[name] = html;
      return html;
    } catch (error) {
      console.error(`Error loading component ${name}:`, error);
      return `<!-- Error loading ${name} component -->`;
    }
  }

  async loadAllComponents() {
    const promises = this.components.map(name => this.loadComponent(name));
    await Promise.all(promises);
  }

  insertComponent(name, targetSelector) {
    const target = document.querySelector(targetSelector);
    if (target && this.loadedComponents[name]) {
      target.innerHTML = this.loadedComponents[name];
    }
  }

  async init() {
    // Show loading state
    document.body.style.opacity = '0';
    
    // Load all components
    await this.loadAllComponents();
    
    // Insert components in order
    this.insertComponent('navigation', '#navigation-container');
    this.insertComponent('hero', '#hero-container');
    this.insertComponent('solutions', '#solutions-container');
    this.insertComponent('use-cases', '#use-cases-container');
    this.insertComponent('newsletter', '#newsletter-container');
    
    // Find and insert why-fortelab section
    const whyContainer = document.querySelector('#why-container');
    if (whyContainer && this.loadedComponents['why-fortelab']) {
      whyContainer.innerHTML = this.loadedComponents['why-fortelab'];
    }
    
    this.insertComponent('faq', '#faq-container');
    this.insertComponent('footer', '#footer-container');
    
    // Initialize page functionality after components load
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
    
    // Show page
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease-in-out';
  }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const loader = new ComponentLoader();
  loader.init();
});