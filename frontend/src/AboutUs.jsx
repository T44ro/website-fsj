import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Who We Are</h1>
        <p>There is no standard roadmap to navigate the future. 
        <br/> First Step Journey supports youth bridging the gap to processing.</p>
        <span className="breadcrumb">Home / About us</span>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission">
        <div className="vm-row">
          <div className="vm-card text-card">
            <h2>Vision</h2>
            <p>To provide access for Indonesian youth, especially those with limited privilege — to take their first step, grow, and discover a meaningful career path through both soft and hard skills.</p>
          </div>
          <div className="vm-image image-placeholder">
            {/* Ganti src dengan gambar aslimu nanti */}
            <img src="/vision-img.jpg" alt="Youth discussing" />
          </div>
        </div>

        <div className="vm-row reverse">
          <div className="vm-card text-card">
            <h2>Mission</h2>
            <ul>
              <li>Bridge the gap in access to career guidance and development</li>
              <li>Ignite first steps through education & mentoring</li>
              <li>Cultivate growth mindset and social inclusion</li>
              <li>Build a safe and empowering community space</li>
              <li>Drive impact-driven movement through action, content, and cross-sector collaboration</li>
            </ul>
          </div>
          <div className="vm-image image-placeholder">
            <img src="/mission-img.jpg" alt="Leader presenting" />
          </div>
        </div>
      </section>

      {/* Culture & Impact Section */}
      <section className="impact">
        <span className="subtitle">Our Culture</span>
        <h2>A Rapid Journey of <em>Impact</em></h2>
        
        <div className="impact-content">
          <div className="impact-text">
            <p>We empower youth from first steps and facts... (isi dengan teks panjang dari Figma)</p>
            <ul>
              <li><strong>Career Readiness:</strong> Equip yourself for the professional world.</li>
              <li><strong>Self Development:</strong> Sharpen your soft skills.</li>
              <li><strong>Sustainability Skills:</strong> Future-proof your career.</li>
            </ul>
          </div>
          
          <div className="impact-center">
            <div className="ceo-card">
              <img src="/jose-prima.png" alt="Jose Prima" />
              <div className="ceo-name">
                <strong>Jose Prima</strong>
                <span>CEO of FSJ</span>
              </div>
            </div>
          </div>

          <div className="impact-step">
            {/* Ini representasi grafis anak tangga STEP */}
            <img src="/step-graphic.png" alt="Supportive, Transformative, Empathetic, Purposeful" />
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="divisions">
        <div className="div-header">
          <h2>The Divisions <br/> Driving <em>Our Mission</em></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        
        <div className="div-grid">
          {/* Sesuai desain: ada 7 kartu divisi */}
          {['Product & Strategy', 'Visual Brand Communication', 'Product & Strategy', 'Brand & Event', 'Human Capital', 'Administration & Report', 'Operations'].map((div, index) => (
            <div key={index} className="div-item">
              <h3>{div}</h3>
              <img src={`/person-${index + 1}.png`} alt={div} className="person-img" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
