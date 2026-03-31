import React from 'react';
import BoxBackground3D from './BoxBackground3D';

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

        <div className="bot-card glass-card tilt-card" style={{ position: 'relative', overflow: 'hidden' }}>
          <BoxBackground3D />
          <div className="tilt-content" style={{ position: 'relative', zIndex: 1 }}>
            <h3 className="bot-name">NEURAL <span className="logo-accent">Bot</span></h3>
            <div className="bot-price">$50</div>
            <div className="bot-validity">12 months validity</div>

            <ul className="bot-h-list">
              {highlights.map((h, i) => (
                <li key={i} className="bot-h-item">
                  <span className="checkmark">✔</span>
                  <span className="h-text">{h}</span>
                </li>
              ))}
            </ul>

            <button className="neon-btn bot-btn">Activate Bot</button>
          </div>
        </div>

        <div className="important-banner">
          <span className="banner-bold">Important Note:</span> Bot activation is <span className="logo-accent">required</span> to earn referral commissions.
        </div>
      </div>
      <style>{`
        .bots-section {
          background: transparent;
          padding: 60px 0;
          text-align: center;
        }
        .bot-card {
          max-width: 380px;
          margin: 0 auto 30px;
          border: 1.5px solid var(--primary-green);
          border-radius: 20px !important;
          box-shadow: 0 0 12px rgba(0, 255, 65, 0.3), inset 0 0 10px rgba(0, 255, 65, 0.1);
          background: rgba(5, 15, 5, 0.5);
          padding: 30px 20px;
        }
        .bot-name {
          font-size: 1.5rem;
          margin-bottom: 12px;
          font-weight: 800;
        }
        .bot-price {
          font-size: 2.5rem;
          color: var(--primary-green);
          font-weight: 800;
          margin-bottom: 2px;
          text-shadow: 0 0 15px rgba(0, 255, 65, 0.4);
        }
        .bot-validity {
          color: var(--text-white);
          font-weight: 500;
          font-size: 0.85rem;
          margin-bottom: 25px;
        }
        .bot-h-list {
          list-style: none;
          text-align: left;
          max-width: 300px;
          margin: 0 auto 25px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .bot-h-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .bot-btn {
          width: 100%;
          border-radius: 12px;
          padding: 12px;
          font-size: 1rem;
        }
        .important-banner {
          background: rgba(255, 65, 0, 0.05);
          border: 1px solid rgba(255, 65, 0, 0.2);
          color: rgba(255, 255, 255, 0.9);
          padding: 15px 20px;
          border-radius: 12px;
          font-size: 0.95rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .banner-bold {
          font-weight: 800;
          margin-right: 8px;
        }
      `}</style>
    </section>
  );
};

export default TradingBot;
