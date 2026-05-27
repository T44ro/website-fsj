import React, { useState } from 'react';
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

// import testi1 from './assets/testi-1.jpg';
// import testi2 from './assets/testi-2.jpg';
// import testi3 from './assets/testi-3.jpg';
// import testi4 from './assets/testi-4.jpg';
// import testi5 from './assets/testi-5.jpg';

// =====================================================================
// KOMPONEN IKON & GRAFIS BANTUAN
// =====================================================================
const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="11"></circle>
    <path d="M8 12l3 3 5-6"></path>
  </svg>
);

const ScribbleCircleYellow = () => (
  <svg className="scribble-circle" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,35 C30,10 170,5 190,25 C210,45 40,65 15,40 C5,30 20,20 40,15" fill="none" stroke="#FBB03B" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const ScribbleCircleNavy = () => (
  <svg className="scribble-circle" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,35 C30,10 170,5 190,25 C210,45 40,65 15,40 C5,30 20,20 40,15" fill="none" stroke="#1B1464" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Data Testimoni
const testimonials = [
  { id: 0, text: "FSJ benar-benar membantu saya menemukan langkah pertama karir saya yang sesungguhnya. Programnya sangat interaktif dan mentornya sangat peduli!" },
  { id: 1, text: "Mentor di sini sangat berpengalaman. Saya belajar banyak hal tentang public speaking dan cara menyusun CV yang profesional." },
  { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." },
  { id: 3, text: "Komunitasnya sangat suportif. Menemukan teman-teman baru yang memiliki visi yang sama dalam membangun karir masa depan yang berdampak." },
  { id: 4, text: "Pelatihan Figma dan UI/UX-nya sangat detail. Sangat membantu untuk students yang ingin menambah portfolio sebelum lulus." },
];

const Home = () => {
  const [activeTesti, setActiveTesti] = useState(2); // Indeks tengah (default)

  // Logika untuk menggeser jalur (track) foto agar yang diklik selalu di tengah
  // 240px didapat dari: lebar gambar 200px + gap 40px
  const shiftAmount = (2 - activeTesti) * 240;

  return (
    <div className="home-page">
      
      {/* 1. HERO SECTION */}
      <section className="home-hero-centered">
        {/* <div className="hero-decorations">
          <img src={polaroidLeft} alt="Teamwork" className="decor-polaroid-left" />
          <img src={circleRight} alt="Circle Graphic" className="decor-circle-right" />
          <img src={arrowLeft} alt="Arrow Pointing" className="decor-arrow-left" />
          <img src={polaroidRight} alt="Togetherness" className="decor-polaroid-right" />
        </div> */}
        <div className="hero-main-content">
          <h1>Helping Indonesian Youth<br/>Take Their First Step into<br/>Career & Green Jobs.</h1>
          <p>Join our ecosystem to build your skills, expand your<br/>network, and prepare for an impactful future career.</p>
          <div className="hero-action-area">
            <div className="hero-buttons">
              <button className="btn-primary-pill">Apply for Internship <span className="btn-icon">↗</span></button>
              <button className="btn-outline-pill">Join Our Program <span className="btn-icon">↗</span></button>
            </div>
            <a href="#explore" className="explore-link">Explore Green Careers</a>
          </div>
        </div>
        <div className="hero-stats-grid">
          <div className="stat-card"><h2>100+</h2><span>Volunteers</span></div>
          <div className="stat-card"><h2>50+</h2><span>Campuses Reached</span></div>
          <div className="stat-card"><h2>51+</h2><span>Cities Covered</span></div>
          <div className="stat-card"><h2>300+</h2><span>Participants</span></div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="home-about-section">
        <div className="about-text-column">
          <span className="about-eyebrow">About Us</span>
          <h2 className="about-title">Building Your Career from <br />the <span className="about-highlight">First Step</span></h2>
          <p className="about-desc">FSJ is an Empowerment platform for Indonesian Youth (ages 17-25) by Community - based, free programs, and live projects. To provide access for Indonesian youth — especially those with limited privilege — to take their first step, grow, and discover a meaningful career path through both soft and hard skills.</p>
          <button className="btn-learn-more">Learn More</button>
        </div>
        <div className="about-skills-column">
          <div className="skill-pill pill-yellow"><div className="skill-icon"><CheckIcon /></div><span className="skill-text text-navy">Career Readiness</span></div>
          <div className="skill-pill pill-blue"><div className="skill-icon"><CheckIcon /></div><span className="skill-text text-yellow">Self Development</span></div>
          <div className="skill-pill pill-orange"><div className="skill-icon"><CheckIcon /></div><span className="skill-text text-navy">Sustainability Skills</span></div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER SECTION */}
      <section className="home-offer-section">
        <div className="offer-header">
          <span className="offer-eyebrow">What We Offer</span>
          <h2 className="offer-title">Accelerate <span className="offer-highlight-text"><ScribbleCircleYellow />Your Growth</span> With Us</h2>
        </div>
        <div className="offer-cards-grid">
          <div className="offer-card">
            {/* <img src={offerImg1} alt="Career Coaching" className="offer-img-bg" /> */}
            <div className="offer-content"><h3>Free Career Coaching<br/>(Online & Offline)</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><button className="btn-more">More &gt;</button></div>
          </div>
          <div className="offer-card">
            {/* <img src={offerImg2} alt="Soft Skills Training" className="offer-img-bg" /> */}
            <div className="offer-content"><h3>Soft Skills Training: Public<br/>Speaking, CV Writing, etc</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><button className="btn-more">More &gt;</button></div>
          </div>
          <div className="offer-card">
            {/* <img src={offerImg3} alt="Mentoring and Bootcamp" className="offer-img-bg" /> */}
            <div className="offer-content"><h3>Mentoring and Bootcamp for<br/>students & fresh graduates</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><button className="btn-more">More &gt;</button></div>
          </div>
        </div>
      </section>

      {/* 4. OUR IMPACT SECTION */}
      <section className="home-impact-section">
        <div className="impact-header-row">
          <div className="impact-header-text">
            <span className="impact-eyebrow">Our Impact</span>
            <h2 className="impact-title">Creating Real Impact <span className="impact-highlight">Together</span></h2>
            <p className="impact-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="impact-header-action"><button className="btn-primary-pill">Discover More</button></div>
        </div>
        <div className="impact-grid">
          <div className="impact-card">
            {/* <img src={impactImg1} alt="FSJ X Gandengan" className="impact-img-bg" /> */}
            <span className="impact-label">FSJ X Gandengan</span>
          </div>
          <div className="impact-card">
            {/* <img src={impactImg2} alt="FSJ Iftar" className="impact-img-bg" /> */}
            <span className="impact-label">FSJ Iftar</span>
          </div>
          <div className="impact-card">
            {/* <img src={impactImg3} alt="Figma Training" className="impact-img-bg" /> */}
            <span className="impact-label">Figma Training</span>
          </div>
          <div className="impact-card">
            {/* <img src={impactImg4} alt="People Development" className="impact-img-bg" /> */}
            <span className="impact-label">People Development Training</span>
          </div>
          <div className="impact-card">
            {/* <img src={impactImg5} alt="Instagram Live" className="impact-img-bg" /> */}
            <span className="impact-label">Instagram Live Session</span>
          </div>
          <div className="impact-card">
            {/* <img src={impactImg6} alt="Mini Training" className="impact-img-bg" /> */}
            <span className="impact-label">Mini Training</span>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL SECTION (SMOOTH CAROUSEL & NEW GRADIENT) */}
      <section className="home-testimonial-section">
        <div className="testi-header">
          <span className="testi-eyebrow">What They Say</span>
          <h2 className="testi-title">Words from <span className="testi-highlight"><ScribbleCircleNavy />Our Steppers</span></h2>
        </div>

        <div className="testi-carousel-wrapper">
          <div 
            className="testi-carousel-track" 
            style={{ transform: `translateX(${shiftAmount}px)` }}
          >
            {testimonials.map((item, index) => (
              <div 
                key={item.id} 
                className={`carousel-item ${activeTesti === index ? 'active' : 'inactive'}`}
                onClick={() => setActiveTesti(index)}
              >
                {/* Nanti ganti null dengan img src jika foto sudah siap */}
                {/* <img src={item.img} alt={`Stepper ${index + 1}`} /> */}
                <div className="carousel-placeholder"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="testi-content">
          <p>{testimonials[activeTesti].text}</p>
        </div>
      </section>

    </div>
  );
};

export default Home;
