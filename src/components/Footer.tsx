import React from 'react';
import { Share2, Send, Globe, Mail, Phone, MessageCircle } from 'lucide-react';
import BoxBackground3D from './BoxBackground3D';

const Footer: React.FC = () => {
  return (
    <footer className="footer-v2">
      <div style={{ opacity: 0.35 }}><BoxBackground3D /></div>
      <div className="footer-content-v2" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-top-v2">
          <div className="brand-box-v2">
            <h2 className="footer-logo-v2">NSC <span className="logo-accent">BOT</span></h2>
            <p className="footer-mission-v2">
              The smartest AI-powered USDT trading bot infrastructure for the modern DeFi era.
            </p>
            <div className="social-row-v2">
              <a href="#" className="social-icon-v2"><Share2 size={20} /></a>
              <a href="#" className="social-icon-v2"><Send size={20} /></a>
              <a href="#" className="social-icon-v2"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon-v2"><Globe size={20} /></a>
            </div>
          </div>
          
          <div className="links-group-v2">
            <h3 className="links-title-v2">Navigation</h3>
            <div className="links-v2">
              <a href="#packages">Investment Packages</a>
              <a href="#how-it-works">Working Mechanism</a>
              <a href="#bots">Neural Bot Status</a>
              <a href="#referral">Partner Program</a>
            </div>
          </div>
          
          <div className="links-group-v2">
            <h3 className="links-title-v2">Resources</h3>
            <div className="links-v2">
              <a href="#faq">Knowledge Base</a>
              <a href="#terms">Terms of Service</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#contact">Support Ticket</a>
            </div>
          </div>
          
          <div className="links-group-v2">
            <h3 className="links-title-v2">Support</h3>
            <div className="contact-v2">
              <p><Mail size={16} /> support@nscbot.ai</p>
              <p><Phone size={16} /> +1 (555) BOT-NSC</p>
            </div>
          </div>
        </div>
        
        <div className="footer-divider-v2"></div>
        
        <div className="footer-bottom-v2">
          <p>© 2026 NSC Bot Infrastructure. Secured with AES-256 Encryption.</p>
          <div className="platform-badges">
            <span className="badge-v2">Live Status: OK</span>
            <span className="badge-v2">Network: BEP-20 / TRC-20</span>
          </div>
        </div>
      </div>
      <style>{`
        .footer-v2 {
          background: rgba(2, 6, 2, 0.98);
          padding: 40px 0 25px;
          position: relative;
          border-top: 1.5px solid var(--primary-green);
          box-shadow: 0 -15px 40px rgba(0, 255, 65, 0.15);
          overflow: hidden;
        }
        .footer-content-v2 {
          max-width: 100%;
          padding: 0 40px;
          margin: 0 auto;
        }
        .footer-top-v2 {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 30px;
        }
        .footer-logo-v2 {
          font-size: 1.8rem;
          font-weight: 900;
          margin-bottom: 12px;
          letter-spacing: 1px;
          text-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
        }
        .footer-mission-v2 {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin-bottom: 20px;
          font-size: 1rem;
          font-weight: 500;
          max-width: 320px;
        }
        .social-row-v2 {
          display: flex;
          gap: 15px;
        }
        .social-icon-v2 {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: 0.3s;
        }
        .social-icon-v2:hover {
          background: var(--primary-green);
          color: #000;
          border-color: var(--primary-green);
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
          transform: translateY(-5px);
        }
        .links-title-v2 {
          color: var(--primary-green);
          font-size: 1.1rem;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 900;
        }
        .links-v2 {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .links-v2 a {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1rem;
          font-weight: 500;
          transition: 0.3s;
        }
        .links-v2 a:hover {
          color: var(--primary-green);
          padding-left: 8px;
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
        }
        .contact-v2 {
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
        }
        .contact-v2 p {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
        }
        .footer-divider-v2 {
          height: 1px;
          background: rgba(0, 255, 65, 0.15);
          margin-bottom: 25px;
        }
        .footer-bottom-v2 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          font-weight: 500;
        }
        .platform-badges {
          display: flex;
          gap: 10px;
        }
        .badge-v2 {
          padding: 3px 8px;
          border-radius: 4px;
          background: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--primary-green);
          color: var(--primary-green);
          font-weight: 700;
          box-shadow: inset 0 0 10px rgba(0, 255, 65, 0.1);
          font-size: 0.85rem;
        }
        @media (max-width: 992px) {
          .footer-top-v2 { grid-template-columns: 1fr 1fr; }
          .footer-bottom-v2 { flex-direction: column; gap: 20px; text-align: center; }
          .footer-content-v2 { padding: 0 20px; }
        }
        @media (max-width: 600px) {
          .footer-top-v2 { grid-template-columns: 1fr; text-align: center; }
          .footer-mission-v2 { margin-left: auto; margin-right: auto; }
          .social-row-v2 { justify-content: center; }
          .contact-v2 p { justify-content: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
