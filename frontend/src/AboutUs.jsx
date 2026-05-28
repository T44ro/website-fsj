import React from 'react';
import './AboutUs.css';

// =====================================================================
// 1. IMPORT BACKGROUND GAMBAR
// Pastikan semua file ini sudah ada di folder src/assets/ di GitHub
// =====================================================================
import heroBg from './assets/about-hero-img.png';

import aboutWhy from './assets/about-why.png';
import aboutVision from './assets/about-vision.png';
import aboutMission from './assets/about-mission.png';
import aboutJose from './assets/about-jose.png';
import aboutStairs from './assets/about-stairs.png';

import divFounder from './assets/div-founder.png';
import divProduct from './assets/div-product.png';
import divVisual from './assets/div-visual.png';
import divOperation from './assets/div-operation.png';
import divBrand from './assets/div-brand.png';
import divHuman from './assets/div-human.png';
import divAdmin from './assets/div-admin.png';
import divDigital from './assets/div-digital.png';

// Ikon untuk Strategic Pillars
const ShieldIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const UsersIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>);
const TargetIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>);
const TrendingIcon = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>);

const AboutUs = () => {
  // Gradien biru/ungu DIHAPUS, disamakan persis dengan halaman Program
  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FBB03B'
  };

  return (
    <div className="about-page">
      {/* 1. HERO SECTION (SUDAH DISAMAKAN DENGAN PAGE PROGRAMS) */}
      <section className="about-hero" style={heroStyle}>
        <div className="about-hero-content">
          <h1>Who We Are</h1>
          <p>
            FSJ is an Empowerment platform for Indonesian Youth (ages 17-25) <br/>
            driven by Community-based learning, free programs, and live projects.
          </p>
          <div className="about-breadcrumb">
            <span>Home</span> <span className="separator"> / </span> <span>About Us</span>
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
            <img src={aboutWhy} alt="Why FSJ" className="why-image" />
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
          <img src={aboutVision} alt="Vision FSJ" className="vm-image-card" />
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
          <img src={aboutMission} alt="Mission FSJ" className="vm-image-card" />
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
          <img src={aboutJose} alt="Bang Jose" className="culture-image-card" />
          <img src={aboutStairs} alt="Journey Stairs" className="culture-image-card" />
        </div>
      </section>

      {/* 6. DIVISIONS SECTION */}
      <section className="divisions-section">
        <div className="divisions-grid">
          <div className="divisions-header-card">
            <h2 className="divisions-title">The Divisions <br /> Driving <span className="divisions-highlight">Our Mission</span></h2>
            <p className="divisions-desc">Behind every impactful initiative is a dedicated team. Our divisions work collaboratively to design sustainable programs.</p>
          </div>
          
          <div className="div-card">
            <img src={divFounder} alt="Founder" className="div-bg-image" />
            <div className="div-text-content">
              <h3 className="div-title-overlay">Founder</h3>
              <p className="div-person-name">Jose Prima</p>
            </div>
          </div>

          <div className="div-card">
            <img src={divProduct} alt="Product Strategy" className="div-bg-image" />
            <div className="div-text-content">
              <h3 className="div-title-overlay">Product & <br/> Strategy Marketing</h3>
              <p className="div-person-name">Felicia</p>
            </div>
          </div>

          <div className="div-card">
            <img src={divVisual} alt="Visual Brand" className="div-bg-image" />
            <div className="div-text-content">
              <h3 className="div-title-overlay">Visual Brand <br/> Communication</h3>
              <p className="div-person-name">Adnan & Elza</p>
            </div>
          </div>

          <div className="div-card">
            <img src={divOperation} alt="Operation Program" className="div-bg-image" />
            <div className="div-text-content">
              <h3 className="div-title-overlay">Operation & <br/> Program Execution</h3>
              <p className="div-person-name">Thian</p>
            </div>
          </div>

          <div className="div-card">
            <img src={divBrand} alt="Brand Event" className="div-bg-image" />
            <div className="div-text-content">
              <h3 className="div-title-overlay">Brand & <br/> Event</h3>
              <p className="div-person-name">Benedicta</p>
            </div>
          </div>

          <div className="div-card">
            <img src={divHuman} alt="Human Capital" className="div-bg-image" />
            <div className="div-text-content">
              <h3 className="div-title-overlay">Human <br/> Capital</h3>
              <p className="div-person-name">Nadiya Fauziyah</p>
            </div>
          </div>

          <div className="div-card">
            <img src={divAdmin} alt="Admin Report" className="div-bg-image" />
            <div className="div-text-content">
              <h3 className="div-title-overlay">Administration <br/> & Report</h3>
              <p className="div-person-name">Putri</p>
            </div>
          </div>

          <div className="div-card">
            <img src={divDigital} alt="Digital Marketing" className="div-bg-image" />
            <div className="div-text-content">
              <h3 className="div-title-overlay">Digital <br/> Marketing</h3>
              <p className="div-person-name">Hasna</p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
