/**
 * Footer section with newsletter subscription
 */
export function initFooter(parent: HTMLElement): void {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  footer.innerHTML = `
    <div class="footer-top">
      <div class="container">
        <div class="footer-newsletter">
          <div class="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with the latest trends and insights in data science and AI.</p>
          </div>
          <form class="newsletter-form" id="newsletter-form">
            <div class="input-group">
              <input type="email" placeholder="Enter your email" required>
              <button type="submit" class="btn">Subscribe</button>
            </div>
            <div class="newsletter-status"></div>
          </form>
        </div>

        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-logo">
              <a href="#"><span class="gradient-text">ESY</span>MIND</a>
            </div>
            <p class="footer-about">
              Esymind is a leading data science agency specializing in AI-driven solutions that transform businesses through actionable insights and intelligent automation.
            </p>
            <div class="footer-social">
              <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-link"><i class="fab fa-github"></i></a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Company</h4>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Services</h4>
            <ul class="footer-links">
              <li><a href="#services">Data Analytics</a></li>
              <li><a href="#services">Machine Learning</a></li>
              <li><a href="#services">AI Solutions</a></li>
              <li><a href="#services">Business Intelligence</a></li>
              <li><a href="#services">Data Strategy</a></li>
              <li><a href="#services">Predictive Analytics</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Resources</h4>
            <ul class="footer-links">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#">Whitepapers</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Esymind. All rights reserved.
        </div>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  `;

  parent.appendChild(footer);

  // Initialize newsletter form
  initNewsletterForm();
}

/**
 * Initialize newsletter form functionality
 */
function initNewsletterForm(): void {
  const newsletterForm = document.getElementById('newsletter-form') as HTMLFormElement;
  const newsletterStatus = document.querySelector('.newsletter-status');

  if (!newsletterForm || !newsletterStatus) {
    return;
  }

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = newsletterForm.querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput.value.trim();

    if (email) {
      // In a real implementation, you would send the email to a server
      // For demo purposes, we'll just show a success message
      newsletterStatus.innerHTML = `<div class="success-message">Thank you for subscribing!</div>`;
      newsletterForm.reset();

      // Clear success message after a few seconds
      setTimeout(() => {
        newsletterStatus.innerHTML = '';
      }, 5000);
    }
  });
}
