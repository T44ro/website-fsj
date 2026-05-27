import React from 'react';
import './Contact.css';

// =====================================================================
// IKON SVG UNTUK KONTAK (Warna Kuning/Oranye FSJ)
// =====================================================================
const WaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* KOLOM KIRI: INFO KONTAK */}
        <div className="contact-info-card">
          <h2>Get in Touch</h2>
          <p>
            Have questions about our programs, community registration, or simply want to say hi? 
            Don't hesitate to reach out to the First Step Journey team. We are here to help you take that next step.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-wrapper"><WaIcon /></div>
              <span>+62 123 4567 890</span>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper"><PhoneIcon /></div>
              <span>(024)123456790</span>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper"><EmailIcon /></div>
              <span>@firststepjourney.com</span>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: FORMULIR */}
        <div className="contact-form-side">
          <h2>Quick Message Form</h2>
          <p>
            Fill out the form below with your inquiries, and our team will get back to you shortly.
          </p>
          
          <form className="quick-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="WhatsApp Number" required />
            <textarea placeholder="Type your message or inquiry here..." rows="5" required></textarea>
            <button type="submit" className="btn-send">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
