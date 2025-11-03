import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaCube } from 'react-icons/fa';

const Animated3DScene = ({ theme = 'mindscape', className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
      rotateX.set(y * 15);
      rotateY.set(x * 15);
    };

    const container = document.getElementById(`scene-${theme}`);
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY, rotateX, rotateY, theme]);

  const getThemeStyles = () => {
    switch (theme) {
      case 'mindscape':
        return {
          gradient: 'from-blue-500 via-purple-600 to-indigo-700',
          glow: 'rgba(99, 102, 241, 0.5)',
          particles: ['#6366f1', '#8b5cf6', '#a855f7'],
        };
      case 'zenify':
        return {
          gradient: 'from-emerald-400 via-green-300 to-teal-400',
          glow: 'rgba(16, 185, 129, 0.5)',
          particles: ['#10b981', '#34d399', '#6ee7b7'],
        };
      case 'aurora':
        return {
          gradient: 'from-purple-600 via-pink-600 to-cyan-600',
          glow: 'rgba(168, 85, 247, 0.5)',
          particles: ['#a855f7', '#ec4899', '#06b6d4'],
        };
      default:
        return {
          gradient: 'from-blue-500 to-purple-600',
          glow: 'rgba(99, 102, 241, 0.5)',
          particles: ['#6366f1', '#8b5cf6'],
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div
      id={`scene-${theme}`}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Animated background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-90`}>
        {/* Floating orbs */}
        {styles.particles.map((color, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              background: `radial-gradient(circle, ${color}40, ${color}00)`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.3, 0.6, 0.3, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* 3D Floating shapes */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-64 h-64"
        >
          {/* Main cube */}
          <motion.div
            className="absolute inset-0"
            style={{
              transform: 'translateZ(50px)',
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 15, -15, 0],
            }}
            transition={{
              rotateY: { duration: 20, repeat: Infinity, ease: 'linear' },
              rotateX: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <div
              className="w-full h-full bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl"
              style={{
                boxShadow: `0 0 50px ${styles.glow}, inset 0 0 50px ${styles.glow}20`,
              }}
            />
          </motion.div>

          {/* Floating smaller shapes */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              style={{
                transform: `translateZ(${-100 + i * 50}px) rotateY(${i * 120}deg)`,
                left: `${30 + i * 20}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                rotateZ: [0, 360],
                y: [0, -20, 20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 1,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -100, -200],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.5, 1, 0],
              scale: [1, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, ${styles.glow}15 100%)`,
        }}
      />
    </div>
  );
};

export default Animated3DScene;

