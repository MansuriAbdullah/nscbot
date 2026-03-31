import React from 'react';
import { motion } from 'framer-motion';

const TradingBot: React.FC = () => {
  const highlights = [
    "One-time activation fee",
    "Unlock referral commissions",
    "Automated trading enabled",
    "12 months validity period"
  ];

  return (
    <section id="bots" className="bots-section">
      <div className="section-container">
        <h2 className="section-title">Trading <span className="logo-accent">Bot</span></h2>
        <p className="section-subtitle">Activate the trading bot to unlock referral commissions and maximize your earning potential</p>

        <motion.div 
          className="bot-card animated-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bot-inner-card">
            <div className="bot-left">
              <h3 className="bot-name">NEURAL <span className="logo-accent">Bot</span></h3>
              <div className="bot-price">$50</div>
              <div className="bot-validity">12 Months Validity</div>
              <button className="neon-btn bot-btn">Activate Bot Now</button>
            </div>

            <div className="bot-divider"></div>

            <div className="bot-right">
              <ul className="bot-h-list">
                {highlights.map((h, i) => (
                  <motion.li 
                    key={i} 
                    className="bot-h-item"
                    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <div className="h-icon-box">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="h-text">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="important-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="banner-bold">Important Note:</span> Bot activation is <span className="logo-accent">required</span> to earn referral commissions.
        </motion.div>
      </div>
      <style>{`
        .bots-section {
          background: transparent;
          padding: 80px 0;
          text-align: center;
        }
        .section-subtitle {
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: -20px auto 50px;
          line-height: 1.6;
          font-size: 1.05rem;
        }
        .bot-card {
           max-width: 850px;
           margin: 0 auto 40px;
           box-sizing: border-box;
           border-radius: 30px;
        }
        .bot-inner-card {
           display: flex;
           align-items: center;
           justify-content: space-between;
           padding: 40px 50px;
           background: rgba(2, 8, 16, 0.8);
           backdrop-filter: blur(20px);
           border-radius: 30px;
           border: 1px solid rgba(255, 255, 255, 0.15);
           box-shadow: 0 20px 50px rgba(0,0,0,0.8);
           gap: 40px;
        }
        .bot-left {
          flex: 0.8;
          text-align: left;
        }
        .bot-divider {
          width: 1px;
          height: 180px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent);
        }
        .bot-right {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .bot-name {
          font-size: clamp(1.8rem, 3.5vw, 2.2rem);
          margin-bottom: 5px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .bot-price {
          font-size: clamp(3rem, 5vw, 4.5rem);
          color: #fff;
          font-weight: 900;
          margin-bottom: 5px;
          text-shadow: 0 0 20px var(--glow-blue);
          background: linear-gradient(to bottom, #fff 0%, var(--primary-blue) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }
        .bot-validity {
          color: var(--primary-orange);
          font-weight: 700;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }
        .bot-btn {
          width: 100%;
          border-radius: 100px;
          padding: 16px;
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .bot-h-list {
          list-style: none;
          text-align: left;
          width: 100%;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
        }
        .bot-h-item {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 0.95rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          background: linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }
        .h-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(0, 243, 255, 0.1);
          color: var(--primary-blue);
          border: 1px solid rgba(0, 243, 255, 0.3);
          box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
          flex-shrink: 0;
        }
        .h-text {
          line-height: 1.4;
        }
        .important-banner {
          background: rgba(255, 157, 0, 0.08);
          border: 1px solid rgba(255, 157, 0, 0.3);
          color: rgba(255, 255, 255, 0.9);
          padding: 18px 30px;
          border-radius: 20px;
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .banner-bold {
          color: var(--primary-orange);
          font-weight: 900;
          margin-right: 8px;
        }
        @media (max-width: 768px) {
          .bot-inner-card {
            flex-direction: column;
            padding: 40px 20px;
            gap: 25px;
          }
          .bot-divider {
            width: 100%;
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
          }
          .bot-left {
            text-align: center;
            width: 100%;
          }
          .bot-right {
            width: 100%;
          }
          .bot-btn {
            max-width: 300px;
            margin: 0 auto;
          }
        }
        @media (max-width: 480px) {
          .bot-price { font-size: 3rem; }
          .bot-name { font-size: 1.5rem; }
          .bot-validity { font-size: 0.8rem; margin-bottom: 20px; }
          .bot-h-item { padding: 12px; font-size: 0.85rem; gap: 10px; }
          .important-banner { padding: 15px; font-size: 0.85rem; margin: 0 15px; }
          .section-title { font-size: 2rem; }
          .section-subtitle { font-size: 0.95rem; padding: 0 15px; }
        }
      `}</style>
    </section>
  );
};

export default TradingBot;
