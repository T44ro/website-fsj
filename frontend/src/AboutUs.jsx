import React from 'react';
import './AboutUs.css';

// 1. IMPORT BACKGROUND GAMBAR HERO
import heroBg from './assets/about-hero-img.png';

// Nanti hapus tanda // di bawah ini kalau gambarnya sudah di-upload ke folder assets
// import visionImg from './assets/vision-img.png';
// import missionImg from './assets/mission-img.png';
// import joseImg from './assets/jose-img.png';
// import stepImg from './assets/step-img.png';

const AboutUs = () => {
  // 2. MASUKKAN GAMBAR KE DALAM STYLE BACKGROUND
  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FBB03B' 
  };

  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="hero" style={heroStyle}>
        <div className="hero-content">
          <h1>Who We Are</h1>
          <p>
            Discover thousands of fun and interactive learning activities <br/>
            to support your child's growth and learning process.
          </p>
          <div className="breadcrumb">
            <span className="home-link">Home</span>
            <span className="separator"> / </span>
            <span className="about-link">About Us</span>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION */}
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
          <div className="vm-image-card">
            {/* <img src={visionImg} alt="Vision" /> */}
          </div>
        </div>

        <div className="vm-row reverse">
          <div className="vm-text-card">
            <h2 className="mision-title">Mision</h2>
            <ul>
              <li>Bridge the gap in access to career guidance and development</li>
              <li>Ignite first steps through education & mentoring</li>
              <li>Cultivate growth mindset and social inclusion</li>
              <li>Build a safe and empowering community space</li>
              <li>Drive impact-Driven Movement through action, content, and cross-sector collaboration</li>
            </ul>
          </div>
          <div className="vm-image-card">
            {/* <img src={missionImg} alt="Mission" /> */}
          </div>
        </div>
      </section>

      {/* 3. OUR CULTURE (DESAIN BARU) */}
      <section className="culture-section">
        <div className="culture-header">
          <span className="culture-subtitle">Our Culture</span>
          <h2 className="culture-title">
            A Rapid Journey of <span className="culture-highlight">Impact</span>
          </h2>
        </div>
        
        <div className="culture-content">
          {/* Kolom 1: Teks Kiri */}
          <div className="culture-text">
            <p className="culture-desc">
              FSJ is an Empowerment platform for Indonesian Youth (ages 17-25) by Community - based, free programs, and live projects. To provide access for Indonesian youth — especially those with limited privilege — to take their first step, grow, and discover a meaningful career path through both soft and hard skills.
            </p>
            <ul>
              <li>
                <strong>Career Readiness</strong><br/>
                Equip yourself for the professional world. Master industry expectations, build a standout portfolio, and develop the work ethic to thrive from day one.
              </li>
              <li>
                <strong>Self Development</strong><br/>
                Sharpen your soft skills and build a resilient mindset. Develop true ownership and the grit needed to conquer challenges and accelerate your growth.
              </li>
              <li>
                <strong>Sustainability Skills</strong><br/>
                Future-proof your career. Apply ESG principles to your tech, design, or business skills for real impact.
              </li>
            </ul>
          </div>

          {/* Kolom 2: Gambar Jose */}
          <div className="culture-image-card">
            {/* <img src={joseImg} alt="Jose Prima - CEO" /> */}
          </div>

          {/* Kolom 3: Gambar Tangga STEP */}
          <div className="culture-image-card">
            {/* <img src={stepImg} alt="STEP Culture" /> */}
          </div>
        </div>
      </section>

      {/* 4. THE DIVISIONS SECTION */}
      <section className="divisions-section">
        <div className="divisions-grid">
          
          <div className="divisions-header-card">
            <h2 className="divisions-title">
              The Divisions <br />
              Driving <span className="divisions-highlight">Our Mission</span>
            </h2>
            <p className="divisions-desc">
              Behind every impactful initiative at First Step Journey is a dedicated team. 
              Our divisions work collaboratively to design sustainable programs.
            </p>
          </div>

          <div className="div-card card-soft-beige">
            <h3 className="text-black">Product & <br/> Strategy <br/> Marketing</h3>
          </div>
          <div className="div-card card-soft-beige">
            <h3 className="text-navy">Visual <br/> Brand <br/> Communication</h3>
          </div>
          <div className="div-card card-soft-beige">
            <h3 className="text-black">Operation & <br/> Program <br/> Execution</h3>
          </div>
          <div className="div-card card-soft-beige">
            <h3 className="text-black">Brand & <br/> Event</h3>
          </div>
          <div className="div-card card-soft-beige">
            <h3 className="text-navy">Human <br/> Capital</h3>
          </div>
          <div className="div-card card-soft-beige">
            <h3 className="text-black">Administration <br/> & Report</h3>
          </div>
          <div className="div-card card-soft-beige card-highlighted">
            <h3 className="text-navy">Digital <br/> Marketing</h3>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;
