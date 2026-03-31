import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="nav-container glass-nav">
          <div className="logo-section">
            <div className="logo-glow"></div>
            <div className="logo">NSC <span className="logo-accent">BOT</span></div>
          </div>

          <div className="nav-links">
            <a href="#packages" className="nav-item">Packages</a>
            <a href="#how-it-works" className="nav-item">How it Works</a>
            <a href="#bots" className="nav-item">Bots</a>
            <a href="#referral" className="nav-item">Referral</a>
            <a href="#withdrawal" className="nav-item">Withdrawal</a>
          </div>

          <div className="nav-actions">
            <a href="#login" className="login-btn desktop-only">Login</a>
            <a href="#signup" className="neon-btn small-btn desktop-only" style={{ textDecoration: 'none' }}>Start Now</a>
            
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} color="#00f3ff" /> : <Menu size={28} color="#00f3ff" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-drawer-content">
              <a href="#packages" className="mobile-nav-item" onClick={closeMenu}>Packages</a>
              <a href="#how-it-works" className="mobile-nav-item" onClick={closeMenu}>How it Works</a>
              <a href="#bots" className="mobile-nav-item" onClick={closeMenu}>Bots</a>
              <a href="#referral" className="mobile-nav-item" onClick={closeMenu}>Referral</a>
              <a href="#withdrawal" className="mobile-nav-item" onClick={closeMenu}>Withdrawal</a>
              
              <div className="mobile-divider"></div>
              
              <a href="#login" className="mobile-login-btn" onClick={closeMenu}>Login to Dashboard</a>
              <a href="#signup" className="neon-btn mobile-start-btn" onClick={closeMenu}>START NOW</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 2000;
          padding: 25px 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navbar.scrolled {
          padding: 15px 0;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 30px;
          border-radius: 100px;
          background: rgba(4, 12, 24, 0.6);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 210, 255, 0.2);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        }
        .logo-section {
          position: relative;
        }
        .logo-glow {
          position: absolute;
          width: 50px;
          height: 30px;
          background: var(--primary-blue);
          filter: blur(30px);
          opacity: 0.4;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          animation: logo-pulse 3s infinite alternate;
        }
        .logo {
          font-size: 1.6rem;
          font-weight: 900;
          letter-spacing: 1.5px;
          color: #fff;
        }
        .logo-accent {
          color: var(--primary-orange);
          text-shadow: 0 0 15px var(--glow-orange);
        }
        .nav-links {
          display: flex;
          gap: 25px;
        }
        .nav-item {
          font-weight: 600;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          transition: 0.3s;
          position: relative;
          text-decoration: none;
        }
        .nav-item:hover {
          color: var(--primary-blue);
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-orange);
          transition: 0.3s;
        }
        .nav-item:hover::after {
          width: 100%;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .login-btn {
          color: #fff;
          font-weight: 600;
          opacity: 0.8;
          transition: 0.3s;
          text-decoration: none;
        }
        .login-btn:hover {
          color: var(--primary-blue);
          opacity: 1;
        }
        .small-btn {
          padding: 10px 25px;
          font-size: 0.9rem;
          text-decoration: none;
        }
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          outline: none;
        }
        
        .mobile-drawer {
          position: absolute;
          top: 85px;
          left: 15px;
          right: 15px;
          background: rgba(4, 12, 24, 0.95);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 243, 255, 0.3);
          border-radius: 20px;
          padding: 20px;
          z-index: 1999;
          box-shadow: 0 20px 50px rgba(0,0,0,0.8);
        }
        
        .mobile-drawer-content {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .mobile-nav-item {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          padding: 12px 15px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }
        
        .mobile-nav-item:active {
          background: rgba(0, 243, 255, 0.1);
          border-color: rgba(0, 243, 255, 0.3);
          color: var(--primary-blue);
        }
        
        .mobile-divider {
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin: 10px 0;
        }
        
        .mobile-login-btn {
          text-align: center;
          color: var(--primary-orange);
          font-weight: 800;
          font-size: 1.1rem;
          text-decoration: none;
          padding: 10px 0;
        }
        
        .mobile-start-btn {
          text-align: center;
          text-decoration: none;
          display: block;
          padding: 15px !important;
          border-radius: 12px !important;
        }

        @keyframes logo-pulse {
          0% { transform: translateY(-50%) scale(1); opacity: 0.4; }
          100% { transform: translateY(-50%) scale(1.5); opacity: 0.6; }
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .desktop-only { display: none; }
          .mobile-menu-btn { display: flex; align-items: center; justify-content: center; }
        }
        
        @media (max-width: 480px) {
          .nav-container { padding: 10px 15px; }
          .logo { font-size: 1.3rem; }
          .logo-glow { width: 30px; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
