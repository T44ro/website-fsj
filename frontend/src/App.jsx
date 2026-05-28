import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';       
import AboutUs from './AboutUs'; 
import ProductsPrograms from './ProductsPrograms'; 
import Insights from './Insights';
import Community from './Community';
import Contact from './Contact';         
import Partnership from './Partnership'; 

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
      {/* HEADER / NAVIGATION BAR */}
      <header className="topbar">
        <div className="brand">
          <h2 style={{ margin: 0, color: '#1B1464', fontFamily: 'Quicksand', cursor: 'pointer' }} onClick={(e) => changePage('home', e)}>FSJ</h2>
        </div>
        
        <nav className="topnav">
          <a href="#home" className={activePage === 'home' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('home', e)}>Home</a>
          <a href="#about" className={activePage === 'about' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('about', e)}>About Us</a>
          <a href="#programs" className={activePage === 'programs' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('programs', e)}>Product & Programs</a>
          <a href="#insights" className={activePage === 'insights' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('insights', e)}>Insights</a>
          <a href="#community" className={activePage === 'community' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('community', e)}>Community</a>
          
          {/* Dropdown untuk Contacts */}
          <div className="nav-item-dropdown">
            <span className={activePage === 'contact' || activePage === 'partnership' ? 'nav-item active' : 'nav-item'}>Contacts ▾</span>
            <div className="dropdown-content">
              <a href="#contact" onClick={(e) => changePage('contact', e)}>Contact</a>
              <a href="#partnership" onClick={(e) => changePage('partnership', e)}>Partnership</a>
            </div>
          </div>
        </nav>
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

      {/* FOOTER DESAIN BARU */}
      <footer className="site-footer">
        
        {/* ROW 1: Teks Stay Updated & Kolom Subscribe */}
        <div className="footer-top-row">
          <div className="footer-heading">
            <h2>Stay Updated with First<br/>Step Journey!</h2>
          </div>
          <div className="footer-subscribe">
            <div className="newsletter-box">
              <input type="email" placeholder="Enter Your Email" />
              <button className="btn-dark-blue">Subscribe</button>
            </div>
          </div>
        </div>

        {/* ROW 2: Logo Brand & 3 Kolom Navigasi */}
        <div className="footer-middle-row">
          <div className="footer-brand-info">
            <h2 className="footer-logo-text">FSJ</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-col">
              <h3>About FSJ</h3>
              <a href="#about" onClick={(e) => changePage('about', e)}>Vision & Mission</a>
              <a href="#about" onClick={(e) => changePage('about', e)}>Our Journey</a>
              <a href="#about" onClick={(e) => changePage('about', e)}>Our Team</a>
              <a href="#contact" onClick={(e) => changePage('contact', e)}>Contact Us</a>
            </div>
            <div className="footer-col">
              <h3>Programs</h3>
              <a href="#programs" onClick={(e) => changePage('programs', e)}>Internships</a>
              <a href="#programs" onClick={(e) => changePage('programs', e)}>Mini Training</a>
              <a href="#programs" onClick={(e) => changePage('programs', e)}>Event Calendar</a>
              <a href="#programs" onClick={(e) => changePage('programs', e)}>Community Impact</a>
            </div>
            <div className="footer-col">
              <h3>Insights</h3>
              <a href="#insights" onClick={(e) => changePage('insights', e)}>Frameworks</a>
              <a href="#insights" onClick={(e) => changePage('insights', e)}>Mindset</a>
              <a href="#insights" onClick={(e) => changePage('insights', e)}>Latest News</a>
              <a href="#insights" onClick={(e) => changePage('insights', e)}>FAQ</a>
            </div>
          </div>
        </div>

        {/* ROW 3: Copyright */}
        <div className="footer-bottom-row">
          <p>© 2026 Copyright • First Step Journey. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
