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

      {/* Bagian lain dari About Us akan kita tambahkan nanti */}
    </div>
  );
};

export default AboutUs;
