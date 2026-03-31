import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import HowItWorks from './components/HowItWorks';
import TradingBot from './components/TradingBot';
import Referral from './components/Referral';
import Withdrawal from './components/Withdrawal';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import AuthPage from './components/AuthPage';
import DashboardLayout from './components/DashboardLayout';
import './index.css';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'auth' | 'dashboard'>('home');

  useEffect(() => {
    // Smoother scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#login' || hash === '#signup') {
        setView('auth');
        window.scrollTo(0, 0);
      } else if (hash === '#dashboard') {
        setView('dashboard');
        window.scrollTo(0, 0);
      } else {
        setView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (view === 'auth') {
    return <AuthPage onBack={() => {
      window.location.hash = '';
      setView('home');
    }} />;
  }

  if (view === 'dashboard') {
    return <DashboardLayout onLogout={() => {
      window.location.hash = '';
      setView('home');
    }} />;
  }

  return (
    <div className="app-container-3d">
      <Background3D />
      <Navbar />
      <main className="content-reveal">
        <Hero />
        <Packages />
        <HowItWorks />
        <TradingBot />
        <Referral />
        <Withdrawal />
      </main>
      <Footer />
      <style>{`
        .app-container-3d {
          position: relative;
          background: transparent;
          color: #fff;
          overflow: hidden;
        }
        .content-reveal {
          position: relative;
          z-index: 1;
        }
        /* Custom Scrollbar for stylish feel */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: var(--primary-green);
          border-radius: 10px;
          border: 2px solid #000;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #fff;
        }
      `}</style>
    </div>
  );
};

export default App;
