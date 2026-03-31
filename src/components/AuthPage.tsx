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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <div className="auth-fullscreen">
      <div className="auth-global-bg" />
      <div className="auth-animated-gradient" />

      <motion.div
        className="auth-split-wrapper glass-card"
        initial={{ scale: 0.95, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* LEFT COLUMN: FORM */}
        <div className="auth-left">
          <button className="back-link" onClick={() => {
            window.location.hash = '';
            onBack();
          }}>
            <ArrowLeft size={16} /> Back to Home
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'signup'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="auth-header-new"
            >
              <h2 className="logo-text">NSC <span className="logo-accent">BOT</span></h2>
              <h1>{isLogin ? 'Welcome Back' : 'Initialize Node'}</h1>
              <p>{isLogin ? 'Sign in to access your neural trading dashboard.' : 'Enter your coordinates to join the NSC network.'}</p>
            </motion.div>
          </AnimatePresence>

          <motion.form
            className="auth-form-new"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.hash = '#dashboard';
            }}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={isLogin ? 'form-login' : 'form-signup'}
          >
            {!isLogin && (
              <motion.div className="input-field-new" variants={itemVariants}>
                <label>Full Name</label>
                <div className="input-icon-wrapper">
                  <User size={18} className="input-icon" />
                  <input type="text" placeholder="John Doe" required />
                </div>
              </motion.div>
            )}

            <motion.div className="input-field-new" variants={itemVariants}>
              <label>Email Connection</label>
              <div className="input-icon-wrapper">
                <Mail size={18} className="input-icon" />
                <input type="email" placeholder="cyber@nexus.com" required />
              </div>
            </motion.div>

            <motion.div className="input-field-new" variants={itemVariants}>
              <label>Passcode</label>
              <div className="input-icon-wrapper">
                <Lock size={18} className="input-icon" />
                <input type="password" placeholder="••••••••" required />
              </div>
              {isLogin && <a href="#forgot" className="forgot-link">Forgot Password?</a>}
            </motion.div>

            {!isLogin && (
              <>
                <motion.div className="input-field-new" variants={itemVariants}>
                  <label>Confirm Passcode</label>
                  <div className="input-icon-wrapper">
                    <Lock size={18} className="input-icon" />
                    <input type="password" placeholder="••••••••" required />
                  </div>
                </motion.div>
                <motion.div className="input-field-new" variants={itemVariants}>
                  <label>Referral ID (Optional)</label>
                  <div className="input-icon-wrapper">
                    <Key size={18} className="input-icon" />
                    <input type="text" placeholder="NSC-XXXX-XXXX" />
                  </div>
                </motion.div>
              </>
            )}

            <motion.button
              type="submit"
              className="neon-btn submit-btn-new"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              <span className="btn-glow" />
              <span className="btn-content">{isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={18} /></span>
            </motion.button>
          </motion.form>

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
            <motion.h2
              className="vision-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Constructing a <span className="text-gradient">better financial</span> future together.
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="features-container"
            >
              <motion.div
                className="feature-card-new glass-card animated-card"
                variants={rightItemVariants}
                whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
              >
                <div className="feature-icon"><Activity size={24} /></div>
                <div className="feature-text">
                  <h3>High-Frequency AI</h3>
                  <p>Access the top 1% of algorithmic trading bots executing trades instantly.</p>
                </div>
                <div className="card-glare" />
              </motion.div>

              <motion.div
                className="feature-card-new glass-card animated-card"
                variants={rightItemVariants}
                whileHover={{ scale: 1.03, rotateX: -5, rotateY: 5 }}
              >
                <div className="feature-icon"><Shield size={24} /></div>
                <div className="feature-text">
                  <h3>Secure & Safe</h3>
                  <p>Every node involves thorough multi-layer background verification and encryption.</p>
                </div>
                <div className="card-glare" />
              </motion.div>

              <motion.div
                className="active-users-badge glass-card animated-card"
                variants={rightItemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 65, 0.4)" }}
              >
                <div className="avatar-group">
                  <Network size={20} color="var(--primary-color)" />
                </div>
                <div className="badge-text">
                  <strong>14k+</strong>
                  <span>Active Nodes</span>
                </div>
                <div className="card-glare" />
              </motion.div>
            </motion.div>
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
          background: var(--bg-dark);
          position: relative;
          overflow: hidden;
          perspective: 1000px;
        }

        .auth-global-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(2, 5, 10, 0.7), rgba(0, 0, 0, 0.9)), url('/cosmic_theme_bg.png') center/cover no-repeat;
          z-index: 0;
          animation: floatBg 25s infinite alternate;
        }

        @keyframes floatBg {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        .auth-split-wrapper {
          display: flex;
          width: 100%;
          max-width: 1100px;
          height: 85vh;
          max-height: 750px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          z-index: 10;
        }

        /* LEFT SIDE */
        .auth-left {
          flex: 1;
          padding: 40px 50px;
          display: flex;
          flex-direction: column;
          background: rgba(4, 12, 24, 0.9);
          border-right: 1px solid rgba(0, 210, 255, 0.1);
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 25px;
          color: #fff;
        }

        .logo-accent {
          color: var(--primary-orange);
          text-shadow: 0 0 10px var(--glow-orange);
        }

        .input-icon-wrapper input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 210, 255, 0.2);
          border-radius: 12px;
          padding: 14px 14px 14px 45px;
          color: #fff;
          transition: 0.3s;
        }

        .input-icon-wrapper input:focus {
          border-color: var(--primary-blue);
          background: rgba(0, 210, 255, 0.05);
        }

        .forgot-link {
          color: var(--primary-orange);
          font-weight: 600;
        }

        .auth-footer-toggle span {
          color: var(--primary-blue);
          font-weight: 700;
          cursor: pointer;
        }

        /* RIGHT SIDE */
        .auth-right {
          flex: 1.4;
          position: relative;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(6, 12, 24, 0.6);
        }

        .vision-title {
          font-size: 3rem;
          font-weight: 900;
          color: #fff;
          line-height: 1.15;
        }

        .text-gradient {
          background: linear-gradient(90deg, var(--primary-blue), var(--primary-orange));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .feature-card-new {
          background: rgba(0, 210, 255, 0.05);
          border: 1px solid rgba(0, 210, 255, 0.2);
          border-radius: 20px;
        }

        .feature-icon {
          color: var(--primary-blue);
          text-shadow: 0 0 10px var(--glow-blue);
        }

        .active-users-badge {
          background: rgba(255, 157, 0, 0.1);
          border: 1px solid rgba(255, 157, 0, 0.3);
          border-radius: 100px;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
