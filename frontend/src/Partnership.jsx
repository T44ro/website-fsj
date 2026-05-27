import React from 'react';
import './Partnership.css';

const Partnership = () => {
  return (
    <div className="partnership-page">
      <section className="part-hero">
        <h1>Partnering for a Greener Future</h1>
        <p>Join forces with FSJ to drive systemic environmental impact and empower Indonesian youth.</p>
      </section>

      <section className="part-content">
        <div className="part-item">
          <h2>1. Why Collaborate with FSJ?</h2>
          <p>By partnering with us, your brand aligns with the largest youth-led green movement, gaining direct access to highly engaged talent and sustainable impact metrics.</p>
        </div>

        <div className="part-item">
          <h2>2. Impact Metrics</h2>
          <p>We provide transparent, data-driven reporting on every program, ensuring your corporate social responsibility goals are met with tangible results.</p>
        </div>

        <div className="part-item">
          <h2>3. Program Offering</h2>
          <p>From exclusive green-skill workshops to large-scale awareness campaigns, we tailor our collaborations to fit your corporate mission.</p>
        </div>

        <div className="part-item b2b-contact">
          <h2>4. Ready to Collaborate?</h2>
          <p>Let's discuss how we can build a lasting partnership.</p>
          <div className="contact-person">
            <p><strong>Contact B2B:</strong> Meilinda Putri Wijayanti</p>
            <a href="mailto:email@example.com" className="btn-b2b">Connect with Meilinda</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
