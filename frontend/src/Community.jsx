import React from 'react';
import './Community.css';

// =====================================================================
// 1. IMPORT BACKGROUND & GAMBAR
// =====================================================================
import heroBg from './assets/about-hero-img.png';

// Pathway
import pathway1 from './assets/pathway-1.png';
import pathway2 from './assets/pathway-2.png';

// Discover / Blog 
import blogDesign from './assets/blog-design.png';
import blogSelfAcceptance from './assets/blog-selfacceptance.png';
import blogGreenCareer from './assets/blog-greencareer.png';
import blogUX from './assets/blog-ux.png';

// Life at FSJ Gallery
import life1 from './assets/life-1.png';
import life2 from './assets/life-2.png';
import life3 from './assets/life-3.png';
import life4 from './assets/life-4.png';

// Univ Logos (4 logo kampus)
import logoUniv1 from './assets/logo-univ1.png';
import logoUniv2 from './assets/logo-univ2.png';
import logoUniv3 from './assets/logo-univ3.png';
import logoUniv4 from './assets/logo-univ4.png';

// Challenge Banner
import challengeBanner from './assets/challenge-banner.png';

// =====================================================================
// PARTNER LOGOS (1 - 26)
// =====================================================================
import partner1 from './assets/partner-1.png';
import partner2 from './assets/partner-2.png';
import partner3 from './assets/partner-3.png';
import partner4 from './assets/partner-4.png';
import partner5 from './assets/partner-5.png';
import partner6 from './assets/partner-6.png';
import partner7 from './assets/partner-7.png';
import partner8 from './assets/partner-8.png';
import partner9 from './assets/partner-9.png';
import partner10 from './assets/partner-10.png';
import partner11 from './assets/partner-11.png';
import partner12 from './assets/partner-12.png';
import partner13 from './assets/partner-13.png';
import partner14 from './assets/partner-14.png';
import partner15 from './assets/partner-15.png';
import partner16 from './assets/partner-16.png';
import partner17 from './assets/partner-17.png';
import partner18 from './assets/partner-18.png';
import partner19 from './assets/partner-19.png';
import partner20 from './assets/partner-20.png';
import partner21 from './assets/partner-21.png';
import partner22 from './assets/partner-22.png';
import partner23 from './assets/partner-23.png';
import partner24 from './assets/partner-24.png';
import partner25 from './assets/partner-25.png';
import partner26 from './assets/partner-26.png';

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
             <img src={pathway1} alt="FSJ Pathway 1" className="img-full" />
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
             <img src={pathway2} alt="FSJ Pathway 2" className="img-full" />
          </div>
        </div>
      </section>

      {/* 3. READY TO DISCOVER SECTION */}
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
            <img src={blogDesign} alt="Design Thinking" className="card-img-real" />
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
            <img src={blogSelfAcceptance} alt="Self Acceptance" className="card-img-real" />
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
            <img src={blogGreenCareer} alt="Green Career Hub" className="card-img-real" />
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
            <img src={blogUX} alt="UX Experiences" className="card-img-real" />
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

      {/* 4. GALLERY / LIFE AT FSJ SECTION */}
      <section className="com-section com-gallery-new">
        <div className="insights-header-center">
          <span className="com-eyebrow center-eyebrow">GALLERY</span>
          <h2 className="section-title-center no-margin-bottom">Life at FSJ</h2>
          <p className="insights-desc">
            Take a peek into our dynamic community! From interactive workshops to real-world project collaborations, here is where growth happens.
          </p>
        </div>

        <div className="gallery-grid-proportional">
          <div className="gal-item gal-main"><img src={life1} alt="Life 1" /></div>
          <div className="gal-item gal-top-right"><img src={life2} alt="Life 2" /></div>
          <div className="gal-item gal-bottom-right-1"><img src={life3} alt="Life 3" /></div>
          <div className="gal-item gal-bottom-right-2"><img src={life4} alt="Life 4" /></div>
        </div>
      </section>

      {/* 5. TRUE IMPACT SECTION */}
      <section className="com-section com-impact-revised">
        <div className="impact-header-revised">
          <span className="com-eyebrow center-eyebrow">Result</span>
          <h2 className="section-title-center no-margin-bottom">What is Our True Impact?</h2>
          <p className="insights-desc">
            Ultimately, a robust system must produce meaningful outputs. This final phase is no longer about oneself, but about how widely our collective work is felt by the ecosystem.
          </p>
        </div>

        <div className="impact-bento-revised">
          <div className="impact-col-left">
            <div className="bento-blue-large">
              <h3>More Than 50+<br/>Active Alumni</h3>
              <p>Join a growing network of future leaders and professionals spread across the nation.</p>
            </div>
            
            <div className="bento-blue-small">
              <div className="univ-logos-group">
                <img src={logoUniv1} alt="Univ 1" className="univ-logo-icon" />
                <img src={logoUniv2} alt="Univ 2" className="univ-logo-icon" />
                <img src={logoUniv3} alt="Univ 3" className="univ-logo-icon" />
                <img src={logoUniv4} alt="Univ 4" className="univ-logo-icon" />
              </div>
              <h4>Home to Interns from <br/>Top Universities</h4>
            </div>
          </div>

          <div className="impact-col-center">
            <div className="bento-white-card flex-between">
              <h3 className="bento-title-dark">Collaborated With<br/>Top Partners</h3>
              <p className="bento-desc-dark">Ensuring every program is impactful and career-ready.</p>
              
              <div className="partner-logos-grid">
                <img src={partner1} alt="Partner 1" className="partner-logo-img" />
                <img src={partner2} alt="Partner 2" className="partner-logo-img" />
                <img src={partner3} alt="Partner 3" className="partner-logo-img" />
                <img src={partner4} alt="Partner 4" className="partner-logo-img" />
                <img src={partner5} alt="Partner 5" className="partner-logo-img" />
                <img src={partner6} alt="Partner 6" className="partner-logo-img" />
                <img src={partner7} alt="Partner 7" className="partner-logo-img" />
                <img src={partner8} alt="Partner 8" className="partner-logo-img" />
                <img src={partner9} alt="Partner 9" className="partner-logo-img" />
                <img src={partner10} alt="Partner 10" className="partner-logo-img" />
                <img src={partner11} alt="Partner 11" className="partner-logo-img" />
                <img src={partner12} alt="Partner 12" className="partner-logo-img" />
                <img src={partner13} alt="Partner 13" className="partner-logo-img" />
                <img src={partner14} alt="Partner 14" className="partner-logo-img" />
                <img src={partner15} alt="Partner 15" className="partner-logo-img" />
                <img src={partner16} alt="Partner 16" className="partner-logo-img" />
                <img src={partner17} alt="Partner 17" className="partner-logo-img" />
                <img src={partner18} alt="Partner 18" className="partner-logo-img" />
                <img src={partner19} alt="Partner 19" className="partner-logo-img" />
                <img src={partner20} alt="Partner 20" className="partner-logo-img" />
                <img src={partner21} alt="Partner 21" className="partner-logo-img" />
                <img src={partner22} alt="Partner 22" className="partner-logo-img" />
                <img src={partner23} alt="Partner 23" className="partner-logo-img" />
                <img src={partner24} alt="Partner 24" className="partner-logo-img" />
                <img src={partner25} alt="Partner 25" className="partner-logo-img" />
                <img src={partner26} alt="Partner 26" className="partner-logo-img" />
              </div>
            </div>
          </div>

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
            Knowledge means nothing without execution. The next FSJ Internship batch is opening in mid-2026.
          </p>
        </div>
        
        <div className="challenge-image-banner">
          <img src={challengeBanner} alt="FSJ Challenge" className="banner-img" />
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
