import React from 'react';

const Packages: React.FC = () => {
  const features = [
    "Monthly ROI: Up to 5%",
    "Bot Activation Fee: $50 USDT (one-time)",
    "Eligible Packages: $50 to $50,000",
    "Total Returns: Up to 60% over 12 months",
    "VIP Support & Advanced Bot Access",
    "Flexible investment amounts for everyone"
  ];

  return (
    <section id="packages" className="packages-section">
      <div className="section-container">
        <h2 className="section-title">Investment <span className="logo-accent">Package</span></h2>

        <div className="package-card glass-card tilt-card">
          <div className="card-overlay"></div>
          <div className="tilt-content">
            <h3 className="package-name">NEURAL</h3>
            <div className="package-range">Investment Range: $50 — $50,000</div>
            <div className="package-roi">Up to 5% Monthly ROI</div>
            <p className="contract-info">12-Month Contract • Premium Package</p>

            <ul className="package-features">
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="checkmark">✔</span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="neon-btn package-btn">Choose NEURAL Package</button>
          </div>
        </div>
      </div>
      <style>{`
        .packages-section {
          background: transparent;
          padding: 50px 0;
          text-align: center;
        }
        .section-title {
          font-size: 2.2rem;
          margin-bottom: 35px;
        }
        .package-card {
          margin: 0 auto;
          max-width: 440px;
          border: 1.5px solid var(--primary-green);
          padding: 35px 25px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          box-shadow: 0 0 35px rgba(0, 255, 65, 0.12);
        }
        .package-name {
          color: var(--primary-green);
          font-size: 1.6rem;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }
        .package-range {
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 0.95rem;
        }
        .package-roi {
          font-size: 2rem;
          color: var(--primary-green);
          font-weight: 800;
          margin-bottom: 5px;
          background: linear-gradient(135deg, var(--primary-green) 0%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .contract-info {
          color: var(--text-muted);
          margin-bottom: 25px;
          font-weight: 500;
          font-size: 0.85rem;
        }
        .package-features {
          list-style: none;
          text-align: left;
          max-width: 350px;
          margin: 0 auto 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
        }
        .checkmark {
          color: var(--primary-green);
          font-weight: bold;
        }
        .package-btn {
          width: 100%;
          border-radius: 12px;
          padding: 14px;
          font-size: 1rem;
          box-shadow: 0 0 18px rgba(0, 255, 65, 0.25);
        }
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 10% 10%, rgba(0, 255, 65, 0.05) 0%, transparent 40%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default Packages;
