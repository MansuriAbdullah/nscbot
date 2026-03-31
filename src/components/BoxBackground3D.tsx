import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BoxBackground3D: React.FC = () => {
  // Use a lightweight framer-motion particle system to prevent WebGL Context limits
  // (which happens when rendering many <Canvas> elements on one page).
  const particles = useMemo(() => {
    const list = [];
    for (let i = 0; i < 25; i++) {
      list.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1.5,
        durationX: Math.random() * 15 + 15,
        durationY: Math.random() * 15 + 15,
        delay: Math.random() * -20 // Negative delay so it starts mid-animation
      });
    }
    return list;
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 243, 255, 0.6)',
            boxShadow: '0 0 8px rgba(0, 243, 255, 0.8)'
          }}
          animate={{
            y: ['0px', '-40px', '20px', '0px'],
            x: ['0px', '30px', '-10px', '0px'],
            opacity: [0.1, 0.7, 0.1]
          }}
          transition={{
            y: { duration: p.durationY, repeat: Infinity, ease: 'easeInOut', delay: p.delay },
            x: { duration: p.durationX, repeat: Infinity, ease: 'easeInOut', delay: p.delay },
            opacity: { duration: p.durationY * 0.8, repeat: Infinity, ease: 'easeInOut', delay: p.delay }
          }}
        />
      ))}
    </div>
  );
};

export default BoxBackground3D;
