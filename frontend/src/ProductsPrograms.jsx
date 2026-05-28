import React from 'react';
import './ProductsPrograms.css';

// =====================================================================
// 1. IMPORT BACKGROUND & GAMBAR-GAMBAR BARU
// Pastikan 8 file ini sudah di-upload ke folder src/assets/
// =====================================================================
import heroBg from './assets/about-hero-img.png';

import progFuture from './assets/prog-future.png';
import progGreen1 from './assets/prog-green-1.png';
import progGreen2 from './assets/prog-green-2.png';
import progGreen3 from './assets/prog-green-3.png';
import progStep1 from './assets/prog-step-1.png';
import progStep2 from './assets/prog-step-2.png';
import progStep3 from './assets/prog-step-3.png';
import progBentoBrand from './assets/prog-bento-brand.png';

// === IKON-IKON UNTUK GREEN JOBS PILLS ===
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

const ScribbleCircleYellow = () => (
  <svg className="scribble-circle" preserveAspectRatio="none" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,35 C30,10 170,5 190,25 C210,45 40,65 15,40 C5,30 20,20 40,15" fill="none" stroke="#FBB03B" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// === IKON-IKON UNTUK BENTO GRID (BARU) ===
const ShieldTickIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <polyline points="9 12 11 14 15 10"></polyline>
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line>
  </svg>
);

const FactoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20v-10l-4 3v-3l-4 3v-3l-8 7z"></path>
    <path d="M22 22H2"></path>
    <path d="M18 20v-4"></path>
    <path d="M14 20v-4"></path>
    <path d="M10 20v-4"></path>
  </svg>
);

const ShoppingBagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

// IKON BARU: TECH / CPU ICON
const CpuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
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
            {/* FOTO 1: Polaroid Future */}
            <img src={progFuture} alt="First Step Journey Green Career" />
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
        
        <div className="pp-greenjobs-right">
          <div className="pp-collage">
            {/* FOTO 2, 3, 4: Collage Green Jobs */}
            <img src={progGreen1} alt="Green Jobs Collage 1" className="img-collage img-1" />
            <img src={progGreen2} alt="Green Jobs Collage 2" className="img-collage img-2" />
            <img src={progGreen3} alt="Green Jobs Collage 3" className="img-collage img-3" />
          </div>
        </div>
      </section>

      {/* 4. YOUR PATH SECTION */}
      <section className="pp-section pp-path-section">
        <div className="pp-path-header">
          <span className="pp-eyebrow" style={{ textAlign: 'center', marginBottom: '8px' }}>Career Pathway</span>
          <h2 className="pp-center-title">
            <span className="pp-highlight-circle">
              <ScribbleCircleYellow />
              Your Path
            </span> to a Green Career
          </h2>
        </div>
        
        <div className="pp-path-grid">
          <div className="pp-path-col left-col">
            <div className="path-item path-intro">
              <p>Step up and take charge of your future. Discover how your unique skills can drive real environmental impact and open doors to a purpose-driven profession.</p>
            </div>
            <div className="path-item path-step2">
              {/* FOTO 6: Step 2 */}
              <img src={progStep2} alt="Step 2 - Equip Skills" className="img-step img-step2" />
              <div className="pp-step-text">
                <span className="step-num">Step 2</span>
                <h3>Equip the Skills with GRIT</h3>
                <p>Combine your passion with perseverance. Stay consistent despite the challenges to master your core skills whether in tech, design, or business—and adapt them to sustainability frameworks.</p>
              </div>
            </div>
          </div>

          <div className="pp-path-col right-col">
            <div className="path-item path-step1">
              {/* FOTO 5: Step 1 */}
              <img src={progStep1} alt="Step 1 - Ownership Mentality" className="img-step img-step1" />
              <div className="pp-step-text">
                <span className="step-num">Step 1</span>
                <h3>Build an Ownership Mentality</h3>
                <p>Take full accountability for your impact. Put your heart into your work, face environmental challenges head-on, and focus on finding solutions rather than making excuses.</p>
              </div>
            </div>
            <div className="path-item path-step3">
              {/* FOTO 7: Step 3 */}
              <img src={progStep3} alt="Step 3 - Execute Impact" className="img-step img-step3" />
              <div className="pp-step-text">
                <span className="step-num">Step 3</span>
                <h3>Execute & Impact</h3>
                <p>A brilliant plan means nothing without real execution. Step into the industry, implement your ideas, and become the forward-thinking leader the future needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE GREEN ECONOMY */}
      <section className="pp-section pp-explore-section">
        <h2 className="pp-center-title" style={{ marginBottom: '60px' }}>Explore the Green Economy</h2>
        
        <div className="pp-bento-grid">
          
          {/* Kolom 1 */}
          <div className="bento-col">
            {/* KARTU: Sustainable Tech dengan ICON BARU */}
            <div className="bento-card card-yellow tall">
              <div className="bento-svg-icon large text-navy">
                <CpuIcon />
              </div>
              <h3 className="courgette-title">Sustainable Tech <br/>& Innovation</h3>
              <p>Technology driven sustainability.</p>
            </div>
            <div className="bento-card card-white short">
              <div className="bento-svg-icon text-navy"><ShieldTickIcon /></div>
              <h3 className="courgette-title">Corporate ESG</h3>
              <p>Governance and social impact.</p>
            </div>
          </div>

          {/* Kolom 2 */}
          <div className="bento-col">
            <div className="bento-card card-white short">
              <div className="bento-svg-icon text-navy"><SunIcon /></div>
              <h3 className="courgette-title">Renewable Energy</h3>
              <p>Clean energy transition.</p>
            </div>
            <div className="bento-card card-purple tall">
              <div className="bento-svg-icon large text-white"><FactoryIcon /></div>
              <h3 className="courgette-title">Circular Economy</h3>
              <p>Waste reduction strategies.</p>
            </div>
          </div>

          {/* Kolom 3 */}
          <div className="bento-col">
            {/* FOTO 8: Background untuk Sustainable Brand */}
            <div className="bento-card card-image tall">
              <img src={progBentoBrand} alt="Sustainable Brand" className="bento-bg-image" />
              <h3 className="courgette-title text-white relative-z">Sustainable Brand <br/>& Comms</h3>
            </div>
            <div className="bento-card card-white short">
              <div className="bento-title-row">
                <h3 className="courgette-title">E-Commerce & <br/>Digital Trust</h3>
                <div className="bento-svg-icon text-navy side-icon"><ShoppingBagIcon /></div>
              </div>
              <p>Green marketplace.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ProductsPrograms;
