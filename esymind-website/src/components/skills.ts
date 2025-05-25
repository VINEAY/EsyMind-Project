/**
 * Skills section with animated progress bars
 */
export function initSkillsSection(parent: HTMLElement): void {
  const skillsSection = document.createElement('section');
  skillsSection.id = 'skills';
  skillsSection.className = 'section skills-section';

  skillsSection.innerHTML = `
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
  `;

  parent.appendChild(skillsSection);

  // Initialize skills animations
  initSkillsAnimation();
}

/**
 * Initialize skills animations
 */
function initSkillsAnimation(): void {
  // Animate progress bars when they come into view
  const skillBars = document.querySelectorAll('.skill-progress-bar');

  // Create intersection observer for progress bars
  const progressObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const bar = entry.target as HTMLElement;
          const percent = bar.getAttribute('data-percent') || '0';

          // Animate the width to the percentage
          setTimeout(() => {
            bar.style.width = `${percent}%`;
          }, 100);

          progressObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.2 }
  );

  // Observe each skill bar
  for (const bar of skillBars) {
    progressObserver.observe(bar);
  }

  // Animate counters
  const counters = document.querySelectorAll('.counter-number');

  // Create intersection observer for counters
  const counterObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLElement;
          const target = Number.parseInt(counter.getAttribute('data-target') || '0', 10);

          animateCounter(counter, target);
          counterObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.3 }
  );

  // Observe each counter
  for (const counter of counters) {
    counterObserver.observe(counter);
  }
}

/**
 * Animate a counter from 0 to target number
 */
function animateCounter(element: HTMLElement, target: number): void {
  let start = 0;
  const duration = 2000; // ms
  const increment = target / 100;
  const stepTime = Math.abs(Math.floor(duration / 100));

  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start).toString();

    if (start >= target) {
      element.textContent = target.toString();
      clearInterval(timer);
    }
  }, stepTime);
}
