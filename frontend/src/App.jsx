import { useState, useEffect } from 'react';

// =====================================================================
// SANGAT PENTING: IMPORT APP.CSS AGAR DESAIN GLOBAL MUNCUL!
// =====================================================================
import './App.css';

import Home from './Home';        
import AboutUs from './AboutUs'; 
import ProductsPrograms from './ProductsPrograms'; 
import Insights from './Insights';
import Community from './Community';
import Contact from './Contact';         
import Partnership from './Partnership'; 

// =====================================================================
// MEMASUKKAN LOGO BARU DARI ASSETS
// =====================================================================
import fsjLogo from './assets/fsj-logo.png'; 

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
      <header className="topbar navbar"> {/* Perbaikan class agar sinkron dengan App.css */}
        
        {/* PILAR KIRI: BRAND DENGAN GAMBAR LOGO ASLI */}
        <div className="brand nav-logo" onClick={(e) => changePage('home', e)}>
          <img src={fsjLogo} alt="First Step Journey Logo" className="header-logo" />
        </div>
        
        {/* PILAR TENGAH: MENU NAVIGASI */}
        <nav className="topnav nav-links">
          <a href="#home" className={activePage === 'home' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('home', e)}>Home</a>
          <a href="#about" className={activePage === 'about' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('about', e)}>About Us</a>
          <a href="#programs" className={activePage === 'programs' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('programs', e)}>Product & Programs</a>
          <a href="#insights" className={activePage === 'insights' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('insights', e)}>Insights</a>
          <a href="#community" className={activePage === 'community' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('community', e)}>Community</a>
          
          <div className="nav-item-dropdown" style={{ position: 'relative', display: 'inline-block' }}>
            <span className={activePage === 'contact' || activePage === 'partnership' ? 'nav-item active' : 'nav-item'} style={{cursor: 'pointer'}}>
              Contacts <span className="arrow-icon">▾</span>
            </span>
            <div className="dropdown-content" style={{ display: 'none', position: 'absolute', backgroundColor: '#fff', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', padding: '12px', borderRadius: '8px', zIndex: 1 }}>
              <a href="#contact" onClick={(e) => changePage('contact', e)} style={{display: 'block', margin: '8px 0', color: '#1B1464', textDecoration: 'none'}}>Contact</a>
              <a href="#partnership" onClick={(e) => changePage('partnership', e)} style={{display: 'block', margin: '8px 0', color: '#1B1464', textDecoration: 'none'}}>Partnership</a>
            </div>
          </div>
        </nav>

        {/* PILAR KANAN: SOCIAL MEDIA (Menggunakan styling btn-nav-join dari App.css) */}
        <div className="social-links footer-socials" style={{ alignItems: 'center' }}>
          <a href="https://instagram.com/firststepjourney" target="_blank" rel="noreferrer" className="social-icon" style={{color: '#1B1464', background: 'transparent'}} title="Instagram FSJ">
            <InstagramIcon />
          </a>
          <a href="https://youtube.com/@firststepjourney" target="_blank" rel="noreferrer" className="social-icon" style={{color: '#1B1464', background: 'transparent'}} title="YouTube FSJ">
            <YoutubeIcon />
          </a>
          <a href="https://tiktok.com/@firststepjourney" target="_blank" rel="noreferrer" className="social-icon" style={{color: '#1B1464', background: 'transparent'}} title="TikTok FSJ">
            <TiktokIcon />
          </a>
        </div>
      </header>

      {/* SAKLAR KONTEN UTAMA */}
      <main className="main-content-wrapper">
        <div className="nav-spacer"></div> {/* Menghindari konten tertutup navbar */}
        {activePage === 'home' && <Home changePage={changePage} />}
        {activePage === 'about' && <AboutUs />}
        {activePage === 'programs' && <ProductsPrograms />}
        {activePage === 'insights' && <Insights />}
        {activePage === 'community' && <Community />}
        {activePage === 'contact' && <Contact />}
        {activePage === 'partnership' && <Partnership />}
      </main>

      {/* FOOTER */}
      <footer className="site-footer footer">
        <div className="footer-top">
          <div>
            <p className="eyebrow" style={{ color: '#FBB03B', fontWeight: 'bold' }}>Stay Updated with First Step Journey!</p>
            <div className="newsletter" style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <input type="email" placeholder="Enter Your Email" style={{ padding: '10px 16px', borderRadius: '999px', border: 'none', flex: 1 }} />
              <button className="primary-btn" style={{ padding: '10px 24px', borderRadius: '999px', border: 'none', backgroundColor: '#FBB03B', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Subscribe</button>
            </div>
          </div>
          <div className="footer-links" style={{ display: 'flex', gap: '40px', gridColumn: 'span 3', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ color: '#FBB03B', marginBottom: '8px' }}>About FSJ</h3>
              <a href="#about" onClick={(e) => changePage('about', e)} style={{ color: '#E0E0E0', textDecoration: 'none' }}>Vision & Mission</a>
              <a href="#about" onClick={(e) => changePage('about', e)} style={{ color: '#E0E0E0', textDecoration: 'none' }}>Our Journey</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ color: '#FBB03B', marginBottom: '8px' }}>Programs</h3>
              <a href="#programs" onClick={(e) => changePage('programs', e)} style={{ color: '#E0E0E0', textDecoration: 'none' }}>Internships</a>
              <a href="#programs" onClick={(e) => changePage('programs', e)} style={{ color: '#E0E0E0', textDecoration: 'none' }}>Mini Training</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ color: '#FBB03B', marginBottom: '8px' }}>Contacts</h3>
              <a href="#contact" onClick={(e) => changePage('contact', e)} style={{ color: '#E0E0E0', textDecoration: 'none' }}>General Contact</a>
              <a href="#partnership" onClick={(e) => changePage('partnership', e)} style={{ color: '#E0E0E0', textDecoration: 'none' }}>Partnership</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom footer-base">
          <span>© 2026 Copyright • First Step Journey. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
