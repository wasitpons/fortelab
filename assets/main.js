// Main JavaScript for ForteLab website

// Language management functions
function getCurrentLanguage() {
  return localStorage.getItem('fortelab_language') || 'en';
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality (except language toggle which is handled by templates.js)
  initMobileMenu();
  initScrollAnimations();
  initSmoothScrolling();
  initNavScrollEffect();
  initFormHandling();
  initNewsletter();
  initFAQ();
  initRouting();
  
  // Language toggle will be initialized by templates.js after navigation loads
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
    });

    // Close mobile menu when clicking on links
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
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

// Newsletter Articles Data with Full Content
const newsletterArticles = [
  {
    id: "ai-powered-ide-future",
    title: "The Future of AI-Powered IDEs: Transforming Developer Experience",
    excerpt: "As artificial intelligence continues to reshape the software development landscape, the next generation of IDEs is emerging with capabilities that seemed like science fiction just a few years ago.",
    date: "2025-01-25",
    category: "AI & Development",
    filename: "20250125-ai-powered-ide-future.html",
    content: `
      <h2>Intelligent Code Completion Beyond Autocomplete</h2>
      <p>Traditional IDEs offered basic autocomplete functionality, but AI-powered environments are now providing contextual code suggestions that understand not just syntax, but intent. These systems analyze your coding patterns, project architecture, and even comments to generate entire function implementations.</p>

      <h2>Real-Time Code Analysis and Optimization</h2>
      <p>Modern AI-integrated IDEs can identify performance bottlenecks, security vulnerabilities, and code quality issues as you type. This immediate feedback loop allows developers to address problems before they become technical debt.</p>

      <h2>Natural Language Programming</h2>
      <p>Perhaps the most revolutionary development is the emergence of natural language programming interfaces. Developers can now describe functionality in plain English, and the IDE translates these descriptions into working code, complete with proper error handling and documentation.</p>

      <h2>The Future Landscape</h2>
      <p>As we look ahead, AI-powered IDEs will become more than tools—they'll be collaborative partners in the development process. The question isn't whether AI will transform how we code, but how quickly we can adapt to this new paradigm.</p>

      <div class="article-conclusion">
        <p>At ForteLab, we're building the next generation of development tools that seamlessly blend human creativity with AI capabilities. The future of coding is collaborative, intelligent, and more accessible than ever before.</p>
      </div>
    `
  },
  {
    id: "innovation-lab-methodology",
    title: "Innovation Lab Methodology: Building Tomorrow's Software Today",
    excerpt: "The Innovation Lab approach combines experimental development with practical application, creating a unique environment where breakthrough technologies can mature rapidly.",
    date: "2025-01-20",
    category: "Innovation & Methodology",
    filename: "20250120-innovation-lab-methodology.html",
    content: `
      <h2>The Innovation Lab Philosophy</h2>
      <p>Innovation Labs represent a paradigm shift in how we approach software development. Unlike traditional development methodologies that prioritize stability and predictability, Innovation Labs embrace controlled experimentation and rapid iteration.</p>

      <h2>Core Principles</h2>
      <p>Our methodology is built on three foundational principles: rapid prototyping, user-centric design, and data-driven decision making. Each principle reinforces the others, creating a development cycle that's both innovative and practical.</p>

      <h2>From Concept to Production</h2>
      <p>The journey from initial idea to production-ready software follows a carefully designed process that balances creativity with engineering rigor. We use time-boxed experiments, continuous user feedback, and automated testing to ensure quality while maintaining velocity.</p>

      <h2>Real-World Applications</h2>
      <p>This methodology has proven successful across various domains, from AI-powered productivity tools to creative content generation systems. The key is adapting the framework to your specific context while maintaining its core experimental nature.</p>

      <div class="article-conclusion">
        <p>The Innovation Lab methodology isn't just about building better software—it's about creating an environment where breakthrough ideas can flourish and mature into transformative technologies.</p>
      </div>
    `
  },
  {
    id: "code-intelligence-revolution",
    title: "The Code Intelligence Revolution: How AI is Changing Software Development",
    excerpt: "Artificial Intelligence is not just assisting developers—it's fundamentally transforming how we think about code creation, analysis, and maintenance.",
    date: "2025-01-15",
    category: "AI & Code Analysis",
    filename: "20250115-code-intelligence-revolution.html",
    content: `
      <h2>Beyond Code Generation</h2>
      <p>While code generation gets the headlines, the real revolution is in code intelligence—AI systems that understand, analyze, and improve existing codebases. These tools can identify patterns, suggest optimizations, and even predict potential issues before they occur.</p>

      <h2>Automated Code Review</h2>
      <p>AI-powered code review systems are becoming increasingly sophisticated, providing insights that go beyond syntax checking to include architectural advice, security analysis, and performance optimization suggestions.</p>

      <h2>The Learning Development Environment</h2>
      <p>Modern development environments are beginning to learn from developer behavior, adapting their interfaces and suggestions to individual coding styles and project requirements. This personalization makes developers more productive and reduces cognitive load.</p>

      <h2>Collaborative Intelligence</h2>
      <p>The future belongs to collaborative intelligence—AI systems that work alongside human developers, each contributing their unique strengths to create better software faster than either could achieve alone.</p>

      <div class="article-conclusion">
        <p>The code intelligence revolution is just beginning. As these systems become more sophisticated, they'll fundamentally change not just how we write code, but how we think about software development as a creative and collaborative process.</p>
      </div>
    `
  },
  {
    id: "developer-experience-design",
    title: "Designing for Developer Experience: Lessons from Modern IDE Development",
    excerpt: "Great developer tools aren't just functional—they're delightful to use. Here's what we've learned about crafting experiences that developers actually love.",
    date: "2025-01-10",
    category: "UX & Design",
    filename: "20250110-developer-experience-design.html",
    content: `
      <h2>The Developer as User</h2>
      <p>Developer experience (DX) design requires understanding that developers are sophisticated users with specific needs, workflows, and pain points. Unlike consumer applications, developer tools must balance power with simplicity, flexibility with convention.</p>

      <h2>Principles of Great DX</h2>
      <p>Great developer tools follow consistent principles: they minimize cognitive load, provide clear feedback, support customization, and respect developer workflows. Most importantly, they get out of the way when not needed and provide powerful capabilities when required.</p>

      <h2>The Importance of Flow</h2>
      <p>Maintaining developer flow is crucial. Interruptions, whether from poorly designed interfaces or unnecessary friction, can destroy productivity. Great tools are designed to support and enhance the natural rhythm of development work.</p>

      <h2>Learning from User Research</h2>
      <p>Our research with developers reveals that tool adoption isn't just about features—it's about trust, reliability, and how well a tool fits into existing workflows. The best developer tools feel like natural extensions of the developer's thinking process.</p>

      <div class="article-conclusion">
        <p>Designing for developers means understanding that every interaction matters. The small details—keyboard shortcuts, error messages, visual feedback—collectively determine whether a tool becomes indispensable or gets abandoned.</p>
      </div>
    `
  },
  {
    id: "open-source-innovation",
    title: "Open Source Innovation: Building the Future Together",
    excerpt: "The most transformative developer tools emerge from collaborative communities. Here's why open source development is essential for innovation and how ForteLab contributes to this ecosystem.",
    date: "2025-01-05",
    category: "Open Source & Community",
    filename: "20250105-open-source-innovation.html",
    content: `
      <h2>The Power of Community</h2>
      <p>Open source development harnesses collective intelligence in ways that proprietary development cannot match. When diverse minds collaborate on shared challenges, the results often exceed what any individual organization could achieve alone.</p>

      <h2>Innovation Through Transparency</h2>
      <p>Transparency accelerates innovation by making knowledge freely available and allowing rapid iteration on ideas. Open source projects can pivot quickly, experiment boldly, and learn from failures without the constraints of traditional corporate structures.</p>

      <h2>ForteLab's Open Source Commitment</h2>
      <p>At ForteLab, we believe that the most impactful innovations should be available to everyone. That's why we open-source key components of our platform, contribute to existing projects, and support the broader developer community through tools, documentation, and mentorship.</p>

      <h2>The Future of Collaborative Development</h2>
      <p>As development tools become more AI-powered and automated, the open source model becomes even more critical. Community oversight ensures that these powerful tools serve human interests and remain accessible to developers worldwide.</p>

      <div class="article-conclusion">
        <p>Open source isn't just about free software—it's about building a sustainable, innovative future where the best tools and ideas are available to everyone. This collaborative approach is how we'll solve the biggest challenges in software development.</p>
      </div>
    `
  }
];

