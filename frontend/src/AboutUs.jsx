import React from 'react';
import './AboutUs.css';

// 1. IMPORT BACKGROUND GAMBAR HERO
import heroBg from './assets/about-hero-img.png';

const AboutUs = () => {
  // 2. MASUKKAN GAMBAR KE DALAM STYLE BACKGROUND
  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FBB03B' // Warna cadangan saat gambar belum termuat
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
          
          {/* Tile Judul & Deskripsi */}
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

          {/* Kartu 1: Product & Strategy */}
          <div className="div-card card-soft-beige">
            <h3 className="text-black">Product & <br/> Strategy <br/> Marketing</h3>
          </div>

          {/* Kartu 2: Visual Brand */}
          <div className="div-card card-soft-beige">
            <h3 className="text-navy">Visual <br/> Brand <br/> Communication</h3>
          </div>

          {/* Kartu 3: Operation */}
          <div className="div-card card-soft-beige">
            <h3 className="text-black">Operation & <br/> Program <br/> Execution</h3>
          </div>

          {/* Kartu 4: Brand & Event */}
          <div className="div-card card-soft-beige">
            <h3 className="text-black">Brand & <br/> Event</h3>
          </div>

          {/* Kartu 5: Human Capital */}
          <div className="div-card card-soft-beige">
            <h3 className="text-navy">Human <br/> Capital</h3>
          </div>

          {/* Kartu 6: Administration */}
          <div className="div-card card-soft-beige">
            <h3 className="text-black">Administration <br/> & Report</h3>
          </div>

          {/* Kartu 7: Digital Marketing */}
          <div className="div-card card-soft-beige card-highlighted">
            <h3 className="text-navy">Digital <br/> Marketing</h3>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;
