/**
 * Contact section with form
 */
export function initContactSection(parent: HTMLElement): void {
  const contactSection = document.createElement('section');
  contactSection.id = 'contact';
  contactSection.className = 'section contact-section';

  contactSection.innerHTML = `
    <div class="container">
      <h2 class="section-title">Get in <span class="gradient-text">Touch</span></h2>
      <p class="section-description">
        Ready to transform your data into actionable insights? Contact us today to discuss your project.
      </p>

      <div class="contact-container">
        <div class="contact-info">
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
              <h3>Office Location</h3>
              <p>123 Innovation Drive<br>Tech District, San Francisco, CA 94107</p>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
              <h3>Email Us</h3>
              <p>info@esymind.com<br>support@esymind.com</p>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="contact-details">
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567<br>Mon-Fri, 9am-6pm PST</p>
            </div>
          </div>

          <div class="contact-social">
            <h3>Connect With Us</h3>
            <div class="social-icons">
              <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <form class="contact-form" id="contact-form" novalidate>
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required minlength="2">
              <div class="form-feedback error">Please enter your name (at least 2 characters)</div>
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required>
              <div class="form-feedback error">Please enter a valid email address</div>
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
            </div>

            <div class="form-group">
              <label for="company">Company</label>
              <input type="text" id="company" name="company" placeholder="Enter your company name">
            </div>

            <div class="form-group full-width">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What's this about?" required>
              <div class="form-feedback error">Please enter a subject for your message</div>
            </div>

            <div class="form-group full-width">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us about your project or inquiry" required minlength="10"></textarea>
              <div class="form-feedback error">Please enter a message (at least 10 characters)</div>
            </div>

            <div class="form-group full-width">
              <div class="checkbox-group">
                <input type="checkbox" id="consent" name="consent" required>
                <label for="consent">I agree to the processing of my personal data according to the Privacy Policy</label>
                <div class="form-feedback error">You must agree to the privacy policy</div>
              </div>
            </div>

            <div class="form-group full-width">
              <button type="submit" class="btn btn-submit">Send Message</button>
              <div class="form-status"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  parent.appendChild(contactSection);

  // Initialize contact form functionality
  initContactForm();
}

/**
 * Initialize contact form functionality
 */
function initContactForm(): void {
  const contactForm = document.getElementById('contact-form') as HTMLFormElement;
  const formStatus = document.querySelector('.form-status');

  if (!contactForm || !formStatus) {
    return;
  }

  // Form validation
  const validateForm = (): boolean => {
    let isValid = true;

    // Reset all form groups
    const formGroups = contactForm.querySelectorAll('.form-group');
    for (const group of formGroups) {
      group.classList.remove('error', 'success');
    }

    // Validate name
    const nameInput = contactForm.querySelector('#name') as HTMLInputElement;
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.parentElement?.classList.add('error');
      isValid = false;
    } else {
      nameInput.parentElement?.classList.add('success');
    }

    // Validate email
    const emailInput = contactForm.querySelector('#email') as HTMLInputElement;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailInput.parentElement?.classList.add('error');
      isValid = false;
    } else {
      emailInput.parentElement?.classList.add('success');
    }

    // Validate subject
    const subjectInput = contactForm.querySelector('#subject') as HTMLInputElement;
    if (!subjectInput.value.trim()) {
      subjectInput.parentElement?.classList.add('error');
      isValid = false;
    } else {
      subjectInput.parentElement?.classList.add('success');
    }

    // Validate message
    const messageInput = contactForm.querySelector('#message') as HTMLTextAreaElement;
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.parentElement?.classList.add('error');
      isValid = false;
    } else {
      messageInput.parentElement?.classList.add('success');
    }

    // Validate consent
    const consentInput = contactForm.querySelector('#consent') as HTMLInputElement;
    if (!consentInput.checked) {
      consentInput.closest('.form-group')?.classList.add('error');
      isValid = false;
    } else {
      consentInput.closest('.form-group')?.classList.add('success');
    }

    return isValid;
  };

  // Form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      formStatus.innerHTML = `
        <div class="success-message">
          <i class="fas fa-check-circle"></i> Thank you for your message! We'll get back to you within 24 hours.
        </div>
      `;

      // Reset form after successful submission
      contactForm.reset();

      // Remove success classes
      const formGroups = contactForm.querySelectorAll('.form-group');
      for (const group of formGroups) {
        group.classList.remove('success');
      }

      // Clear success message after a delay
      setTimeout(() => {
        formStatus.innerHTML = '';
      }, 5000);

      // In a real implementation, you would send the form data to a server:
      /*
      const formData = new FormData(contactForm);
      fetch('https://api.example.com/contact', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Handle successful response
      })
      .catch(error => {
        // Handle error
      });
      */
    }
  });

  // Live validation on input
  const inputFields = contactForm.querySelectorAll('input, textarea');
  for (const field of inputFields) {
    field.addEventListener('blur', () => {
      validateField(field as HTMLInputElement | HTMLTextAreaElement);
    });

    field.addEventListener('input', () => {
      if (field.classList.contains('invalid')) {
        validateField(field as HTMLInputElement | HTMLTextAreaElement);
      }
    });
  }

  // Validate individual field
  function validateField(field: HTMLInputElement | HTMLTextAreaElement): void {
    const parent = field.parentElement;

    if (!parent) return;

    // Reset classes
    parent.classList.remove('error', 'success');

    // Skip validation for optional fields
    if (!field.hasAttribute('required') && !field.value.trim()) {
      return;
    }

    // Validate based on field type and attributes
    if (field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value.trim())) {
        parent.classList.add('error');
      } else {
        parent.classList.add('success');
      }
    } else if (field.type === 'checkbox') {
      const formGroup = field.closest('.form-group');
      if (field instanceof HTMLInputElement && !field.checked) {
        formGroup?.classList.add('error');
      } else {
        formGroup?.classList.add('success');
      }
    } else {
      const minLength = field.getAttribute('minlength');
      if (!field.value.trim() || (minLength && field.value.length < Number.parseInt(minLength, 10))) {
        parent.classList.add('error');
      } else {
        parent.classList.add('success');
      }
    }
  }
}
