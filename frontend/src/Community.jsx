import React from 'react';
import './Community.css';
import heroBg from './assets/about-hero-img.png';

// === IKON ===
const ArrowUpRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
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

      {/* 3. READY TO DISCOVER SECTION */}
      <section className="com-section com-discover">
        <div className="discover-header">
          <div className="discover-title-area">
             <span className="com-eyebrow">Step 1 • Explore</span>
             <h2>Ready to Discover Your Path?</h2>
          </div>
        </div>
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
        <div className="insights-header-center">
          <span className="com-eyebrow center-eyebrow">Step 2 • Learn</span>
          <h2 className="section-title-center no-margin-bottom">Catch Up on Key Insights</h2>
          <p className="insights-desc">
            Missed our previous sessions? We've got you covered. Browse through the highlights of our past trainings and access the curated summaries to seamlessly extract real-world expertise from our experts.
          </p>
        </div>

        <div className="insights-grid">
          <div className="ins-item-horizontal">
            <div className="ins-img-wrap"></div>
            <div className="ins-text-wrap">
              <span className="ins-date">March 2026</span>
              <h4>Strategic Visual Branding & UI/UX Masterclass</h4>
              <p>Over 150+ talents explored the intersection of design, user experience, and building consumer trust with industry leaders.</p>
              <div className="ins-link-wrap">
                <a href="#download" className="ins-download-link">Download Recap <DownloadIcon /></a>
              </div>
            </div>
          </div>
          <div className="ins-item-horizontal">
            <div className="ins-img-wrap"></div>
            <div className="ins-text-wrap">
              <span className="ins-date">March 28, 2026</span>
              <h4>UI/UX Portfolio Cheatsheet</h4>
              <p>A step-by-step guide to structuring your portfolio and showcasing your design logic to recruiters.</p>
              <div className="ins-link-wrap">
                <a href="#download" className="ins-download-link">Download Recap <DownloadIcon /></a>
              </div>
            </div>
          </div>
          <div className="ins-item-horizontal">
            <div className="ins-img-wrap"></div>
            <div className="ins-text-wrap">
              <span className="ins-date">April 15, 2026</span>
              <h4>The Brand Trust Framework</h4>
              <p>Key takeaways on building credibility and trust through strategic visual communication.</p>
              <div className="ins-link-wrap">
                <a href="#download" className="ins-download-link">Download Recap <DownloadIcon /></a>
              </div>
            </div>
          </div>
          <div className="ins-item-horizontal">
            <div className="ins-img-wrap"></div>
            <div className="ins-text-wrap">
              <span className="ins-date">February 10, 2026</span>
              <h4>Consumer Behavior & Tech Adoption</h4>
              <p>Analytical insights on how users interact, trust, and adopt modern digital platforms.</p>
              <div className="ins-link-wrap">
                <a href="#download" className="ins-download-link">Download Recap <DownloadIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUE IMPACT SECTION (DESAIN BARU - POSISI DITUKAR KE ATAS) */}
      <section className="com-section com-impact-revised">
        <div className="impact-header-revised">
          <span className="com-eyebrow center-eyebrow">Result</span>
          <h2 className="section-title-center no-margin-bottom">What is Our True Impact?</h2>
          <p className="insights-desc">
            Ultimately, a robust system must produce meaningful outputs. This final phase is no longer about oneself, but about how widely our collective work is felt by the ecosystem, turning individual growth into a widespread footprint.
          </p>
        </div>

        <div className="impact-bento-revised">
          {/* Kolom Kiri: Active Alumni */}
          <div className="impact-col-left">
            <div className="bento-blue-large">
              <h3>More Than 50+<br/>Active Alumni</h3>
              <p>Join a growing network of future leaders and professionals spread across the nation.</p>
            </div>
            <div className="bento-blue-small">
              <div className="avatar-group">
                <div className="avatar-circle"></div>
                <div className="avatar-circle"></div>
                <div className="avatar-circle"></div>
                <div className="avatar-circle"></div>
                <div className="avatar-circle badge-50">50+</div>
              </div>
              <h4>Present in 100+<br/>Campuses & Institutions</h4>
            </div>
          </div>

          {/* Kolom Tengah: Top Partners */}
          <div className="impact-col-center">
            <div className="bento-white-card">
              <div className="partner-logos-area">
                {/* Tempat Logo Placeholder */}
                <div className="logo-dummy">Logoipsum</div>
                <div className="logo-dummy">LOCO</div>
                <div className="logo-dummy">Logoipsum</div>
              </div>
              <h3 className="bento-title-dark">Collaborated With<br/>Top Partners</h3>
              <p className="bento-desc-dark">From corporate leaders to top university organizations, our collaborations ensure every program is impactful and career-ready.</p>
              <button className="btn-yellow-solid">View all partners</button>
            </div>
          </div>

          {/* Kolom Kanan: Impact Scale */}
          <div className="impact-col-right">
            <div className="bento-white-card">
              <h3 className="bento-title-dark">Our Impact Scale</h3>
              
              <div className="scale-stats">
                <div className="scale-item">
                  <h2>100+</h2>
                  <p>Sustainable Projects Executed</p>
                </div>
                <div className="scale-item">
                  <h2>400+</h2>
                  <p>Total Event Participants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION: YOUR NEXT CHALLENGE (DESAIN BARU - POSISI DITUKAR KE BAWAH) */}
      <section className="com-section com-challenge-revised">
        <div className="challenge-header-revised">
          <h2 className="section-title-center no-margin-bottom">Your Next Challenge Awaits</h2>
          <p className="insights-desc">
            Knowledge means nothing without execution. The next FSJ Internship batch is opening in mid-2026. Prepare yourself to validate your theories in a real-world setting and experience a truly transformative working environment.
          </p>
        </div>
        
        <div className="challenge-image-banner">
          {/* Ini kotak untuk menaruh gambar aslimu nanti */}
          <div className="challenge-overlay-buttons">
            <button className="btn-outline-gold">Notify Me</button>
            <button className="btn-yellow-solid">Join the Waitlist</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Community;
