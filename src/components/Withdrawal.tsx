import React from 'react';
import BoxBackground3D from './BoxBackground3D';

const Withdrawal: React.FC = () => {
  const topCards = [
    { title: 'ROI Only', desc: 'Withdraw your earned returns while keeping capital invested' },
    { title: 'Capital', desc: 'Withdraw your initial investment (ends the investment)' },
    { title: 'Full Amount', desc: 'Withdraw everything — capital + all returns' }
  ];

  const rules = [
    "Minimum withdrawal: $10 USDT",
    "Processing fee: 6%",
    "Cooldown period: 30 days",
    "Admin approval required",
    "Supports BEP20 & TRC20 networks"
  ];

  const timeline = [
    { step: '1. Request Submission', desc: 'Submit through dashboard' },
    { step: '2. Admin Review', desc: '24-48 hours' },
    { step: '3. Blockchain Processing', desc: 'Funds sent instantly' }
  ];

  return (
    <section id="withdrawal" className="withdrawal-section">
      <div className="section-container">
        <h2 className="section-title">Withdrawal <span className="logo-accent">System</span></h2>

        <div className="withdrawal-top-grid">
          {topCards.map((card, i) => (
            <div key={i} className="withdrawal-card glass-card withdraw-box">
              <BoxBackground3D />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 className="card-title-green">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="withdrawal-bottom-grid">
          <div className="rules-container glass-card withdraw-box">
            <BoxBackground3D />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 className="grid-title-center">Withdrawal Rules</h3>
              <ul className="rules-list">
                {rules.map((rule, i) => (
                  <li key={i} className="rule-item">
                    <span className="bullet">•</span> {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="timeline-container glass-card withdraw-box">
            <BoxBackground3D />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 className="grid-title-center">Processing Timeline</h3>
              <div className="timeline-steps">
                {timeline.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <h4 className="timeline-step-title">{item.step}</h4>
                    <p className="timeline-step-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .withdrawal-section {
          background: transparent;
          padding: 60px 0;
          text-align: center;
        }
        .withdrawal-top-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 0 auto 30px;
          max-width: 900px;
        }
        .withdraw-box {
          border: 1.5px solid var(--primary-green);
          border-radius: 20px !important;
          box-shadow: 0 0 12px rgba(0, 255, 65, 0.3), inset 0 0 10px rgba(0, 255, 65, 0.1);
          background: rgba(5, 15, 5, 0.5);
          position: relative;
          overflow: hidden;
        }
        .withdrawal-card {
          padding: 25px 20px;
        }
        .card-title-green {
          color: var(--primary-green);
          font-size: 1.25rem;
          margin-bottom: 12px;
          font-weight: 800;
        }
        .card-desc {
          font-size: 0.9rem;
          color: var(--text-white);
          font-weight: 500;
          line-height: 1.5;
        }
        .withdrawal-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }
        .grid-title-center {
          color: var(--primary-green);
          font-size: 1.25rem;
          margin-bottom: 20px;
          text-align: center;
          border-bottom: 1px solid rgba(0, 255, 65, 0.2);
          padding-bottom: 10px;
        }
        .rules-container, .timeline-container {
          padding: 25px 25px 30px;
          text-align: left;
        }
        .rules-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .rule-item {
          display: flex;
          gap: 10px;
          font-size: 1rem;
          color: var(--text-white);
          font-weight: 600;
        }
        .bullet {
          color: var(--primary-green);
          font-weight: bold;
        }
        .timeline-steps {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .timeline-step-title {
          color: var(--primary-green);
          font-size: 1.1rem;
          margin-bottom: 3px;
          font-weight: 700;
        }
        .timeline-step-desc {
          color: var(--text-white);
          font-weight: 500;
          font-size: 0.9rem;
          padding-left: 20px;
        }
        @media (max-width: 992px) {
          .withdrawal-top-grid { grid-template-columns: 1fr; }
          .withdrawal-bottom-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Withdrawal;
