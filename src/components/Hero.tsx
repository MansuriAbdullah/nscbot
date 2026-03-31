import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <header className="hero-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="hero-card glass-card tilt-card"
        >
          <div className="tilt-content-hero">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-badge"
            >
              <div className="pulse-dot"></div>
              Live & Accepting New Investors
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="hero-title"
            >
              NSC <span className="logo-accent">Bot Platform</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="hero-subtitle"
            >
              Automated AI-Powered USDT Trading Bot — Up to 5% Monthly ROI
            </motion.p>

            <motion.a
              href="#signup"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="neon-btn hero-main-btn"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              Start Trading Now
            </motion.a>
          </div>
        </motion.div>
      </div>
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 120px;
          position: relative;
        }
        .hero-card {
          text-align: center;
          padding: 100px 60px;
          border-radius: 40px;
          border: 1px solid rgba(0, 255, 65, 0.2);
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8);
          background: 
            linear-gradient(rgba(5, 20, 5, 0.85), rgba(0, 5, 0, 0.95)),
            url('/bot_card_bg.png') center center / cover no-repeat;
        }
        .hero-title {
          font-size: 5rem;
          margin-bottom: 25px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -2px;
        }
        .hero-subtitle {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.4;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(0, 255, 65, 0.08);
          color: var(--primary-green);
          padding: 8px 18px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 30px;
          border: 1px solid rgba(0, 255, 65, 0.15);
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--primary-green);
          border-radius: 50%;
          position: relative;
        }
        .pulse-dot::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid var(--primary-green);
          border-radius: 50%;
          animation: badge-ring 2s infinite;
        }
        .hero-main-btn {
          font-size: 1.35rem;
          padding: 20px 60px;
          border-radius: 100px;
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-subtitle { font-size: 1.1rem; }
          .hero-card { padding: 60px 40px; }
        }
      `}</style>
    </header>
  );
};

export default Hero;
