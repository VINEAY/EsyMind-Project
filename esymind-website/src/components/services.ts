/**
 * Services section with interactive filtering
 */
export function initServicesSection(parent: HTMLElement): void {
  const servicesSection = document.createElement('section');
  servicesSection.id = 'services';
  servicesSection.className = 'section services-section';

  servicesSection.innerHTML = `
    <div class="container">
      <h2 class="section-title">Our <span class="gradient-text">Services</span></h2>
      <p class="section-description">
        We offer a comprehensive range of data science services to help businesses
        gain competitive advantages through advanced analytics and AI.
      </p>

      <div class="services-filter">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="analytics">Analytics</button>
        <button class="filter-btn" data-filter="ml">Machine Learning</button>
        <button class="filter-btn" data-filter="ai">AI Solutions</button>
        <button class="filter-btn" data-filter="consulting">Consulting</button>
      </div>

      <div class="services-grid">
        <div class="service-card" data-category="analytics">
          <div class="service-icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3>Data Analytics</h3>
          <p>Transform raw data into actionable insights with our advanced analytics solutions.</p>
          <div class="service-stats">
            <div class="stat">
              <span class="stat-number" data-count="45">0</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat">
              <span class="stat-number" data-count="92">0</span>
              <span class="stat-label">Accuracy %</span>
            </div>
          </div>
          <a href="#contact" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card" data-category="ml">
          <div class="service-icon">
            <i class="fas fa-brain"></i>
          </div>
          <h3>Machine Learning</h3>
          <p>Implement cutting-edge ML algorithms to predict trends and automate processes.</p>
          <div class="service-stats">
            <div class="stat">
              <span class="stat-number" data-count="38">0</span>
              <span class="stat-label">Models</span>
            </div>
            <div class="stat">
              <span class="stat-number" data-count="96">0</span>
              <span class="stat-label">Accuracy %</span>
            </div>
          </div>
          <a href="#contact" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card" data-category="ai">
          <div class="service-icon">
            <i class="fas fa-robot"></i>
          </div>
          <h3>AI Solutions</h3>
          <p>Custom artificial intelligence solutions designed to solve complex business challenges.</p>
          <div class="service-stats">
            <div class="stat">
              <span class="stat-number" data-count="52">0</span>
              <span class="stat-label">Solutions</span>
            </div>
            <div class="stat">
              <span class="stat-number" data-count="89">0</span>
              <span class="stat-label">ROI %</span>
            </div>
          </div>
          <a href="#contact" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card" data-category="analytics">
          <div class="service-icon">
            <i class="fas fa-chart-pie"></i>
          </div>
          <h3>Business Intelligence</h3>
          <p>Make data-driven decisions with comprehensive BI dashboards and reports.</p>
          <div class="service-stats">
            <div class="stat">
              <span class="stat-number" data-count="65">0</span>
              <span class="stat-label">Dashboards</span>
            </div>
            <div class="stat">
              <span class="stat-number" data-count="94">0</span>
              <span class="stat-label">Satisfaction %</span>
            </div>
          </div>
          <a href="#contact" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card" data-category="consulting">
          <div class="service-icon">
            <i class="fas fa-lightbulb"></i>
          </div>
          <h3>Data Strategy</h3>
          <p>Develop a robust data strategy aligned with your business objectives.</p>
          <div class="service-stats">
            <div class="stat">
              <span class="stat-number" data-count="42">0</span>
              <span class="stat-label">Clients</span>
            </div>
            <div class="stat">
              <span class="stat-number" data-count="97">0</span>
              <span class="stat-label">Success %</span>
            </div>
          </div>
          <a href="#contact" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card" data-category="ai ml">
          <div class="service-icon">
            <i class="fas fa-code"></i>
          </div>
          <h3>Predictive Analytics</h3>
          <p>Forecast future trends and outcomes with our predictive modeling expertise.</p>
          <div class="service-stats">
            <div class="stat">
              <span class="stat-number" data-count="56">0</span>
              <span class="stat-label">Models</span>
            </div>
            <div class="stat">
              <span class="stat-number" data-count="91">0</span>
              <span class="stat-label">Accuracy %</span>
            </div>
          </div>
          <a href="#contact" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  `;

  parent.appendChild(servicesSection);

  // Initialize services functionality
  initServicesFilter();
  initStatsAnimation();
}

/**
 * Initialize services filtering
 */
function initServicesFilter(): void {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  for (const button of filterButtons) {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      for (const btn of filterButtons) {
        btn.classList.remove('active');
      }

      // Add active class to clicked button
      button.classList.add('active');

      // Get filter value
      const filter = button.getAttribute('data-filter') || 'all';

      // Filter service cards
      for (const card of serviceCards) {
        if (filter === 'all' || card.getAttribute('data-category')?.includes(filter)) {
          card.classList.remove('hidden');

          // Add animation with delay for smooth reveal
          setTimeout(() => {
            card.classList.add('show');
          }, 100);
        } else {
          card.classList.remove('show');
          card.classList.add('hidden');
        }
      }
    });
  }
}

/**
 * Initialize stats counter animation
 */
function initStatsAnimation(): void {
  const statNumbers = document.querySelectorAll('.service-stats .stat-number');

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.2 }
  );

  // Observe all stat numbers
  for (const stat of statNumbers) {
    observer.observe(stat);
  }
}

/**
 * Animate counter from 0 to target value
 */
function animateCounter(element: HTMLElement): void {
  const targetValue = Number.parseInt(element.getAttribute('data-count') || '0', 10);
  const duration = 2000; // Animation duration in milliseconds
  const frameDuration = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameDuration);
  let frame = 0;

  // Start animation
  const counter = setInterval(() => {
    frame++;

    // Calculate current value
    const progress = frame / totalFrames;
    const currentValue = Math.round(targetValue * progress);

    // Update element text
    element.textContent = currentValue.toString();

    // Stop animation when done
    if (frame === totalFrames) {
      clearInterval(counter);
      element.textContent = targetValue.toString();
    }
  }, frameDuration);
}
