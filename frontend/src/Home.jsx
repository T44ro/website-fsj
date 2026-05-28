/* eslint-disable */
import React, { useState } from 'react';
import './Home.css';

// =====================================================================
// 1. IMPORT GAMBAR DARI FOLDER ASSETS
// =====================================================================
import heroBg from './assets/hero.png'; 

import offerCoaching from './assets/offer-coaching.png';
import offerSoftSkills from './assets/offer-softskills.png';
import offerBootcamp from './assets/offer-bootcamp.png';

import impactGandengan from './assets/impact-gandengan.png';
import impactIftar from './assets/impact-iftar.png';
import impactFigma from './assets/impact-figma.png';
import impactPeopleDev from './assets/impact-peopledev.png';
import impactStepTalk from './assets/impact-steptalk.png';
import impactStepUp from './assets/impact-stepup.png';

import blogDesign from './assets/blog-design.png';
import blogSelfAcceptance from './assets/blog-selfacceptance.png';
import blogGreenCareer from './assets/blog-greencareer.png';
import blogUX from './assets/blog-ux.png';

import testi1 from './assets/testi-1.png';
import testi2 from './assets/testi-2.png';
import testi3 from './assets/testi-3.png';
import testi4 from './assets/testi-4.png';
import testi5 from './assets/testi-5.png';

// === IKON ===
const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="11"></circle>
    <path d="M8 12l3 3 5-6"></path>
  </svg>
);

const ScribbleCircleYellow = () => (
  <svg className="scribble-circle" preserveAspectRatio="none" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,35 C30,10 170,5 190,25 C210,45 40,65 15,40 C5,30 20,20 40,15" fill="none" stroke="#FBB03B" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const ScribbleCircleNavy = () => (
  <svg className="scribble-circle" preserveAspectRatio="none" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,35 C30,10 170,5 190,25 C210,45 40,65 15,40 C5,30 20,20 40,15" fill="none" stroke="#1B1464" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const testimonials = [
  { id: 0, img: testi1, text: "FSJ benar-benar membantu saya menemukan langkah pertama karir saya yang sesungguhnya. Programnya sangat interaktif!" },
  { id: 1, img: testi2, text: "Mentor di sini sangat berpengalaman. Saya belajar banyak hal tentang public speaking." },
  { id: 2, img: testi3, text: "Terima kasih FSJ atas bimbingannya. Sekarang saya lebih percaya diri dalam interview kerja." },
  { id: 3, img: testi4, text: "Komunitasnya sangat suportif. Menemukan teman-teman baru yang memiliki visi yang sama." },
  { id: 4, img: testi5, text: "Pelatihan Figma dan UI/UX-nya sangat detail. Sangat membantu untuk students." },
];

