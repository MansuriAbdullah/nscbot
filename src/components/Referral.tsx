import React from 'react';
import { motion } from 'framer-motion';

const Referral: React.FC = () => {
  const commissions = [
    { level: 'Direct Referral', rate: '2.00%', color: 'var(--primary-orange)' },
    { level: 'Level 1', rate: '2.00%', color: 'var(--primary-blue)' },
    { level: 'Level 2', rate: '0.75%', color: 'var(--primary-blue)' },
    { level: 'Level 3', rate: '0.50%', color: 'var(--primary-blue)' },
    { level: 'Level 4', rate: '0.25%', color: 'var(--primary-blue)' },
    { level: 'Level 5', rate: '0.15%', color: 'var(--primary-blue)' },
    { level: 'Level 6', rate: '0.10%', color: 'var(--primary-blue)' },
  ];

  return (
    <section id="referral" className="referral-section">
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Referral <span className="logo-accent">System</span></h2>
        <p className="referral-subtitle">Earn commissions up to 6 levels deep with our automated affiliate system</p>
        
        <div className="referral-grid">
          <motion.div 
            className="commission-container glass-card ref-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="grid-title">Commission Structure</h3>
            <div className="commission-table">
              {commissions.map((c, i) => (
                <motion.div 
                  className="table-row" 
                  key={i}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span className="row-level" style={{ color: i === 0 ? 'var(--primary-orange)' : 'rgba(255,255,255,0.9)' }}>
                    {c.level}
                  </span>
                  <span className="row-rate" style={{ color: c.color, textShadow: `0 0 10px ${c.color}` }}>
                    {c.rate}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="how-it-works-sidebar glass-card ref-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="grid-title">Referral Steps</h3>
            <div className="referral-steps">
              <div className="ref-step">
                <div className="step-badge">1</div>
                <div className="step-content">
                  <h4>Share Your Link</h4>
                  <p>Get your unique referral code from dashboard and share it across networks.</p>
                </div>
              </div>
              <div className="step-line"></div>
              
              <div className="ref-step">
                <div className="step-badge">2</div>
                <div className="step-content">
                  <h4>They Invest</h4>
                  <p>Your invitee registers using your code and activates any Bot or Plan.</p>
                </div>
              </div>
              <div className="step-line"></div>
              
              <div className="ref-step">
                <div className="step-badge" style={{ background: 'var(--primary-orange)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="step-content">
                  <h4 style={{ color: 'var(--primary-orange)' }}>Earn Commissions</h4>
                  <p>Receive up to 6 levels of instant referral commissions straight to your wallet.</p>
                </div>
              </div>
            </div>
            
            <div className="reward-box">
              <div className="reward-glow"></div>
              <span>Passive Income Generator</span>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .referral-section {
          background: transparent;
          padding: 80px 0;
          position: relative;
        }
        .referral-subtitle {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          margin: -20px auto 50px;
          font-size: 1.05rem;
          max-width: 600px;
          line-height: 1.6;
        }
        .referral-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
          max-width: 1050px;
          margin: 0 auto;
        }
        .ref-card {
          border-radius: 30px !important;
          background: rgba(4, 12, 24, 0.8);
          backdrop-filter: blur(20px);
          padding: 40px;
          display: flex;
          flex-direction: column;
        }
        .commission-container {
          border: 2px solid rgba(0, 243, 255, 0.4);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), inset 0 0 30px rgba(0, 243, 255, 0.05);
        }
        .how-it-works-sidebar {
          border: 2px solid rgba(255, 77, 0, 0.4);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), inset 0 0 30px rgba(255, 77, 0, 0.05);
        }
        .grid-title {
          font-size: 1.6rem;
          color: #fff;
          margin-bottom: 30px;
          letter-spacing: 1px;
          text-align: left;
          font-weight: 800;
          text-transform: uppercase;
        }
        .commission-table {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .table-row {
          display: flex;
          justify-content: space-between;
          padding: 18px 20px;
          border-radius: 15px;
          background: linear-gradient(90deg, rgba(0, 243, 255, 0.05) 0%, rgba(0, 243, 255, 0.01) 100%);
          border: 1px solid rgba(0, 243, 255, 0.2);
          transition: all 0.3s ease;
        }
        .table-row:hover {
          background: linear-gradient(90deg, rgba(0, 243, 255, 0.1) 0%, rgba(0, 243, 255, 0.02) 100%);
          border-color: rgba(0, 243, 255, 0.5);
          box-shadow: 0 10px 20px rgba(0, 243, 255, 0.1);
        }
        .row-level {
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.5px;
        }
        .row-rate {
          font-weight: 900;
          font-size: 1.2rem;
        }
        
        .referral-steps {
          display: flex;
          flex-direction: column;
          position: relative;
          flex: 1;
        }
        .ref-step {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }
        .step-badge {
          background: var(--primary-blue);
          color: #000;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          flex-shrink: 0;
          font-size: 1.1rem;
          box-shadow: 0 0 15px var(--glow-blue);
          margin-top: 10px;
        }
        .step-line {
          width: 2px;
          height: 35px;
          background: linear-gradient(to bottom, rgba(255, 77, 0, 0.5), rgba(0, 243, 255, 0.5));
          margin: 10px 0 10px 19px;
          position: relative;
          z-index: 1;
        }
        .step-content {
          background: linear-gradient(90deg, rgba(255, 77, 0, 0.05) 0%, rgba(255, 77, 0, 0.01) 100%);
          border: 1px solid rgba(255, 77, 0, 0.2);
          padding: 16px 20px;
          border-radius: 15px;
          width: 100%;
          transition: all 0.3s ease;
        }
        .ref-step:hover .step-content {
          background: linear-gradient(90deg, rgba(255, 77, 0, 0.08) 0%, rgba(255, 77, 0, 0.02) 100%);
          border-color: rgba(255, 77, 0, 0.4);
          transform: translateX(5px);
        }
        .step-content h4 {
          color: var(--primary-blue);
          font-size: 1.15rem;
          margin-bottom: 8px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }
        .step-content p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }
        .reward-box {
          margin-top: 40px;
          padding: 20px;
          border-radius: 15px;
          background: rgba(0, 243, 255, 0.08);
          border: 1px solid rgba(0, 243, 255, 0.4);
          text-align: center;
          font-weight: 900;
          color: #fff;
          letter-spacing: 2px;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 243, 255, 0.1);
        }
        .reward-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(0,243,255,0.2), transparent);
          transform: rotate(45deg);
          animation: shine 3s infinite linear;
        }
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }
        @media (max-width: 900px) {
          .referral-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            padding: 0 15px;
          }
          .ref-card {
            padding: 30px 20px;
          }
        }
        @media (max-width: 480px) {
           .table-row { padding: 14px 15px; }
           .row-level { font-size: 0.9rem; }
           .row-rate { font-size: 1rem; }
           .step-content { padding: 12px 15px; }
           .step-content h4 { font-size: 1rem; }
           .step-content p { font-size: 0.85rem; }
           .grid-title { font-size: 1.3rem; margin-bottom: 20px; }
           .reward-box { padding: 15px; font-size: 0.85rem; }
           .section-title { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Referral;
