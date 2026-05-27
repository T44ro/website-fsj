import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';       
import AboutUs from './AboutUs'; 
import ProductsPrograms from './ProductsPrograms'; // <-- Import halaman baru

// === GAMBAR DI-COMMENT SEMENTARA AGAR VERCEL TIDAK ERROR ===
// import logo from './assets/fsj-logo.png';
// import iconIg from './assets/icon-ig.png';
// import iconYt from './assets/icon-yt.png';
// import iconTiktok from './assets/icon-tiktok.png';
// import iconX from './assets/icon-x.png';

function App() {
  const [activePage, setActivePage] = useState('about'); // Default ke About Us

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'about') {
      setActivePage('about');
    } else if (hash === 'home') {
      setActivePage('home');
    } else if (hash === 'programs') { // <-- Pengecekan halaman programs
      setActivePage('programs');
    }
  }, []);

  const changePage = (pageName, event) => {
    if (event) event.preventDefault();
    setActivePage(pageName);
    window.location.hash = pageName;
    window.scrollTo(0, 0); // Gulir otomatis ke atas saat pindah halaman
  };

  return (
    <div className="site-shell">
      {/* ========================================= */}
      {/* HEADER NAVIGATION                         */}
      {/* ========================================= */}
      <header className="topbar">
        {/* Kiri: Logo (Sementara pakai teks) */}
        <div className="brand">
          <h2 style={{ margin: 0, color: '#1B1464', fontFamily: 'Quicksand' }}>FSJ</h2>
          {/* <img src={logo} alt="First Step Journey" className="header-logo" /> */}
        </div>
        
        {/* Tengah: Menu Navigasi Bentuk Pil */}
        <nav className="topnav">
          <a href="#home" className={activePage === 'home' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('home', e)}>Home</a>
          <a href="#about" className={activePage === 'about' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('about', e)}>About Us</a>
          
          {/* <-- Menu Product & Programs sudah ditambahkan onClick --> */}
          <a href="#programs" className={activePage === 'programs' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('programs', e)}>Product & Programs</a>
          
          <a href="#insights" className="nav-item">Insights</a>
          <a href="#community" className="nav-item">Community</a>
          <a href="#contacts" className="nav-item">Contacts</a>
        </nav>

        {/* Kanan: Ikon Sosial Media (Sementara di-hide agar aman) */}
        <div className="social-links">
          {/* <a href="#" className="social-btn"><img src={iconIg} alt="Instagram" /></a>
          <a href="#" className="social-btn"><img src={iconYt} alt="YouTube" /></a>
          <a href="#" className="social-btn"><img src={iconTiktok} alt="TikTok" /></a>
          <a href="#" className="social-btn"><img src={iconX} alt="X" /></a> 
          */}
        </div>
      </header>

      {/* ========================================= */}
      {/* SAKLAR KONTEN HALAMAN                     */}
      {/* ========================================= */}
      {activePage === 'home' && <Home changePage={changePage} />}
      {activePage === 'about' && <AboutUs />}
      {activePage === 'programs' && <ProductsPrograms />}

      {/* ========================================= */}
      {/* FOOTER                                    */}
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
              <a href="#programs" onClick={(e) => changePage('programs', e)}>Internships</a>
              <a href="#programs" onClick={(e) => changePage('programs', e)}>Mini Training</a>
              <a href="#programs" onClick={(e) => changePage('programs', e)}>Community Impact</a>
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

export default App;
