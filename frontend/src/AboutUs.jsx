import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
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

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
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

      {/* Our Culture Section */}
      <section className="culture-section">
        <div className="culture-header">
          <span className="culture-subtitle">Our Culture</span>
          <h2 className="culture-title">
            A Rapid Journey of <span className="culture-highlight">Impact</span>
          </h2>
        </div>
        
        <div className="culture-content">
          {/* Kolom Kiri: Teks */}
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
          
          {/* Kolom Tengah: Foto Bang Jose */}
          <div className="culture-image">
            {/* Pastikan upload foto bang Jose dengan nama jose-prima.png ke folder public */}
            <img src="/jose-prima.png" alt="Jose Prima - CEO of FSJ" />
          </div>
          
          {/* Kolom Kanan: Grafis STEP */}
          <div className="culture-image">
            {/* Pastikan upload gambar tangga STEP dengan nama step-stairs.png ke folder public */}
            <img src="/step-stairs.png" alt="STEP Framework" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