// Newsletter Functionality
function initNewsletter() {
  loadNewsletterArticles();
}

function loadNewsletterArticles() {
  const newsletterGrid = document.querySelector('.newsletter-grid');
  if (!newsletterGrid) return;

  // Sort articles by date (newest first)
  const sortedArticles = newsletterArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Create simple grid with "View All" button
  const articlesToShow = sortedArticles.slice(0, 3);
  const gridHTML = `
    <div class="newsletter-simple-grid">
      ${articlesToShow.map(article => createArticlePreview(article)).join('')}
    </div>
    <div class="newsletter-view-all">
      <button class="btn btn-view-all" id="view-all-newsletters">
        View All Articles <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  `;
  
  newsletterGrid.innerHTML = gridHTML;
  
  // Initialize newsletter functionality
  initNewsletterGrid();
}

function updateNewsletter() {
  loadNewsletterArticles();
}

let currentSlide = 0;
let slidesPerView = 3;
let totalSlides = 0;

function initNewsletterGrid() {
  const viewAllBtn = document.getElementById('view-all-newsletters');
  
  // View All button handler
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
      showNewsletterPage();
    });
  }
  
  // Article click handlers
  document.querySelectorAll('.newsletter-article-preview').forEach(preview => {
    preview.addEventListener('click', function() {
      const articleId = this.dataset.articleId || this.getAttribute('onclick').match(/'([^']+)'/)[1];
      showArticle(articleId);
    });
  });
}