const Home = () => {
  const [activeTesti, setActiveTesti] = useState(2); 
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 40;

  const handleTouchStart = (e) => {
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && activeTesti < testimonials.length - 1) setActiveTesti(prev => prev + 1);
    if (isRightSwipe && activeTesti > 0) setActiveTesti(prev => prev - 1);
  };

  const shiftAmount = (2 - activeTesti) * 240;

  // REVISI: Mengembalikan efek gelap (Dark Overlay) seperti Partnership Page
  const heroPremiumStyle = {
    background: `linear-gradient(rgba(18, 18, 18, 0.75), rgba(27, 20, 100, 0.8)), url(${heroBg}) center/cover no-repeat`,
  };

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="home-hero-premium" style={heroPremiumStyle}>
        <div className="hero-main-content">
          <h1>Helping Indonesian Youth<br/>Take Their First Step into<br/>Career & Green Jobs.</h1>
          <p>Join our ecosystem to build your skills, expand your<br/>network, and prepare for an impactful future career.</p>
          <div className="hero-action-area">
            <div className="hero-buttons">
              <button className="btn-primary-pill">Apply for Internship <span className="btn-icon">↗</span></button>
              <button className="btn-outline-pill">Join Our Program <span className="btn-icon">↗</span></button>
            </div>
            <button className="explore-link">Explore Green Careers</button>
          </div>
        </div>
        <div className="hero-stats-grid">
          <div className="stat-card"><h2>100+</h2><span>Volunteers</span></div>
          <div className="stat-card"><h2>50+</h2><span>Campuses Reached</span></div>
          <div className="stat-card"><h2>51+</h2><span>Cities Covered</span></div>
          <div className="stat-card"><h2>300+</h2><span>Participants</span></div>
        </div>
      </section>

      {/* 2. ABOUT US */}
      <section className="home-about-section">
        <div className="about-text-column">
          <span className="section-eyebrow">About Us</span>
          <h2 className="about-title">Building Your Career from <br />the <span className="about-highlight">First Step</span></h2>
          <p className="about-desc">FSJ is an Empowerment platform for Indonesian Youth (ages 17-25) by Community - based, free programs, and live projects.</p>
          <button className="btn-learn-more">Learn More</button>
        </div>
        <div className="about-skills-column">
          <div className="skill-pill pill-yellow"><div className="skill-icon"><CheckIcon /></div><span className="skill-text text-navy">Career Readiness</span></div>
          <div className="skill-pill pill-blue"><div className="skill-icon"><CheckIcon /></div><span className="skill-text text-yellow">Self Development</span></div>
          <div className="skill-pill pill-orange"><div className="skill-icon"><CheckIcon /></div><span className="skill-text text-navy">Sustainability Skills</span></div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="home-offer-section">
        <div className="offer-header">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="offer-title">Accelerate <span className="offer-highlight-text"><ScribbleCircleYellow />Your Growth</span> With Us</h2>
        </div>
        <div className="offer-cards-grid">
          <div className="offer-card">
            <img src={offerCoaching} alt="Career Coaching" className="offer-bg-img" />
            <div className="offer-content">
              <h3>Free Career Coaching</h3>
              <p>Personal guidance and expert consultation to help you navigate your professional career path effectively.</p>
            </div>
          </div>
          <div className="offer-card">
            <img src={offerSoftSkills} alt="Soft Skills" className="offer-bg-img" />
            <div className="offer-content">
              <h3>Soft Skills Training</h3>
              <p>Master essential communication, CV writing, and leadership skills to stand out in the modern industry.</p>
            </div>
          </div>
          <div className="offer-card">
            <img src={offerBootcamp} alt="Mentoring" className="offer-bg-img" />
            <div className="offer-content">
              <h3>Mentoring & Bootcamp</h3>
              <p>Intensive programs designed for students and fresh graduates to gain hands-on experience and industry readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR IMPACT */}
      <section className="home-impact-section">
        <div className="impact-header-row">
          <div className="impact-header-text">
            <span className="section-eyebrow">Our Impact</span>
            <h2 className="impact-title">Creating Real Impact <span className="impact-highlight">Together</span></h2>
          </div>
          <div className="impact-header-action"><button className="btn-primary-pill">Discover More</button></div>
        </div>
        <div className="impact-grid">
          <div className="impact-card">
            <img src={impactGandengan} alt="Charity" className="impact-bg-img" />
            <span className="impact-label">FSJ Charity X Gandengan</span>
          </div>
          <div className="impact-card">
            <img src={impactIftar} alt="Iftar" className="impact-bg-img" />
            <span className="impact-label">FSJ Iftar</span>
          </div>
          <div className="impact-card">
            <img src={impactFigma} alt="Figma" className="impact-bg-img" />
            <span className="impact-label">FSJ Figma Training</span>
          </div>
          <div className="impact-card">
            <img src={impactPeopleDev} alt="People Dev" className="impact-bg-img" />
            <span className="impact-label">People Development Training</span>
          </div>
          <div className="impact-card">
            <img src={impactStepTalk} alt="Step Talk" className="impact-bg-img" />
            <span className="impact-label">Step Talk Series</span>
          </div>
          <div className="impact-card">
            <img src={impactStepUp} alt="Step Up" className="impact-bg-img" />
            <span className="impact-label">Step Up College</span>
          </div>
        </div>
      </section>

      {/* 5. OUR STEPPERS */}
      <section className="home-testimonial-section">
        <div className="testi-header">
          <span className="section-eyebrow">What They Say</span>
          <h2 className="testi-title">Words from <span className="testi-highlight"><ScribbleCircleNavy />Our Steppers</span></h2>
        </div>
        <div className="testi-carousel-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div className="testi-carousel-track" style={{ transform: `translateX(${shiftAmount}px)` }}>
            {testimonials.map((item, index) => (
              <div key={item.id} className={`carousel-item ${activeTesti === index ? 'active' : 'inactive'}`} onClick={() => setActiveTesti(index)}>
                <img src={item.img} alt="Stepper" className="carousel-placeholder" />
              </div>
            ))}
          </div>
        </div>
        <div className="testi-content"><p>{testimonials[activeTesti].text}</p></div>
      </section>

      {/* 6. BLOG SECTION */}
      <section className="home-blog-section">
        <div className="blog-header-row">
          <div className="blog-header-text">
            <span className="section-eyebrow">Our Blog</span>
            <h2 className="blog-title">Explore Latest News & Inspiration</h2>
          </div>
        </div>
        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-img-wrapper"><img src={blogDesign} alt="Design Thinking" /></div>
            <div className="blog-content"><h4>Design Thinking for Visual Brands</h4><p>Build trusted visual identities using human-centered design.</p><button className="btn-blog-card">Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span></button></div>
          </div>
          <div className="blog-card">
            <div className="blog-img-wrapper"><img src={blogSelfAcceptance} alt="Self Acceptance" /></div>
            <div className="blog-content"><h4>The Power of Self-Acceptance</h4><p>Overcome self-doubt and build lasting professional confidence.</p><button className="btn-blog-card">Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span></button></div>
          </div>
          <div className="blog-card">
            <div className="blog-img-wrapper"><img src={blogGreenCareer} alt="Green Career" /></div>
            <div className="blog-content"><h4>Launching the Green Career Hub</h4><p>Essential strategies to enter the green workforce.</p><button className="btn-blog-card">Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span></button></div>
          </div>
          <div className="blog-card">
            <div className="blog-img-wrapper"><img src={blogUX} alt="UX" /></div>
            <div className="blog-content"><h4>Structuring Effective User Experiences</h4><p>Design intuitive user flows and seamless digital interactions.</p><button className="btn-blog-card">Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span></button></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
