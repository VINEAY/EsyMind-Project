/**
 * FAQ section with collapsible answers
 */
export function initFaqSection(parent: HTMLElement): void {
  const faqSection = document.createElement('section');
  faqSection.id = 'faq';
  faqSection.className = 'section faq-section';

  faqSection.innerHTML = `
    <div class="container">
      <h2 class="section-title">Frequently <span class="gradient-text">Asked Questions</span></h2>
      <p class="section-description">
        Find answers to the most common questions about our data science and AI services.
      </p>

      <div class="faq-container">
        <!-- FAQs will be added dynamically -->
      </div>
    </div>
  `;

  parent.appendChild(faqSection);

  // Initialize FAQs
  initFaqs();
}

/**
 * FAQ items data
 */
const faqItems = [
  {
    question: "What exactly does a data science agency do?",
    answer: "A data science agency like Esymind helps businesses extract value from their data through specialized expertise in analytics, machine learning, and AI. We transform raw data into actionable insights that drive business decisions, optimize operations, detect patterns, and predict future trends. Our services range from data strategy consulting to implementing custom AI solutions that solve specific business challenges."
  },
  {
    question: "How can data science benefit my specific industry?",
    answer: "Data science can benefit virtually every industry, but the applications vary. In healthcare, we improve patient outcomes through predictive analytics. In retail, we optimize inventory and personalize customer experiences. Financial services benefit from fraud detection and risk assessment models. Manufacturing companies use our solutions for predictive maintenance and supply chain optimization. We tailor our approach to your industry's specific challenges and opportunities."
  },
  {
    question: "Do I need to have clean, organized data before working with you?",
    answer: "No, that's part of our service. While having organized data can accelerate the process, we're experienced in working with raw, unstructured data. Our data engineers can help clean, organize, and structure your data before analysis begins. We'll evaluate your current data infrastructure and recommend improvements if needed, ensuring you have a solid foundation for ongoing data analytics."
  },
  {
    question: "How long does it typically take to see results from a data science project?",
    answer: "The timeline varies based on project complexity, data availability, and scope. Simple analytics dashboards can deliver insights within 2-4 weeks. Machine learning models typically take 4-12 weeks to develop and deploy. Enterprise-wide data transformation projects may span several months. We focus on delivering incremental value, so you'll see preliminary results and insights throughout the development process rather than waiting until the very end."
  },
  {
    question: "How do you measure the success of a data science project?",
    answer: "We establish clear, measurable KPIs at the project's outset that align with your business objectives. These might include accuracy metrics for predictive models, ROI calculations for cost-saving initiatives, conversion increases for marketing optimizations, or efficiency improvements for operational projects. We provide transparent reporting throughout the project and conduct post-implementation reviews to quantify the delivered value."
  },
  {
    question: "What technologies and tools do you use?",
    answer: "We're technology-agnostic and select the best tools for each specific project. Our team is proficient in Python, R, SQL, TensorFlow, PyTorch, and other leading data science frameworks. For cloud implementations, we work across AWS, Google Cloud, and Azure. We're also experienced with big data technologies like Hadoop and Spark, and visualization tools such as Tableau and Power BI. We can either integrate with your existing tech stack or recommend the optimal solution."
  },
  {
    question: "Do you offer training for our internal teams?",
    answer: "Yes, we provide comprehensive training programs tailored to different levels of technical expertise. This can range from basic data literacy for executives to advanced machine learning techniques for your data scientists. We believe in empowering your team to understand and eventually manage the solutions we build. Knowledge transfer is an integral part of our process, ensuring your organization develops internal data capabilities alongside our external expertise."
  },
  {
    question: "How do you handle data privacy and security concerns?",
    answer: "We take data privacy and security extremely seriously. We're compliant with major regulations including GDPR, HIPAA, and CCPA. We implement robust security measures including data encryption, secure access protocols, and anonymization techniques where appropriate. We're happy to sign NDAs and work within your existing security frameworks. All our procedures are designed to protect sensitive data while still enabling the analytical power needed to derive insights."
  }
];

/**
 * Initialize FAQ items and functionality
 */
function initFaqs(): void {
  const faqContainer = document.querySelector('.faq-container');

  if (!faqContainer) {
    return;
  }

  // Add FAQ items
  for (const [index, faq] of faqItems.entries()) {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.setAttribute('data-index', index.toString());

    faqItem.innerHTML = `
      <div class="faq-question">
        <h3>${faq.question}</h3>
        <div class="faq-icon">
          <i class="fas fa-plus plus-icon"></i>
          <i class="fas fa-minus minus-icon"></i>
        </div>
      </div>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    `;

    faqContainer.appendChild(faqItem);
  }

  // Add click handlers to questions
  const faqQuestions = document.querySelectorAll('.faq-question');

  for (const question of faqQuestions) {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem?.classList.contains('active');

      // Close all FAQ items
      const allFaqs = document.querySelectorAll('.faq-item');
      for (const faq of allFaqs) {
        faq.classList.remove('active');
      }

      // If the clicked item wasn't active, open it
      if (!isActive && faqItem) {
        faqItem.classList.add('active');
      }
    });
  }

  // Open the first FAQ item by default
  const firstFaqItem = document.querySelector('.faq-item');
  firstFaqItem?.classList.add('active');
}
