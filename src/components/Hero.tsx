import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <header id="hero" className="hero-section">
      {/* Background Animated Water Drops */}
      <div className="water-drop drop-1" />
      <div className="water-drop drop-2" />
      <div className="water-drop drop-3" />
      <div className="water-drop drop-4" />
      <div className="water-drop drop-5" />
      <div className="water-drop drop-6" />
      <div className="water-drop drop-7" />
      <div className="water-drop drop-8" />

      {/* Mesh/Grid Background faint overlay */}
      <div className="hero-grid-overlay" />

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="live-dot" /> <span className="badge-text">v2.5 Neural Engine Active</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          The Next Generation Of
          <br />
          <span className="hero-gradient-text">Automated DeFi</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Unlock up to <strong>5% Monthly ROI</strong> with our elite AI-driven trading infrastructure. 
          Experience real-time market adaptation and true passive income generation.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="#signup" className="hero-btn-primary">
            Start Trading Now
            <div className="btn-glow" />
          </a>
          <a href="#how-it-works" className="hero-btn-secondary">
            View Live Results
          </a>
        </motion.div>

        {/* Floating Glass Stats Grid */}
        <motion.div
          className="hero-stats-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="h-stat-box">
            <h3>14k+</h3>
            <p>Active Nodes</p>
          </div>
          <div className="h-stat-box">
            <h3 style={{ color: 'var(--primary-orange)' }}>$50M</h3>
            <p>Trading Volume</p>
          </div>
          <div className="h-stat-box">
            <h3>99.9%</h3>
            <p>Uptime Record</p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          height: 100vh;
          max-height: 100vh;
          box-sizing: border-box;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #02060C;
        }

        /* Water Drops Animation */
        .water-drop {
          position: absolute;
          background: rgba(4, 12, 24, 0.8);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 243, 255, 0.25); 
          border-radius: 50%;
          z-index: 0;
          box-shadow: inset 10px 10px 20px rgba(0, 243, 255, 0.08), 
                      inset -10px -10px 20px rgba(0, 0, 0, 0.9),
                      0 10px 30px rgba(0, 243, 255, 0.05);
        }

        .drop-1 { width: 180px; height: 180px; top: 12%; left: 8%; animation: floatDrop 8s infinite alternate ease-in-out; }
        .drop-2 { width: 280px; height: 280px; bottom: 8%; left: 12%; animation: floatDrop 10s infinite alternate-reverse ease-in-out; }
        .drop-3 { width: 150px; height: 150px; top: 18%; right: 10%; animation: floatDrop 7s infinite alternate ease-in-out; }
        .drop-4 { width: 240px; height: 240px; bottom: 12%; right: 5%; animation: floatDrop 12s infinite alternate-reverse ease-in-out; }
        
        /* New small dark drops */
        .drop-5 { width: 60px; height: 60px; top: 40%; left: 20%; animation: floatDrop 6s infinite alternate ease-in-out; }
        .drop-6 { width: 80px; height: 80px; bottom: 35%; right: 20%; animation: floatDrop 9s infinite alternate-reverse ease-in-out; }
        .drop-7 { width: 45px; height: 45px; top: 60%; left: 5%; animation: floatDrop 5s infinite alternate ease-in-out; }
        .drop-8 { width: 90px; height: 90px; top: 10%; right: 30%; animation: floatDrop 11s infinite alternate-reverse ease-in-out; }

        @keyframes floatDrop {
          0% { transform: translateY(0) translateX(0) scale(1); border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
          50% { transform: translateY(-30px) translateX(20px) scale(1.05); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          100% { transform: translateY(10px) translateX(-10px) scale(0.95); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }



        .hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 1;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 1100px;
          width: 100%;
          padding: 85px 20px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 243, 255, 0.05);
          border: 1px solid rgba(0, 243, 255, 0.3);
          padding: 6px 18px;
          border-radius: 50px;
          margin-bottom: 20px;
          box-shadow: 0 0 20px rgba(0, 243, 255, 0.1);
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #00ff41;
          border-radius: 50%;
          box-shadow: 0 0 10px #00ff41;
          animation: blinkLive 1.5s infinite;
        }

        @keyframes blinkLive {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .badge-text {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 700;
          letter-spacing: 1px;
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: clamp(2.8rem, 4.5vw, 4.8rem);
          line-height: 1.05;
          font-weight: 900;
          color: #fff;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .hero-gradient-text {
          background: linear-gradient(135deg, var(--primary-blue), var(--primary-orange));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 10px rgba(0, 243, 255, 0.3));
        }

        .hero-subtitle {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          margin: 0 auto 35px;
          max-width: 680px;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          margin-bottom: 50px;
        }

        .hero-btn-primary {
          position: relative;
          display: inline-block;
          padding: 16px 34px;
          font-size: 1.05rem;
          font-weight: 800;
          text-decoration: none;
          color: #000;
          background: var(--primary-blue);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 5px 20px rgba(0, 243, 255, 0.4);
        }

        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 243, 255, 0.6);
        }

        .hero-btn-secondary {
          display: inline-block;
          padding: 16px 34px;
          font-size: 1.05rem;
          font-weight: 800;
          text-decoration: none;
          color: #fff;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
        }

        .hero-stats-row {
          display: flex;
          gap: 25px;
          justify-content: center;
          width: 100%;
          max-width: 900px;
        }

        .h-stat-box {
          flex: 1;
          background: rgba(4, 12, 24, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          padding: 18px;
          transition: all 0.3s ease;
        }

        .h-stat-box:hover {
          background: rgba(4, 12, 24, 0.8);
          border-color: rgba(0, 243, 255, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 243, 255, 0.05);
        }

        .h-stat-box h3 {
          font-size: 2rem;
          font-weight: 900;
          color: var(--primary-blue);
          margin-bottom: 5px;
          letter-spacing: -1px;
        }

        .h-stat-box p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }

        @media (max-width: 800px) {
          .hero-section {
            height: auto;
            max-height: none;
            min-height: 100vh;
            padding: 100px 0 50px;
          }
          .hero-content {
            padding-top: 20px;
          }
          .hero-badge {
            margin-bottom: 15px;
          }
          .hero-title { font-size: clamp(2.5rem, 8vw, 3.5rem); margin-bottom: 15px; }
          .hero-actions { flex-direction: column; width: 100%; max-width: 320px; margin-bottom: 35px; }
          .hero-btn-primary, .hero-btn-secondary { width: 100%; text-align: center; display: block; }
          .hero-stats-row { flex-direction: column; max-width: 320px; gap: 15px; }
        }
      `}</style>
    </header>
  );
};

export default Hero;
