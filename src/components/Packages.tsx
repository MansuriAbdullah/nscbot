import React from 'react';
import { motion } from 'framer-motion';

const Packages: React.FC = () => {
  const investmentPackages = [
    {
      name: "NEURAL",
      range: "Investment Range: $50 — $50,000",
      roi: "Up to 5% Monthly ROI",
      features: [
        "Monthly ROI: Up to 5%",
        "Bot Activation Fee: $50 USDT (one-time)",
        "Eligible Packages: $50 to $50,000",
        "Total Returns: Up to 60% over 12 months",
        "VIP Support & Advanced Bot Access",
        "Flexible investment amounts for everyone"
      ]
    }
  ];

  return (
    <section id="packages" className="packages-section">
      <div className="section-container">
        <h2 className="section-title">Investment <span className="logo-accent">Package</span></h2>
        <div className="packages-grid">
          {investmentPackages.map((pkg, index) => (
            <motion.div
              key={index}
              className="package-card animated-border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="package-inner-split">
                <div className="package-left">
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-range">{pkg.range}</div>
                  <div className="package-roi">{pkg.roi}</div>
                  <div className="contract-info">12 MONTH NEURAL CONTRACT</div>
                  
                  <button className="neon-btn package-btn">Activate Plan</button>
                </div>

                <div className="package-right">
                  <ul className="package-features">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <div className="feature-icon-wrapper" style={{ 
                          background: i % 2 === 0 ? 'rgba(0, 243, 255, 0.1)' : 'rgba(255, 77, 0, 0.1)',
                          borderColor: i % 2 === 0 ? 'rgba(0, 243, 255, 0.3)' : 'rgba(255, 77, 0, 0.3)',
                          color: i % 2 === 0 ? 'var(--primary-blue)' : 'var(--primary-orange)',
                          boxShadow: i % 2 === 0 ? '0 0 10px rgba(0,243,255,0.2)' : '0 0 10px rgba(255,77,0,0.2)'
                        }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .packages-section {
          background: transparent;
          padding: 80px 0;
          text-align: center;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
        }
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
          width: 100%;
        }
        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 50px;
          font-weight: 900;
          color: #fff;
        }
        .packages-grid {
          width: 100%;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
        }
        .package-card {
           margin: 0 auto;
           width: 100%;
           max-width: 750px;
           box-sizing: border-box;
           border-radius: 30px;
        }
        .package-inner-split {
           display: flex;
           align-items: center;
           padding: 30px 40px;
           gap: 30px;
           background: rgba(2, 6, 12, 0.8);
           backdrop-filter: blur(20px);
           border-radius: 30px;
           box-sizing: border-box;
           border: 1px solid rgba(255, 255, 255, 0.25);
           box-shadow: 0 20px 50px rgba(0,0,0,0.8);
           width: 100%;
        }
        .package-left {
          flex: 0.9;
          text-align: left;
          border-right: 1px solid rgba(255, 255, 255, 0.25);
          padding-right: 30px;
          box-sizing: border-box;
        }
        .package-right {
          flex: 1.1;
          box-sizing: border-box;
        }
        .package-name {
          color: var(--primary-blue);
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 8px;
          letter-spacing: 2px;
          font-weight: 900;
          text-shadow: 0 0 20px var(--glow-blue);
          text-transform: uppercase;
        }
        .package-range {
          font-weight: 700;
          margin-bottom: 15px;
          font-size: 1rem;
          color: var(--primary-orange);
          letter-spacing: 1px;
        }
        .package-roi {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #fff 0%, var(--primary-blue) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
        }
        .contract-info {
          display: inline-block;
          padding: 10px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 2px;
        }
        .package-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
          padding: 0;
          margin: 0;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          background: linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          box-sizing: border-box;
          width: 100%;
        }
        .feature-item:hover {
          transform: translateX(10px);
          background: linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
          border-color: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        .feature-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid transparent;
          flex-shrink: 0;
        }
        .feature-text {
          line-height: 1.4;
        }
        .package-btn {
          margin-top: 35px;
          width: 100%;
          border-radius: 100px;
          padding: 16px;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        @media (max-width: 992px) {
          .package-inner-split { 
             flex-direction: column; 
             padding: 40px; 
             gap: 40px; 
          }
          .package-left { 
             border-right: none; 
             border-bottom: 1px solid rgba(255,255,255,0.1);
             padding-right: 0; 
             padding-bottom: 40px;
             text-align: center; 
             width: 100%;
          }
          .package-btn {
             margin: 40px auto 0 auto;
             max-width: 300px;
          }
          .package-right {
             width: 100%;
          }
        }
        @media (max-width: 576px) {
          .package-inner-split {
             padding: 30px 20px;
          }
          .feature-item {
             padding: 12px 14px;
             font-size: 0.85rem;
             gap: 10px;
          }
          .package-name { font-size: 1.5rem; }
          .package-roi { font-size: 1.8rem; }
          .package-range { font-size: 0.85rem; }
          .section-title { font-size: 2rem; margin-bottom: 30px; }
        }
      `}</style>
    </section>
  );
};

export default Packages;
