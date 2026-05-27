import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';        
import AboutUs from './AboutUs'; 
import ProductsPrograms from './ProductsPrograms'; 
import Insights from './Insights';
import Community from './Community';
import Contact from './Contact';         
import Partnership from './Partnership'; 

// =====================================================================
// KOMPONEN IKON SVG SOSMED (Profesional, Ringan, Tajam)
// =====================================================================
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const TiktokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);


function App() {
  const [activePage, setActivePage] = useState('home'); 

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActivePage(hash);
    }
  }, []);

  const changePage = (pageName, event) => {
    if (event) event.preventDefault();
    setActivePage(pageName);
    window.location.hash = pageName;
    window.scrollTo(0, 0);
  };

  return (
    <div className="site-shell">
      
      {/* HEADER / NAVIGATION BAR (TIGA PILAR SEIMBANG) */}
      <header className="topbar">
        
        {/* PILAR KIRI: BRAND */}
        <div className="brand">
          <h2 style={{ margin: 0, color: '#1B1464', fontFamily: 'Quicksand', fontWeight: 700, fontSize: '24px', cursor: 'pointer' }} onClick={(e) => changePage('home', e)}>FSJ</h2>
        </div>
        
        {/* PILAR TENGAH: MENU NAVIGASI (Dikecilkan & Dirampingkan) */}
        <nav className="topnav">
          <a href="#home" className={activePage === 'home' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('home', e)}>Home</a>
          <a href="#about" className={activePage === 'about' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('about', e)}>About Us</a>
          <a href="#programs" className={activePage === 'programs' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('programs', e)}>Product & Programs</a>
          <a href="#insights" className={activePage === 'insights' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('insights', e)}>Insights</a>
          <a href="#community" className={activePage === 'community' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('community', e)}>Community</a>
          
          <div className="nav-item-dropdown">
            <span className={activePage === 'contact' || activePage === 'partnership' ? 'nav-item active' : 'nav-item'}>
              Contacts <span className="arrow-icon">▾</span>
            </span>
            <div className="dropdown-content">
              <a href="#contact" onClick={(e) => changePage('contact', e)}>Contact</a>
              <a href="#partnership" onClick={(e) => changePage('partnership', e)}>Partnership</a>
            </div>
          </div>
        </nav>

        {/* PILAR KANAN: SOCIAL MEDIA (DENGAN IKON SVG ASLI) */}
        <div className="social-links">
          <a href="https://instagram.com/firststepjourney" target="_blank" rel="noreferrer" className="social-btn" title="Instagram FSJ">
            <InstagramIcon />
          </a>
          <a href="https://youtube.com/@firststepjourney" target="_blank" rel="noreferrer" className="social-btn" title="YouTube FSJ">
            <YoutubeIcon />
          </a>
          <a href="https://tiktok.com/@firststepjourney" target="_blank" rel="noreferrer" className="social-btn" title="TikTok FSJ">
            <TiktokIcon />
          </a>
        </div>
      </header>

      {/* SAKLAR KONTEN UTAMA */}
      <main className="main-content-wrapper">
        {activePage === 'home' && <Home changePage={changePage} />}
        {activePage === 'about' && <AboutUs />}
        {activePage === 'programs' && <ProductsPrograms />}
        {activePage === 'insights' && <Insights />}
        {activePage === 'community' && <Community />}
        {activePage === 'contact' && <Contact />}
        {activePage === 'partnership' && <Partnership />}
      </main>

      {/* FOOTER */}
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
            </div>
            <div>
              <h3>Programs</h3>
              <a href="#programs" onClick={(e) => changePage('programs', e)}>Internships</a>
              <a href="#programs" onClick={(e) => changePage('programs', e)}>Mini Training</a>
            </div>
            <div>
              <h3>Contacts</h3>
              <a href="#contact" onClick={(e) => changePage('contact', e)}>General Contact</a>
              <a href="#partnership" onClick={(e) => changePage('partnership', e)}>Partnership</a>
            </div>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 Copyright • First Step Journey. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