function showNewsletterPage() {
  // Hide main content
  hideMainContent();
  
  // Show newsletter page
  showNewsletterFullPage();
  
  // Update URL
  history.pushState({view: 'newsletter'}, 'Newsletter', '#newsletter');
  currentView = 'newsletter';
  window.scrollTo(0, 0);
}

function showNewsletterFullPage() {
  // Create or get newsletter container
  let newsletterContainer = document.getElementById('newsletter-full-page');
  if (!newsletterContainer) {
    newsletterContainer = document.createElement('div');
    newsletterContainer.id = 'newsletter-full-page';
    newsletterContainer.className = 'newsletter-full-page';
    
    // Insert after navigation
    const navigation = document.getElementById('navigation-container');
    navigation.parentNode.insertBefore(newsletterContainer, navigation.nextSibling);
  }
  
  // Sort all articles by date
  const sortedArticles = newsletterArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  newsletterContainer.innerHTML = `
    <section class="newsletter-page section">
      <div class="container">
        <nav class="newsletter-breadcrumb">
          <button onclick="showHome()" class="back-button">
            <i class="fas fa-arrow-left"></i> Back to Home
          </button>
        </nav>
        
        <div class="newsletter-page-header">
          <h1 class="newsletter-page-title">Innovation Intelligence Reports</h1>
          <p class="newsletter-page-subtitle">Deep insights and trend analysis from our research team — helping creators and innovators stay ahead of the technology curve.</p>
        </div>
        
        <div class="newsletter-filters">
          <div class="filter-group">
            <button class="filter-btn active" data-filter="all">All Articles</button>
            <button class="filter-btn" data-filter="AI Innovation">AI Innovation</button>
            <button class="filter-btn" data-filter="Developer Experience">Developer Experience</button>
            <button class="filter-btn" data-filter="Open Source & Community">Open Source</button>
          </div>
        </div>
        
        <div class="newsletter-full-grid">
          ${sortedArticles.map(article => createArticlePreview(article)).join('')}
        </div>
      </div>
    </section>
  `;
  
  // Initialize newsletter page functionality
  initNewsletterPageFilters();
  
  // Add article click handlers
  document.querySelectorAll('#newsletter-full-page .newsletter-article-preview').forEach(preview => {
    preview.addEventListener('click', function() {
      const articleId = this.dataset.articleId || this.getAttribute('onclick').match(/'([^']+)'/)[1];
      showArticle(articleId);
    });
  });
}

function initNewsletterPageFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const articles = document.querySelectorAll('#newsletter-full-page .newsletter-article-preview');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter articles
      articles.forEach(article => {
        const category = article.querySelector('.article-badge').textContent.trim();
        
        if (filter === 'all' || category === filter) {
          article.style.display = 'flex';
        } else {
          article.style.display = 'none';
        }
      });
    });
  });
}

