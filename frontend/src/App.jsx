import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css'; // Memanggil CSS Global (Header & Footer)

// Import Halaman
import Home from './Home';
import AboutUs from './AboutUs';

// Komponen Pembantu untuk Navigasi Aktif
const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="topnav">
      <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
      <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
      {/* Tambahkan menu lain di sini jika ada */}
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="site-shell">
        
        {/* ========================================= */}
        {/* HEADER (TOPBAR) AKAN MUNCUL DI SEMUA PAGE */}
        {/* ========================================= */}
        <header className="topbar">
          <div className="brand">
            {/* Ganti tulisan FSJ ini dengan tag <img src={logo} ... /> jika sudah ada logonya */}
            <h2 style={{ margin: 0, color: '#1B1464' }}>FSJ</h2> 
          </div>
          
          <Navigation />

          <div className="social-links">
             {/* Tempat icon sosmed */}
          </div>
        </header>

        {/* ========================================= */}
        {/* KONTEN TENGAH BERUBAH TERGANTUNG URL      */}
        {/* ========================================= */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        {/* ========================================= */}
        {/* FOOTER AKAN MUNCUL DI BAWAH SEMUA PAGE    */}
        {/* ========================================= */}
        <footer className="site-footer">
          <div className="footer-top">
            <div>
              <h3 className="eyebrow">Stay Updated with First Step Journey!</h3>
              <div className="newsletter">
                <input type="email" placeholder="Enter Your Email" />
                <button className="primary-btn">Subscribe</button>
              </div>
            </div>
            
            <div className="footer-links">
              <div>
                <h3>About FSJ</h3>
                <Link to="/about">Who Is Stepper</Link>
                <Link to="#">Our Journey</Link>
                <Link to="#">Partners</Link>
                <Link to="#">Contact Us</Link>
              </div>
              <div>
                <h3>Programs</h3>
                <Link to="#">Internships</Link>
                <Link to="#">Mini Training</Link>
                <Link to="#">Live Projects</Link>
                <Link to="#">Community Impact</Link>
              </div>
            </div>
          </div>
          
          <div className="footer-base">
            © 2024 Copyright • First Step Journey. All Rights Reserved.
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
