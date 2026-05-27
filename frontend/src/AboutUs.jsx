import React from 'react';
import './AboutUs.css'; // INI SANGAT PENTING AGAR CSS-NYA TERBACA

// NANTI KALAU GAMBARNYA SUDAH DI-UPLOAD, HAPUS TANDA // DI BAWAH INI:
// import heroBg from './assets/about-hero-bg.jpg';
// import visionImg from './assets/vision-img.jpg';
// import missionImg from './assets/mission-img.jpg';
// import cultureImg from './assets/culture-img.png';

// Import Foto Divisi 
// import divProduct from './assets/div-product.png';
// import divVisual from './assets/div-visual.png';
// import divOperation from './assets/div-operation.png';
// import divBrand from './assets/div-brand.png';
// import divHuman from './assets/div-human.png';
// import divAdmin from './assets/div-admin.png';
// import divDigital from './assets/div-digital.png';

const AboutUs = () => {
  const heroStyle = {
    // backgroundImage: `url(${heroBg})`,
    backgroundColor: '#FBB03B'
  };

  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="hero" style={heroStyle}>
        <div className="hero-content">
          <div className="breadcrumb">
            <span className="home-link">Home</span>
            <span className="separator"> &gt; </span>
            <span className="about-link">About Us</span>
          </div>
          <h1>About Us</h1>
          <p>
            FSJ is an Empowerment platform for Indonesian Youth (ages 17-25) by Community-based, 
            free programs, and live projects.
          </p>
        </div>
      </section>

      {/* 2. VISION & MISSION */}
      <section className="vision-mission-section">
        <div className="vm-row">
          <div className="vm-text-card">
            <h2 className="vision-title">Our Vision</h2>
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
            <h2 className="mision-title">Our Mision</h2>
            <ul>
              <li>Creating an inclusive ecosystem for students.</li>
              <li>Provide free high-quality training and mentoring.</li>
              <li>Collaborating with industry professionals.</li>
            </ul>
          </div>
          <div className="vm-image-card">
            {/* <img src={missionImg} alt="Mission" /> */}
          </div>
        </div>
      </section>

      {/* 3. OUR CULTURE */}
      <section className="culture-section">
        <div className="culture-header">
          <span className="culture-subtitle">Our Culture</span>
          <h2 className="culture-title">
            Driving Growth <br />
            with <span className="culture-highlight">Integrity</span>
          </h2>
        </div>
        <div className="culture-content">
          <div className="culture-text">
            <p>At FSJ, we believe that a strong community is built on trust and shared values.</p>
            <ul>
              <li><strong>Continuous Learning</strong>: We embrace curiosity.</li>
              <li><strong>Inclusive Impact</strong>: Accessible for everyone.</li>
              <li><strong>Collaborative Spirit</strong>: Growing together.</li>
            </ul>
          </div>
          <div className="culture-image">
            {/* <img src={cultureImg} alt="Culture Graphic" /> */}
          </div>
          <div className="culture-text">
             <p>Our members are encouraged to innovate and take ownership of their professional journey.</p>
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

          <div className="div-card div-grad-blue">
            <h3 className="text-black">Product & <br/> Strategy <br/> Marketing</h3>
            {/* <img src={divProduct} alt="Product & Strategy" /> */}
          </div>

          <div className="div-card div-grad-yellow">
            <h3 className="text-navy">Visual <br/> Brand <br/> Communication</h3>
            {/* <img src={divVisual} alt="Visual Brand" /> */}
          </div>

          <div className="div-card div-grad-blue">
            <h3 className="text-black">Operation & <br/> Program <br/> Execution</h3>
            {/* <img src={divOperation} alt="Operation" /> */}
          </div>

          <div className="div-card div-grad-blue">
            <h3 className="text-black">Brand & <br/> Event</h3>
            {/* <img src={divBrand} alt="Brand & Event" /> */}
          </div>

          <div className="div-card div-grad-yellow">
            <h3 className="text-navy">Human <br/> Capital</h3>
            {/* <img src={divHuman} alt="Human Capital" /> */}
          </div>

          <div className="div-card div-grad-blue">
            <h3 className="text-black">Administration <br/> & Report</h3>
            {/* <img src={divAdmin} alt="Administration" /> */}
          </div>

          <div className="div-card div-grad-yellow card-highlighted">
            <h3 className="text-navy">Digital <br/> Marketing</h3>
            {/* <img src={divDigital} alt="Digital Marketing" /> */}
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;
