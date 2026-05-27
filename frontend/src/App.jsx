import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';       
import AboutUs from './AboutUs'; 
import ProductsPrograms from './ProductsPrograms'; 
import Insights from './Insights';
import Community from './Community'; // <-- Import halaman Community baru

function App() {
  const [activePage, setActivePage] = useState('about'); // Default halaman utama saat dimuat

  // Pengatur rute otomatis berdasarkan URL Hash (#) browser saat di-refresh
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'home') {
      setActivePage('home');
    } else if (hash === 'about') {
      setActivePage('about');
    } else if (hash === 'programs') { 
      setActivePage('programs');
    } else if (hash === 'insights') { 
      setActivePage('insights');
    } else if (hash === 'community') { // <-- Cek rute halaman community
      setActivePage('community');
    }
  }, []);

  // Fungsi navigasi perpindahan halaman internal React
  const changePage = (pageName, event) => {
    if (event) event.preventDefault();
    setActivePage(pageName);
    window.location.hash = pageName;
    window.scrollTo(0, 0); // Otomatis scroll ke atas layar setiap pindah halaman
  };

  return (
    <div className="site-shell">
      {/* ========================================================= */}
      {/* HEADER / NAVIGATION BAR                                   */}
      {/* ========================================================= */}
      <header className="topbar">
        {/* Sisi Kiri: Brand / Logo */}
        <div className="brand">
          <h2 style={{ margin: 0, color: '#1B1464', fontFamily: 'Quicksand', cursor: 'pointer' }} onClick={(e) => changePage('home', e)}>FSJ</h2>
        </div>
        
        {/* Sisi Tengah: Menu Navigasi Kapsul */}
        <nav className="topnav">
          <a href="#home" className={activePage === 'home' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('home', e)}>Home</a>
          <a href="#about" className={activePage === 'about' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('about', e)}>About Us</a>
          <a href="#programs" className={activePage === 'programs' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('programs', e)}>Product & Programs</a>
          <a href="#insights" className={activePage === 'insights' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('insights', e)}>Insights</a>
          
          {/* Menu Community aktif dengan fungsi click */}
          <a href="#community" className={activePage === 'community' ? 'nav-item active' : 'nav-item'} onClick={(e) => changePage('community', e)}>Community</a>
          
          <a href="#contacts" className="nav-item">Contacts</a>
        </nav>

        {/* Sisi Kanan: Ruang Kosong Sosial Media */}
        <div className="social-links"></div>
      </header>

      {/* ========================================================= */}
      {/* SAKLAR KONTEN UTAMA HALAMAN                               */}
      {/* ========================================================= */}
      <main className="main-content-wrapper">
        {activePage === 'home' && <Home changePage={changePage} />}
        {activePage === 'about' && <AboutUs />}
        {activePage === 'programs' && <ProductsPrograms />}
        {activePage === 'insights' && <Insights />}
        {activePage === 'community' && <Community />} {/* <-- Menampilkan Komponen Community */}
      </main>

      {/* ========================================================= */}
      {/* FOOTER WEBSITE                                            */}
      {/* ========================================================= */}
      <footer className="site-footer">
        <div className="footer-top">
          {/* Berlangganan Berita */}
          <div>
            <p className="eyebrow">Stay Updated with First Step Journey!</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter Your Email" />
              <button className="primary-btn">Subscribe</button>
            </div>
          </div>
          
          {/* Peta Tautan Navigasi Bawah */}
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
        
        {/* Hak Cipta */}
        <div className="footer-base">
          <span>© 2026 Copyright • First Step Journey. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
