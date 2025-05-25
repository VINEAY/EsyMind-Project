/**
 * Case Studies section with lightbox
 */
export function initCaseStudiesSection(parent: HTMLElement): void {
  const caseStudiesSection = document.createElement('section');
  caseStudiesSection.id = 'case-studies';
  caseStudiesSection.className = 'section case-studies-section';

  caseStudiesSection.innerHTML = `
    <div class="container">
      <h2 class="section-title">Our <span class="gradient-text">Case Studies</span></h2>
      <p class="section-description">
        Explore how we've helped organizations across various industries
        leverage data to drive innovation and achieve measurable results.
      </p>

      <div class="case-studies-grid">
        <div class="case-study-card" data-id="case1">
          <div class="case-study-image">
            <img src="/images/case-study-1.jpg" alt="Financial Analytics Dashboard" />
            <div class="case-study-overlay">
              <div class="case-study-category">Financial Services</div>
              <div class="case-study-action">
                <button class="btn-view-case">View Details</button>
              </div>
            </div>
          </div>
          <h3>Advanced Fraud Detection System for National Bank</h3>
          <p>Increased fraud detection accuracy by 37% with AI-powered anomaly detection and real-time transaction monitoring.</p>
        </div>

        <div class="case-study-card" data-id="case2">
          <div class="case-study-image">
            <img src="/images/case-study-2.jpg" alt="Healthcare Analytics Platform" />
            <div class="case-study-overlay">
              <div class="case-study-category">Healthcare</div>
              <div class="case-study-action">
                <button class="btn-view-case">View Details</button>
              </div>
            </div>
          </div>
          <h3>Patient Outcome Prediction for Memorial Hospital Network</h3>
          <p>Reduced hospital readmission rates by 23% through predictive analytics and personalized care path recommendations.</p>
        </div>

        <div class="case-study-card" data-id="case3">
          <div class="case-study-image">
            <img src="/images/case-study-3.jpg" alt="Retail Analytics Dashboard" />
            <div class="case-study-overlay">
              <div class="case-study-category">Retail</div>
              <div class="case-study-action">
                <button class="btn-view-case">View Details</button>
              </div>
            </div>
          </div>
          <h3>Inventory Optimization for Global Retail Chain</h3>
          <p>Boosted inventory efficiency by 28% and reduced stockouts by 45% using demand forecasting and intelligent stock distribution.</p>
        </div>

        <div class="case-study-card" data-id="case4">
          <div class="case-study-image">
            <img src="/images/case-study-4.jpg" alt="Manufacturing Process Optimization" />
            <div class="case-study-overlay">
              <div class="case-study-category">Manufacturing</div>
              <div class="case-study-action">
                <button class="btn-view-case">View Details</button>
              </div>
            </div>
          </div>
          <h3>Predictive Maintenance for Automotive Manufacturer</h3>
          <p>Decreased production defects by 32% and maintenance costs by 41% through IoT sensor data analysis and ML-based predictions.</p>
        </div>
      </div>
    </div>

    <!-- Case Study Lightbox Modal -->
    <div id="case-study-modal" class="modal">
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <div class="modal-body">
          <!-- Content will be loaded dynamically -->
        </div>
      </div>
    </div>
  `;

  parent.appendChild(caseStudiesSection);

  // Add case study details
  addCaseStudyDetails();

  // Initialize case study functionality
  initCaseStudyModal();
}

/**
 * Add case study details to the page (hidden until needed)
 */
