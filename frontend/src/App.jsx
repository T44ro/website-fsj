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
// NANTI HAPUS TANDA // DI BAWAH INI KALAU GAMBAR SOSMED SUDAH ADA DI FOLDER ASSETS:
// =====================================================================
// import iconIg from './assets/icon-ig.png';
// import iconYt from './assets/icon-yt.png';
// import iconTiktok from './assets/icon-tiktok.png';

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
      
      {/* HEADER / NAVIGATION BAR (TIGA PILAR) */}
      <header className="topbar">
        
        {/* PILAR KIRI: BRAND */}
        <div className="brand">
          <h2 style={{ margin: 0, color: '#1B1464', fontFamily: 'Quicksand', cursor: 'pointer' }} onClick={(e) => changePage('home', e)}>FSJ</h2>
        </div>
        
        {/* PILAR TENGAH: MENU NAVIGASI */}
        <nav className="topnav">
          <a href="#home" className={activePage === 'home' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('home', e)}>Home</a>
          <a href="#about" className={activePage === 'about' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('about', e)}>About Us</a>
          <a href="#programs" className={activePage === 'programs' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('programs', e)}>Product & Programs</a>
          <a href="#insights" className={activePage === 'insights' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('insights', e)}>Insights</a>
          <a href="#community" className={activePage === 'community' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('community', e)}>Community</a>
          
          <div className="nav-item-dropdown">
            <span className={activePage === 'contact' || activePage === 'partnership' ? 'nav-item active' : 'nav-item'}>Contacts ▾</span>
            <div className="dropdown-content">
              <a href="#contact" onClick={(e) => changePage('contact', e)}>Contact</a>
              <a href="#partnership" onClick={(e) => changePage('partnership', e)}>Partnership</a>
            </div>
          </div>
        </nav>

        {/* PILAR KANAN: SOCIAL MEDIA */}
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn">
            {/* <img src={iconIg} alt="Instagram FSJ" /> */}
            <div className="placeholder-icon">IG</div>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn">
            {/* <img src={iconYt} alt="YouTube FSJ" /> */}
            <div className="placeholder-icon">YT</div>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-btn">
            {/* <img src={iconTiktok} alt="TikTok FSJ" /> */}
            <div className="placeholder-icon">TK</div>
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
