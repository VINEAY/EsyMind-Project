/**
 * Blog section with article cards
 */
export function initBlogSection(parent: HTMLElement): void {
  const blogSection = document.createElement('section');
  blogSection.id = 'blog';
  blogSection.className = 'section blog-section';

  blogSection.innerHTML = `
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
  `;

  parent.appendChild(blogSection);

  // Initialize blog
  initBlogPosts();
}

/**
 * Blog post data
 */
const blogPosts = [
  {
    id: 1,
    title: "How Machine Learning is Transforming Financial Risk Assessment",
    excerpt: "Discover how advanced ML algorithms are revolutionizing the way financial institutions evaluate risk and make lending decisions.",
    image: "/images/blog-1.jpg",
    date: "October 15, 2023",
    author: "Dr. Michael Reynolds",
    categories: ["machine-learning", "business"],
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "The Future of Natural Language Processing in Healthcare",
    excerpt: "Explore how NLP technologies are improving patient care through automated documentation, clinical decision support, and more.",
    image: "/images/blog-2.jpg",
    date: "September 28, 2023",
    author: "Sarah Chen, PhD",
    categories: ["ai", "machine-learning"],
    readTime: "10 min read"
  },
  {
    id: 3,
    title: "Building a Data-Driven Culture: Lessons from Industry Leaders",
    excerpt: "Learn how top organizations are fostering data literacy and building analytics capabilities throughout their companies.",
    image: "/images/blog-3.jpg",
    date: "September 10, 2023",
    author: "James Wilson",
    categories: ["business", "data-analytics"],
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "Computer Vision Applications in Retail: Beyond Basic Recognition",
    excerpt: "Discover advanced applications of computer vision that are transforming inventory management and customer experiences in retail.",
    image: "/images/blog-4.jpg",
    date: "August 22, 2023",
    author: "Dr. Emily Zhang",
    categories: ["ai", "data-analytics"],
    readTime: "9 min read"
  },
  {
    id: 5,
    title: "Explainable AI: Making Machine Learning Models Transparent",
    excerpt: "Why explainability matters in AI and how organizations can implement transparent ML models while maintaining performance.",
    image: "/images/blog-5.jpg",
    date: "August 5, 2023",
    author: "David Martinez",
    categories: ["ai", "machine-learning"],
    readTime: "11 min read"
  },
  {
    id: 6,
    title: "Predictive Analytics for Supply Chain Optimization",
    excerpt: "How predictive models are helping businesses reduce costs, minimize disruptions, and improve service levels across supply chains.",
    image: "/images/blog-6.jpg",
    date: "July 20, 2023",
    author: "Jennifer Park",
    categories: ["data-analytics", "business"],
    readTime: "8 min read"
  }
];

/**
 * Initialize blog posts and filtering
 */
function initBlogPosts(): void {
  const blogGrid = document.querySelector('.blog-grid');
  const categoryButtons = document.querySelectorAll('.blog-category-btn');

  if (!blogGrid) {
    return;
  }

  // Add blog posts to the grid
  for (const post of blogPosts) {
    const blogPost = document.createElement('div');
    blogPost.className = 'blog-card';
    blogPost.setAttribute('data-id', post.id.toString());
    blogPost.setAttribute('data-categories', post.categories.join(' '));

    // Format categories for display
    const categoriesHtml = post.categories.map(category =>
      `<span class="blog-category">${formatCategoryName(category)}</span>`
    ).join('');

    blogPost.innerHTML = `
      <div class="blog-card-image">
        <img src="${post.image}" alt="${post.title}" />
      </div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-date"><i class="far fa-calendar"></i> ${post.date}</span>
          <span class="blog-read-time"><i class="far fa-clock"></i> ${post.readTime}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-categories-list">
          ${categoriesHtml}
        </div>
        <div class="blog-author">
          <span>By ${post.author}</span>
        </div>
        <a href="#" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
      </div>
    `;

    blogGrid.appendChild(blogPost);
  }

  // Add click handlers to category buttons
  for (const button of categoryButtons) {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      for (const btn of categoryButtons) {
        btn.classList.remove('active');
      }

      // Add active class to clicked button
      button.classList.add('active');

      // Get category to filter by
      const category = button.getAttribute('data-category') || 'all';

      // Filter blog posts
      filterBlogPosts(category);
    });
  }

  // Format category name for display
  function formatCategoryName(category: string): string {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Filter blog posts by category
  function filterBlogPosts(category: string): void {
    const blogCards = document.querySelectorAll('.blog-card');

    for (const card of blogCards) {
      if (category === 'all' || card.getAttribute('data-categories')?.includes(category)) {
        card.classList.remove('hidden');

        // Add animation for smooth reveal
        setTimeout(() => {
          card.classList.add('show');
        }, 50);
      } else {
        card.classList.remove('show');
        card.classList.add('hidden');
      }
    }
  }

  // Initialize with all blog posts visible
  filterBlogPosts('all');
}
