import React, { useState } from 'react';
import Sidebar from './Sidebar';
import BoxBackground3D from './BoxBackground3D';

interface DashboardProps {
  onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="dashboard-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />
      
      <main className="dashboard-content">
        <BoxBackground3D />
        
        <div className="dashboard-header">
          <h2 className="tab-title">{activeTab.replace('-', ' ').toUpperCase()}</h2>
          <div className="header-actions">
            <div className="wallet-balance">
               <span className="usd">USD</span> $24,500.00
            </div>
          </div>
        </div>

        <div className="dashboard-body">
          {activeTab === 'dashboard' && (
            <div className="dashboard-overview">
              <div className="hologram-banner">
                 <div className="bg-img" />
                 <div className="banner-content">
                   <h3>Neural Trading Node <span className="logo-accent">ACTIVE</span></h3>
                   <p>Your algorithms are processing global markets in real-time.</p>
                 </div>
              </div>
              
              <div className="stats-grid">
                {[
                  { label: 'Total Investment', value: '$10,000' },
                  { label: 'Monthly ROI', value: '+5%' },
                  { label: 'Network Size', value: '14 Nodes' },
                  { label: 'Active Bots', value: '1' },
                ].map((stat, i) => (
                  <div key={i} className="stat-card glass-card">
                    <p>{stat.label}</p>
                    <h4>{stat.value}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab !== 'dashboard' && (
            <div className="placeholder-card glass-card">
              <h3>{activeTab.toUpperCase()} Module Loading...</h3>
              <p>Establishing secure connection to the NSC network.</p>
              <div className="pulse-dot"></div>
            </div>
          )}
        </div>
      </main>

      <style>{`
        .dashboard-container {
          display: flex;
          height: 100vh;
          width: 100vw;
          background: #000;
          overflow: hidden;
        }

        .dashboard-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow-y: auto;
        }

        .dashboard-header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background: rgba(2, 6, 2, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 255, 65, 0.1);
        }

        .tab-title {
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: 1px;
          margin: 0;
        }

        .wallet-balance {
          background: rgba(0, 255, 65, 0.1);
          border: 1px solid var(--primary-color);
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 1.1rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
        }

        .usd {
          color: var(--primary-color);
          font-size: 0.8rem;
        }

        .dashboard-body {
          padding: 40px;
          position: relative;
          z-index: 1;
        }

        .hologram-banner {
          position: relative;
          width: 100%;
          height: 250px;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          padding: 30px;
          margin-bottom: 30px;
          border: 1px solid var(--primary-color);
          box-shadow: 0 10px 40px rgba(0, 255, 65, 0.15);
        }

        .hologram-banner .bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0, 5, 0, 0.95), rgba(0, 15, 0, 0.3)), url('/dashboard_bg.png') center/cover;
          z-index: 0;
        }

        .banner-content {
          position: relative;
          z-index: 1;
        }

        .banner-content h3 {
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 10px;
          text-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
        }
        
        .banner-content p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          max-width: 500px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .stat-card {
          padding: 25px;
          border-radius: 15px;
          border: 1px solid rgba(0, 255, 65, 0.2);
          background: rgba(0, 0, 0, 0.6);
          position: relative;
          overflow: hidden;
        }
        
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 3px; height: 100%;
          background: var(--primary-color);
          box-shadow: 0 0 10px var(--primary-color);
        }

        .stat-card p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .stat-card h4 {
          font-size: 1.8rem;
          font-weight: 900;
          color: #fff;
        }

        .placeholder-card {
          padding: 60px;
          text-align: center;
          border-radius: 20px;
          border: 1px solid rgba(0, 255, 65, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          background: rgba(0, 0, 0, 0.5);
          box-shadow: inset 0 0 20px rgba(0, 255, 65, 0.05);
        }

        .placeholder-card h3 {
          font-size: 1.5rem;
          color: var(--primary-color);
        }

        .pulse-dot {
          width: 15px;
          height: 15px;
          background: var(--primary-color);
          border-radius: 50%;
          position: relative;
        }
        .pulse-dot::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid var(--primary-color);
          border-radius: 50%;
          animation: badge-ring 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
