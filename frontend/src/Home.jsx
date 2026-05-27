import React from 'react';
import './Home.css';

// =====================================================================
// NANTI KALAU GAMBARNYA SUDAH DI-UPLOAD, HAPUS TANDA // DI BAWAH INI:
// =====================================================================
// import polaroidLeft from './assets/hero-polaroid-left.png';
// import circleRight from './assets/hero-circle-right.png';
// import arrowLeft from './assets/hero-arrow-left.png';
// import polaroidRight from './assets/hero-polaroid-right.png';

// import offerImg1 from './assets/offer-img-1.jpg';
// import offerImg2 from './assets/offer-img-2.jpg';
// import offerImg3 from './assets/offer-img-3.jpg';

// import impactImg1 from './assets/impact-img-1.jpg';
// import impactImg2 from './assets/impact-img-2.jpg';
// import impactImg3 from './assets/impact-img-3.jpg';
// import impactImg4 from './assets/impact-img-4.jpg';
// import impactImg5 from './assets/impact-img-5.jpg';
// import impactImg6 from './assets/impact-img-6.jpg';

// Komponen Ikon SVG (Aman, tidak butuh upload gambar)
const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="11"></circle>
    <path d="M8 12l3 3 5-6"></path>
  </svg>
);

const ScribbleCircle = () => (
  <svg className="scribble-circle" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,35 C30,10 170,5 190,25 C210,45 40,65 15,40 C5,30 20,20 40,15" fill="none" stroke="#FBB03B" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Home = () => {
  return (
    <div className="home-page">
      
      {/* ========================================= */}
      {/* 1. HERO SECTION (CENTERED)                */}
      {/* ========================================= */}
      <section className="home-hero-centered">
        
        {/* GAMBAR DEKORASI DIMATIKAN SEMENTARA */}
        {/*
        <div className="hero-decorations">
          <img src={polaroidLeft} alt="Teamwork" className="decor-polaroid-left" />
          <img src={circleRight} alt="Circle Graphic" className="decor-circle-right" />
          <img src={arrowLeft} alt="Arrow Pointing" className="decor-arrow-left" />
          <img src={polaroidRight} alt="Togetherness" className="decor-polaroid-right" />
        </div>
        */}

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
      {/* 2. ABOUT SECTION (NAVY BLUE BACKGROUND)   */}
      {/* ========================================= */}
      <section className="home-about-section">
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

        <div className="about-skills-column">
          <div className="skill-pill pill-yellow">
            <div className="skill-icon"><CheckIcon /></div>
            <span className="skill-text text-navy">Career Readiness</span>
          </div>
          <div className="skill-pill pill-blue">
            <div className="skill-icon"><CheckIcon /></div>
            <span className="skill-text text-yellow">Self Development</span>
          </div>
          <div className="skill-pill pill-orange">
            <div className="skill-icon"><CheckIcon /></div>
            <span className="skill-text text-navy">Sustainability Skills</span>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. WHAT WE OFFER SECTION                  */}
      {/* ========================================= */}
      <section className="home-offer-section">
        <div className="offer-header">
          <span className="offer-eyebrow">What We Offer</span>
          <h2 className="offer-title">
            Accelerate <span className="offer-highlight-text"><ScribbleCircle />Your Growth</span> With Us
          </h2>
        </div>

        <div className="offer-cards-grid">
          
          <div className="offer-card">
            {/* <img src={offerImg1} alt="Career Coaching" className="offer-img-bg" /> */}
            <div className="offer-content">
              <h3>Free Career Coaching<br/>(Online & Offline)</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button className="btn-more">More &gt;</button>
            </div>
          </div>

          <div className="offer-card">
            {/* <img src={offerImg2} alt="Soft Skills Training" className="offer-img-bg" /> */}
            <div className="offer-content">
              <h3>Soft Skills Training: Public<br/>Speaking, CV Writing, etc</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button className="btn-more">More &gt;</button>
            </div>
          </div>

          <div className="offer-card">
            {/* <img src={offerImg3} alt="Mentoring and Bootcamp" className="offer-img-bg" /> */}
            <div className="offer-content">
              <h3>Mentoring and Bootcamp for<br/>students & fresh graduates</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button className="btn-more">More &gt;</button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* 4. OUR IMPACT SECTION                     */}
      {/* ========================================= */}
      <section className="home-impact-section">
        
        {/* Header Baris (Kiri Teks, Kanan Tombol) */}
        <div className="impact-header-row">
          <div className="impact-header-text">
            <span className="impact-eyebrow">Our Impact</span>
            <h2 className="impact-title">
              Creating Real Impact <span className="impact-highlight">Together</span>
            </h2>
            <p className="impact-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="impact-header-action">
            <button className="btn-primary-pill">Discover More</button>
          </div>
        </div>

        {/* Galeri Grid 6 Gambar */}
        <div className="impact-grid">
          
          {/* Kartu 1 */}
          <div className="impact-card">
            {/* <img src={impactImg1} alt="FSJ X Gandengan" className="impact-img-bg" /> */}
            <span className="impact-label">FSJ X Gandengan</span>
          </div>

          {/* Kartu 2 */}
          <div className="impact-card">
            {/* <img src={impactImg2} alt="FSJ Iftar" className="impact-img-bg" /> */}
            <span className="impact-label">FSJ Iftar</span>
          </div>

          {/* Kartu 3 */}
          <div className="impact-card">
            {/* <img src={impactImg3} alt="Figma Training" className="impact-img-bg" /> */}
            <span className="impact-label">Figma Training</span>
          </div>

          {/* Kartu 4 */}
          <div className="impact-card">
            {/* <img src={impactImg4} alt="People Development Training" className="impact-img-bg" /> */}
            <span className="impact-label">People Development Training</span>
          </div>

          {/* Kartu 5 */}
          <div className="impact-card">
            {/* <img src={impactImg5} alt="Instagram Live Session" className="impact-img-bg" /> */}
            <span className="impact-label">Instagram Live Session</span>
          </div>

          {/* Kartu 6 */}
          <div className="impact-card">
            {/* <img src={impactImg6} alt="Mini Training" className="impact-img-bg" /> */}
            <span className="impact-label">Mini Training</span>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
