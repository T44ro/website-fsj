import React from 'react';
import './Partnership.css';

// =====================================================================
// KOMPONEN IKON SVG (Minimalis & Elegan)
// =====================================================================
const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B1464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const BridgeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B1464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 16v-4a4 4 0 0 0-8 0v4"></path>
    <path d="M12 12h.01"></path>
    <path d="M8 20v-4a4 4 0 0 1 8 0v4"></path>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
  </svg>
);

const MegaphoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B1464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l18-5v12L3 14v-3z"></path>
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Partnership = () => {
  return (
    <div className="partnership-page">
      
      {/* 1. HERO BANNER: THE HOOK */}
      <section className="part-hero-premium">
        <div className="hero-content-wrapper">
          <span className="hero-eyebrow">B2B & CORPORATE PARTNERSHIP</span>
          <h1 className="hero-headline">Empower the Next Generation of Industry Leaders.</h1>
          <p className="hero-body">
            Partner with First Step Journey to build a strategic talent pipeline, elevate your employer branding, 
            and create a lasting impact on Indonesia's future workforce.
          </p>
          <button className="btn-collab">Collaborate With Us</button>
        </div>
      </section>

      {/* 2. SECTION 1: WHY COLLABORATE DENGAN KARTU GRID */}
      <section className="why-collab-section">
        <div className="section-header center">
          <h2>Why Partner with Us?</h2>
        </div>
        <div className="why-grid">
          
          <div className="why-card">
            <div className="why-icon"><TargetIcon /></div>
            <h3>Strategic Talent Pipeline</h3>
            <p>Gain direct and early access to a highly curated community of motivated students and fresh graduates ready to enter the workforce.</p>
          </div>
          
          <div className="why-card">
            <div className="why-icon"><BridgeIcon /></div>
            <h3>Bridging the Industry Gap</h3>
            <p>We align academic theory with your real-world corporate demands, ensuring our talents possess the exact skills your company needs.</p>
          </div>
          
          <div className="why-card">
            <div className="why-icon"><MegaphoneIcon /></div>
            <h3>High-Impact Brand Exposure</h3>
            <p>Position your brand directly in front of the highly coveted Gen-Z demographic through targeted activations and community engagement.</p>
          </div>

        </div>
      </section>

      {/* 3. SECTION 2: IMPACT METRICS (BENTO BOX / COUNTERS) */}
      <section className="impact-metrics-section">
        <div className="metrics-container">
          <h2 className="metrics-title">Our Ecosystem in Numbers</h2>
          
          <div className="metrics-grid">
            <div className="metric-box">
              <span className="metric-number">10K+</span>
              <span className="metric-label">Active Talents & Members</span>
            </div>
            <div className="metric-box">
              <span className="metric-number">51+</span>
              <span className="metric-label">Campuses Reached Nationwide</span>
            </div>
            <div className="metric-box">
              <span className="metric-number">150+</span>
              <span className="metric-label">Successful Career Events & Programs</span>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="trust-badges-area">
            <p>Trusted by industry leaders, including Bank Mandiri.</p>
            <div className="badges-row">
              {/* Tempatkan logo abu-abu di sini menggunakan tag img nantinya */}
              <div className="badge-placeholder">LOGO PARTNER</div>
              <div className="badge-placeholder">LOGO PARTNER</div>
              <div className="badge-placeholder">LOGO PARTNER</div>
              <div className="badge-placeholder">LOGO PARTNER</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 3: PROGRAM OFFERING (Z-PATTERN SPLIT LAYOUT) */}
      <section className="program-offering-section">
        <div className="section-header center">
          <h2>Tailored Collaboration Opportunities</h2>
        </div>

        <div className="offering-container">
          {/* Baris 1: Teks Kiri, Gambar Kanan */}
          <div className="offering-row">
            <div className="offering-text">
              <span className="offering-number">01</span>
              <h3>Flagship Career Summits</h3>
              <p>Become a headline sponsor for our mega-events. Secure exclusive speaking slots, booth placements, and direct recruitment access to our top attendees.</p>
            </div>
            <div className="offering-image image-placeholder-1"></div>
          </div>

          {/* Baris 2: Gambar Kiri, Teks Kanan (Class 'reverse') */}
          <div className="offering-row reverse">
            <div className="offering-text">
              <span className="offering-number">02</span>
              <h3>Custom Skill Workshops</h3>
              <p>Co-host specialized training sessions using your company’s real-world challenges as case studies, effectively scouting problem-solvers on the spot.</p>
            </div>
            <div className="offering-image image-placeholder-2"></div>
          </div>

          {/* Baris 3: Teks Kiri, Gambar Kanan */}
          <div className="offering-row">
            <div className="offering-text">
              <span className="offering-number">03</span>
              <h3>Targeted Brand Activation</h3>
              <p>Seamlessly integrate your products or corporate campaigns into our community roadshows to build strong, organic brand loyalty among young professionals.</p>
            </div>
            <div className="offering-image image-placeholder-3"></div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 4: CONTACT B2B (KARTU DIGITAL PREMIUM) */}
      <section className="b2b-contact-section">
        <div className="premium-contact-card">
          <div className="contact-card-content">
            <h2>Let's Discuss Your Strategic Objectives</h2>
            <p className="contact-desc">
              Ready to drive meaningful impact and secure your future talent pipeline? Reach out to our B2B Partnership representative to design a tailor-made collaboration that perfectly aligns with your corporate goals.
            </p>
            
            <div className="pic-details">
              <div className="pic-info">
                <h4>Meilinda Putri Wijayanti</h4>
                <span>B2B Partnership & Corporate Relations</span>
              </div>
              
              <div className="pic-links">
                <a href="mailto:meilinda.partnership@firststepjourney.com" className="contact-link">
                  <MailIcon /> meilinda.partnership@firststepjourney.com
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
                  <LinkedinIcon /> Connect on LinkedIn
                </a>
              </div>
            </div>
            
            <button className="btn-download">Download Partnership Deck <span>↓</span></button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Partnership;
