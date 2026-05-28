import React from 'react';
import './Community.css';

// 1. IMPORT BACKGROUND GAMBAR HERO (Bisa pakai gambar aktivitas seru)
import commBg from './assets/about-hero-img.png'; 

const Community = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.75), rgba(27, 20, 100, 0.8)), url(${commBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#1B1464'
  };

  return (
    <div className="community-page">
      {/* 1. HERO SECTION */}
      <section className="comm-hero" style={heroStyle}>
        <div className="hero-content">
          <h1>Grow Together with the Steppers</h1>
          <p>
            Access peer-to-peer mentorship, expand your professional network, <br/>
            and collaborate on real-world projects with fellow youths.
          </p>
          <div className="breadcrumb">
            <span className="home-link">HOME</span>
            <span className="separator"> / </span>
            <span className="about-link">COMMUNITY</span>
          </div>
        </div>
      </section>

      {/* 2. OUR APPROACH SECTION (Dipindah dari About Us) */}
      <section className="approach-section">
        <div className="section-header-center">
          <span className="section-eyebrow">THE EXPERIENCE</span>
          <h2>Our Approach</h2>
          <p className="approach-sub">Here is how we build an ecosystem of growth and collaboration.</p>
        </div>
        <div className="approach-grid">
          <div className="approach-card">
            <div className="appr-number">01</div>
            <h3 className="approach-title">Community-Led Learning</h3>
            <p className="approach-desc">Engage in active WA groups, structured mentoring sessions, and interactive webinars designed to boost your skills.</p>
          </div>
          <div className="approach-card">
            <div className="appr-number">02</div>
            <h3 className="approach-title">Live Projects</h3>
            <p className="approach-desc">Get hands-on experience through real collaborations with NGOs, CSR programs, Startups, and university partners.</p>
          </div>
          <div className="approach-card">
            <div className="appr-number">03</div>
            <h3 className="approach-title">Flagship Programs</h3>
            <p className="approach-desc">Join our top-tier events like Bootcamp Series, Step-Talk Series, Step up College Series & Sustainability Series.</p>
          </div>
        </div>
      </section>

      {/* 3. GALLERY / DOCUMENTATION */}
      <section className="gallery-section">
        <div className="section-header-center">
          <h2>Life at FSJ</h2>
          <p className="approach-sub">Moments captured during our workshops, mentoring, and community gatherings.</p>
        </div>
        <div className="gallery-grid">
          {/* Ganti div kosong ini dengan tag <img src={...} /> nantinya */}
          <div className="gallery-item large">Photo 1 (Workshop)</div>
          <div className="gallery-item">Photo 2 (Online Mentoring)</div>
          <div className="gallery-item">Photo 3 (Networking)</div>
          <div className="gallery-item wide">Photo 4 (WA Group / Community Chat Graphic)</div>
        </div>
      </section>

      {/* 4. CALL TO ACTION (CTA) */}
      <section className="cta-join-section">
        <div className="cta-box">
          <h2>Ready to Take Your First Step?</h2>
          <p>Join thousands of youths who are already building their future with FSJ. It's completely free.</p>
          <button className="btn-join-now">Join Our Community Now</button>
        </div>
      </section>
    </div>
  );
};

export default Community;
