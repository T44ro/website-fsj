import React from 'react';
import './Home.css';

// Import elemen dekorasi
import polaroidLeft from './assets/hero-polaroid-left.png';
import circleRight from './assets/hero-circle-right.png';
import arrowLeft from './assets/hero-arrow-left.png';
import polaroidRight from './assets/hero-polaroid-right.png';

const Home = () => {
  return (
    <div className="home-page">
      <section className="home-hero-centered">
        
        {/* Gambar Dekorasi Melayang */}
        <div className="hero-decorations">
          <img src={polaroidLeft} alt="Teamwork" className="decor-polaroid-left" />
          <img src={circleRight} alt="Circle Graphic" className="decor-circle-right" />
          <img src={arrowLeft} alt="Arrow Pointing" className="decor-arrow-left" />
          <img src={polaroidRight} alt="Togetherness" className="decor-polaroid-right" />
        </div>

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
    </div>
  );
};

export default Home;
