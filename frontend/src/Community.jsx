import React from 'react';
import './Community.css';
import heroBg from './assets/about-hero-img.png';

// === IKON ARROW UNTUK TOMBOL KARTU DISCOVER ===
const ArrowUpRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const Community = () => {
  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#FBB03B'
  };

  return (
    <div className="com-page">
      {/* 1. HERO SECTION */}
      <section className="com-hero" style={heroStyle}>
        <div className="com-hero-content">
          <h1>FSJ Ecosystem</h1>
          <p>
            An inclusive ecosystem for Indonesian youth to grow, connect, <br/>
            and create real environmental impact together.
          </p>
          <div className="com-breadcrumb">
            <span>Home</span> <span className="separator"> / </span> <span>Community</span>
          </div>
        </div>
      </section>

      {/* 2. STRUCTURED PATHWAY SECTION */}
      <section className="com-section com-pathway">
        <div className="pathway-container">
          <div className="pathway-img-box">
             <div className="img-placeholder"></div>
          </div>
          <div className="pathway-text-block">
            <h2>Your Journey with FSJ: <br/>A Structured Pathway <br/>to Purposeful</h2>
            <p>From foundational learning to professional placement, we guide you every step of the way.</p>
            <button className="btn-learn-more">
              Learn More <span className="btn-arrow">↗</span>
            </button>
            <div className="spiral-decoration">
              <svg width="75" height="75" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M85,45 C85,68 68,82 48,82 C25,82 12,65 12,45 C12,23 30,10 50,10 C68,10 78,24 76,40 C74,54 62,64 50,62 C40,60 34,51 36,43 C38,36 44,32 50,34 C54,36 55,40 54,44" fill="none" stroke="#1B1464" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="pathway-img-box">
             <div className="img-placeholder"></div>
          </div>
        </div>
      </section>

      {/* 3. READY TO DISCOVER SECTION (REVISI STYLE HOME PAGE) */}
      <section className="com-section com-discover">
        <div className="discover-header">
          <div className="discover-title-area">
             {/* 1. EYEBROW ORANGE DI ATAS JUDUL */}
             <span className="com-eyebrow">Step 1 • Explore</span>
             <h2>Ready to Discover Your Path?</h2>
          </div>
          <div className="discover-nav">
             <button className="nav-btn prev">←</button>
             <button className="nav-btn next">→</button>
          </div>
        </div>
        
        {/* 2. REVISI KARTU MENGIKUTI STYLE BLOG CARD HOME PAGE */}
        <div className="discover-scroll">
          
          <div className="discover-card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Join Our Community</h3>
              <p>Connect with 300+ like-minded peers across Indonesia.</p>
              <button className="btn-discover-card">
                Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span>
              </button>
            </div>
          </div>

          <div className="discover-card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Find Your Passion</h3>
              <p>Explore various sectors in the green economy.</p>
              <button className="btn-discover-card">
                Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span>
              </button>
            </div>
          </div>

          <div className="discover-card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Build Your Skills</h3>
              <p>Access free mentoring and professional training.</p>
              <button className="btn-discover-card">
                Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span>
              </button>
            </div>
          </div>

          <div className="discover-card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Real World Impact</h3>
              <p>Work on live projects with our top industry partners.</p>
              <button className="btn-discover-card">
                Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. INSIGHTS PREVIEW SECTION */}
      <section className="com-section com-insights-preview">
        <h2 className="section-title-center">Catch Up on Key Insights</h2>
        <div className="insights-grid">
          <div className="ins-item">
            <div className="ins-img"></div>
            <span className="ins-date">March 10, 2026 • Frameworks</span>
            <h4>Design Thinking for Visual Brands</h4>
            <p>Build trusted visual identities using human-centered design.</p>
            <a href="#insights">Learn More →</a>
          </div>
          <div className="ins-item">
            <div className="ins-img"></div>
            <span className="ins-date">March 05, 2026 • Mindset</span>
            <h4>The Power of Self-Acceptance</h4>
            <p>Overcome self-doubt and build lasting professional confidence.</p>
            <a href="#insights">Learn More →</a>
          </div>
          <div className="ins-item">
            <div className="ins-img"></div>
            <span className="ins-date">Feb 28, 2026 • News</span>
            <h4>Launching the Green Career Hub</h4>
            <p>Essential strategies to enter the green workforce today.</p>
            <a href="#insights">Learn More →</a>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="com-cta">
        <div className="cta-content">
          <h2>Your Next Challenge Awaits</h2>
          <p>Join our batch of changemakers and start your journey today. <br/> Limited slots available for the next intake!</p>
          <button className="btn-join-now">Join Now</button>
        </div>
      </section>

      {/* 6. TRUE IMPACT SECTION */}
      <section className="com-section com-impact">
        <h2 className="section-title-center">What is Our True Impact?</h2>
        <div className="impact-bento">
          <div className="impact-left-col">
            <div className="impact-card-blue">
              <h3>More Than 50+ <br/> Active Alumni</h3>
              <p>Successfully placed in sustainability roles.</p>
              <div className="alumni-logos">
                 <div className="logo-placeholder">CAMPUS LOGO</div>
              </div>
              <p className="impact-sub">Present in 50+ Campuses & Institutions</p>
            </div>
          </div>
          <div className="impact-right-col">
            <div className="impact-card-white">
              <span className="eyebrow">Collaborated with Top Partners</span>
              <div className="partner-logos-grid">
                 <div className="partner-logo">LOGO</div>
                 <div className="partner-logo">LOGO</div>
                 <div className="partner-logo">LOGO</div>
                 <div className="partner-logo">LOGO</div>
              </div>
            </div>
            <div className="impact-card-stats">
              <div className="stat-item">
                <h4>100+</h4>
                <span>Successful Projects</span>
              </div>
              <div className="stat-item">
                <h4>400+</h4>
                <span>Active Participants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Community;
