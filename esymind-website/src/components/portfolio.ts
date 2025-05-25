/**
 * Portfolio section with project showcase carousel
 */
export function initPortfolioSection(parent: HTMLElement): void {
  const portfolioSection = document.createElement('section');
  portfolioSection.id = 'portfolio';
  portfolioSection.className = 'section portfolio-section';

  portfolioSection.innerHTML = `
    <div class="container">
      <h2 class="section-title">Our <span class="gradient-text">Portfolio</span></h2>
      <p class="section-description">
        Explore our featured data science and analytics projects that
        showcase our expertise across industries and technologies.
      </p>

      <div class="portfolio-carousel">
        <div class="carousel-container">
          <div class="carousel-track">
            <!-- Portfolio Items will be injected here -->
          </div>
        </div>

        <div class="carousel-controls">
          <button class="carousel-btn carousel-prev">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="carousel-indicators"></div>
          <button class="carousel-btn carousel-next">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  parent.appendChild(portfolioSection);

  // Initialize portfolio carousel
  initPortfolioCarousel();
}

/**
 * Portfolio items to display in the carousel
 */
const portfolioItems = [
  {
    id: 'portfolio1',
    title: 'Financial Market Prediction Model',
    category: 'Machine Learning',
    image: '/images/portfolio-1.jpg',
    description: 'AI-driven market prediction model with 87% accuracy for investment decisions.',
    technologies: ['Python', 'TensorFlow', 'Time Series Analysis', 'Neural Networks'],
    link: '#'
  },
  {
    id: 'portfolio2',
    title: 'Healthcare Patient Dashboard',
    category: 'Data Visualization',
    image: '/images/portfolio-2.jpg',
    description: 'Interactive dashboard that tracks patient outcomes and treatment efficacy in real-time.',
    technologies: ['R', 'D3.js', 'SQL', 'Tableau'],
    link: '#'
  },
  {
    id: 'portfolio3',
    title: 'Supply Chain Optimization Engine',
    category: 'Operations Research',
    image: '/images/portfolio-3.jpg',
    description: 'Algorithm that reduced logistics costs by 23% for a global manufacturing company.',
    technologies: ['Python', 'CPLEX', 'Linear Programming', 'Graph Theory'],
    link: '#'
  },
  {
    id: 'portfolio4',
    title: 'Customer Segmentation Platform',
    category: 'Data Analytics',
    image: '/images/portfolio-4.jpg',
    description: 'Advanced clustering solution that identified 7 high-value customer segments for targeted marketing.',
    technologies: ['Python', 'scikit-learn', 'K-means', 'PCA'],
    link: '#'
  },
  {
    id: 'portfolio5',
    title: 'Energy Consumption Forecasting',
    category: 'Predictive Analytics',
    image: '/images/portfolio-5.jpg',
    description: 'Smart grid energy prediction system with 94% accuracy for optimizing resource allocation.',
    technologies: ['Python', 'LSTM Networks', 'Time Series', 'Prophet'],
    link: '#'
  }
];

/**
 * Initialize portfolio carousel functionality
 */
function initPortfolioCarousel(): void {
  const carouselTrack = document.querySelector('.carousel-track');
  const indicatorsContainer = document.querySelector('.carousel-indicators');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');

  if (!carouselTrack || !indicatorsContainer || !prevButton || !nextButton) {
    return;
  }

  let currentIndex = 0;
  const itemsPerSlide = window.innerWidth < 768 ? 1 : 3;
  const totalSlides = Math.ceil(portfolioItems.length / itemsPerSlide);

  // Update carousel on window resize
  window.addEventListener('resize', () => {
    const newItemsPerSlide = window.innerWidth < 768 ? 1 : 3;
    if (newItemsPerSlide !== itemsPerSlide) {
      // Reload the component if itemsPerSlide changes
      const parent = document.getElementById('portfolio')?.parentElement;
      if (parent) {
        const oldSection = document.getElementById('portfolio');
        if (oldSection) {
          parent.removeChild(oldSection);
        }
        initPortfolioSection(parent);
      }
    }
  });

  // Create portfolio items
  for (const item of portfolioItems) {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio-item';
    portfolioItem.setAttribute('data-id', item.id);

    portfolioItem.innerHTML = `
      <div class="portfolio-image">
        <img src="${item.image}" alt="${item.title}" />
        <div class="portfolio-overlay">
          <div class="portfolio-category">${item.category}</div>
          <a href="${item.link}" class="portfolio-link">View Project</a>
        </div>
      </div>
      <div class="portfolio-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="portfolio-tech">
          ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    `;

    carouselTrack.appendChild(portfolioItem);
  }

  // Create indicators
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('button');
    indicator.className = 'carousel-indicator';
    indicator.setAttribute('data-index', i.toString());

    if (i === 0) {
      indicator.classList.add('active');
    }

    indicator.addEventListener('click', () => {
      goToSlide(i);
    });

    indicatorsContainer.appendChild(indicator);
  }

  // Add click handlers to buttons
  prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  // Function to go to specific slide
  function goToSlide(slideIndex: number): void {
    // Handle wrapping
    let newIndex = slideIndex;
    if (newIndex < 0) {
      newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
      newIndex = 0;
    }

    currentIndex = newIndex;

    // Calculate the offset
    const itemWidth = document.querySelector('.portfolio-item')?.clientWidth || 0;
    const gap = 20; // Gap between items in pixels
    const offset = -(currentIndex * (itemWidth * itemsPerSlide + gap * (itemsPerSlide - 1)));

    // Update track position with smooth animation
    if (carouselTrack) {
      (carouselTrack as HTMLElement).style.transform = `translateX(${offset}px)`;
    }

    // Update indicators
    const indicators = document.querySelectorAll('.carousel-indicator');
    for (const ind of indicators) {
      ind.classList.remove('active');
    }

    const activeIndicator = document.querySelector(`.carousel-indicator[data-index="${currentIndex}"]`);
    activeIndicator?.classList.add('active');
  }

  // Initialize autoplay
  let autoplayInterval: number;

  function startAutoplay(): void {
    autoplayInterval = window.setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  }

  function stopAutoplay(): void {
    clearInterval(autoplayInterval);
  }

  // Start autoplay on load
  startAutoplay();

  // Pause autoplay on hover
  const carousel = document.querySelector('.portfolio-carousel');
  carousel?.addEventListener('mouseenter', stopAutoplay);
  carousel?.addEventListener('mouseleave', startAutoplay);

  // Handle touch events for mobile swipe
  let touchStartX = 0;
  let touchEndX = 0;

  carousel?.addEventListener('touchstart', (e) => {
    const touchEvent = e as unknown as TouchEvent;
    touchStartX = touchEvent.touches[0].clientX;
    stopAutoplay();
  }, false);

  carousel?.addEventListener('touchend', (e) => {
    const touchEvent = e as unknown as TouchEvent;
    touchEndX = touchEvent.changedTouches[0].clientX;
    handleSwipe();
    startAutoplay();
  }, false);

  function handleSwipe(): void {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left (next)
      goToSlide(currentIndex + 1);
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right (prev)
      goToSlide(currentIndex - 1);
    }
  }

  // Initial slide positioning
  goToSlide(0);
}
