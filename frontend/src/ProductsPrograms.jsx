import React from 'react';
import './ProductsPrograms.css';

// 1. IMPORT BACKGROUND GAMBAR HERO
import heroBg from './assets/about-hero-img.png';

// === IKON-IKON UNTUK TOMBOL GREEN JOBS ===
const SettingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const PaletteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
  </svg>
);

const BuildingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <path d="M9 22v-4h6v4"></path>
    <path d="M8 6h.01"></path>
    <path d="M16 6h.01"></path>
    <path d="M12 6h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 10h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M8 14h.01"></path>
  </svg>
);

const ProductsPrograms = () => {
  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FBB03B'
  };

  return (
    <div className="pp-page">
      {/* 1. HERO SECTION */}
      <section className="pp-hero" style={heroStyle}>
        <div className="pp-hero-content">
          <h1>FSJ Green Career</h1>
          <p>
            Discover thousands of fun and interactive learning activities <br/>
            to support your child's growth and learning process.
          </p>
          <div className="pp-breadcrumb">
            <span>Home</span> <span className="separator"> / </span> <span>Product & Programs</span>
          </div>
        </div>
      </section>

      {/* 2. FUTURE-PROOF CAREER SECTION */}
      <section className="pp-section pp-future-section">
        <div className="pp-future-left">
          <h3 className="pp-future-left-title">First Step Journey<br/>Green Career</h3>
          <div className="polaroid-wrapper">
            <div className="polaroid-placeholder-img"></div>
          </div>
        </div>
        <div className="pp-future-right">
          <span className="pp-eyebrow">FSJ Green Career</span>
          <h2 className="pp-title">Future-Proof <span className="pp-highlight">Career</span></h2>
          <p className="pp-desc">
            Equip yourself for the professional world. Master industry expectations, build a standout portfolio, and develop the work ethic to thrive from day one. To provide access for Indonesian youth — especially those with limited privilege.
          </p>
          <div className="pp-features-grid">
            <div className="pp-feature-box">
              <div className="icon-placeholder"></div>
              <h4>What are Green Jobs?</h4>
              <p>Prepare your career in the green economy.</p>
            </div>
            <div className="pp-feature-box">
              <div className="icon-placeholder"></div>
              <h4>Industry Mapping</h4>
              <p>Discover roles and specific industries.</p>
            </div>
            <div className="pp-feature-box">
              <div className="icon-placeholder"></div>
              <h4>Career Pathway</h4>
              <p>Build your skills and expand your network.</p>
            </div>
            <div className="pp-feature-box">
              <div className="icon-placeholder"></div>
              <h4>FSJ Green Programs</h4>
              <p>Accessible programs for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS GREEN JOBS SECTION */}
      <section className="pp-section pp-greenjobs-section">
        <div className="pp-greenjobs-left">
          <span className="pp-eyebrow">About Green Career</span>
          <h2 className="pp-title">What is Green Jobs?</h2>
          <p className="pp-desc">
            Green Jobs encompass any profession that contributes to preserving the environment. Whether you are building energy-efficient software using Information Systems, crafting sustainable visual brand communications, or mapping out circular business frameworks, you are part of the green workforce.
          </p>
          
          {/* DESAIN PILL BARU DENGAN IKON */}
          <div className="pp-pill-list">
            
            <div className="pp-pill pill-tech">
              <div className="pill-icon"><SettingIcon /></div>
              <span>Tech & Data: Software solutions, data analytics, and system efficiency.</span>
            </div>
            
            <div className="pp-pill pill-design">
              <div className="pill-icon"><PaletteIcon /></div>
              <span>Design & Product: Eco-friendly packaging & sustainable UI/UX design.</span>
            </div>
            
            <div className="pp-pill pill-business">
              <div className="pill-icon"><BuildingIcon /></div>
              <span>Business & Strategy: Circular Economy models & ESG integration.</span>
            </div>

          </div>
        </div>
        
        {/* KOLASE GAMBAR (Layout Disempurnakan) */}
        <div className="pp-greenjobs-right">
          <div className="pp-collage">
            <div className="img-placeholder img-1"></div>
            <div className="img-placeholder img-2"></div>
            <div className="img-placeholder img-3"></div>
          </div>
        </div>
      </section>

      {/* 4. YOUR PATH SECTION */}
      <section className="pp-section pp-path-section">
        <h2 className="pp-center-title"><span className="pp-highlight-oval">Your Path</span> to a Green Career</h2>
        
        <div className="pp-path-row">
          <div className="pp-path-text">
            <h3>Step up and take charge of your future.</h3>
            <p>Discover how your unique skills can drive real environmental impact and open doors to a purpose-driven profession.</p>
          </div>
          <div className="pp-path-image"><div className="img-placeholder tall"></div></div>
        </div>

        <div className="pp-path-row reverse">
          <div className="pp-path-text">
            <span className="step-label">Step 1</span>
            <h3>Build an Ownership Mentality</h3>
            <p>Take true accountability for your career. Own your journey, embrace challenges, and commit to continuous learning.</p>
          </div>
          <div className="pp-path-image"><div className="img-placeholder wide"></div></div>
        </div>

        <div className="pp-path-row">
          <div className="pp-path-text">
            <span className="step-label">Step 2</span>
            <h3>Equip the Skills with GRIT</h3>
            <p>Develop resilience and determination. Push through obstacles and stay focused on long-term sustainability goals.</p>
          </div>
          <div className="pp-path-image"><div className="img-placeholder wide"></div></div>
        </div>
      </section>

      {/* 5. EXPLORE GREEN ECONOMY (BENTO GRID) */}
      <section className="pp-section pp-explore-section">
        <h2 className="pp-center-title">Explore the Green Economy</h2>
        <div className="pp-bento-grid">
          
          <div className="bento-col">
            <div className="bento-card card-yellow tall">
              <div className="bento-icon"></div>
              <h3>Sustainable Tech <br/>& Innovation</h3>
              <p>Technology driven sustainability.</p>
            </div>
            <div className="bento-card card-white short">
              <div className="bento-icon small"></div>
              <h3>Corporate ESG</h3>
              <p>Governance and social impact.</p>
            </div>
          </div>

          <div className="bento-col">
            <div className="bento-card card-white short">
              <div className="bento-icon small"></div>
              <h3>Renewable Energy</h3>
              <p>Clean energy transition.</p>
            </div>
            <div className="bento-card card-purple tall">
              <div className="bento-icon"></div>
              <h3>Circular Economy</h3>
              <p>Waste reduction strategies.</p>
            </div>
          </div>

          <div className="bento-col">
            <div className="bento-card card-image tall">
              <h3>Sustainable Brand <br/>& Comms</h3>
            </div>
            <div className="bento-card card-white short">
              <div className="bento-icon small"></div>
              <h3>E-Commerce & <br/>Digital Trust</h3>
              <p>Green marketplace.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ProductsPrograms;
