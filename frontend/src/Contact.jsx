import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Let's Get in Touch</h1>
        <p>Have questions about our programs or want to join the movement? Reach out to us!</p>
      </section>

      <section className="contact-form-section">
        <div className="contact-card">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
