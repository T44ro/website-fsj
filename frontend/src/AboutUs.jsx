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
        
        {/* Row 1: Vision (Teks di kiri, Gambar di kanan) */}
        <div className="vm-row">
          <div className="vm-text-card">
            <h2 className="vision-title">Vision</h2>
            <p>
              To provide access for Indonesian youth — especially those with limited privilege — to take their first step, grow, and discover a meaningful career path through both soft and hard skills.
            </p>
          </div>
          <div className="vm-image-card">
            {/* Ganti dengan nama file gambar diskusimu nanti */}
            <img src="/vision-img.jpg" alt="Youth discussing" />
          </div>
        </div>

        {/* Row 2: Mission (Gambar di kiri, Teks di kanan) */}
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
            {/* Ganti dengan nama file gambar leadermu nanti */}
            <img src="/mission-img.jpg" alt="Leader presenting" />
          </div>
        </div>

      </section>

    </div>
  );
};

export default AboutUs;
