import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* ========================================= */}
      {/* 1. HERO SECTION                           */}
      {/* ========================================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>Who We Are</h1>
          <p>
            Discover thousands of fun and interactive learning activities<br />
            to support your child's growth and learning process.
          </p>
          <div className="breadcrumb">
            <span className="home-link">Home</span> / <span className="about-link">About Us</span>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. VISION & MISSION SECTION               */}
      {/* ========================================= */}
      <section className="vision-mission-section">
        {/* Baris Vision */}
        <div className="vm-row">
          <div className="vm-text-card">
            <h2 className="vision-title">Vision</h2>
            <p>
              To provide access for Indonesian youth — especially those with limited privilege — to take their first step, grow, and discover a meaningful career path through both soft and hard skills.
            </p>
          </div>
          <div className="vm-image-card">
            <img src="/vision-img.jpg" alt="Youth discussing" />
          </div>
        </div>
        
        {/* Baris Mission */}
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
            <img src="/mission-img.jpg" alt="Leader presenting" />
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. OUR CULTURE SECTION                    */}
      {/* ========================================= */}
      <section className="culture-section">
        <div className="culture-header">
          <span className="culture-subtitle">Our Culture</span>
          <h2 className="culture-title">
            A Rapid Journey of <span className="culture-highlight">Impact</span>
          </h2>
        </div>
        
        <div className="culture-content">
          {/* Kolom Teks */}
          <div className="culture-text">
            <p>
              FSJ is an Empowerment platform for Indonesian Youth (ages 17-25) by Community - based, free programs, and live projects. To provide access for Indonesian youth — especially those with limited privilege — to take their first step, grow, and discover a meaningful career path through both soft and hard skills.
            </p>
            <ul>
              <li>
                <strong>Career Readiness</strong>
                Equip yourself for the professional world. Master industry expectations, build a standout portfolio, and develop the work ethic to thrive from day one.
              </li>
              <li>
                <strong>Self Development</strong>
                Sharpen your soft skills and build a resilient mindset. Develop true ownership and the grit needed to conquer challenges and accelerate your growth.
              </li>
              <li>
                <strong>Sustainability Skills</strong>
                Future-proof your career. Apply ESG principles to your tech, design, or business skills for real impact.
              </li>
            </ul>
          </div>
          
          {/* Kolom Foto Jose Prima */}
          <div className="culture-image">
            <img src="/jose-prima.png" alt="Jose Prima - CEO of FSJ" />
          </div>
          
          {/* Kolom Grafis STEP */}
          <div className="culture-image">
            <img src="/step-stairs.png" alt="STEP Framework" />
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. THE DIVISIONS SECTION                  */}
      {/* ========================================= */}
      <section className="divisions-section">
        <div className="divisions-grid">
          
          {/* Teks Header Grid */}
          <div className="divisions-header-card">
            <h2 className="divisions-title">
              The Divisions Driving <br />
              <span className="divisions-highlight">Our Mission</span>
            </h2>
            <p className="divisions-desc">
              Behind every impactful initiative at First Step Journey is a dedicated team. Our divisions work collaboratively to design sustainable programs, foster inclusive communities, and empower Indonesian youth to reach their full potential.
            </p>
          </div>

          {/* Kartu 1: Product & Strategy */}
          <div className="div-card div-blue-gradient">
            <h3 style={{ color: '#000000' }}>Product &<br/>Strategy</h3>
            <img src="/div-person1.png" alt="Product & Strategy" />
          </div>

          {/* Kartu 2: Visual Brand Communication */}
          <div className="div-card div-orange-gradient">
            <h3 style={{ color: '#1B1464' }}>Visual<br/>Brand<br/>Communication</h3>
            <img src="/div-person2.png" alt="Visual Brand Communication" />
          </div>

          {/* Kartu 3: Product & Strategy */}
          <div className="div-card div-blue-gradient">
            <h3 style={{ color: '#000000' }}>Product &<br/>Strategy</h3>
            <img src="/div-person3.png" alt="Product & Strategy" />
          </div>

          {/* Kartu 4: Brand & Event */}
          <div className="div-card div-blue-gradient">
            <h3 style={{ color: '#000000' }}>Brand &<br/>Event</h3>
            <img src="/div-person4.png" alt="Brand & Event" />
          </div>

          {/* Kartu 5: Human Capital */}
          <div className="div-card div-orange-gradient">
            <h3 style={{ color: '#1B1464' }}>Human Capital</h3>
            <img src="/div-person5.png" alt="Human Capital" />
          </div>

          {/* Kartu 6: Administration & Report */}
          <div className="div-card div-blue-gradient">
            <h3 style={{ color: '#000000' }}>Administration<br/>& Report</h3>
            <img src="/div-person6.png" alt="Administration & Report" />
          </div>

          {/* Kartu 7: Operations */}
          <div className="div-card div-orange-gradient">
            <h3 style={{ color: '#1B1464' }}>Operations</h3>
            <img src="/div-person7.png" alt="Operations" />
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;
