import React from 'react';
import { Home, TrendingUp, Wallet, Users, PieChart, Bot, Banknote, User, Receipt, Headphones, LogOut } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, section: null },
    { id: 'investment', label: 'Investment', icon: TrendingUp, section: null },
    { id: 'income', label: 'Income', icon: Wallet, section: null },
    { type: 'divider', label: 'NETWORK' },
    { id: 'referral', label: 'Referral Network', icon: Users, section: 'NETWORK' },
    { id: 'analytics', label: 'Team Analytics', icon: PieChart, section: 'NETWORK' },
    { type: 'divider', label: 'BOTS & POOLS' },
    { id: 'bot', label: 'Bot', icon: Bot, isToggle: true, section: 'BOTS & POOLS' },
    { type: 'divider', label: 'WALLET' },
    { id: 'withdrawal', label: 'Withdrawal', icon: Banknote, section: 'WALLET' },
    { type: 'divider', label: 'ACCOUNT' },
    { id: 'profile', label: 'Profile', icon: User, section: 'ACCOUNT' },
    { id: 'transactions', label: 'Transactions', icon: Receipt, section: 'ACCOUNT' },
    { id: 'support', label: 'Support', icon: Headphones, section: 'ACCOUNT' },
  ];

  return (
    <aside className="sidebar-dashboard">
      <div className="sidebar-menu">
        {menuItems.map((item, idx) => {
          if (item.type === 'divider') {
            return <div key={idx} className="sidebar-divider">{item.label}</div>;
          }
          const Icon = item.icon!;
          const isActive = activeTab === item.id;
          return (
            <div 
              key={item.id} 
              className={`sidebar-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id!)}
            >
              <Icon size={20} className="icon" />
              <span className="label">{item.label}</span>
              {item.isToggle && (
                <div className={`status-toggle ${isActive ? 'active-toggle' : ''}`}>Active</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">NB</div>
          <div className="user-info">
            <h4>Nsc Bot</h4>
            <p>support@nscbot.com</p>
          </div>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          <LogOut size={18} /> Logout
        </button>
      </div>

      <style>{`
        .sidebar-dashboard {
          width: 280px;
          height: 100vh;
          background: #050a05;
          border-right: 1px solid rgba(0, 255, 65, 0.1);
          display: flex;
          flex-direction: column;
          padding: 20px 0;
          overflow-y: auto;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .sidebar-dashboard::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar-dashboard::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 65, 0.2);
          border-radius: 10px;
        }

        .sidebar-menu {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 0 15px;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          padding: 14px 20px;
          border-radius: 12px;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 5px;
          transition: all 0.3s;
          position: relative;
        }

        .sidebar-item:hover {
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.05);
        }

        .sidebar-item.active {
          background: var(--primary-green);
          color: #000;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
        }

        .sidebar-item .icon {
          margin-right: 15px;
        }

        .sidebar-divider {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin: 25px 0 10px 15px;
        }

        .status-toggle {
          margin-left: auto;
          background: rgba(0, 0, 0, 0.7);
          color: var(--primary-green);
          font-size: 0.75rem;
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 800;
        }
        
        .status-toggle.active-toggle {
          background: #000;
        }

        .sidebar-footer {
          padding: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: auto;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .avatar {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: var(--primary-green);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.1rem;
        }

        .user-info h4 {
          color: #fff;
          margin: 0;
          font-size: 1rem;
        }

        .user-info p {
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
          font-size: 0.85rem;
        }

        .logout-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          padding: 12px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .logout-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
