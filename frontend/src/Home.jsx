import React from 'react';
import './Home.css';

// =====================================================================
// NANTI KALAU GAMBARNYA SUDAH DI-UPLOAD, HAPUS TANDA // DI BAWAH INI:
// =====================================================================
// import polaroidLeft from './assets/hero-polaroid-left.png';
// import circleRight from './assets/hero-circle-right.png';
// import arrowLeft from './assets/hero-arrow-left.png';
// import polaroidRight from './assets/hero-polaroid-right.png';

// Komponen Ikon Centang Bulat (Aman, tidak perlu upload gambar!)
const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="11"></circle>
    <path d="M8 12l3 3 5-6"></path>
  </svg>
);

const Home = () => {
  return (
    <div className="home-page">
      
      {/* ========================================= */}
      {/* HERO SECTION (CENTERED)                   */}
      {/* ========================================= */}
      <section className="home-hero-centered">
        
        {/* BAGIAN GAMBAR DEKORASI SAYA MATIKAN SEMENTARA AGAR TIDAK ERROR */}
        {/* Nanti kalau gambarnya sudah ada, hapus tanda { / * dan * / } di bawah ini */}
        {/*
        <div className="hero-decorations">
          <img src={polaroidLeft} alt="Teamwork" className="decor-polaroid-left" />
          <img src={circleRight} alt="Circle Graphic" className="decor-circle-right" />
          <img src={arrowLeft} alt="Arrow Pointing" className="decor-arrow-left" />
          <img src={polaroidRight} alt="Togetherness" className="decor-polaroid-right" />
        </div>
        */}

        {/* Konten Utama (Teks & Tombol) */}
        <div className="hero-main-content">
          <h1>Helping Indonesian Youth<br/>Take Their First Step into<br/>Career & Green Jobs.</h1>
          <p>
            Join our ecosystem to build your skills, expand your<br/>
            network, and prepare for an impactful future career.
          </p>
          
          <div className="hero-action-area">
            <div className="hero-buttons">
              <button className="btn-primary-pill">
                Apply for Internship <span className="btn-icon">↗</span>
              </button>
              <button className="btn-outline-pill">
                Join Our Program <span className="btn-icon">↗</span>
              </button>
            </div>
            <a href="#explore" className="explore-link">Explore Green Careers</a>
          </div>
        </div>

        {/* Kartu Statistik */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <h2>100+</h2>
            <span>Volunteers</span>
          </div>
          <div className="stat-card">
            <h2>50+</h2>
            <span>Campuses Reached</span>
          </div>
          <div className="stat-card">
            <h2>51+</h2>
            <span>Cities Covered</span>
          </div>
          <div className="stat-card">
            <h2>300+</h2>
            <span>Participants</span>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* ABOUT SECTION (NAVY BLUE BACKGROUND)      */}
      {/* ========================================= */}
      <section className="home-about-section">
        
        {/* Kolom Kiri: Teks */}
        <div className="about-text-column">
          <span className="about-eyebrow">About Us</span>
          <h2 className="about-title">
            Building Your Career from <br />
            the <span className="about-highlight">First Step</span>
          </h2>
          <p className="about-desc">
            FSJ is an Empowerment platform for Indonesian Youth (ages 17-25) by Community - based, free programs, and live projects. To provide access for Indonesian youth — especially those with limited privilege — to take their first step, grow, and discover a meaningful career path through both soft and hard skills.
          </p>
          <button className="btn-learn-more">Learn More</button>
        </div>

        {/* Kolom Kanan: 3 Kartu Skill (Gradasi) */}
        <div className="about-skills-column">
          
          {/* Kartu 1: Career Readiness */}
          <div className="skill-pill pill-yellow">
            <div className="skill-icon"><CheckIcon /></div>
            <span className="skill-text text-navy">Career Readiness</span>
          </div>

          {/* Kartu 2: Self Development */}
          <div className="skill-pill pill-blue">
            <div className="skill-icon"><CheckIcon /></div>
            <span className="skill-text text-yellow">Self Development</span>
          </div>

          {/* Kartu 3: Sustainability Skills */}
          <div className="skill-pill pill-orange">
            <div className="skill-icon"><CheckIcon /></div>
            <span className="skill-text text-navy">Sustainability Skills</span>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
