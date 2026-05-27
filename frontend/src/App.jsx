import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';       
import AboutUs from './AboutUs'; 
import ProductsPrograms from './ProductsPrograms'; 
import Insights from './Insights'; // <-- 1. Import halaman Insights

function App() {
  const [activePage, setActivePage] = useState('about'); 

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'about') {
      setActivePage('about');
    } else if (hash === 'home') {
      setActivePage('home');
    } else if (hash === 'programs') { 
      setActivePage('programs');
    } else if (hash === 'insights') { // <-- 2. Pengecekan route insights
      setActivePage('insights');
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
      {/* HEADER NAVIGATION */}
      <header className="topbar">
        <div className="brand">
          <h2 style={{ margin: 0, color: '#1B1464', fontFamily: 'Quicksand' }}>FSJ</h2>
        </div>
        
        <nav className="topnav">
          <a href="#home" className={activePage === 'home' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('home', e)}>Home</a>
          <a href="#about" className={activePage === 'about' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('about', e)}>About Us</a>
          <a href="#programs" className={activePage === 'programs' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('programs', e)}>Product & Programs</a>
          
          {/* <-- 3. Menu Insights dibuat bisa diklik --> */}
          <a href="#insights" className={activePage === 'insights' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('insights', e)}>Insights</a>
          
          <a href="#community" className="nav-item">Community</a>
          <a href="#contacts" className="nav-item">Contacts</a>
        </nav>

        <div className="social-links"></div>
      </header>

      {/* SAKLAR KONTEN HALAMAN */}
      {activePage === 'home' && <Home changePage={changePage} />}
      {activePage === 'about' && <AboutUs />}
      {activePage === 'programs' && <ProductsPrograms />}
      {activePage === 'insights' && <Insights />} {/* <-- 4. Tampilkan halaman Insights */}

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
              <a href="#insights" onClick={(e) => changePage('insights', e)}>Frameworks</a>
              <a href="#insights" onClick={(e) => changePage('insights', e)}>Mindset</a>
              <a href="#insights" onClick={(e) => changePage('insights', e)}>Latest News</a>
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
