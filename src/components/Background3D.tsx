import React, { useMemo } from 'react';

const Background3D: React.FC = () => {
  // Increase quantity and brightness of stars
  const starsFar = useMemo(() => Array.from({ length: 200 }).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${Math.random() * 40 + 80}s`,
    delay: `${Math.random() * -80}s`
  })), []);

  const starsMid = useMemo(() => Array.from({ length: 100 }).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${Math.random() * 20 + 40}s`,
    delay: `${Math.random() * -40}s`
  })), []);

  const starsNear = useMemo(() => Array.from({ length: 50 }).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${Math.random() * 10 + 15}s`,
    delay: `${Math.random() * -15}s`
  })), []);

  return (
    <div className="galaxy-container">
      {/* nebula effect */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>

      {/* 3D layers with clearer visibility */}
      <div className="star-layer far-parallax">
        {starsFar.map((star, i) => (
          <div key={i} className="star-dot dot-s" style={{ left: star.left, top: star.top, animationDuration: star.duration, animationDelay: star.delay }}></div>
        ))}
      </div>

      <div className="star-layer mid-parallax">
        {starsMid.map((star, i) => (
          <div key={i} className="star-dot dot-m" style={{ left: star.left, top: star.top, animationDuration: star.duration, animationDelay: star.delay }}></div>
        ))}
      </div>

      <div className="star-layer near-parallax">
        {starsNear.map((star, i) => (
          <div key={i} className="star-dot dot-l" style={{ left: star.left, top: star.top, animationDuration: star.duration, animationDelay: star.delay }}></div>
        ))}
      </div>

      <style>{`
        .galaxy-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(circle at center, #0a1a0a 0%, #000000 100%);
          overflow: hidden;
        }
        .nebula {
          position: absolute;
          width: 70vw;
          height: 70vw;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.2;
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .nebula-1 {
          background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
          top: -10%;
          left: -10%;
          animation: drift-slow 40s infinite alternate;
        }
        .nebula-2 {
          background: radial-gradient(circle, #008f44 0%, transparent 70%);
          bottom: -10%;
          right: -10%;
          animation: drift-slow-rev 60s infinite alternate;
        }
        .star-layer {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          pointer-events: none;
        }
        .star-dot {
          position: absolute;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 4px #fff;
          animation: twinkle 4s infinite alternate;
        }
        .dot-s { width: 1.5px; height: 1.5px; opacity: 0.5; }
        .dot-m { width: 2.5px; height: 2.5px; background: var(--primary-color); box-shadow: 0 0 8px var(--primary-color); }
        .dot-l { width: 3.5px; height: 3.5px; box-shadow: 0 0 12px #fff; }
        
        .far-parallax { animation: spin-parallax 300s linear infinite; }
        .mid-parallax { animation: spin-parallax 180s linear infinite reverse; }
        .near-parallax { animation: spin-parallax 90s linear infinite; }

        @keyframes spin-parallax {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0% { transform: scale(0.8); opacity: 0.4; }
          100% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes drift-slow {
          from { transform: translate(0, 0); }
          to { transform: translate(100px, 100px); }
        }
        @keyframes drift-slow-rev {
          from { transform: translate(0, 0); }
          to { transform: translate(-80px, -60px); }
        }
      `}</style>
    </div>
  );
};

export default Background3D;
