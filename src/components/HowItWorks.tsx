import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: 1, title: 'Sign Up', desc: 'Create your account and complete KYC verification in minutes. Simple and secure registration process.' },
    { num: 2, title: 'Choose Package', desc: 'Select your investment amount from $50 to $50,000 USDT with the NEURAL package.' },
    { num: 3, title: 'Deposit USDT', desc: 'Send USDT to your unique wallet address via BEP20 or TRC20 networks. Instant confirmation.' },
    { num: 4, title: 'Activate Bot', desc: 'Pay one-time bot fee ($50 USDT) to unlock referral income and start automated trading.' },
    { num: 5, title: 'Earn Monthly ROI', desc: 'Receive consistent up to 5% monthly returns directly to your account. Completely automated.' },
    { num: 6, title: 'Withdraw & Reinvest', desc: 'Withdraw earnings monthly or reinvest to compound your returns. Flexible withdrawal options.' },
  ];

  return (
    <section id="how-it-works" className="how-section">
      <div className="section-container">
        <h2 className="section-title">How It <span className="logo-accent">Works</span></h2>
        <p className="section-subtitle">Get started with NSC Bot in 6 simple steps and begin earning passive income</p>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card glass-card">
              <div 
                className="step-image-banner"
                style={{ backgroundImage: `url('/step_bg_${step.num}.png')` }}
              >
                <div className="step-badge">{step.num}</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .how-section {
          background: transparent;
          padding: 60px 0;
          text-align: center;
        }
        .section-subtitle {
          color: var(--text-muted);
          max-width: 600px;
          margin: -20px auto 40px;
          line-height: 1.5;
          font-size: 0.95rem;
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .step-card {
          padding: 0;
          text-align: center;
          transition: all 0.3s ease;
          border: 1.5px solid var(--primary-green);
          border-radius: 20px !important;
          box-shadow: 0 0 12px rgba(0, 255, 65, 0.3), inset 0 0 10px rgba(0, 255, 65, 0.1);
          overflow: hidden;
          background: rgba(5, 15, 5, 0.5);
        }
        .step-image-banner {
          width: 100%;
          height: 110px;
          position: relative;
          background-size: cover;
          background-position: center;
          filter: hue-rotate(-80deg) saturate(1.2) brightness(0.9) contrast(1.1); /* Halka, softer green */
          opacity: 0.65; /* Blends it softly with the dark background */
          border-bottom: 1.5px solid var(--primary-green);
        }
        .step-content {
          padding: 35px 20px 20px;
        }
        .step-badge {
          background: var(--primary-green);
          color: #000;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.1rem;
          margin: 0;
          box-shadow: 0 0 15px var(--primary-green-glow);
          position: absolute;
          bottom: -21px;
          left: 50%;
          transform: translateX(-50%);
        }
        .step-badge::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid var(--primary-green);
          border-radius: 50%;
          animation: badge-ring 2s infinite;
        }
        .step-title {
          font-size: 1.25rem;
          color: var(--primary-green);
          margin-bottom: 12px;
        }
        .step-desc {
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.4;
        }
        @keyframes badge-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @media (max-width: 992px) {
          .steps-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .steps-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
