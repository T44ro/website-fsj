import React from 'react';
import './Community.css';
import heroBg from './assets/about-hero-img.png';

// === IKON ===
const ArrowUpRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1B1464" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

      {/* 3. READY TO DISCOVER SECTION (KONTEN DIUBAH SESUAI GAMBAR) */}
      <section className="com-section com-discover">
        <div className="discover-header">
          <div className="discover-title-area">
             <span className="com-eyebrow">EXPLORE</span>
             <h2>Ready to Discover Your Path?</h2>
          </div>
        </div>
        
        <div className="discover-scroll">
          {/* Card 1 */}
          <div className="discover-card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Design Thinking for Visual Brands</h3>
              <p>Build trusted visual identities using human-centered design.</p>
              <button className="btn-discover-card">
                Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span>
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="discover-card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>The Power of Self-Acceptance</h3>
              <p>Overcome self-doubt and build lasting professional confidence.</p>
              <button className="btn-discover-card">
                Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span>
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="discover-card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Launching the Green Career Hub</h3>
              <p>Essential strategies to enter the green workforce.</p>
              <button className="btn-discover-card">
                Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span>
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="discover-card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Structuring Effective User Experiences</h3>
              <p>Design intuitive user flows and seamless digital interactions.</p>
              <button className="btn-discover-card">
                Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY / LIFE AT FSJ SECTION (DESAIN GRID PROPORSIONAL BARU) */}
      <section className="com-section com-gallery-new">
        <div className="insights-header-center">
          <span className="com-eyebrow center-eyebrow">GALLERY</span>
          <h2 className="section-title-center no-margin-bottom">Life at FSJ</h2>
          <p className="insights-desc">
            Take a peek into our dynamic community! From interactive workshops to real-world project collaborations, here is where growth happens.
          </p>
        </div>

        <div className="gallery-grid-proportional">
          <div className="gal-item gal-main">
            <span className="gal-label">Workshop Sessions</span>
          </div>
          <div className="gal-item gal-top-right">
            <span className="gal-label">Community Networking</span>
          </div>
          <div className="gal-item gal-bottom-right-1">
            <span className="gal-label">Mentoring</span>
          </div>
          <div className="gal-item gal-bottom-right-2">
            <span className="gal-label">Live Projects</span>
          </div>
        </div>
      </section>

      {/* 5. TRUE IMPACT SECTION */}
      <section className="com-section com-impact-revised">
        <div className="impact-header-revised">
          <span className="com-eyebrow center-eyebrow">Result</span>
          <h2 className="section-title-center no-margin-bottom">What is Our True Impact?</h2>
          <p className="insights-desc">
            Ultimately, a robust system must produce meaningful outputs. This final phase is no longer about oneself, but about how widely our collective work is felt by the ecosystem, turning individual growth into a widespread footprint.
          </p>
        </div>

        <div className="impact-bento-revised">
          {/* Kolom Kiri */}
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

          {/* Kolom Tengah */}
          <div className="impact-col-center">
            <div className="bento-white-card">
              <div className="partner-logos-area">
                <div className="logo-dummy">Logoipsum</div>
                <div className="logo-dummy">LOCO</div>
                <div className="logo-dummy">Logoipsum</div>
              </div>
              <h3 className="bento-title-dark">Collaborated With<br/>Top Partners</h3>
              <p className="bento-desc-dark">From corporate leaders to top university organizations, our collaborations ensure every program is impactful and career-ready.</p>
              <button className="btn-yellow-solid">View all partners</button>
            </div>
          </div>

          {/* Kolom Kanan */}
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

      {/* 6. CTA SECTION */}
      <section className="com-section com-challenge-revised">
        <div className="challenge-header-revised">
          <h2 className="section-title-center no-margin-bottom">Your Next Challenge Awaits</h2>
          <p className="insights-desc">
            Knowledge means nothing without execution. The next FSJ Internship batch is opening in mid-2026. Prepare yourself to validate your theories in a real-world setting and experience a truly transformative working environment.
          </p>
        </div>
        
        <div className="challenge-image-banner">
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
