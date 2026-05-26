import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-panel" id="about" style={{ display: 'flex', flexDirection: 'column', gap: '60px', padding: '24px', maxWidth: '1240px', margin: '0 auto' }}>
      {/* Who We Are & Vision */}
      <div className="about-card">
        <div>
          <p className="eyebrow">Who We Are</p>
          <h2>Take your first step, grow, and discover a meaningful career path</h2>
          <p>
            There is no standard roadmap to navigate the future. First Step Journey supports youth bridging the gap to processing through both soft and hard skills. We provide access for Indonesian youth, especially those with limited privilege, to build their future.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div>
        <div className="section-heading">
          <p className="eyebrow">Our Mission</p>
          <h2>Bridging the gap in access to career guidance</h2>
        </div>
        <div className="cards-grid" style={{ marginTop: '24px' }}>
          <div className="feature-pill">
            <span>Ignite first steps through education & mentoring</span>
          </div>
          <div className="feature-pill feature-pill-strong">
            <span>Cultivate growth mindset & social inclusion</span>
          </div>
          <div className="feature-pill">
            <span>Build a safe and empowering community space</span>
          </div>
          <div className="feature-pill">
            <span>Drive impact-driven cross-sector collaboration</span>
          </div>
        </div>
      </div>

      {/* The Divisions */}
      <div>
        <div className="section-heading">
          <p className="eyebrow">Our Team</p>
          <h2>The Divisions Driving Our Mission</h2>
        </div>
        <div className="cards-grid">
          <article className="offer-card">
            <h3>Product & Strategy</h3>
            <p>Focuses on long-term goals, project roadmaps, and ensuring sustainable community impact.</p>
          </article>
          <article className="offer-card">
            <h3>Visual Brand Communication</h3>
            <p>Ensures a consistent, professional, and engaging brand identity across all platforms.</p>
          </article>
          <article className="offer-card">
            <h3>Human Capital</h3>
            <p>Manages internal talent growth, team welfare, and inclusive community building.</p>
          </article>
          <article className="offer-card">
            <h3>Brand & Event</h3>
            <p>Orchestrates external communications, campaigns, and impactful community events.</p>
          </article>
          <article className="offer-card">
            <h3>Administration & Report</h3>
            <p>Handles essential documentation, timelines, and organizational data management.</p>
          </article>
          <article className="offer-card">
            <h3>Operations</h3>
            <p>Streamlines internal workflows and manages the logistics of all our running projects.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
