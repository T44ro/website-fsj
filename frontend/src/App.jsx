import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'about') {
      setActivePage('about');
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
      {/* HEADER */}
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

      {/* SAKLAR KONTEN TENGAH */}
      {activePage === 'home' ? (
        <Home changePage={changePage} />
      ) : (
        <AboutUs />
      )}

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

export default App;