function createArticlePreview(article) {
  // Always use English content - no translation for newsletter cards
  const title = article.title;
  const excerpt = article.excerpt;
  const category = article.category;
  const formattedDate = formatDate(article.date, 'en');
  const readMoreText = 'Read more →';
  
  return `
    <article class="newsletter-article-preview" onclick="showArticle('${article.id}')">
      <div class="article-header">
        <span class="article-date">${formattedDate}</span>
      </div>
      <h3 class="article-title">${title}</h3>
      <p class="article-excerpt">${excerpt}</p>
      <div class="article-footer">
        <span class="article-badge">${category}</span>
        <span class="article-read-more">${readMoreText}</span>
      </div>
    </article>
  `;
}

function formatDate(dateString, lang) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
  // Use provided language or check current language
  const currentLang = lang || (document.body.classList.contains('lang-th') ? 'th-TH' : 'en-US');
  const locale = currentLang === 'th' ? 'th-TH' : 'en-US';
  
  return date.toLocaleDateString(locale, options);
}

// SPA Navigation System
let currentView = 'home';

function showArticle(articleId) {
  const article = newsletterArticles.find(a => a.id === articleId);
  if (!article) return;
  
  // Hide main content
  hideMainContent();
  
  // Show article detail
  showArticleDetail(article);
  
  // Update URL without refresh
  history.pushState({view: 'article', articleId: articleId}, article.title, `#article/${articleId}`);
  
  // Update current view
  currentView = 'article';
  
  // Scroll to top
  window.scrollTo(0, 0);
}

function showHome() {
  // Navigate to root for GitHub Pages compatibility
  window.location.href = './index.html';
}

function hideMainContent() {
  const sections = ['hero-container', 'solutions', 'use-cases', 'newsletter', 'creative-hub', 'faq'];
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId);
    if (element) element.style.display = 'none';
  });
}

function showMainContent() {
  const sections = ['hero-container', 'solutions', 'use-cases', 'newsletter', 'creative-hub', 'faq'];
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId);
    if (element) element.style.display = '';
  });
}

function showArticleDetail(article) {
  // Create article detail container if it doesn't exist
  let articleContainer = document.getElementById('article-detail-container');
  if (!articleContainer) {
    articleContainer = document.createElement('div');
    articleContainer.id = 'article-detail-container';
    articleContainer.className = 'article-detail-container';
    
    // Insert after navigation
    const navigation = document.getElementById('navigation-container');
    navigation.parentNode.insertBefore(articleContainer, navigation.nextSibling);
  }
  
  const currentLang = getCurrentLanguage();
  const formattedDate = formatDate(article.date, currentLang);
  const backText = currentLang === 'th' ? 'กลับหน้าหลัก' : 'Back to Home';
  
  articleContainer.innerHTML = `
    <section class="article-detail section">
      <div class="container">
        <nav class="article-breadcrumb">
          <button onclick="showHome()" class="back-button">
            <i class="fas fa-arrow-left"></i> ${backText}
          </button>
        </nav>
        
        <article class="newsletter-article-full">
          <header class="article-header">
            <div class="article-meta">
              <time datetime="${article.date}">${formattedDate}</time>
              <span class="article-category">${article.category}</span>
            </div>
            <h1 class="article-title">${article.title}</h1>
            <p class="article-lead">${article.excerpt}</p>
          </header>
          
          <div class="article-content">
            ${article.content}
          </div>
          
          <footer class="article-footer">
            <div class="article-tags">
              <span class="tag">${article.category}</span>
            </div>
            <div class="article-share">
              <button onclick="shareArticle('${article.id}')" class="share-button">
                <i class="fas fa-share"></i> Share
              </button>
            </div>
          </footer>
        </article>
        
        <nav class="article-navigation">
          <button onclick="showHome()" class="btn btn--ghost">${backText}</button>
          <button onclick="showRelatedArticles()" class="btn">View More Articles</button>
        </nav>
      </div>
    </section>
  `;
  
  articleContainer.style.display = 'block';
}

function hideArticleDetail() {
  const articleContainer = document.getElementById('article-detail-container');
  if (articleContainer) {
    articleContainer.style.display = 'none';
  }
}

