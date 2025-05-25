/**
 * Hero section with animated background
 */
export function initHeroSection(parent: HTMLElement): void {
  const heroSection = document.createElement('section');
  heroSection.id = 'home';
  heroSection.className = 'hero-section';

  heroSection.innerHTML = `
    <div class="hero-bg">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
      <div class="particle particle-5"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="gradient-text">Empowering Businesses</span>
          <span>with Data Intelligence</span>
        </h1>
        <p class="hero-subtitle">
          We transform complex data into actionable insights, helping businesses make smarter decisions and drive growth in the digital age.
        </p>
        <div class="hero-cta">
          <a href="#services" class="btn">Explore Services</a>
          <a href="#case-studies" class="btn btn-outline">View Case Studies</a>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">200+</span>
            <span class="stat-text">Projects</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-text">Clients</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">98%</span>
            <span class="stat-text">Satisfaction</span>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="/images/hero-data-visualization.jpg" alt="Data Visualization" />
      </div>
    </div>
    <div class="scroll-indicator">
      <a href="#services">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
  `;

  parent.appendChild(heroSection);

  // Initialize hero animations
  initHeroAnimations();
}

/**
 * Initialize hero animations
 */
function initHeroAnimations(): void {
  // Animate stat numbers
  const statNumbers = document.querySelectorAll('.stat-number');

  // Create intersection observer to trigger animations when in view
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.5 }
  );

  // Observe all stat numbers
  for (const stat of statNumbers) {
    observer.observe(stat);
  }

  // Animate scroll indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  scrollIndicator?.classList.add('animate');
}
