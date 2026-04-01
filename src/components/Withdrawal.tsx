import React from 'react';
import { motion } from 'framer-motion';
import BoxBackground3D from './BoxBackground3D';

const Withdrawal: React.FC = () => {
  const topCards = [
    { 
      title: 'ROI Only', 
      desc: 'Withdraw your earned returns while keeping your capital invested.', 
      color: '#00f3ff', 
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    },
    { 
      title: 'Capital', 
      desc: 'Withdraw your initial investment (this ends the investment term).', 
      color: '#ff00ea', 
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    },
    { 
      title: 'Full Amount', 
      desc: 'Withdraw everything seamlessly — capital + all your generated returns.', 
      color: '#ff7300', 
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    }
  ];

  const rules = [
    "Minimum withdrawal: $10 USDT",
    "Admin processing fee: 6%",
    "Withdrawal Cooldown period: 30 days",
    "Admin approval required for security",
    "Supports BEP20 & TRC20 networks"
  ];

  const timeline = [
    { step: '1. Request Submission', desc: 'Securely submit through your dashboard' },
    { step: '2. Admin Review', desc: 'Verification within 24-48 hours' },
    { step: '3. Blockchain Processing', desc: 'Funds sent instantly to your wallet' }
  ];

  return (
    <section id="withdrawal" className="withdrawal-section">
      <div className="section-container">
        <h2 className="section-title">Withdrawal <span className="logo-accent">System</span></h2>
        <p className="withdrawal-subtitle">Flexible and secure withdrawal options designed for your convenience.</p>

        <div className="withdrawal-top-grid">
          {topCards.map((card, i) => (
            <motion.div 
              key={i} 
              className="withdrawal-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                border: `1px solid ${card.color}30`,
                boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px ${card.color}10`
              }}
              whileHover={{ 
                y: -15, 
                borderColor: card.color,
                boxShadow: `0 20px 50px ${card.color}40, inset 0 0 40px ${card.color}30`
              }}
            >
              <div className="card-bg-pulse" style={{ background: `radial-gradient(circle at top right, ${card.color}20, transparent 60%)` }}></div>
              <div style={{ opacity: 0.1, position: 'absolute', inset: 0 }}><BoxBackground3D /></div>
              
              <div className="card-content-wrap">
                <div className="icon-wrapper" style={{ borderColor: `${card.color}50`, color: card.color, boxShadow: `0 0 20px ${card.color}40` }}>
                  {card.icon}
                </div>
                <h3 className="card-title" style={{ color: '#fff', textShadow: `0 0 10px ${card.color}50` }}>{card.title}</h3>
                <div className="card-divider" style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }}></div>
                <p className="card-desc">{card.desc}</p>
                
                <motion.button 
                  className="card-action-btn"
                  style={{ color: card.color, border: `1px solid ${card.color}50` }}
                  whileHover={{ backgroundColor: `${card.color}20`, boxShadow: `0 0 15px ${card.color}50`, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Select Action
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="withdrawal-bottom-grid">
          <motion.div 
            className="rules-container glass-card withdraw-box"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ opacity: 0.1 }}><BoxBackground3D /></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="box-header">
                <h3 className="grid-title">Withdrawal <span style={{ color: 'var(--primary-blue)' }}>Rules</span></h3>
              </div>
              <ul className="rules-list">
                {rules.map((rule, i) => (
                  <motion.li 
                    key={i} 
                    className="rule-item"
                    whileHover={{ x: 5, backgroundColor: 'rgba(0, 243, 255, 0.08)' }}
                  >
                    <div className="r-icon-box">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    {rule}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="timeline-container glass-card withdraw-box"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ opacity: 0.1 }}><BoxBackground3D /></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="box-header">
                <h3 className="grid-title">Processing <span style={{ color: 'var(--primary-orange)' }}>Timeline</span></h3>
              </div>
              <div className="timeline-steps">
                {timeline.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="timeline-item"
                    whileHover={{ x: 5 }}
                  >
                    <div className="t-icon-box">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 ? <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> : null}
                        {i === 0 ? <polyline points="22 4 12 14.01 9 11.01"></polyline> : null}
                        
                        {i === 1 ? <circle cx="12" cy="12" r="10"></circle> : null}
                        {i === 1 ? <polyline points="12 6 12 12 16 14"></polyline> : null}

                        {i === 2 ? <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon> : null}
                      </svg>
                    </div>
                    <div className="t-content">
                      <h4 className="timeline-step-title">{item.step}</h4>
                      <p className="timeline-step-desc">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .withdrawal-section {
          background: transparent;
          padding: 80px 0;
          text-align: center;
        }
        .withdrawal-subtitle {
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: -20px auto 50px;
          line-height: 1.6;
          font-size: 1.05rem;
        }
        .withdrawal-top-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin: 0 auto 50px;
          max-width: 1050px;
        }
        .withdrawal-card {
          border-radius: 30px !important;
          background: rgba(4, 12, 24, 0.85);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          text-align: left;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
        }
        .card-bg-pulse {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
          animation: pulse-bg 4s infinite alternate ease-in-out;
        }
        @keyframes pulse-bg {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.1); }
        }
        .card-content-wrap {
          position: relative;
          z-index: 1;
          padding: 35px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .icon-wrapper {
          width: 55px;
          height: 55px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid;
          transform: rotate(-5deg);
          transition: all 0.4s ease;
        }
        .withdrawal-card:hover .icon-wrapper {
          transform: rotate(0) scale(1.1);
        }
        .card-title {
          font-size: 1.6rem;
          margin-bottom: 15px;
          font-weight: 900;
          letter-spacing: 1px;
        }
        .card-divider {
          height: 3px;
          width: 40px;
          margin-bottom: 20px;
          border-radius: 5px;
          transition: width 0.4s ease;
        }
        .withdrawal-card:hover .card-divider {
          width: 80px;
        }
        .card-desc {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin: 0 0 35px 0;
          flex-grow: 1;
        }
        .card-action-btn {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          background: rgba(255,255,255,0.02);
          font-weight: 800;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }
        
        .withdrawal-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1050px;
          margin: 0 auto;
        }
        .withdraw-box {
          border-radius: 30px !important;
          background: rgba(2, 8, 16, 0.85);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          text-align: left;
          padding: 40px;
          display: flex;
          flex-direction: column;
        }
        .rules-container {
          border: 2px solid rgba(0, 243, 255, 0.35);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), inset 0 0 30px rgba(0, 243, 255, 0.08);
        }
        .timeline-container {
          border: 2px solid rgba(255, 77, 0, 0.4);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), inset 0 0 30px rgba(255, 77, 0, 0.08);
        }
        .box-header {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 15px;
          margin-bottom: 30px;
        }
        .grid-title {
          color: #fff;
          font-size: 1.6rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }
        .rules-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 0;
          margin: 0;
        }
        .rule-item {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          background: linear-gradient(90deg, rgba(0, 243, 255, 0.05) 0%, rgba(0, 243, 255, 0.01) 100%);
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid rgba(0, 243, 255, 0.15);
          transition: all 0.3s ease;
        }
        .rule-item:hover {
          background: linear-gradient(90deg, rgba(0, 243, 255, 0.1) 0%, rgba(0, 243, 255, 0.02) 100%);
          border-color: rgba(0, 243, 255, 0.4);
          box-shadow: 0 5px 15px rgba(0, 243, 255, 0.1);
          color: #fff;
        }
        .r-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(0, 243, 255, 0.1);
          color: var(--primary-blue);
          border: 1px solid rgba(0, 243, 255, 0.4);
          box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
          flex-shrink: 0;
        }
        
        .timeline-steps {
          display: flex;
          flex-direction: column;
          gap: 30px;
          position: relative;
        }
        .timeline-steps::before {
          content: '';
          position: absolute;
          left: 19px;
          top: 15px;
          bottom: 15px;
          width: 2px;
          background: linear-gradient(to bottom, rgba(255, 77, 0, 0.1), var(--primary-orange), rgba(255, 77, 0, 0.1));
          box-shadow: 0 0 15px var(--primary-orange);
        }
        .timeline-item {
          display: flex;
          gap: 20px;
          position: relative;
          align-items: flex-start;
          transition: 0.3s ease;
        }
        .t-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-orange), #ff4d00);
          color: #fff;
          border: 3px solid rgba(4, 12, 24, 1);
          box-shadow: 0 0 20px rgba(255, 77, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2);
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .t-content {
          background: rgba(4, 12, 24, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 77, 0, 0.2);
          border-left: 4px solid var(--primary-orange);
          padding: 18px 22px;
          border-radius: 12px;
          width: 100%;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
        }
        .timeline-item:hover .t-content {
          background: rgba(255, 77, 0, 0.08);
          border-color: rgba(255, 77, 0, 0.4);
          box-shadow: 0 10px 30px rgba(255, 77, 0, 0.15);
        }
        .timeline-item:hover .t-icon-box {
          transform: scale(1.15) rotate(5deg);
          box-shadow: 0 0 25px rgba(255, 77, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.5);
        }
        .timeline-step-title {
          color: var(--primary-orange);
          font-size: 1.15rem;
          margin-bottom: 6px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }
        .timeline-step-desc {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .withdrawal-top-grid { grid-template-columns: 1fr; max-width: 500px; padding: 0 15px; }
          .withdrawal-bottom-grid { grid-template-columns: 1fr; max-width: 600px; padding: 0 15px; }
          .withdraw-box { padding: 30px 20px; }
        }
        @media (max-width: 480px) {
          .card-content-wrap { padding: 25px 20px; }
          .card-title { font-size: 1.4rem; }
          .timeline-item { gap: 15px; }
          .t-content { padding: 15px 18px; border-left-width: 3px; }
          .t-icon-box { width: 34px; height: 34px; border-width: 2px; }
          .timeline-steps::before { left: 16px; }
          .timeline-step-title { font-size: 1.05rem; }
          .timeline-step-desc { font-size: 0.85rem; }
          .rule-item { font-size: 0.85rem; padding: 12px 15px; }
          .grid-title { font-size: 1.4rem; }
          .section-title { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Withdrawal;
