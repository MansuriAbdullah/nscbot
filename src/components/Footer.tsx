import React from 'react';
import { Share2, Send, Globe, Mail, Phone, MessageCircle } from 'lucide-react';
import BoxBackground3D from './BoxBackground3D';

const Footer: React.FC = () => {
  return (
    <footer className="footer-v2">
      <div style={{ opacity: 0.15, position: 'absolute', inset: 0, overflow: 'hidden' }}><BoxBackground3D /></div>
      <div className="footer-top-border"></div>
      <div className="footer-content-v2" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-top-v2">
          <div className="brand-box-v2">
            <h2 className="footer-logo-v2">NSC <span className="logo-accent">BOT</span></h2>
            <p className="footer-mission-v2">
              The smartest AI-powered USDT trading bot infrastructure for the modern DeFi era. Experience seamless automation and robust returns.
            </p>
            <div className="social-row-v2">
              <a href="#" className="social-icon-v2"><Share2 size={18} /></a>
              <a href="#" className="social-icon-v2"><Send size={18} /></a>
              <a href="#" className="social-icon-v2"><MessageCircle size={18} /></a>
              <a href="#" className="social-icon-v2"><Globe size={18} /></a>
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
              <p><Mail size={16} /> <span className="text-glow">support@nscbot.ai</span></p>
              <p><Phone size={16} /> <span className="text-glow">+1 (555) BOT-NSC</span></p>
            </div>
          </div>
        </div>
        
        <div className="footer-divider-v2"></div>
        
        <div className="footer-bottom-v2">
          <p className="copyright-text">© 2026 NSC Bot Infrastructure. Secured with AES-256 Encryption.</p>
          <div className="platform-badges">
            <span className="badge-v2">
              <span className="status-dot"></span> Live Status: OK
            </span>
            <span className="badge-v2 network-badge">Network: BEP-20 / TRC-20</span>
          </div>
        </div>
      </div>
      <style>{`
        .footer-v2 {
          background: rgba(2, 6, 12, 1);
          padding: 60px 0 30px;
          position: relative;
          overflow: hidden;
        }
        .footer-top-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary-blue), var(--primary-orange), transparent);
          box-shadow: 0 0 20px var(--primary-blue);
        }
        .footer-content-v2 {
          max-width: 1200px;
          padding: 0 20px;
          margin: 0 auto;
        }
        .footer-top-v2 {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 50px;
          margin-bottom: 40px;
        }
        .footer-logo-v2 {
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 15px;
          letter-spacing: 2px;
          text-shadow: 0 0 15px var(--glow-blue);
          color: #fff;
        }
        .footer-mission-v2 {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 1rem;
          font-weight: 500;
          max-width: 320px;
        }
        .social-row-v2 {
          display: flex;
          gap: 15px;
        }
        .social-icon-v2 {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(4, 12, 24, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        }
        .social-icon-v2:hover {
          background: var(--primary-orange);
          color: #000;
          border-color: var(--primary-orange);
          box-shadow: 0 0 20px var(--primary-orange);
          transform: translateY(-5px);
        }
        .links-title-v2 {
          color: #fff;
          font-size: 1.15rem;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 800;
        }
        .links-title-v2::after {
          content: '';
          display: block;
          width: 30px;
          height: 2px;
          background: var(--primary-blue);
          margin-top: 8px;
          box-shadow: 0 0 10px var(--primary-blue);
        }
        .links-v2 {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .links-v2 a {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.95rem;
          font-weight: 500;
          transition: 0.3s;
          display: inline-block;
        }
        .links-v2 a:hover {
          color: var(--primary-blue);
          transform: translateX(5px);
          text-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
        }
        .contact-v2 {
          display: flex;
          flex-direction: column;
          gap: 18px;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 500;
        }
        .contact-v2 p {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
        }
        .contact-v2 svg {
          color: var(--primary-orange);
        }
        .text-glow {
          transition: 0.3s;
        }
        .text-glow:hover {
          color: #fff;
          text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
        .footer-divider-v2 {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          margin-bottom: 30px;
        }
        .footer-bottom-v2 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          font-weight: 500;
        }
        .platform-badges {
          display: flex;
          gap: 15px;
        }
        .badge-v2 {
          padding: 6px 14px;
          border-radius: 50px;
          background: rgba(0, 243, 255, 0.05);
          border: 1px solid rgba(0, 243, 255, 0.2);
          color: rgba(0, 243, 255, 0.9);
          font-weight: 700;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.5px;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          background: #00ff41;
          border-radius: 50%;
          box-shadow: 0 0 10px #00ff41;
          animation: blink 2s infinite;
        }
        .network-badge {
          background: rgba(255, 77, 0, 0.05);
          border-color: rgba(255, 77, 0, 0.2);
          color: var(--primary-orange);
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
        @media (max-width: 992px) {
          .footer-top-v2 { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer-bottom-v2 { flex-direction: column-reverse; gap: 20px; text-align: center; }
        }
        @media (max-width: 600px) {
          .footer-top-v2 { grid-template-columns: 1fr; text-align: center; }
          .footer-mission-v2 { margin-left: auto; margin-right: auto; }
          .social-row-v2 { justify-content: center; }
          .links-title-v2::after { margin-left: auto; margin-right: auto; }
          .contact-v2 p { justify-content: center; }
          .platform-badges { flex-direction: column; align-items: center; gap: 10px;}
        }
      `}</style>
    </footer>
  );
};

export default Footer;
