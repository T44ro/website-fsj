import React from 'react';
import './AboutUs.css';

// 1. IMPORT BACKGROUND GAMBAR HERO
import heroBg from './assets/about-hero-img.png';

// Ikon untuk Strategic Pillars
const ShieldIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const UsersIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>);
const TargetIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>);
const TrendingIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>);

const AboutUs = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.75), rgba(27, 20, 100, 0.8)), url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#1B1464'
  };

  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="about-hero" style={heroStyle}>
        <div className="hero-content">
          <h1>Who We Are</h1>
          <p>
            FSJ is an Empowerment platform for Indonesian Youth (ages 17-25) <br/>
            driven by Community-based learning, free programs, and live projects.
          </p>
          <div className="breadcrumb">
            <span className="home-link">HOME</span>
            <span className="separator"> / </span>
            <span className="about-link">ABOUT US</span>
          </div>
        </div>
      </section>

      {/* 2. WHY FSJ? */}
      <section className="why-fsj-section">
        <div className="why-content">
          <div className="why-text-area">
            <span className="section-eyebrow">THE CHALLENGE</span>
            <h2 className="why-title">Why FSJ?</h2>
            <h3 className="why-subtitle">
              Unemployment remains the most critical challenge in Southeast Asia—ranked #1 in SEA and #2 across Asia.
            </h3>
            <p className="why-desc">
              <strong>7.28 Millions</strong> of Indonesian youth (5%) as February 2025 by IMF & BPS (high schoolers to fresh grads) struggle with:
            </p>
            <ul className="why-list">
              <li>Underprivileged access to resources</li>
              <li>Unclear career paths</li>
              <li>Skill mismatch between graduates & industry needs</li>
              <li>Lack of professional mentorship</li>
            </ul>
          </div>
          <div className="why-anim-area">
            <div className="animation-placeholder">
              <span>[ Illustration / Chart Placeholder ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="vision-mission-section">
        <div className="vm-row">
          <div className="vm-text-card">
            <h2 className="vision-title">Vision</h2>
            <p>
              To provide access for Indonesian youth — especially those with limited privilege — 
              to take their first step, grow, and discover a meaningful career path 
              through both soft and hard skills.
            </p>
          </div>
          <div className="vm-image-card"></div>
        </div>
        <div className="vm-row reverse">
          <div className="vm-text-card">
            <h2 className="mision-title">Mision</h2>
            <ul>
              <li>Bridge the gap in access to career guidance and development.</li>
              <li>Ignite first steps through education & mentoring.</li>
              <li>Cultivate growth mindset and social inclusion.</li>
              <li>Build a safe and empowering community space.</li>
              <li>Drive impact-driven movement through cross-sector collaboration.</li>
            </ul>
          </div>
          <div className="vm-image-card"></div>
        </div>
      </section>

      {/* 4. STRATEGIC PILLARS */}
      <section className="pillars-section">
        <div className="section-header-center text-white">
          <span className="section-eyebrow">OUR FOUNDATION</span>
          <h2>Strategic Pillars FSJ</h2>
        </div>
        <div className="pillars-grid">
          <div className="pillar-box">
            <div className="pillar-icon"><ShieldIcon /></div>
            <h4>Program Excellence</h4>
            <p>Kualitas konten & trainer tinggi untuk membuat FSJ menjadi platform yang lebih terpercaya.</p>
          </div>
          <div className="pillar-box">
            <div className="pillar-icon"><UsersIcon /></div>
            <h4>Community Impact</h4>
            <p>Berbasis data (data-driven) & mengangkat cerita nyata keberhasilan dari para peserta.</p>
          </div>
          <div className="pillar-box">
            <div className="pillar-icon"><TargetIcon /></div>
            <h4>Partnership Development</h4>
            <p>Membangun jaringan luas dengan NGO, Startup, CSR, & universitas.</p>
          </div>
          <div className="pillar-box">
            <div className="pillar-icon"><TrendingIcon /></div>
            <h4>Financial Sustainability</h4>
            <p>Model pendanaan yang mandiri melalui campuran dana hibah & revenue dari partisipan.</p>
          </div>
        </div>
      </section>

      {/* 5. CULTURE & DIVISIONS */}
      <section className="culture-section">
        <div className="culture-header">
          <span className="culture-subtitle">Our Culture</span>
          <h2 className="culture-title">A Rapid Journey of <span className="culture-highlight">Impact</span></h2>
        </div>
        <div className="culture-content">
          <div className="culture-text">
            <ul>
              <li><strong>Career Readiness:</strong> Equip yourself for the professional world. Master industry expectations and build a standout portfolio.</li>
              <li><strong>Self Development:</strong> Sharpen soft skills and build a resilient mindset to conquer challenges.</li>
              <li><strong>Sustainability Skills:</strong> Future-proof your career. Apply ESG principles to your tech, design, or business skills.</li>
            </ul>
          </div>
          <div className="culture-image-card"></div>
          <div className="culture-image-card"></div>
        </div>
      </section>

      <section className="divisions-section">
        <div className="divisions-grid">
          <div className="divisions-header-card">
            <h2 className="divisions-title">The Divisions <br /> Driving <span className="divisions-highlight">Our Mission</span></h2>
            <p className="divisions-desc">Behind every impactful initiative is a dedicated team. Our divisions work collaboratively to design sustainable programs.</p>
          </div>
          <div className="div-card card-soft-beige"><h3 className="text-black">Product & <br/> Strategy Marketing</h3></div>
          <div className="div-card card-soft-beige"><h3 className="text-navy">Visual Brand <br/> Communication</h3></div>
          <div className="div-card card-soft-beige"><h3 className="text-black">Operation & <br/> Program Execution</h3></div>
          <div className="div-card card-soft-beige"><h3 className="text-black">Brand & <br/> Event</h3></div>
          <div className="div-card card-soft-beige"><h3 className="text-navy">Human <br/> Capital</h3></div>
          <div className="div-card card-soft-beige"><h3 className="text-black">Administration <br/> & Report</h3></div>
          <div className="div-card card-soft-beige"><h3 className="text-navy">Digital <br/> Marketing</h3></div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
