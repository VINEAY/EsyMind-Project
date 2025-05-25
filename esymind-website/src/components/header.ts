/**
 * Header component with navigation
 */
export function initHeader(parent: HTMLElement): void {
  const header = document.createElement('header');
  header.className = 'header';

  header.innerHTML = `
    <div class="container">
      <nav class="navbar">
        <div class="logo">
          <a href="#"><span class="gradient-text">ESY</span>MIND</a>
        </div>
        <div class="menu-toggle">
          <i class="fas fa-bars"></i>
        </div>
        <ul class="nav-links">
          <li><a href="#home" class="active">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact" class="btn btn-sm">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  `;

  parent.appendChild(header);

  // Initialize header functionality
  initHeaderFunctionality();
}

/**
 * Initialize header functionality
 */
function initHeaderFunctionality(): void {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNavLinks = document.querySelector('.nav-links');

  menuToggle?.addEventListener('click', () => {
    mobileNavLinks?.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header?.classList.toggle('sticky', window.scrollY > 100);
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';

    // Use for...of instead of forEach
    for (const section of sections) {
      const sectionTop = section.offsetTop;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id') || '';
      }
    }

    // Use for...of instead of forEach
    for (const link of navLinks) {
      link.classList.remove('active');
      if (link.getAttribute('href')?.slice(1) === current) {
        link.classList.add('active');
      }
    }
  });
}
