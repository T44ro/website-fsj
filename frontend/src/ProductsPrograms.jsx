import React from 'react';
import './ProductsPrograms.css';

// IMPORT BACKGROUND GAMBAR HERO (Menggunakan gambar yang sama dengan About Us)
import heroBg from './assets/about-hero-img.png';

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
          <div className="pp-polaroid-card">
            <h3>First Step Journey<br/>Green Career</h3>
            <div className="pp-polaroid-img"></div>
          </div>
        </div>
        <div className="pp-future-right">
          <span className="pp-eyebrow">About Green Career</span>
          <h2 className="pp-title">Future-Proof <span className="pp-highlight">Career</span></h2>
          <p className="pp-desc">
            Equip yourself for the professional world. Master industry expectations, build a standout portfolio, and develop the work ethic to thrive from day one. To provide access for Indonesian youth — especially those with limited privilege.
          </p>
          <div className="pp-features-grid">
            <div className="pp-feature-box">
              <div className="icon-placeholder"></div>
              <h4>First Step Journey</h4>
              <p>Prepare your career in the green economy.</p>
            </div>
            <div className="pp-feature-box">
              <div className="icon-placeholder"></div>
              <h4>Meaningful Path</h4>
              <p>Build your skills and expand your network.</p>
            </div>
            <div className="pp-feature-box">
              <div className="icon-placeholder"></div>
              <h4>Career Coaching</h4>
              <p>Free mentoring and career guidance.</p>
            </div>
            <div className="pp-feature-box">
              <div className="icon-placeholder"></div>
              <h4>Inclusive Impact</h4>
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
            Green jobs are decent jobs that contribute to preserve or restore the environment, be they in traditional sectors such as manufacturing and construction, or in new, emerging green sectors.
          </p>
          <div className="pp-pill-list">
            <div className="pp-pill">Tech & Data: Build sustainable software</div>
            <div className="pp-pill outline">Design: Product & Eco-friendly packaging</div>
            <div className="pp-pill outline">Business & Strategy: Circular economy</div>
          </div>
        </div>
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
          
          {/* Kolom 1 */}
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

          {/* Kolom 2 */}
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

          {/* Kolom 3 */}
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
