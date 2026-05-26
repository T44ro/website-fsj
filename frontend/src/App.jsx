import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import AboutUs from './AboutUs'

function App() {
  const [activePage, setActivePage] = useState('home');

  // Efek ini akan mengecek URL saat website pertama kali dibuka
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'about') {
      setActivePage('about');
    }
  }, []);

  // Fungsi untuk mengganti halaman DAN mengupdate URL
  const changePage = (pageName, event) => {
    if (event) event.preventDefault();
    setActivePage(pageName);
    window.location.hash = pageName; // Ini yang mengubah URL di atas!
    window.scrollTo(0, 0);
  };

  return (
    <div className="site-shell">
      {/* ========================================= */}
      {/* MENU NAVIGASI (SELALU MUNCUL)             */}
      {/* ========================================= */}
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">1st</span>
          <div>
            <p className="brand-name">First Step</p>
            <p className="brand-subtitle">Journey</p>
          </div>
        </div>
        <nav className="topnav">
          <a href="#home" onClick={(e) => changePage('home', e)}>Home</a>
          <a href="#about" onClick={(e) => changePage('about', e)}>About</a>
          <a href="#programs" onClick={(e) => changePage('home', e)}>Programs</a>
          <a href="#impact" onClick={(e) => changePage('home', e)}>Impact</a>
          <a href="#contact" onClick={(e) => changePage('home', e)}>Contact</a>
        </nav>
        <div className="social-links">
          <button className="soft-btn">EN</button>
          <button className="circle-btn">•</button>
          <button className="circle-btn">•</button>
        </div>
      </header>

      {/* ========================================= */}
      {/* LOGIKA SAKLAR HALAMAN                     */}
      {/* ========================================= */}
      
      {activePage === 'home' ? (
        
        <main className="homepage" id="home">
          <section className="hero-panel">
            <div className="hero-copy">
              <p className="eyebrow">Helping Indonesian Youth</p>
              <h1>Take your first step into career & green jobs</h1>
              <p className="hero-text">
                Join our ecosystem to build your skills, expand your network, and prepare for an impactful future career.
              </p>
              <div className="hero-cta">
                <button className="primary-btn">Apply for Internship</button>
                <button className="secondary-btn">Join Our Program</button>
              </div>
              <a href="#programs" className="text-link">Explore Green Careers</a>
            </div>
            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-card-badge">Youth Career Growth</div>
                <img src={heroImg} alt="Illustration" />
              </div>
            </div>
          </section>

          <section className="stats-panel">
            <div className="stat-card">
              <strong>100+</strong>
              <span>Volunteers</span>
            </div>
            <div className="stat-card">
              <strong>50+</strong>
              <span>Campuses Reached</span>
            </div>
            <div className="stat-card">
              <strong>51+</strong>
              <span>Cities Covered</span>
            </div>
            <div className="stat-card">
              <strong>300+</strong>
              <span>Participants</span>
            </div>
          </section>

          <section className="about-panel" id="about">
            <div className="about-card">
              <div>
                <p className="eyebrow">About Us</p>
                <h2>Building your career from the first step</h2>
                <p>
                  We help young people develop practical skills, connect with mentors, and gain real experience through internship programs, training, and community events.
                </p>
              </div>
              <button className="secondary-btn" onClick={(e) => changePage('about', e)}>Learn More</button>
            </div>
            <div className="feature-list">
              <div className="feature-pill">
                <span>Practical Skills</span>
              </div>
              <div className="feature-pill feature-pill-strong">
                <span>Expert Mentorship</span>
              </div>
              <div className="feature-pill">
                <span>Real Experience</span>
              </div>
            </div>
          </section>

          <section className="offerings-panel" id="programs">
            <p className="eyebrow">What We Offer</p>
            <h2>Accelerate your growth with us</h2>
            <div className="cards-grid">
              <article className="offer-card">
                <h3>Internships</h3>
                <p>Gain hands-on experience through structured internship placements designed for future-ready skills.</p>
                <a href="#contact" className="text-link">Learn more</a>
              </article>
              <article className="offer-card">
                <h3>Mini Training</h3>
                <p>Participate in short courses focused on green careers and essential soft skills for professional growth.</p>
                <a href="#contact" className="text-link">Learn more</a>
              </article>
              <article className="offer-card">
                <h3>Live Sessions & FGD</h3>
                <p>Join live discussions, workshops, and focus groups to sharpen your leadership and career readiness.</p>
                <a href="#contact" className="text-link">Learn more</a>
              </article>
            </div>
          </section>

          <section className="impact-panel" id="impact">
            <div className="section-heading">
              <p className="eyebrow">Our Impact</p>
              <h2>Creating real impact together</h2>
            </div>
            <div className="image-grid">
              <div className="impact-card">Campus Outreach</div>
              <div className="impact-card">Peer Coaching</div>
              <div className="impact-card">Future Training</div>
              <div className="impact-card">Project Development</div>
              <div className="impact-card">Workshops & Events</div>
              <div className="impact-card">Career Mentoring</div>
            </div>
          </section>

          <section className="testimonial-panel">
            <div className="section-heading">
              <p className="eyebrow">What They Say</p>
              <h2>Words from our Steppers</h2>
            </div>
            <div className="testimonial-row">
              <div className="testimonial-card">Amina</div>
              <div className="testimonial-card">Rizal</div>
              <div className="testimonial-card">Sofia</div>
              <div className="testimonial-card">Dewi</div>
              <div className="testimonial-card">Aditya</div>
            </div>
            <p className="testimonial-note">Our community celebrates success stories from every step forward.</p>
          </section>

          <section className="blog-panel">
            <div className="section-heading">
              <p className="eyebrow">Our Blog</p>
              <h2>Explore latest news & inspiration</h2>
            </div>
            <div className="cards-grid blog-grid">
              <article className="blog-card">
                <h3>Learning with Games? Why not.</h3>
                <p>Explore active learning methods to improve your skills and confidence.</p>
                <a href="#contact" className="text-link">Learn more</a>
              </article>
              <article className="blog-card">
                <h3>Preparing for green careers</h3>
                <p>Discover pathways into sustainability and impactful future jobs.</p>
                <a href="#contact" className="text-link">Learn more</a>
              </article>
              <article className="blog-card">
                <h3>Mentorship in action</h3>
                <p>See how expert mentors help shape career journeys with practical guidance.</p>
                <a href="#contact" className="text-link">Learn more</a>
              </article>
              <article className="blog-card">
                <h3>Community and collaboration</h3>
                <p>Build relationships that support your next step into work and leadership.</p>
                <a href="#contact" className="text-link">Learn more</a>
              </article>
            </div>
          </section>

          <section className="footer-cta" id="contact">
            <h2>Ready to upgrade your skills and step forward with FSJ?</h2>
            <p>Start your journey with practical learning, mentorship, and community impact.</p>
            <button className="primary-btn">Let's Get in Touch</button>
          </section>
        </main>
        
      ) : (

        /* BAGIAN ABOUT US */
        <AboutUs />
        
      )}

      {/* ========================================= */}
      {/* FOOTER (SEKARANG DI LUAR SAKLAR)          */}
      {/* ========================================= */}
      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <p className="eyebrow">Stay Updated with First Step Journey!</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter Your Email" />
              <button className="primary-btn">Subscribe</button>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h3>About FSJ</h3>
              <a href="#about" onClick={(e) => changePage('about', e)}>Vision & Mission</a>
              <a href="#about" onClick={(e) => changePage('about', e)}>Our Journey</a>
              <a href="#about" onClick={(e) => changePage('about', e)}>Our Team</a>
            </div>
            <div>
              <h3>Programs</h3>
              <a href="#programs" onClick={(e) => changePage('home', e)}>Internships</a>
              <a href="#programs" onClick={(e) => changePage('home', e)}>Mini Training</a>
              <a href="#programs" onClick={(e) => changePage('home', e)}>Community Impact</a>
            </div>
            <div>
              <h3>Insights</h3>
              <a href="#blog">News</a>
              <a href="#blog">Resources</a>
              <a href="#blog">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 Copyright • First Step Journey. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
