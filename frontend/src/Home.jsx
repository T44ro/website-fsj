/* eslint-disable */
import React, { useState } from 'react';
import './Home.css';

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
  { id: 0, text: "FSJ benar-benar membantu saya menemukan langkah pertama karir saya yang sesungguhnya. Programnya sangat interaktif dan mentornya sangat peduli!" },
  { id: 1, text: "Mentor di sini sangat berpengalaman. Saya belajar banyak hal tentang public speaking dan cara menyusun CV yang profesional." },
  { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." },
  { id: 3, text: "Komunitasnya sangat suportif. Menemukan teman-teman baru yang memiliki visi yang sama dalam membangun karir masa depan yang berdampak." },
  { id: 4, text: "Pelatihan Figma dan UI/UX-nya sangat detail. Sangat membantu untuk students yang ingin menambah portfolio sebelum lulus." },
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

  return (
    <div className="home-page">
      <section className="home-hero-centered">
        <div className="hero-main-content">
          <h1>Helping Indonesian Youth<br/>Take Their First Step into<br/>Career & Green Jobs.</h1>
          <p>Join our ecosystem to build your skills, expand your<br/>network, and prepare for an impactful future career.</p>
          <div className="hero-action-area">
            <div className="hero-buttons">
              <button className="btn-primary-pill">Apply for Internship <span className="btn-icon">↗</span></button>
              <button className="btn-outline-pill">Join Our Program <span className="btn-icon">↗</span></button>
            </div>
            <button className="explore-link" style={{background: 'none', border: 'none', cursor: 'pointer'}}>Explore Green Careers</button>
          </div>
        </div>
        <div className="hero-stats-grid">
          <div className="stat-card"><h2>100+</h2><span>Volunteers</span></div>
          <div className="stat-card"><h2>50+</h2><span>Campuses Reached</span></div>
          <div className="stat-card"><h2>51+</h2><span>Cities Covered</span></div>
          <div className="stat-card"><h2>300+</h2><span>Participants</span></div>
        </div>
      </section>

      <section className="home-about-section">
        <div className="about-text-column">
          <span className="about-eyebrow">About Us</span>
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

      <section className="home-offer-section">
        <div className="offer-header">
          <span className="offer-eyebrow">What We Offer</span>
          <h2 className="offer-title">Accelerate <span className="offer-highlight-text"><ScribbleCircleYellow />Your Growth</span> With Us</h2>
        </div>
        <div className="offer-cards-grid">
          <div className="offer-card">
            <div className="offer-content"><h3>Free Career Coaching<br/>(Online & Offline)</h3><p>Lorem ipsum dolor sit amet.</p><button className="btn-more">More &gt;</button></div>
          </div>
          <div className="offer-card">
            <div className="offer-content"><h3>Soft Skills Training: Public<br/>Speaking, CV Writing, etc</h3><p>Lorem ipsum dolor sit amet.</p><button className="btn-more">More &gt;</button></div>
          </div>
          <div className="offer-card">
            <div className="offer-content"><h3>Mentoring and Bootcamp for<br/>students & fresh graduates</h3><p>Lorem ipsum dolor sit amet.</p><button className="btn-more">More &gt;</button></div>
          </div>
        </div>
      </section>

      <section className="home-impact-section">
        <div className="impact-header-row">
          <div className="impact-header-text">
            <span className="impact-eyebrow">Our Impact</span>
            <h2 className="impact-title">Creating Real Impact <span className="impact-highlight">Together</span></h2>
          </div>
          <div className="impact-header-action"><button className="btn-primary-pill">Discover More</button></div>
        </div>
        <div className="impact-grid">
          <div className="impact-card"><span className="impact-label">FSJ X Gandengan</span></div>
          <div className="impact-card"><span className="impact-label">FSJ Iftar</span></div>
          <div className="impact-card"><span className="impact-label">Figma Training</span></div>
          <div className="impact-card"><span className="impact-label">People Development Training</span></div>
          <div className="impact-card"><span className="impact-label">Instagram Live Session</span></div>
          <div className="impact-card"><span className="impact-label">Mini Training</span></div>
        </div>
      </section>

      <section className="home-testimonial-section">
        <div className="testi-header">
          <span className="testi-eyebrow">What They Say</span>
          <h2 className="testi-title">Words from <span className="testi-highlight"><ScribbleCircleNavy />Our Steppers</span></h2>
        </div>
        <div className="testi-carousel-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div className="testi-carousel-track" style={{ transform: `translateX(${shiftAmount}px)` }}>
            {testimonials.map((item, index) => (
              <div key={item.id} className={`carousel-item ${activeTesti === index ? 'active' : 'inactive'}`} onClick={() => setActiveTesti(index)}>
                <div className="carousel-placeholder"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="testi-content"><p>{testimonials[activeTesti].text}</p></div>
      </section>

      <section className="home-blog-section">
        <div className="blog-header-row">
          <div className="blog-header-text">
            <span className="blog-eyebrow">Our Blog</span>
            <h2 className="blog-title">Explore Latest News & Inspiration</h2>
          </div>
          <div className="blog-header-action">
            <button className="btn-outline-navy">Learn more <span className="btn-icon-circle bg-navy"><ArrowUpRightIcon /></span></button>
          </div>
        </div>
        <div className="blog-grid">
          <div className="blog-card"><div className="blog-img-wrapper"></div><div className="blog-content"><h4>Design Thinking for Visual Brands</h4><p>Build trusted visual identities using human-centered design.</p><button className="btn-blog-card">Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span></button></div></div>
          <div className="blog-card"><div className="blog-img-wrapper"></div><div className="blog-content"><h4>The Power of Self-Acceptance</h4><p>Overcome self-doubt and build lasting professional confidence.</p><button className="btn-blog-card">Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span></button></div></div>
          <div className="blog-card"><div className="blog-img-wrapper"></div><div className="blog-content"><h4>Launching the Green Career Hub</h4><p>Essential strategies to enter the green workforce.</p><button className="btn-blog-card">Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span></button></div></div>
          <div className="blog-card"><div className="blog-img-wrapper"></div><div className="blog-content"><h4>Structuring Effective User Experiences</h4><p>Design intuitive user flows and seamless digital interactions.</p><button className="btn-blog-card">Learn more <span className="btn-icon-circle bg-yellow"><ArrowUpRightIcon /></span></button></div></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
