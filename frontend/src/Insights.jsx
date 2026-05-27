import React from 'react';
import './Insights.css';
import heroBg from './assets/about-hero-img.png'; // Menggunakan background hero yang ada

// === IKON-IKON ===
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

// === DATA DUMMY ARTIKEL ===
const blogPosts = [
  { id: 1, date: "March 10, 2026", category: "Frameworks", title: "Design Thinking for Visual Brands" },
  { id: 2, date: "March 10, 2026", category: "Mindset", title: "The Power of Self-Acceptance" },
  { id: 3, date: "March 10, 2026", category: "News", title: "Launching the Green Career Hub" },
  { id: 4, date: "March 10, 2026", category: "News", title: "Wrapping Up Batch 2 Onboarding" },
  { id: 5, date: "March 10, 2026", category: "Mindset", title: "Structuring Effective User Experiences" },
  { id: 6, date: "March 10, 2026", category: "Frameworks", title: "Thinking Like a Visual Designer" },
];

const recentPosts = [
  { id: 1, date: "March 10, 2026", title: "Design Thinking for Visual Brands" },
  { id: 2, date: "March 10, 2026", title: "The Power of Self-Acceptance" },
  { id: 3, date: "March 10, 2026", title: "Launching the Green Career Hub" },
];

const Insights = () => {
  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FBB03B'
  };

  return (
    <div className="ins-page">
      {/* 1. HERO SECTION */}
      <section className="ins-hero" style={heroStyle}>
        <div className="ins-hero-content">
          <h1>Explore Insights</h1>
          <p>
            From practical frameworks to transformative mindsets, discover <br/>
            the resources you need to accelerate your career journey.
          </p>
          <div className="ins-breadcrumb">
            <span>Home</span> <span className="separator"> / </span> <span>Insights</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="ins-layout">
        
        {/* KOLOM KIRI (ARTIKEL) */}
        <div className="ins-main">
          <div className="ins-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="ins-card">
                <div className="ins-card-img">
                  {/* <img src="..." alt={post.title} /> */}
                </div>
                <div className="ins-card-content">
                  <div className="ins-meta">
                    <span>{post.date}</span> <span className="ins-dot">•</span> <span>{post.category}</span>
                  </div>
                  <h4>{post.title}</h4>
                  <button className="btn-ins-card">
                    Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="ins-pagination">
            <span className="page-num">1</span>
            <span className="page-num active">2</span>
            <span className="page-num">3</span>
            <span className="page-num">4</span>
            <span className="page-dots">..</span>
            <span className="page-num">8</span>
          </div>
        </div>

        {/* KOLOM KANAN (SIDEBAR) */}
        <div className="ins-sidebar">
          
          {/* Pencarian */}
          <div className="ins-search-box">
            <input type="text" placeholder="Search" />
            <button><SearchIcon /></button>
          </div>

          {/* Kategori */}
          <div className="ins-widget">
            <h3 className="ins-widget-title">Categories</h3>
            <ul className="ins-category-list">
              <li>Frameworks (5)</li>
              <li>Mindset (4)</li>
              <li>News (3)</li>
              <li>Productivity (6)</li>
              <li>Sustainability (6)</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="ins-widget">
            <h3 className="ins-widget-title">Recent Posts</h3>
            <div className="ins-recent-list">
              {recentPosts.map(post => (
                <div key={post.id} className="ins-recent-item">
                  <div className="recent-img"></div>
                  <div className="recent-text">
                    <h5>{post.title}</h5>
                    <span>{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="ins-widget">
            <h3 className="ins-widget-title">Tags</h3>
            <p className="ins-tags-text">
              Interview &nbsp;|&nbsp; Networking &nbsp;|&nbsp; Internship &nbsp;|&nbsp; Soft Skill &nbsp;|&nbsp; Portfolio &nbsp;|&nbsp; Career &nbsp;|&nbsp; Leadership &nbsp;|&nbsp; Branding &nbsp;|&nbsp; Sustainability &nbsp;|&nbsp; Communication &nbsp;|&nbsp; Figma
            </p>
          </div>

        </div>

      </section>
    </div>
  );
};

export default Insights;
