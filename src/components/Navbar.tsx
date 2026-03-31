import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
          <a href="#login" className="login-btn">Login</a>
          <a href="#signup" className="neon-btn small-btn" style={{ textDecoration: 'none' }}>Start Now</a>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
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
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 255, 65, 0.1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        }
        .logo-section {
          position: relative;
        }
        .logo-glow {
          position: absolute;
          width: 50px;
          height: 30px;
          background: var(--primary-green);
          filter: blur(30px);
          opacity: 0.4;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: -1;
          animation: logo-pulse 3s infinite alternate;
        }
        .logo {
          font-size: 1.6rem;
          font-weight: 900;
          letter-spacing: 1.5px;
        }
        .logo-accent {
          color: var(--primary-green);
          text-shadow: 0 0 15px var(--primary-green);
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
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-green);
          transition: 0.3s;
        }
        .nav-item:hover {
          color: var(--primary-green);
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
          font-weight: 500;
          opacity: 0.8;
          transition: 0.3s;
        }
        .login-btn:hover {
          color: var(--primary-green);
          opacity: 1;
        }
        .small-btn {
          padding: 10px 25px;
          font-size: 0.85rem;
          border-radius: 30px;
        }
        @keyframes logo-pulse {
          from { opacity: 0.2; transform: translateY(-50%) scale(1); }
          to { opacity: 0.6; transform: translateY(-50%) scale(1.5); }
        }
        @media (max-width: 992px) {
          .nav-links { display: none; }
          .nav-container { margin: 0 15px; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
