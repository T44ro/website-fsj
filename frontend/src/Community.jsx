import React from 'react';
import './Community.css';
import heroBg from './assets/about-hero-img.png';

// === IKON-IKON ===
const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
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

      {/* 2. STRUCTURED PATHWAY SECTION (STAGGERED IMAGES) */}
      <section className="com-section com-pathway">
        <div className="pathway-container">
          <div className="pathway-img-left">
             <div className="img-placeholder"></div>
          </div>
          <div className="pathway-text-center">
            <h2>Your Journey <br/> with FSJ is <br/> <span>Structured <br/> Pathway</span> to <br/> Success</h2>
            <p>From foundational learning to professional placement, we guide you every step of the way.</p>
            <button className="btn-learn-more">Learn More</button>
          </div>
          <div className="pathway-img-right">
             <div className="img-placeholder"></div>
          </div>
        </div>
      </section>

      {/* 3. READY TO DISCOVER SECTION (HORIZONTAL CARDS) */}
      <section className="com-section com-discover">
        <div className="discover-header">
          <h2>Ready to Discover Your Path?</h2>
          <div className="discover-nav">
             <button className="nav-btn prev">←</button>
             <button className="nav-btn next">→</button>
          </div>
        </div>
        <div className="discover-scroll">
          <div className="discover-card">
            <div className="card-img"></div>
            <h3>Join Our Community</h3>
            <p>Connect with 300+ like-minded peers across Indonesia.</p>
          </div>
          <div className="discover-card">
            <div className="card-img"></div>
            <h3>Find Your Passion</h3>
            <p>Explore various sectors in the green economy.</p>
          </div>
          <div className="discover-card">
            <div className="card-img"></div>
            <h3>Build Your Skills</h3>
            <p>Access free mentoring and professional training.</p>
          </div>
          <div className="discover-card">
            <div className="card-img"></div>
            <h3>Real World Impact</h3>
            <p>Work on live projects with our top industry partners.</p>
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

      {/* 6. TRUE IMPACT SECTION (BENTO STATS) */}
      <section className="com-section com-impact">
        <h2 className="section-title-center">What is Our True Impact?</h2>
        <div className="impact-bento">
          <div className="impact-left-col">
            <div className="impact-card-blue">
              <h3>More Than 50+ <br/> Active Alumni</h3>
              <p>Successfully placed in sustainability roles.</p>
              <div className="alumni-logos">
                 {/* Logo-logo institusi */}
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
