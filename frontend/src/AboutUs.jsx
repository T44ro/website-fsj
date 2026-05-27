import React from 'react';
import './AboutUs.css'; // Hanya memanggil CSS khusus halaman ini

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Who We Are</h1>
          <p>
            FSJ is an empowerment platform for Indonesian Youth (ages 17-25) by Community-based, 
            free programs, and live projects.
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
            {/* Hapus komen di bawah jika gambar sudah diimport */}
            {/* <img src={visionImg} alt="Vision" /> */}
            <div className="image-placeholder">Image Placeholder</div>
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
              <li>Drive impact-driven movement through action</li>
            </ul>
          </div>
          <div className="vm-image-card">
            {/* Hapus komen di bawah jika gambar sudah diimport */}
            {/* <img src={missionImg} alt="Mission" /> */}
            <div className="image-placeholder">Image Placeholder</div>
          </div>
        </div>
      </section>

      {/* 3. OUR CULTURE */}
      <section className="culture-section">
        <div className="culture-header">
          <span className="culture-subtitle">Our Culture</span>
          <h2 className="culture-title">
            A Rapid Journey of <span className="culture-highlight">Impact</span>
          </h2>
        </div>
        <div className="culture-content">
          <div className="culture-image-large">
             {/* Hapus komen di bawah jika gambar sudah diimport */}
             {/* <img src={cultureImg} alt="Culture Graphic" /> */}
             <div className="image-placeholder large">Culture Graphic / Image Placeholder</div>
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
          </div>

          <div className="div-card div-grad-yellow">
            <h3 className="text-navy">Visual <br/> Brand <br/> Communication</h3>
          </div>

          <div className="div-card div-grad-blue">
            <h3 className="text-black">Operation & <br/> Program <br/> Execution</h3>
          </div>

          <div className="div-card div-grad-blue">
            <h3 className="text-black">Brand & <br/> Event</h3>
          </div>

          <div className="div-card div-grad-yellow">
            <h3 className="text-navy">Human <br/> Capital</h3>
          </div>

          <div className="div-card div-grad-blue">
            <h3 className="text-black">Administration <br/> & Report</h3>
          </div>

          <div className="div-card div-grad-yellow">
            <h3 className="text-navy">Digital <br/> Marketing</h3>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;
