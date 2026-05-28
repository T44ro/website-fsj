import React from 'react';
import './AboutUs.css';
import heroBg from './assets/about-hero-img.png'; // Pastikan path ini benar

const AboutUs = () => {
  // Style persis seperti di Products & Programs
  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FBB03B'
  };

  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="about-hero" style={heroStyle}>
        <div className="about-hero-content">
          <h1>Who We Are</h1>
          <p>
            Helping Indonesian youth take their first step into<br/>
            Career & Green Jobs.
          </p>
          <div className="about-breadcrumb">
            <span>Home</span> <span className="separator"> / </span> <span>About Us</span>
          </div>
        </div>
      </section>

      {/* --- KODE SECTION LAINNYA DI BAWAH INI TETAP SAMA --- */}
