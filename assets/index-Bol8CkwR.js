(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();function E(s){const e=document.createElement("header");e.className="header",e.innerHTML=`
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
  `,s.appendChild(e),q()}function q(){const s=document.querySelector(".menu-toggle"),e=document.querySelector(".nav-links");s==null||s.addEventListener("click",()=>{e==null||e.classList.toggle("open"),s.classList.toggle("active")}),window.addEventListener("scroll",()=>{const t=document.querySelector(".header");t==null||t.classList.toggle("sticky",window.scrollY>100)});const o=document.querySelectorAll("section"),l=document.querySelectorAll(".nav-links a");window.addEventListener("scroll",()=>{var a;let t="";for(const i of o){const n=i.offsetTop;pageYOffset>=n-200&&(t=i.getAttribute("id")||"")}for(const i of l)i.classList.remove("active"),((a=i.getAttribute("href"))==null?void 0:a.slice(1))===t&&i.classList.add("active")})}function x(s){const e=document.createElement("section");e.id="home",e.className="hero-section",e.innerHTML=`
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
  `,s.appendChild(e),M()}function M(){const s=document.querySelectorAll(".stat-number"),e=new IntersectionObserver(l=>{for(const t of l)t.isIntersecting&&(t.target.classList.add("animate"),e.unobserve(t.target))},{threshold:.5});for(const l of s)e.observe(l);const o=document.querySelector(".scroll-indicator");o==null||o.classList.add("animate")}function C(s){const e=document.createElement("section");e.id="services",e.className="section services-section",e.innerHTML=`
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
  `,s.appendChild(e),P(),D()}function P(){const s=document.querySelectorAll(".filter-btn"),e=document.querySelectorAll(".service-card");for(const o of s)o.addEventListener("click",()=>{var t;for(const a of s)a.classList.remove("active");o.classList.add("active");const l=o.getAttribute("data-filter")||"all";for(const a of e)l==="all"||(t=a.getAttribute("data-category"))!=null&&t.includes(l)?(a.classList.remove("hidden"),setTimeout(()=>{a.classList.add("show")},100)):(a.classList.remove("show"),a.classList.add("hidden"))})}function D(){const s=document.querySelectorAll(".service-stats .stat-number"),e=new IntersectionObserver(o=>{for(const l of o)l.isIntersecting&&(j(l.target),e.unobserve(l.target))},{threshold:.2});for(const o of s)e.observe(o)}function j(s){const e=Number.parseInt(s.getAttribute("data-count")||"0",10),o=2e3,l=1e3/60,t=Math.round(o/l);let a=0;const i=setInterval(()=>{a++;const n=a/t,g=Math.round(e*n);s.textContent=g.toString(),a===t&&(clearInterval(i),s.textContent=e.toString())},l)}function H(s){const e=document.createElement("section");e.id="case-studies",e.className="section case-studies-section",e.innerHTML=`
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
  `,s.appendChild(e),R(),N()}function R(){const s=document.createElement("div");s.id="case-study-details",s.style.display="none",s.innerHTML=`
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
  `,document.body.appendChild(s)}function N(){const s=document.getElementById("case-study-modal"),e=s==null?void 0:s.querySelector(".modal-body"),o=s==null?void 0:s.querySelector(".modal-close"),l=document.querySelectorAll(".btn-view-case");for(const t of l)t.addEventListener("click",a=>{const i=a.target.closest(".case-study-card"),n=i==null?void 0:i.getAttribute("data-id");if(n&&s&&e){const g=document.getElementById(`${n}-details`);g&&(e.innerHTML="",e.appendChild(g.cloneNode(!0)),s.style.display="flex",setTimeout(()=>{s.classList.add("show")},10),document.body.style.overflow="hidden")}});o==null||o.addEventListener("click",()=>{s&&(s.classList.remove("show"),setTimeout(()=>{s.style.display="none",document.body.style.overflow=""},300))}),s==null||s.addEventListener("click",t=>{t.target===s&&(s.classList.remove("show"),setTimeout(()=>{s.style.display="none",document.body.style.overflow=""},300))})}function I(s){const e=document.createElement("section");e.id="portfolio",e.className="section portfolio-section",e.innerHTML=`
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
  `,s.appendChild(e),z()}const T=[{id:"portfolio1",title:"Financial Market Prediction Model",category:"Machine Learning",image:"/images/portfolio-1.jpg",description:"AI-driven market prediction model with 87% accuracy for investment decisions.",technologies:["Python","TensorFlow","Time Series Analysis","Neural Networks"],link:"#"},{id:"portfolio2",title:"Healthcare Patient Dashboard",category:"Data Visualization",image:"/images/portfolio-2.jpg",description:"Interactive dashboard that tracks patient outcomes and treatment efficacy in real-time.",technologies:["R","D3.js","SQL","Tableau"],link:"#"},{id:"portfolio3",title:"Supply Chain Optimization Engine",category:"Operations Research",image:"/images/portfolio-3.jpg",description:"Algorithm that reduced logistics costs by 23% for a global manufacturing company.",technologies:["Python","CPLEX","Linear Programming","Graph Theory"],link:"#"},{id:"portfolio4",title:"Customer Segmentation Platform",category:"Data Analytics",image:"/images/portfolio-4.jpg",description:"Advanced clustering solution that identified 7 high-value customer segments for targeted marketing.",technologies:["Python","scikit-learn","K-means","PCA"],link:"#"},{id:"portfolio5",title:"Energy Consumption Forecasting",category:"Predictive Analytics",image:"/images/portfolio-5.jpg",description:"Smart grid energy prediction system with 94% accuracy for optimizing resource allocation.",technologies:["Python","LSTM Networks","Time Series","Prophet"],link:"#"}];function z(){const s=document.querySelector(".carousel-track"),e=document.querySelector(".carousel-indicators"),o=document.querySelector(".carousel-prev"),l=document.querySelector(".carousel-next");if(!s||!e||!o||!l)return;let t=0;const a=window.innerWidth<768?1:3,i=Math.ceil(T.length/a);window.addEventListener("resize",()=>{var c;if((window.innerWidth<768?1:3)!==a){const v=(c=document.getElementById("portfolio"))==null?void 0:c.parentElement;if(v){const y=document.getElementById("portfolio");y&&v.removeChild(y),I(v)}}});for(const r of T){const c=document.createElement("div");c.className="portfolio-item",c.setAttribute("data-id",r.id),c.innerHTML=`
      <div class="portfolio-image">
        <img src="${r.image}" alt="${r.title}" />
        <div class="portfolio-overlay">
          <div class="portfolio-category">${r.category}</div>
          <a href="${r.link}" class="portfolio-link">View Project</a>
        </div>
      </div>
      <div class="portfolio-content">
        <h3>${r.title}</h3>
        <p>${r.description}</p>
        <div class="portfolio-tech">
          ${r.technologies.map(v=>`<span class="tech-tag">${v}</span>`).join("")}
        </div>
      </div>
    `,s.appendChild(c)}for(let r=0;r<i;r++){const c=document.createElement("button");c.className="carousel-indicator",c.setAttribute("data-index",r.toString()),r===0&&c.classList.add("active"),c.addEventListener("click",()=>{n(r)}),e.appendChild(c)}o.addEventListener("click",()=>{n(t-1)}),l.addEventListener("click",()=>{n(t+1)});function n(r){var k;let c=r;c<0?c=i-1:c>=i&&(c=0),t=c;const v=((k=document.querySelector(".portfolio-item"))==null?void 0:k.clientWidth)||0,w=-(t*(v*a+20*(a-1)));s&&(s.style.transform=`translateX(${w}px)`);const S=document.querySelectorAll(".carousel-indicator");for(const L of S)L.classList.remove("active");const b=document.querySelector(`.carousel-indicator[data-index="${t}"]`);b==null||b.classList.add("active")}let g;function p(){g=window.setInterval(()=>{n(t+1)},5e3)}function h(){clearInterval(g)}p();const u=document.querySelector(".portfolio-carousel");u==null||u.addEventListener("mouseenter",h),u==null||u.addEventListener("mouseleave",p);let f=0,d=0;u==null||u.addEventListener("touchstart",r=>{f=r.touches[0].clientX,h()},!1),u==null||u.addEventListener("touchend",r=>{d=r.changedTouches[0].clientX,m(),p()},!1);function m(){d<f-50&&n(t+1),d>f+50&&n(t-1)}n(0)}function B(s){const e=document.createElement("section");e.id="skills",e.className="section skills-section",e.innerHTML=`
    <div class="container">
      <h2 class="section-title">Our <span class="gradient-text">Skills</span></h2>
      <p class="section-description">
        Our team combines deep expertise across data science, AI, and engineering
        to deliver powerful solutions for your business.
      </p>

      <div class="skills-grid">
        <div class="skills-col">
          <h3>Data Science & Analytics</h3>

          <div class="skill-item" data-skill="Data Analysis">
            <div class="skill-info">
              <span class="skill-name">Data Analysis</span>
              <span class="skill-percentage">95%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="95"></div>
            </div>
          </div>

          <div class="skill-item" data-skill="Statistical Modeling">
            <div class="skill-info">
              <span class="skill-name">Statistical Modeling</span>
              <span class="skill-percentage">90%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="90"></div>
            </div>
          </div>

          <div class="skill-item" data-skill="Predictive Analytics">
            <div class="skill-info">
              <span class="skill-name">Predictive Analytics</span>
              <span class="skill-percentage">92%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="92"></div>
            </div>
          </div>

          <div class="skill-item" data-skill="Data Visualization">
            <div class="skill-info">
              <span class="skill-name">Data Visualization</span>
              <span class="skill-percentage">88%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="88"></div>
            </div>
          </div>
        </div>

        <div class="skills-col">
          <h3>Machine Learning & AI</h3>

          <div class="skill-item" data-skill="Machine Learning">
            <div class="skill-info">
              <span class="skill-name">Machine Learning</span>
              <span class="skill-percentage">94%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="94"></div>
            </div>
          </div>

          <div class="skill-item" data-skill="Deep Learning">
            <div class="skill-info">
              <span class="skill-name">Deep Learning</span>
              <span class="skill-percentage">85%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="85"></div>
            </div>
          </div>

          <div class="skill-item" data-skill="Natural Language Processing">
            <div class="skill-info">
              <span class="skill-name">Natural Language Processing</span>
              <span class="skill-percentage">87%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="87"></div>
            </div>
          </div>

          <div class="skill-item" data-skill="Computer Vision">
            <div class="skill-info">
              <span class="skill-name">Computer Vision</span>
              <span class="skill-percentage">82%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="82"></div>
            </div>
          </div>
        </div>

        <div class="skills-col">
          <h3>Technologies & Tools</h3>

          <div class="skill-item" data-skill="Python">
            <div class="skill-info">
              <span class="skill-name">Python</span>
              <span class="skill-percentage">96%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="96"></div>
            </div>
          </div>

          <div class="skill-item" data-skill="R">
            <div class="skill-info">
              <span class="skill-name">R</span>
              <span class="skill-percentage">88%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="88"></div>
            </div>
          </div>

          <div class="skill-item" data-skill="SQL">
            <div class="skill-info">
              <span class="skill-name">SQL & NoSQL</span>
              <span class="skill-percentage">93%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="93"></div>
            </div>
          </div>

          <div class="skill-item" data-skill="Big Data">
            <div class="skill-info">
              <span class="skill-name">Big Data (Hadoop/Spark)</span>
              <span class="skill-percentage">85%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-percent="85"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-counters">
        <div class="counter-item">
          <div class="counter-icon">
            <i class="fas fa-code"></i>
          </div>
          <div class="counter-number" data-target="15000">0</div>
          <div class="counter-text">Hours of Coding</div>
        </div>

        <div class="counter-item">
          <div class="counter-icon">
            <i class="fas fa-project-diagram"></i>
          </div>
          <div class="counter-number" data-target="250">0</div>
          <div class="counter-text">Projects Completed</div>
        </div>

        <div class="counter-item">
          <div class="counter-icon">
            <i class="fas fa-award"></i>
          </div>
          <div class="counter-number" data-target="35">0</div>
          <div class="counter-text">Awards Won</div>
        </div>

        <div class="counter-item">
          <div class="counter-icon">
            <i class="fas fa-users"></i>
          </div>
          <div class="counter-number" data-target="120">0</div>
          <div class="counter-text">Happy Clients</div>
        </div>
      </div>
    </div>
  `,s.appendChild(e),F()}function F(){const s=document.querySelectorAll(".skill-progress-bar"),e=new IntersectionObserver(t=>{for(const a of t)if(a.isIntersecting){const i=a.target,n=i.getAttribute("data-percent")||"0";setTimeout(()=>{i.style.width=`${n}%`},100),e.unobserve(a.target)}},{threshold:.2});for(const t of s)e.observe(t);const o=document.querySelectorAll(".counter-number"),l=new IntersectionObserver(t=>{for(const a of t)if(a.isIntersecting){const i=a.target,n=Number.parseInt(i.getAttribute("data-target")||"0",10);O(i,n),l.unobserve(a.target)}},{threshold:.3});for(const t of o)l.observe(t)}function O(s,e){let o=0;const l=2e3,t=e/100,a=Math.abs(Math.floor(l/100)),i=setInterval(()=>{o+=t,s.textContent=Math.floor(o).toString(),o>=e&&(s.textContent=e.toString(),clearInterval(i))},a)}function W(s){const e=document.createElement("section");e.id="testimonials",e.className="section testimonials-section",e.innerHTML=`
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
  `,s.appendChild(e),$()}const A=[{id:1,name:"Sarah Johnson",position:"CTO, FinTech Innovations",image:"/images/testimonial-1.jpg",companyLogo:"/images/client-logo-1.png",content:"Esymind transformed our financial data analytics capabilities. Their machine learning models increased our fraud detection accuracy by 37% and saved us millions in potential losses. A truly professional team that delivers exceptional results.",rating:5},{id:2,name:"Michael Chen",position:"VP of Operations, HealthPlus",image:"/images/testimonial-2.jpg",companyLogo:"/images/client-logo-2.png",content:"Working with Esymind has been game-changing for our healthcare operations. Their predictive analytics solutions have helped us optimize patient care pathways and reduce readmission rates by 23%. Highly recommend their services!",rating:5},{id:3,name:"Elizabeth Taylor",position:"Director of Analytics, RetailGiant",image:"/images/testimonial-3.jpg",companyLogo:"/images/client-logo-3.png",content:"The customer segmentation model Esymind built for us revolutionized our marketing strategy. We have seen a 42% increase in conversion rates and significantly improved customer retention. Their team is responsive, knowledgeable, and delivers on time.",rating:5},{id:4,name:"David Rodriguez",position:"CEO, Supply Chain Solutions",image:"/images/testimonial-4.jpg",companyLogo:"/images/client-logo-4.png",content:"Esymind optimization algorithms reduced our logistics costs by 28% while improving delivery times. Their deep understanding of both data science and business operations makes them an invaluable partner for any company looking to leverage their data.",rating:4},{id:5,name:"Jennifer Park",position:"CMO, TechStart Inc",image:"/images/testimonial-5.jpg",companyLogo:"/images/client-logo-5.png",content:"As a tech startup, we needed to make sense of our customer data quickly. Esymind built us a comprehensive analytics dashboard that provides actionable insights in real-time. Their work has directly contributed to our 3x growth this year!",rating:5}];function $(){const s=document.querySelector(".testimonials-track"),e=document.querySelector(".testimonial-dots"),o=document.querySelector(".prev-testimonial"),l=document.querySelector(".next-testimonial");if(!s||!e||!o||!l)return;let t=0;for(const d of A){const m=document.createElement("div");m.className="testimonial-item",m.setAttribute("data-index",d.id.toString());let r="";for(let v=0;v<5;v++)v<d.rating?r+='<i class="fas fa-star"></i>':r+='<i class="far fa-star"></i>';m.innerHTML=`
      <div class="testimonial-content">
        <div class="testimonial-text">
          <i class="fas fa-quote-left quote-icon"></i>
          <p>${d.content}</p>
          <div class="testimonial-rating">
            ${r}
          </div>
        </div>
        <div class="testimonial-person">
          <div class="testimonial-image">
            <img src="${d.image}" alt="${d.name}" />
          </div>
          <div class="testimonial-info">
            <h4>${d.name}</h4>
            <p>${d.position}</p>
            <div class="company-logo">
              <img src="${d.companyLogo}" alt="${d.position.split(",")[1]||""} Logo" />
            </div>
          </div>
        </div>
      </div>
    `,s.appendChild(m);const c=document.createElement("button");c.className="testimonial-dot",c.setAttribute("data-index",(d.id-1).toString()),d.id===1&&c.classList.add("active"),c.addEventListener("click",()=>{a(d.id-1)}),e.appendChild(c)}o.addEventListener("click",()=>{a(t-1)}),l.addEventListener("click",()=>{a(t+1)});function a(d){let m=d;if(m<0?m=A.length-1:m>=A.length&&(m=0),t=m,s){const v=-t*100;s.style.transform=`translateX(${v}%)`}const r=document.querySelectorAll(".testimonial-dot");for(const v of r)v.classList.remove("active");const c=document.querySelector(`.testimonial-dot[data-index="${t}"]`);c==null||c.classList.add("active")}let i;function n(){i=window.setInterval(()=>{a(t+1)},5e3)}function g(){clearInterval(i)}n();const p=document.querySelector(".testimonials-slider");p==null||p.addEventListener("mouseenter",g),p==null||p.addEventListener("mouseleave",n);let h=0,u=0;p==null||p.addEventListener("touchstart",d=>{h=d.touches[0].clientX,g()},!1),p==null||p.addEventListener("touchend",d=>{u=d.changedTouches[0].clientX,f(),n()},!1);function f(){u<h-50&&a(t+1),u>h+50&&a(t-1)}a(0)}function V(s){const e=document.createElement("section");e.id="faq",e.className="section faq-section",e.innerHTML=`
    <div class="container">
      <h2 class="section-title">Frequently <span class="gradient-text">Asked Questions</span></h2>
      <p class="section-description">
        Find answers to the most common questions about our data science and AI services.
      </p>

      <div class="faq-container">
        <!-- FAQs will be added dynamically -->
      </div>
    </div>
  `,s.appendChild(e),U()}const Q=[{question:"What exactly does a data science agency do?",answer:"A data science agency like Esymind helps businesses extract value from their data through specialized expertise in analytics, machine learning, and AI. We transform raw data into actionable insights that drive business decisions, optimize operations, detect patterns, and predict future trends. Our services range from data strategy consulting to implementing custom AI solutions that solve specific business challenges."},{question:"How can data science benefit my specific industry?",answer:"Data science can benefit virtually every industry, but the applications vary. In healthcare, we improve patient outcomes through predictive analytics. In retail, we optimize inventory and personalize customer experiences. Financial services benefit from fraud detection and risk assessment models. Manufacturing companies use our solutions for predictive maintenance and supply chain optimization. We tailor our approach to your industry's specific challenges and opportunities."},{question:"Do I need to have clean, organized data before working with you?",answer:"No, that's part of our service. While having organized data can accelerate the process, we're experienced in working with raw, unstructured data. Our data engineers can help clean, organize, and structure your data before analysis begins. We'll evaluate your current data infrastructure and recommend improvements if needed, ensuring you have a solid foundation for ongoing data analytics."},{question:"How long does it typically take to see results from a data science project?",answer:"The timeline varies based on project complexity, data availability, and scope. Simple analytics dashboards can deliver insights within 2-4 weeks. Machine learning models typically take 4-12 weeks to develop and deploy. Enterprise-wide data transformation projects may span several months. We focus on delivering incremental value, so you'll see preliminary results and insights throughout the development process rather than waiting until the very end."},{question:"How do you measure the success of a data science project?",answer:"We establish clear, measurable KPIs at the project's outset that align with your business objectives. These might include accuracy metrics for predictive models, ROI calculations for cost-saving initiatives, conversion increases for marketing optimizations, or efficiency improvements for operational projects. We provide transparent reporting throughout the project and conduct post-implementation reviews to quantify the delivered value."},{question:"What technologies and tools do you use?",answer:"We're technology-agnostic and select the best tools for each specific project. Our team is proficient in Python, R, SQL, TensorFlow, PyTorch, and other leading data science frameworks. For cloud implementations, we work across AWS, Google Cloud, and Azure. We're also experienced with big data technologies like Hadoop and Spark, and visualization tools such as Tableau and Power BI. We can either integrate with your existing tech stack or recommend the optimal solution."},{question:"Do you offer training for our internal teams?",answer:"Yes, we provide comprehensive training programs tailored to different levels of technical expertise. This can range from basic data literacy for executives to advanced machine learning techniques for your data scientists. We believe in empowering your team to understand and eventually manage the solutions we build. Knowledge transfer is an integral part of our process, ensuring your organization develops internal data capabilities alongside our external expertise."},{question:"How do you handle data privacy and security concerns?",answer:"We take data privacy and security extremely seriously. We're compliant with major regulations including GDPR, HIPAA, and CCPA. We implement robust security measures including data encryption, secure access protocols, and anonymization techniques where appropriate. We're happy to sign NDAs and work within your existing security frameworks. All our procedures are designed to protect sensitive data while still enabling the analytical power needed to derive insights."}];function U(){const s=document.querySelector(".faq-container");if(!s)return;for(const[l,t]of Q.entries()){const a=document.createElement("div");a.className="faq-item",a.setAttribute("data-index",l.toString()),a.innerHTML=`
      <div class="faq-question">
        <h3>${t.question}</h3>
        <div class="faq-icon">
          <i class="fas fa-plus plus-icon"></i>
          <i class="fas fa-minus minus-icon"></i>
        </div>
      </div>
      <div class="faq-answer">
        <p>${t.answer}</p>
      </div>
    `,s.appendChild(a)}const e=document.querySelectorAll(".faq-question");for(const l of e)l.addEventListener("click",()=>{const t=l.parentElement,a=t==null?void 0:t.classList.contains("active"),i=document.querySelectorAll(".faq-item");for(const n of i)n.classList.remove("active");!a&&t&&t.classList.add("active")});const o=document.querySelector(".faq-item");o==null||o.classList.add("active")}function X(s){const e=document.createElement("section");e.id="blog",e.className="section blog-section",e.innerHTML=`
    <div class="container">
      <h2 class="section-title">Latest <span class="gradient-text">Insights</span></h2>
      <p class="section-description">
        Stay updated with our latest thoughts on data science, AI, and industry trends.
      </p>

      <div class="blog-categories">
        <button class="blog-category-btn active" data-category="all">All</button>
        <button class="blog-category-btn" data-category="ai">AI</button>
        <button class="blog-category-btn" data-category="machine-learning">Machine Learning</button>
        <button class="blog-category-btn" data-category="data-analytics">Data Analytics</button>
        <button class="blog-category-btn" data-category="business">Business Insights</button>
      </div>

      <div class="blog-grid">
        <!-- Blog posts will be added dynamically -->
      </div>

      <div class="blog-cta">
        <a href="#" class="btn btn-outline">View All Articles</a>
      </div>
    </div>
  `,s.appendChild(e),Y()}const G=[{id:1,title:"How Machine Learning is Transforming Financial Risk Assessment",excerpt:"Discover how advanced ML algorithms are revolutionizing the way financial institutions evaluate risk and make lending decisions.",image:"/images/blog-1.jpg",date:"October 15, 2023",author:"Dr. Michael Reynolds",categories:["machine-learning","business"],readTime:"8 min read"},{id:2,title:"The Future of Natural Language Processing in Healthcare",excerpt:"Explore how NLP technologies are improving patient care through automated documentation, clinical decision support, and more.",image:"/images/blog-2.jpg",date:"September 28, 2023",author:"Sarah Chen, PhD",categories:["ai","machine-learning"],readTime:"10 min read"},{id:3,title:"Building a Data-Driven Culture: Lessons from Industry Leaders",excerpt:"Learn how top organizations are fostering data literacy and building analytics capabilities throughout their companies.",image:"/images/blog-3.jpg",date:"September 10, 2023",author:"James Wilson",categories:["business","data-analytics"],readTime:"7 min read"},{id:4,title:"Computer Vision Applications in Retail: Beyond Basic Recognition",excerpt:"Discover advanced applications of computer vision that are transforming inventory management and customer experiences in retail.",image:"/images/blog-4.jpg",date:"August 22, 2023",author:"Dr. Emily Zhang",categories:["ai","data-analytics"],readTime:"9 min read"},{id:5,title:"Explainable AI: Making Machine Learning Models Transparent",excerpt:"Why explainability matters in AI and how organizations can implement transparent ML models while maintaining performance.",image:"/images/blog-5.jpg",date:"August 5, 2023",author:"David Martinez",categories:["ai","machine-learning"],readTime:"11 min read"},{id:6,title:"Predictive Analytics for Supply Chain Optimization",excerpt:"How predictive models are helping businesses reduce costs, minimize disruptions, and improve service levels across supply chains.",image:"/images/blog-6.jpg",date:"July 20, 2023",author:"Jennifer Park",categories:["data-analytics","business"],readTime:"8 min read"}];function Y(){const s=document.querySelector(".blog-grid"),e=document.querySelectorAll(".blog-category-btn");if(!s)return;for(const t of G){const a=document.createElement("div");a.className="blog-card",a.setAttribute("data-id",t.id.toString()),a.setAttribute("data-categories",t.categories.join(" "));const i=t.categories.map(n=>`<span class="blog-category">${o(n)}</span>`).join("");a.innerHTML=`
      <div class="blog-card-image">
        <img src="${t.image}" alt="${t.title}" />
      </div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-date"><i class="far fa-calendar"></i> ${t.date}</span>
          <span class="blog-read-time"><i class="far fa-clock"></i> ${t.readTime}</span>
        </div>
        <h3 class="blog-title">${t.title}</h3>
        <p class="blog-excerpt">${t.excerpt}</p>
        <div class="blog-categories-list">
          ${i}
        </div>
        <div class="blog-author">
          <span>By ${t.author}</span>
        </div>
        <a href="#" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
      </div>
    `,s.appendChild(a)}for(const t of e)t.addEventListener("click",()=>{for(const i of e)i.classList.remove("active");t.classList.add("active");const a=t.getAttribute("data-category")||"all";l(a)});function o(t){return t.split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ")}function l(t){var i;const a=document.querySelectorAll(".blog-card");for(const n of a)t==="all"||(i=n.getAttribute("data-categories"))!=null&&i.includes(t)?(n.classList.remove("hidden"),setTimeout(()=>{n.classList.add("show")},50)):(n.classList.remove("show"),n.classList.add("hidden"))}l("all")}function J(s){const e=document.createElement("section");e.id="contact",e.className="section contact-section",e.innerHTML=`
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
  `,s.appendChild(e),K()}function K(){const s=document.getElementById("contact-form"),e=document.querySelector(".form-status");if(!s||!e)return;const o=()=>{var d,m,r,c,v,y,w,S,b,k;let a=!0;const i=s.querySelectorAll(".form-group");for(const L of i)L.classList.remove("error","success");const n=s.querySelector("#name");!n.value.trim()||n.value.trim().length<2?((d=n.parentElement)==null||d.classList.add("error"),a=!1):(m=n.parentElement)==null||m.classList.add("success");const g=s.querySelector("#email"),p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;!g.value.trim()||!p.test(g.value.trim())?((r=g.parentElement)==null||r.classList.add("error"),a=!1):(c=g.parentElement)==null||c.classList.add("success");const h=s.querySelector("#subject");h.value.trim()?(y=h.parentElement)==null||y.classList.add("success"):((v=h.parentElement)==null||v.classList.add("error"),a=!1);const u=s.querySelector("#message");!u.value.trim()||u.value.trim().length<10?((w=u.parentElement)==null||w.classList.add("error"),a=!1):(S=u.parentElement)==null||S.classList.add("success");const f=s.querySelector("#consent");return f.checked?(k=f.closest(".form-group"))==null||k.classList.add("success"):((b=f.closest(".form-group"))==null||b.classList.add("error"),a=!1),a};s.addEventListener("submit",a=>{if(a.preventDefault(),o()){e.innerHTML=`
        <div class="success-message">
          <i class="fas fa-check-circle"></i> Thank you for your message! We'll get back to you within 24 hours.
        </div>
      `,s.reset();const i=s.querySelectorAll(".form-group");for(const n of i)n.classList.remove("success");setTimeout(()=>{e.innerHTML=""},5e3)}});const l=s.querySelectorAll("input, textarea");for(const a of l)a.addEventListener("blur",()=>{t(a)}),a.addEventListener("input",()=>{a.classList.contains("invalid")&&t(a)});function t(a){const i=a.parentElement;if(i&&(i.classList.remove("error","success"),!(!a.hasAttribute("required")&&!a.value.trim())))if(a.type==="email")/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.value.trim())?i.classList.add("success"):i.classList.add("error");else if(a.type==="checkbox"){const n=a.closest(".form-group");a instanceof HTMLInputElement&&!a.checked?n==null||n.classList.add("error"):n==null||n.classList.add("success")}else{const n=a.getAttribute("minlength");!a.value.trim()||n&&a.value.length<Number.parseInt(n,10)?i.classList.add("error"):i.classList.add("success")}}}function Z(s){const e=document.createElement("footer");e.className="site-footer",e.innerHTML=`
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
  `,s.appendChild(e),_()}function _(){const s=document.getElementById("newsletter-form"),e=document.querySelector(".newsletter-status");!s||!e||s.addEventListener("submit",o=>{o.preventDefault(),s.querySelector('input[type="email"]').value.trim()&&(e.innerHTML='<div class="success-message">Thank you for subscribing!</div>',s.reset(),setTimeout(()=>{e.innerHTML=""},5e3))})}document.addEventListener("DOMContentLoaded",()=>{ee()});function ee(){const s=document.getElementById("root");if(!s)return;const e=document.createElement("div");e.className="app-container",s.appendChild(e),E(e),x(e),C(e),H(e),I(e),B(e),W(e),V(e),X(e),J(e),Z(e),se(),ae()}function se(){window.addEventListener("load",()=>{setTimeout(()=>{const s=document.getElementById("preloader");s&&(s.classList.add("loaded"),setTimeout(()=>{s.style.display="none"},1e3))},1e3)})}function ae(){const s=document.querySelector(".theme-toggle");s==null||s.addEventListener("click",()=>{document.body.classList.toggle("dark-mode"),document.body.classList.toggle("light-mode");const o=document.body.classList.contains("dark-mode");localStorage.setItem("darkMode",o.toString())}),localStorage.getItem("darkMode")==="true"&&(document.body.classList.add("dark-mode"),document.body.classList.remove("light-mode"))}