function addCaseStudyDetails(): void {
  // Create a hidden div to store case study details
  const caseStudyDetails = document.createElement('div');
  caseStudyDetails.id = 'case-study-details';
  caseStudyDetails.style.display = 'none';

  // Add HTML content for case studies
  caseStudyDetails.innerHTML = `
    <div id="case1-details" class="case-study-detail">
      <div class="case-study-header">
        <img src="/images/case-study-1.jpg" alt="Financial Analytics Dashboard" />
        <div class="case-study-header-content">
          <h2>Advanced Fraud Detection System for National Bank</h2>
          <div class="case-study-meta">
            <span class="category">Financial Services</span>
            <span class="duration">Duration: 8 months</span>
            <span class="client">Client: National Banking Corporation</span>
          </div>
        </div>
      </div>
      <div class="case-study-content">
        <div class="row">
          <div class="col">
            <h3>Challenge</h3>
            <p>National Banking Corporation, a leading financial institution with over 5 million customers, was experiencing an increase in fraudulent transactions costing them approximately $15M annually. Their existing rule-based detection system was failing to identify sophisticated fraud patterns, resulting in both financial losses and damaged customer trust. They needed a solution that could:</p>
            <ul>
              <li>Detect complex and evolving fraud patterns in real-time</li>
              <li>Reduce false positives that were affecting legitimate customer transactions</li>
              <li>Scale with their growing transaction volume (over 30 million monthly)</li>
              <li>Integrate seamlessly with their existing security infrastructure</li>
            </ul>

            <h3>Solution</h3>
            <p>We developed a comprehensive AI-powered fraud detection system using deep learning and advanced anomaly detection algorithms. The solution included:</p>
            <ul>
              <li>A custom transaction risk scoring engine based on over 200 behavioral and contextual features</li>
              <li>Real-time anomaly detection using a hybrid approach combining supervised and unsupervised learning</li>
              <li>Customer behavior profiling to establish transaction baselines and detect deviations</li>
              <li>A secure API layer for seamless integration with existing systems</li>
              <li>An interactive dashboard for fraud analysts with investigation workflows</li>
            </ul>

            <h3>Implementation</h3>
            <p>The implementation was carefully planned to ensure minimal disruption to existing operations:</p>
            <ul>
              <li>Phase 1: Data collection, preprocessing, and feature engineering (6 weeks)</li>
              <li>Phase 2: Model development and validation with historical fraud cases (8 weeks)</li>
              <li>Phase 3: Integration with real-time transaction processing systems (4 weeks)</li>
              <li>Phase 4: Parallel testing with existing systems and model refinement (6 weeks)</li>
              <li>Phase 5: Deployment, training, and transition to production (8 weeks)</li>
            </ul>
          </div>
          <div class="col">
            <h3>Results</h3>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-chart-line"></i></div>
              <div class="result-content">
                <span class="result-value">37%</span>
                <span class="result-label">Increase in fraud detection accuracy</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-coins"></i></div>
              <div class="result-content">
                <span class="result-value">$4.2M</span>
                <span class="result-label">Annual savings from prevented fraud</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-bolt"></i></div>
              <div class="result-content">
                <span class="result-value">82%</span>
                <span class="result-label">Reduction in false positives</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-clock"></i></div>
              <div class="result-content">
                <span class="result-value">5x</span>
                <span class="result-label">Faster response to emerging fraud patterns</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-shield-alt"></i></div>
              <div class="result-content">
                <span class="result-value">15%</span>
                <span class="result-label">Increase in customer trust ratings</span>
              </div>
            </div>

            <h3>Technologies Used</h3>
            <div class="tech-stack">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">TensorFlow</span>
              <span class="tech-tag">Apache Kafka</span>
              <span class="tech-tag">Elasticsearch</span>
              <span class="tech-tag">Docker</span>
              <span class="tech-tag">Kubernetes</span>
              <span class="tech-tag">React</span>
              <span class="tech-tag">Node.js</span>
            </div>
          </div>
        </div>
        <div class="case-study-testimonial">
          <blockquote>
            "Esymind's fraud detection solution has completely transformed our security operations. We're now able to stop fraudulent transactions before they happen, saving millions while improving customer trust. Their team's expertise in both data science and financial security made them the perfect partner for this critical project."
          </blockquote>
          <cite>— Robert Williams, Chief Security Officer, National Banking Corporation</cite>
        </div>
      </div>
    </div>

    <div id="case2-details" class="case-study-detail">
      <div class="case-study-header">
        <img src="/images/case-study-2.jpg" alt="Healthcare Analytics Platform" />
        <div class="case-study-header-content">
          <h2>Patient Outcome Prediction for Memorial Hospital Network</h2>
          <div class="case-study-meta">
            <span class="category">Healthcare</span>
            <span class="duration">Duration: 10 months</span>
            <span class="client">Client: Memorial Hospital Network</span>
          </div>
        </div>
      </div>
      <div class="case-study-content">
        <div class="row">
          <div class="col">
            <h3>Challenge</h3>
            <p>Memorial Hospital Network, with 8 facilities serving over 2 million patients annually, faced significant challenges with high readmission rates and suboptimal patient outcomes. The network needed to improve care quality while managing operational costs. Specific challenges included:</p>
            <ul>
              <li>23% readmission rate within 30 days for certain conditions, well above the national average</li>
              <li>Difficulty predicting which patients were at high risk for complications</li>
              <li>Inconsistent care protocols across different facilities</li>
              <li>Rising costs associated with preventable complications</li>
            </ul>

            <h3>Solution</h3>
            <p>We developed a comprehensive patient outcome prediction system that analyzed electronic health records (EHR) data to identify at-risk patients and recommend personalized care interventions. Key components included:</p>
            <ul>
              <li>Predictive models for readmission risk across 12 major condition categories</li>
              <li>Real-time monitoring and alerting system for at-risk patients</li>
              <li>Personalized care path recommendation engine for clinicians</li>
              <li>Integration with existing EHR systems for seamless workflow</li>
              <li>Administrative dashboard for tracking population health metrics</li>
            </ul>
          </div>
          <div class="col">
            <h3>Results</h3>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-hospital"></i></div>
              <div class="result-content">
                <span class="result-value">23%</span>
                <span class="result-label">Reduction in 30-day readmissions</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-user-md"></i></div>
              <div class="result-content">
                <span class="result-value">18%</span>
                <span class="result-label">Improvement in patient outcomes</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-dollar-sign"></i></div>
              <div class="result-content">
                <span class="result-value">$3.2M</span>
                <span class="result-label">Annual cost savings</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-procedures"></i></div>
              <div class="result-content">
                <span class="result-value">92%</span>
                <span class="result-label">Clinical staff adoption rate</span>
              </div>
            </div>

            <h3>Technologies Used</h3>
            <div class="tech-stack">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">R</span>
              <span class="tech-tag">Scikit-learn</span>
              <span class="tech-tag">FHIR API</span>
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">React</span>
              <span class="tech-tag">D3.js</span>
              <span class="tech-tag">Azure Cloud</span>
            </div>
          </div>
        </div>
        <div class="case-study-testimonial">
          <blockquote>
            "The patient prediction system developed by Esymind has revolutionized how we deliver care. We're now able to identify high-risk patients earlier and provide targeted interventions before complications develop. This has led to better outcomes for our patients and significant cost savings for our network."
          </blockquote>
          <cite>— Dr. Jennifer Chen, Chief Medical Officer, Memorial Hospital Network</cite>
        </div>
      </div>
    </div>

    <div id="case3-details" class="case-study-detail">
      <div class="case-study-header">
        <img src="/images/case-study-3.jpg" alt="Retail Analytics Dashboard" />
        <div class="case-study-header-content">
          <h2>Inventory Optimization for Global Retail Chain</h2>
          <div class="case-study-meta">
            <span class="category">Retail</span>
            <span class="duration">Duration: 6 months</span>
            <span class="client">Client: RetailCo International</span>
          </div>
        </div>
      </div>
      <div class="case-study-content">
        <div class="row">
          <div class="col">
            <h3>Challenge</h3>
            <p>RetailCo International, operating 350+ stores across 15 countries, was struggling with inventory management challenges that impacted both operational efficiency and customer satisfaction:</p>
            <ul>
              <li>Frequent stockouts of popular items resulting in lost sales</li>
              <li>Excess inventory of slow-moving products increasing holding costs</li>
              <li>Inefficient distribution across regional distribution centers</li>
              <li>Limited visibility into inventory movement and seasonal trends</li>
              <li>Manual forecasting processes prone to errors</li>
            </ul>

            <h3>Solution</h3>
            <p>We developed an end-to-end inventory optimization system leveraging advanced analytics and ML-based demand forecasting:</p>
            <ul>
              <li>Multi-factor demand prediction model incorporating seasonality, promotions, and external factors</li>
              <li>Store-level inventory optimization algorithms</li>
              <li>Intelligent distribution system for regional warehouses</li>
              <li>Real-time inventory tracking and alerting dashboard</li>
              <li>Automated reordering recommendations</li>
            </ul>
          </div>
          <div class="col">
            <h3>Results</h3>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-box"></i></div>
              <div class="result-content">
                <span class="result-value">28%</span>
                <span class="result-label">Increase in inventory efficiency</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-exclamation-triangle"></i></div>
              <div class="result-content">
                <span class="result-value">45%</span>
                <span class="result-label">Reduction in stockouts</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-chart-pie"></i></div>
              <div class="result-content">
                <span class="result-value">32%</span>
                <span class="result-label">Decrease in excess inventory</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-dollar-sign"></i></div>
              <div class="result-content">
                <span class="result-value">$12.4M</span>
                <span class="result-label">Annual cost savings</span>
              </div>
            </div>

            <h3>Technologies Used</h3>
            <div class="tech-stack">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">Prophet</span>
              <span class="tech-tag">TensorFlow</span>
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">AWS</span>
              <span class="tech-tag">React</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Power BI</span>
            </div>
          </div>
        </div>
        <div class="case-study-testimonial">
          <blockquote>
            "Esymind's inventory optimization solution has completely transformed our supply chain operations. We've seen dramatic reductions in stockouts while simultaneously reducing our overall inventory costs. Their team's understanding of both retail operations and advanced analytics made this project an outstanding success."
          </blockquote>
          <cite>— Maria Rodriguez, VP of Supply Chain, RetailCo International</cite>
        </div>
      </div>
    </div>

    <div id="case4-details" class="case-study-detail">
      <div class="case-study-header">
        <img src="/images/case-study-4.jpg" alt="Manufacturing Process Optimization" />
        <div class="case-study-header-content">
          <h2>Predictive Maintenance for Automotive Manufacturer</h2>
          <div class="case-study-meta">
            <span class="category">Manufacturing</span>
            <span class="duration">Duration: 9 months</span>
            <span class="client">Client: AutoTech Manufacturing</span>
          </div>
        </div>
      </div>
      <div class="case-study-content">
        <div class="row">
          <div class="col">
            <h3>Challenge</h3>
            <p>AutoTech Manufacturing, a tier-1 automotive parts supplier with 5 production facilities, was facing challenges with equipment reliability and production quality:</p>
            <ul>
              <li>Unexpected machine failures causing production line shutdowns (avg. 37 hours/month)</li>
              <li>High maintenance costs due to reactive repairs ($4.5M annually)</li>
              <li>Product defect rate of 3.2%, above industry standard</li>
              <li>Limited visibility into equipment performance and degradation patterns</li>
              <li>Inefficient maintenance scheduling creating additional downtime</li>
            </ul>

            <h3>Solution</h3>
            <p>We implemented a comprehensive predictive maintenance system using IoT sensors, real-time analytics, and machine learning:</p>
            <ul>
              <li>IoT sensor network deployment across critical equipment (450+ sensors)</li>
              <li>Real-time data collection and processing infrastructure</li>
              <li>ML models to predict equipment failures 24-72 hours in advance</li>
              <li>Quality control prediction algorithms linked to equipment conditions</li>
              <li>Maintenance scheduling optimization system</li>
              <li>Mobile and desktop dashboards for maintenance teams and management</li>
            </ul>
          </div>
          <div class="col">
            <h3>Results</h3>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-tools"></i></div>
              <div class="result-content">
                <span class="result-value">41%</span>
                <span class="result-label">Reduction in maintenance costs</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-exclamation-circle"></i></div>
              <div class="result-content">
                <span class="result-value">32%</span>
                <span class="result-label">Decrease in production defects</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-industry"></i></div>
              <div class="result-content">
                <span class="result-value">78%</span>
                <span class="result-label">Reduction in unplanned downtime</span>
              </div>
            </div>
            <div class="result-item">
              <div class="result-icon"><i class="fas fa-cogs"></i></div>
              <div class="result-content">
                <span class="result-value">15%</span>
                <span class="result-label">Increase in overall equipment effectiveness</span>
              </div>
            </div>

            <h3>Technologies Used</h3>
            <div class="tech-stack">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">TensorFlow</span>
              <span class="tech-tag">MQTT</span>
              <span class="tech-tag">Azure IoT Hub</span>
              <span class="tech-tag">TimescaleDB</span>
              <span class="tech-tag">Grafana</span>
              <span class="tech-tag">React</span>
              <span class="tech-tag">React Native</span>
            </div>
          </div>
        </div>
        <div class="case-study-testimonial">
          <blockquote>
            "The predictive maintenance system developed by Esymind has dramatically improved our production efficiency and product quality. Being able to predict equipment failures before they happen has transformed our maintenance processes from reactive to proactive. This project has paid for itself several times over in just the first year."
          </blockquote>
          <cite>— James Thompson, Director of Manufacturing Operations, AutoTech Manufacturing</cite>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(caseStudyDetails);
}

/**
 * Initialize case study modal functionality
 */
function initCaseStudyModal(): void {
  const modal = document.getElementById('case-study-modal');
  const modalBody = modal?.querySelector('.modal-body');
  const modalClose = modal?.querySelector('.modal-close');
  const viewButtons = document.querySelectorAll('.btn-view-case');

  // Open modal when view button is clicked
  for (const button of viewButtons) {
    button.addEventListener('click', (e) => {
      const card = (e.target as HTMLElement).closest('.case-study-card');
      const caseId = card?.getAttribute('data-id');

      if (caseId && modal && modalBody) {
        // Get case study details
        const detailsContent = document.getElementById(`${caseId}-details`);

        if (detailsContent) {
          // Clone the content to the modal
          modalBody.innerHTML = '';
          modalBody.appendChild(detailsContent.cloneNode(true));

          // Show modal with animation
          modal.style.display = 'flex';
          setTimeout(() => {
            modal.classList.add('show');
          }, 10);

          // Prevent body scrolling
          document.body.style.overflow = 'hidden';
        }
      }
    });
  }

  // Close modal when close button is clicked
  modalClose?.addEventListener('click', () => {
    if (modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    }
  });

  // Close modal when clicking outside the content
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    }
  });
}
