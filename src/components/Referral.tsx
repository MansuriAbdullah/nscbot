import React from 'react';

const Referral: React.FC = () => {
  const commissions = [
    { level: 'Direct Referral', rate: '2.00%' },
    { level: 'Level 1', rate: '2.00%' },
    { level: 'Level 2', rate: '0.75%' },
    { level: 'Level 3', rate: '0.50%' },
    { level: 'Level 4', rate: '0.25%' },
    { level: 'Level 5', rate: '0.15%' },
    { level: 'Level 6', rate: '0.10%' },
  ];

  return (
    <section id="referral" className="referral-section">
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Referral <span className="logo-accent">System</span></h2>
        <p className="referral-subtitle">Earn commissions up to 6 levels deep with our automated affiliate system</p>
        
        <div className="referral-grid">
          <div className="commission-container glass-card ref-card">
            <h3 className="grid-title">Commission Structure</h3>
            <div className="commission-table">
              {commissions.map((c, i) => (
                <div className="table-row" key={i}>
                  <span className="row-level">{c.level}</span>
                  <span className="row-rate">{c.rate}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="how-it-works-sidebar glass-card ref-card">
            <h3 className="grid-title">Referral Steps</h3>
            <div className="referral-steps">
              <div className="ref-step">
                <span className="step-num">1</span>
                <div className="step-content">
                  <h4>Share Your Link</h4>
                  <p>Get your unique referral code and share it.</p>
                </div>
              </div>
              <div className="ref-step">
                <span className="step-num">2</span>
                <div className="step-content">
                  <h4>They Invest</h4>
                  <p>When someone uses your code to invest.</p>
                </div>
              </div>
              <div className="ref-step">
                <span className="step-num">3</span>
                <div className="step-content">
                  <h4>Earn Commissions</h4>
                  <p>Receive instant commissions from 6 levels deep.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .referral-section {
          background: transparent;
          padding: 60px 0;
        }
        .referral-subtitle {
          text-align: center;
          color: var(--text-muted);
          margin: -20px auto 40px;
          font-size: 0.95rem;
        }
        .referral-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          align-items: stretch;
          max-width: 850px;
          margin: 0 auto;
        }
        .ref-card {
          border: 1.5px solid var(--primary-green);
          border-radius: 20px !important;
          box-shadow: 0 0 12px rgba(0, 255, 65, 0.3), inset 0 0 10px rgba(0, 255, 65, 0.1);
          background: rgba(5, 15, 5, 0.5);
          padding: 25px 20px;
        }
        .grid-title {
          font-size: 1.25rem;
          color: var(--primary-green);
          margin-bottom: 20px;
          letter-spacing: 0.5px;
          text-align: center;
          border-bottom: 1px solid rgba(0, 255, 65, 0.2);
          padding-bottom: 10px;
        }
        .commission-table {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .table-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 15px;
          border-radius: 10px;
          background: rgba(0, 255, 65, 0.05);
          border: 1px solid rgba(0, 255, 65, 0.15);
        }
        .row-level {
          font-weight: 500;
          font-size: 0.9rem;
        }
        .row-rate {
          color: var(--primary-green);
          font-weight: 800;
          font-size: 1.05rem;
        }
        .referral-steps {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-top: 5px;
        }
        .ref-step {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .step-num {
          background: var(--primary-green);
          color: #000;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 2px;
          font-size: 0.95rem;
          box-shadow: 0 0 10px var(--primary-green-glow);
        }
        .step-content h4 {
          color: var(--primary-green);
          font-size: 1rem;
          margin-bottom: 5px;
        }
        .step-content p {
          color: var(--text-muted);
          font-size: 0.8rem;
          line-height: 1.35;
        }
        @media (max-width: 992px) {
          .referral-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Referral;
