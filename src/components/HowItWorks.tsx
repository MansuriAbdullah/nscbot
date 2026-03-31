import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    { 
      num: 1, 
      title: 'Sign Up', 
      desc: 'Create your account and complete KYC verification in minutes. Simple and secure registration process.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
      color: '#00f3ff'
    },
    { 
      num: 2, 
      title: 'Choose Package', 
      desc: 'Select your investment amount from $50 to $50,000 USDT with the NEURAL package.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400',
      color: '#ff00ea'
    },
    { 
      num: 3, 
      title: 'Deposit USDT', 
      desc: 'Send USDT to your unique wallet address via BEP20 or TRC20 networks. Instant confirmation.',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=400',
      color: '#ffe600'
    },
    { 
      num: 4, 
      title: 'Activate Bot', 
      desc: 'Pay one-time bot fee ($50 USDT) to unlock referral income and start automated trading.',
      image: 'https://images.unsplash.com/photo-1620712948343-0008cc890662?auto=format&fit=crop&q=80&w=400',
      color: '#00ff41'
    },
    { 
      num: 5, 
      title: 'Earn Monthly ROI', 
      desc: 'Receive consistent up to 5% monthly returns directly to your account. Completely automated.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=400',
      color: '#ff7300'
    },
    { 
      num: 6, 
      title: 'Withdraw & Reinvest', 
      desc: 'Withdraw earnings monthly or reinvest to compound your returns. Flexible withdrawal options.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=400',
      color: '#8a2be2'
    },
  ];

  return (
    <section id="how-it-works" className="how-section">
      <div className="section-container">
        <h2 className="section-title">How It <span className="logo-accent">Works</span></h2>
        <p className="section-subtitle">Get started with NSC Bot in 6 simple steps and begin earning passive income</p>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="step-card glass-card"
              style={{ 
                border: `2px solid ${step.color}90`,
                boxShadow: `0 10px 30px rgba(0,0,0,0.8), inset 0 0 20px ${step.color}25`
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10, 
                boxShadow: `0 15px 40px ${step.color}40, inset 0 0 30px ${step.color}30`,
                borderColor: step.color
              }}
            >
              <div 
                className="step-image-banner"
                style={{ backgroundImage: `url('${step.image}')` }}
              >
                <div className="image-overlay" style={{ background: `linear-gradient(to bottom, transparent, rgba(4,12,24,0.9))` }}></div>
                <div 
                  className="step-badge"
                  style={{ 
                    background: step.color,
                    boxShadow: `0 0 20px ${step.color}`
                  }}
                >
                  <span style={{ color: '#000' }}>{step.num}</span>
                  <div className="badge-ring" style={{ border: `2px solid ${step.color}` }}></div>
                </div>
              </div>
              <div className="step-content">
                <h3 className="step-title" style={{ color: step.color, textShadow: `0 0 10px ${step.color}80` }}>{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .how-section {
          background: transparent;
          padding: 80px 0;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .section-subtitle {
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: -20px auto 50px;
          line-height: 1.6;
          font-size: 1.05rem;
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .step-card {
           padding: 0;
           text-align: center;
           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
           border-radius: 20px !important;
           overflow: hidden;
           background: rgba(4, 12, 24, 0.8);
           backdrop-filter: blur(10px);
           position: relative;
        }
        .step-image-banner {
          width: 100%;
          height: 180px;
          position: relative;
          background-size: cover;
          background-position: center;
        }
        .image-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .step-content {
          padding: 40px 25px 30px;
          position: relative;
          z-index: 2;
        }
        .step-badge {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.4rem;
          margin: 0;
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        }
        .badge-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          animation: badge-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .step-title {
          font-size: 1.4rem;
          margin-bottom: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .step-desc {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        @keyframes badge-pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @media (max-width: 992px) {
          .steps-grid { grid-template-columns: 1fr 1fr; gap: 25px; }
        }
        @media (max-width: 600px) {
          .steps-grid { grid-template-columns: 1fr; gap: 25px; }
          .step-image-banner { height: 150px; }
        }
        @media (max-width: 480px) {
          .section-title { font-size: 2rem; }
          .section-subtitle { font-size: 0.95rem; margin-bottom: 30px; }
          .step-content { padding: 35px 20px 25px; }
          .step-title { font-size: 1.25rem; }
          .step-desc { font-size: 0.85rem; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
