/**
 * Testimonials section with a slider
 */
export function initTestimonialsSection(parent: HTMLElement): void {
  const testimonialsSection = document.createElement('section');
  testimonialsSection.id = 'testimonials';
  testimonialsSection.className = 'section testimonials-section';

  testimonialsSection.innerHTML = `
    <div class="container">
      <h2 class="section-title">Client <span class="gradient-text">Testimonials</span></h2>
      <p class="section-description">
        Hear what our clients have to say about their experience working with us
        and the results we've delivered for their businesses.
      </p>

      <div class="testimonial-clients">
        <div class="client-logos">
          <img src="/images/client-logo-1.png" alt="FinTech Innovations Logo" />
          <img src="/images/client-logo-2.png" alt="HealthPlus Logo" />
          <img src="/images/client-logo-3.png" alt="RetailGiant Logo" />
          <img src="/images/client-logo-4.png" alt="Supply Chain Solutions Logo" />
          <img src="/images/client-logo-5.png" alt="TechStart Inc Logo" />
        </div>
      </div>

      <div class="testimonials-slider">
        <div class="testimonials-track">
          <!-- Testimonials will be added dynamically -->
        </div>

        <div class="testimonials-controls">
          <button class="testimonial-btn prev-testimonial">
            <i class="fas fa-arrow-left"></i>
          </button>
          <div class="testimonial-dots"></div>
          <button class="testimonial-btn next-testimonial">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  parent.appendChild(testimonialsSection);

  // Initialize testimonials
  initTestimonials();
}

/**
 * Testimonial data
 */
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO, FinTech Innovations',
    image: '/images/testimonial-1.jpg',
    companyLogo: '/images/client-logo-1.png',
    content: 'Esymind transformed our financial data analytics capabilities. Their machine learning models increased our fraud detection accuracy by 37% and saved us millions in potential losses. A truly professional team that delivers exceptional results.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'VP of Operations, HealthPlus',
    image: '/images/testimonial-2.jpg',
    companyLogo: '/images/client-logo-2.png',
    content: 'Working with Esymind has been game-changing for our healthcare operations. Their predictive analytics solutions have helped us optimize patient care pathways and reduce readmission rates by 23%. Highly recommend their services!',
    rating: 5
  },
  {
    id: 3,
    name: 'Elizabeth Taylor',
    position: 'Director of Analytics, RetailGiant',
    image: '/images/testimonial-3.jpg',
    companyLogo: '/images/client-logo-3.png',
    content: 'The customer segmentation model Esymind built for us revolutionized our marketing strategy. We have seen a 42% increase in conversion rates and significantly improved customer retention. Their team is responsive, knowledgeable, and delivers on time.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Rodriguez',
    position: 'CEO, Supply Chain Solutions',
    image: '/images/testimonial-4.jpg',
    companyLogo: '/images/client-logo-4.png',
    content: 'Esymind optimization algorithms reduced our logistics costs by 28% while improving delivery times. Their deep understanding of both data science and business operations makes them an invaluable partner for any company looking to leverage their data.',
    rating: 4
  },
  {
    id: 5,
    name: 'Jennifer Park',
    position: 'CMO, TechStart Inc',
    image: '/images/testimonial-5.jpg',
    companyLogo: '/images/client-logo-5.png',
    content: 'As a tech startup, we needed to make sense of our customer data quickly. Esymind built us a comprehensive analytics dashboard that provides actionable insights in real-time. Their work has directly contributed to our 3x growth this year!',
    rating: 5
  }
];

/**
 * Initialize testimonials slider
 */
function initTestimonials(): void {
  const testimonialsTrack = document.querySelector('.testimonials-track');
  const dotsContainer = document.querySelector('.testimonial-dots');
  const prevButton = document.querySelector('.prev-testimonial');
  const nextButton = document.querySelector('.next-testimonial');

  if (!testimonialsTrack || !dotsContainer || !prevButton || !nextButton) {
    return;
  }

  let currentIndex = 0;

  // Add testimonials to the slider
  for (const testimonial of testimonials) {
    const testimonialItem = document.createElement('div');
    testimonialItem.className = 'testimonial-item';
    testimonialItem.setAttribute('data-index', testimonial.id.toString());

    // Create rating stars
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      if (i < testimonial.rating) {
        starsHtml += '<i class="fas fa-star"></i>';
      } else {
        starsHtml += '<i class="far fa-star"></i>';
      }
    }

    testimonialItem.innerHTML = `
      <div class="testimonial-content">
        <div class="testimonial-text">
          <i class="fas fa-quote-left quote-icon"></i>
          <p>${testimonial.content}</p>
          <div class="testimonial-rating">
            ${starsHtml}
          </div>
        </div>
        <div class="testimonial-person">
          <div class="testimonial-image">
            <img src="${testimonial.image}" alt="${testimonial.name}" />
          </div>
          <div class="testimonial-info">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.position}</p>
            <div class="company-logo">
              <img src="${testimonial.companyLogo}" alt="${testimonial.position.split(',')[1] || ''} Logo" />
            </div>
          </div>
        </div>
      </div>
    `;

    testimonialsTrack.appendChild(testimonialItem);

    // Create a dot for this testimonial
    const dot = document.createElement('button');
    dot.className = 'testimonial-dot';
    dot.setAttribute('data-index', (testimonial.id - 1).toString());

    if (testimonial.id === 1) {
      dot.classList.add('active');
    }

    // Add click event to dot
    dot.addEventListener('click', () => {
      goToSlide(testimonial.id - 1);
    });

    dotsContainer.appendChild(dot);
  }

  // Add click handlers to buttons
  prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  // Function to go to a specific slide
  function goToSlide(index: number): void {
    // Handle wrapping
    let newIndex = index;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    } else if (newIndex >= testimonials.length) {
      newIndex = 0;
    }

    currentIndex = newIndex;

    // Update track position with smooth animation
    if (testimonialsTrack) {
      const offset = -currentIndex * 100;
      (testimonialsTrack as HTMLElement).style.transform = `translateX(${offset}%)`;
    }

    // Update dots
    const dots = document.querySelectorAll('.testimonial-dot');
    for (const dot of dots) {
      dot.classList.remove('active');
    }

    const activeDot = document.querySelector(`.testimonial-dot[data-index="${currentIndex}"]`);
    activeDot?.classList.add('active');
  }

  // Auto-slide functionality
  let slideInterval: number;

  function startAutoSlide(): void {
    slideInterval = window.setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  }

  function stopAutoSlide(): void {
    clearInterval(slideInterval);
  }

  // Start automatic sliding
  startAutoSlide();

  // Pause auto-sliding when hovering
  const slider = document.querySelector('.testimonials-slider');
  slider?.addEventListener('mouseenter', stopAutoSlide);
  slider?.addEventListener('mouseleave', startAutoSlide);

  // Handle touch events for mobile swipe
  let touchStartX = 0;
  let touchEndX = 0;

  slider?.addEventListener('touchstart', (e) => {
    const touchEvent = e as unknown as TouchEvent;
    touchStartX = touchEvent.touches[0].clientX;
    stopAutoSlide();
  }, false);

  slider?.addEventListener('touchend', (e) => {
    const touchEvent = e as unknown as TouchEvent;
    touchEndX = touchEvent.changedTouches[0].clientX;
    handleSwipe();
    startAutoSlide();
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

  // Initialize first slide
  goToSlide(0);
}
