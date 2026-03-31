import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, Shield, Activity, ArrowRight, Network, ArrowLeft, Key } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BoxBackground3D from './BoxBackground3D';

interface AuthPageProps {
  onBack: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (window.location.hash === '#signup') {
      setIsLogin(false);
    }
  }, []);

  return (
    <div className="auth-fullscreen">
      <div className="auth-global-bg" />

      <motion.div
        className="auth-split-wrapper glass-card"
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* LEFT COLUMN: FORM */}
        <div className="auth-left">
          <button className="back-link" onClick={() => {
            window.location.hash = '';
            onBack();
          }}>
            <ArrowLeft size={16} /> Back to Home
          </button>

          <div className="auth-header-new">
            <h2 className="logo-text">NSC <span className="logo-accent">BOT</span></h2>
            <h1>{isLogin ? 'Welcome Back' : 'Initialize Node'}</h1>
            <p>{isLogin ? 'Sign in to access your neural trading dashboard.' : 'Enter your coordinates to join the NSC network.'}</p>
          </div>

          <form className="auth-form-new" onSubmit={(e) => {
            e.preventDefault();
            window.location.hash = '#dashboard';
          }}>
            {!isLogin && (
              <div className="input-field-new">
                <label>Full Name</label>
                <div className="input-icon-wrapper">
                  <User size={18} className="input-icon" />
                  <input type="text" placeholder="John Doe" />
                </div>
              </div>
            )}

            <div className="input-field-new">
              <label>Email Connection</label>
              <div className="input-icon-wrapper">
                <Mail size={18} className="input-icon" />
                <input type="email" placeholder="cyber@nexus.com" />
              </div>
            </div>

            <div className="input-field-new">
              <label>Passcode</label>
              <div className="input-icon-wrapper">
                <Lock size={18} className="input-icon" />
                <input type="password" placeholder="••••••••" />
              </div>
              {isLogin && <a href="#forgot" className="forgot-link">Forgot Password?</a>}
            </div>

            {!isLogin && (
              <>
                <div className="input-field-new">
                  <label>Confirm Passcode</label>
                  <div className="input-icon-wrapper">
                    <Lock size={18} className="input-icon" />
                    <input type="password" placeholder="••••••••" />
                  </div>
                </div>
                <div className="input-field-new">
                  <label>Referral ID (Optional)</label>
                  <div className="input-icon-wrapper">
                    <Key size={18} className="input-icon" />
                    <input type="text" placeholder="NSC-XXXX-XXXX" />
                  </div>
                </div>
              </>
            )}

            <button type="submit" className="neon-btn submit-btn-new">
              {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-footer-toggle">
            {isLogin ? (
              <p>New to NSC Bot? <span onClick={() => setIsLogin(false)}>Create Account</span></p>
            ) : (
              <p>Already have a node? <span onClick={() => setIsLogin(true)}>Sign In</span></p>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: VISUALS */}
        <div className="auth-right">
          <div className="auth-bg-overlay" />
          <div className="auth-particles">
            <BoxBackground3D />
          </div>

          <div className="auth-right-content">
            <h2 className="vision-title">Constructing a better financial future together.</h2>

            <div className="feature-card-new glass-card">
              <div className="feature-icon"><Activity size={24} /></div>
              <div className="feature-text">
                <h3>High-Frequency AI</h3>
                <p>Access the top 1% of algorithmic trading bots executing trades instantly.</p>
              </div>
            </div>

            <div className="feature-card-new glass-card">
              <div className="feature-icon"><Shield size={24} /></div>
              <div className="feature-text">
                <h3>Secure & Safe</h3>
                <p>Every node involves thorough multi-layer background verification and encryption.</p>
              </div>
            </div>

            <div className="active-users-badge glass-card">
              <div className="avatar-group">
                <Network size={20} color="var(--primary-green)" />
              </div>
              <div className="badge-text">
                <strong>14k+</strong>
                <span>Active Nodes</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .auth-fullscreen {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: #020602;
          position: relative;
          overflow: hidden;
        }

        .auth-global-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(rgba(0, 5, 0, 0.8), rgba(0, 15, 0, 0.95)), url('/auth_bg.png') center/cover no-repeat;
          z-index: 0;
        }

        .auth-split-wrapper {
          display: flex;
          width: 100%;
          max-width: 950px;
          height: 85vh;
          max-height: 700px;
          min-height: 500px;
          background: rgba(5, 12, 5, 0.7);
          backdrop-filter: blur(20px);
          border: 2px solid #004000; /* Darker green border */
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          z-index: 10;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 85, 0, 0.4); 
        }

        /* LEFT SIDE */
        .auth-left {
          flex: 1;
          padding: 30px 40px;
          display: flex;
          flex-direction: column;
          position: relative;
          max-width: 450px;
          overflow-y: auto;
        }

        .auth-left::-webkit-scrollbar {
          width: 4px;
        }
        .auth-left::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 65, 0.2);
          border-radius: 4px;
        }

        .back-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          padding: 0;
          margin-bottom: 20px;
          transition: 0.3s;
          flex-shrink: 0;
        }

        .back-link:hover {
          color: var(--primary-green);
        }

        .auth-header-new {
          margin-bottom: 25px;
          flex-shrink: 0;
        }

        .logo-text {
          font-size: 1.1rem;
          font-weight: 900;
          margin-bottom: 15px;
          letter-spacing: 2px;
        }

        .auth-header-new h1 {
          font-size: 2.2rem;
          font-weight: 900;
          margin-bottom: 8px;
          color: #fff;
          line-height: 1.1;
        }

        .auth-header-new p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 1rem;
        }

        .auth-form-new {
          display: flex;
          flex-direction: column;
          gap: 15px;
          flex: 1;
          flex-shrink: 0;
        }

        .input-field-new {
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
        }

        .input-field-new label {
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
        }

        .input-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          color: rgba(255, 255, 255, 0.3);
        }

        .input-icon-wrapper input {
          width: 100%;
          background: rgba(0, 0, 0, 0.4);
          border: 2px solid #004000; /* Dark green border for inputs */
          border-radius: 10px;
          padding: 12px 12px 12px 40px;
          color: #fff;
          font-family: inherit;
          font-size: 0.9rem;
          transition: 0.3s;
        }

        .input-icon-wrapper input:focus {
          outline: none;
          border-color: var(--primary-green);
          background: rgba(0, 255, 65, 0.05);
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.1);
        }

        .input-icon-wrapper input:focus + .input-icon,
        .input-icon-wrapper input:focus ~ .input-icon {
          color: var(--primary-green);
        }

        .forgot-link {
          position: absolute;
          right: 0;
          top: 0;
          font-size: 0.8rem;
          color: var(--primary-green);
          text-decoration: none;
          font-weight: 600;
        }

        .submit-btn-new {
          margin-top: 5px;
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .auth-footer-toggle {
          margin-top: 20px;
          text-align: center;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          flex-shrink: 0;
          padding-bottom: 10px;
        }

        .auth-footer-toggle span {
          color: var(--primary-green);
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }

        .auth-footer-toggle span:hover {
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
        }

        /* RIGHT SIDE */
        .auth-right {
          flex: 1.2;
          position: relative;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-left: 1px solid rgba(0, 255, 65, 0.1);
          overflow: hidden;
        }

        .auth-bg-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(rgba(2, 6, 2, 0.4), rgba(0, 0, 0, 0.95)), url('/auth_split_bg.png') center/cover;
          z-index: 0;
          opacity: 0.6;
        }

        .auth-particles {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 1;
          opacity: 0.5;
          pointer-events: none;
        }

        .auth-right-content {
          position: relative;
          z-index: 2;
          max-width: 400px;
          margin: 0 auto;
        }

        .vision-title {
          font-size: 2rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .feature-card-new {
          display: flex;
          gap: 15px;
          padding: 18px;
          background: rgba(0, 0, 0, 0.6);
          border: 2px solid #004000; /* Dark green border */
          border-radius: 12px;
          margin-bottom: 15px;
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          background: rgba(0, 255, 65, 0.1);
          border: 1px solid var(--primary-green);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-green);
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
          flex-shrink: 0;
        }

        .feature-text h3 {
          font-size: 1rem;
          font-weight: 800;
          margin-bottom: 4px;
          color: #fff;
        }

        .feature-text p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .active-users-badge {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          padding: 15px 25px;
          background: rgba(0, 0, 0, 0.6);
          border: 2px solid #004000; /* Dark green border */
          border-radius: 100px;
          margin-top: 20px;
        }

        .avatar-group {
          width: 40px;
          height: 40px;
          background: rgba(0, 255, 65, 0.1);
          border: 1px solid var(--primary-green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-text strong {
          display: block;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 900;
        }

        .badge-text span {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
        }

        @media (max-width: 900px) {
          .auth-split-wrapper {
            flex-direction: column;
            border-radius: 0;
            min-height: 100vh;
          }
          .auth-left { max-width: 100%; border-right: none; }
          .auth-right { display: none; } /* Hide heavy visuals on mobile for focus */
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