function shareArticle(articleId) {
  const article = newsletterArticles.find(a => a.id === articleId);
  if (!article) return;
  
  if (navigator.share) {
    navigator.share({
      title: article.title,
      text: article.excerpt,
      url: window.location.href
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert('Article link copied to clipboard!');
  }
}

function showRelatedArticles() {
  showHome();
  // Scroll to newsletter section
  const newsletterSection = document.getElementById('newsletter');
  if (newsletterSection) {
    newsletterSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
  if (event.state) {
    if (event.state.view === 'article') {
      const article = newsletterArticles.find(a => a.id === event.state.articleId);
      if (article) {
        hideMainContent();
        showArticleDetail(article);
        currentView = 'article';
      }
    } else if (event.state.view === 'home') {
      hideArticleDetail();
      showMainContent();
      currentView = 'home';
    }
  } else {
    // Default to home
    hideArticleDetail();
    showMainContent();
    currentView = 'home';
  }
});

// Initialize URL routing
function initRouting() {
  const hash = window.location.hash;
  if (hash.startsWith('#article/')) {
    const articleId = hash.replace('#article/', '');
    const article = newsletterArticles.find(a => a.id === articleId);
    if (article) {
      showArticle(articleId);
    }
  } else if (hash === '#newsletter') {
    showNewsletterPage();
  }
  
  // Handle back/forward navigation
  window.addEventListener('popstate', (event) => {
    const state = event.state;
    if (state) {
      if (state.view === 'article') {
        showArticle(state.articleId);
      } else if (state.view === 'newsletter') {
        showNewsletterPage();
      } else if (state.view === 'home') {
        showHome();
      }
    } else {
      showHome();
    }
  });
}

function openArticle(filename) {
  // Legacy function - now handled by showArticle
  const article = newsletterArticles.find(a => a.filename === filename);
  if (article) {
    showArticle(article.id);
  }
}

// Newsletter subscription (placeholder functionality)
function handleNewsletterSubscription() {
  // This would integrate with your newsletter service
  alert('Newsletter subscription functionality would be implemented here!');
}

// Language Toggle Functions
function initLanguageToggle() {
  // Get saved language or use the current body class
  const savedLanguage = getCurrentLanguage();
  
  // Update body class to match saved language preference
  document.body.className = document.body.className.replace(/lang-\w+/, '');
  document.body.classList.add('lang-' + savedLanguage);
  
  // Update language switcher buttons to match current language
  document.querySelectorAll('[data-lang-switch]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-switch') === savedLanguage);
  });
  
  // Apply the language content if it's not already applied
  if (typeof switchLanguage === 'function') {
    switchLanguage(savedLanguage);
  }
  
  // Update newsletter content
  updateNewsletter();
  
  // Language toggle button handlers
  const languageToggleButtons = document.querySelectorAll('[data-lang-switch]');
  languageToggleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang-switch');
      setLanguage(lang);
    });
  });
}

function setLanguage(language) {
  // Use the switchLanguage function from translations.js
  if (typeof switchLanguage === 'function') {
    switchLanguage(language);
  }
  
  // Update newsletter content
  updateNewsletter();
  
  // Update language switcher buttons
  document.querySelectorAll('[data-lang-switch]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-switch') === language);
  });
}

function updateContent(language) {
  // Update all translatable content
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedTranslation(translations[language], key);
    if (translation) {
      element.textContent = translation;
    }
  });
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((current, key) => {
    return current && current[key];
  }, obj);
}

// FAQ Functions
let faqInitialized = false;

function initFAQ() {
  if (faqInitialized) return;
  
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  if (faqQuestions.length === 0) {
    // FAQ elements not loaded yet, try again later
    setTimeout(initFAQ, 200);
    return;
  }
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const answer = faqItem.querySelector('.faq-answer');
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-question').forEach(q => {
        if (q !== this) {
          q.classList.remove('active');
          q.parentElement.querySelector('.faq-answer').classList.remove('active');
        }
      });
      
      // Toggle current FAQ item
      this.classList.toggle('active');
      answer.classList.toggle('active');
    });
  });
  
  faqInitialized = true;
  console.log('FAQ initialized with', faqQuestions.length, 'questions');
}