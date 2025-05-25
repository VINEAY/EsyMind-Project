// Import CSS
import './styles/main.css';

// Import components
import { initHeader } from './components/header';
import { initHeroSection } from './components/hero';
import { initServicesSection } from './components/services';
import { initCaseStudiesSection } from './components/case-studies';
import { initPortfolioSection } from './components/portfolio';
import { initSkillsSection } from './components/skills';
import { initTestimonialsSection } from './components/testimonials';
import { initFaqSection } from './components/faq';
import { initBlogSection } from './components/blog';
import { initContactSection } from './components/contact';
import { initFooter } from './components/footer';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// Initialize the application
function initApp() {
  // Create container for all content
  const root = document.getElementById('root');
  if (!root) return;

  const appContainer = document.createElement('div');
  appContainer.className = 'app-container';
  root.appendChild(appContainer);

  // Initialize all page sections
  initHeader(appContainer);
  initHeroSection(appContainer);
  initServicesSection(appContainer);
  initCaseStudiesSection(appContainer);
  initPortfolioSection(appContainer);
  initSkillsSection(appContainer);
  initTestimonialsSection(appContainer);
  initFaqSection(appContainer);
  initBlogSection(appContainer);
  initContactSection(appContainer);
  initFooter(appContainer);

  // Initialize the preloader
  initPreloader();

  // Initialize theme toggle
  initThemeToggle();
}

// Initialize preloader
function initPreloader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('loaded');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1000);
      }
    }, 1000);
  });
}

// Initialize theme toggle
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Save theme preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode.toString());
  });

  // Check for saved theme preference
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  if (savedDarkMode) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  }
}
