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
          shapeType: 'brain', // Cerveau pour santé mentale
        };
      case 'zenify':
        return {
          gradient: 'from-emerald-400 via-green-300 to-teal-400',
          glow: 'rgba(16, 185, 129, 0.5)',
          particles: ['#10b981', '#34d399', '#6ee7b7'],
          shapeType: 'nature', // Nature/zen
        };
      case 'aurora':
        return {
          gradient: 'from-purple-600 via-pink-600 to-cyan-600',
          glow: 'rgba(168, 85, 247, 0.5)',
          particles: ['#a855f7', '#ec4899', '#06b6d4'],
          shapeType: 'creative', // Créativité/musique
        };
      default:
        return {
          gradient: 'from-blue-500 to-purple-600',
          glow: 'rgba(99, 102, 241, 0.5)',
          particles: ['#6366f1', '#8b5cf6'],
          shapeType: 'default',
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

      {/* 3D Floating shapes - Theme specific */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-64 h-64"
        >
          {styles.shapeType === 'brain' ? (
            // MindScape: Brain-like interconnected nodes (santé mentale)
            <>
              {/* Central brain shape - interconnected nodes */}
              <motion.div
                className="absolute inset-0"
                style={{
                  transform: 'translateZ(50px)',
                }}
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 10, -10, 0],
                  scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                  rotateY: { duration: 25, repeat: Infinity, ease: 'linear' },
                  rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <div className="relative w-full h-full">
                  {/* Brain nodes interconnected */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 360) / 8;
                    const radius = 80;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border-2 border-white/40"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)',
                          boxShadow: `0 0 20px ${styles.glow}`,
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 2 + i * 0.3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: i * 0.2,
                        }}
                      />
                    );
                  })}
                  {/* Center node */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-white/40 backdrop-blur-lg border-2 border-white/50 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      boxShadow: `0 0 30px ${styles.glow}`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>
            </>
          ) : styles.shapeType === 'nature' ? (
            // Zenify: Organic flowing shapes (nature/zen)
            <>
              {/* Flowing organic shapes */}
              <motion.div
                className="absolute inset-0"
                style={{
                  transform: 'translateZ(50px)',
                }}
                animate={{
                  rotateZ: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotateZ: { duration: 30, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                {/* Circular zen shape */}
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border-4 border-white/30 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      boxShadow: `0 0 40px ${styles.glow}`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  {/* Inner circles */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 rounded-full border-2 border-white/20 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        width: `${60 + i * 20}px`,
                        height: `${60 + i * 20}px`,
                        boxShadow: `0 0 ${20 + i * 10}px ${styles.glow}40`,
                      }}
                      animate={{
                        rotate: [0, -360],
                        scale: [1, 0.9, 1],
                      }}
                      transition={{
                        duration: 10 + i * 3,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: i * 1,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </>
          ) : styles.shapeType === 'creative' ? (
            // Aurora: Dynamic music/creativity shapes
            <>
              {/* Musical/creative shapes */}
              <motion.div
                className="absolute inset-0"
                style={{
                  transform: 'translateZ(50px)',
                }}
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 20, -20, 0],
                }}
                transition={{
                  rotateY: { duration: 15, repeat: Infinity, ease: 'linear' },
                  rotateX: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <div className="relative w-full h-full">
                  {/* Central creative burst */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      background: `linear-gradient(135deg, ${styles.particles[0]}, ${styles.particles[1]})`,
                      filter: `drop-shadow(0 0 30px ${styles.glow})`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                      rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    }}
                  />
                  {/* Orbiting creative elements */}
                  {[0, 1, 2, 3].map((i) => {
                    const angle = (i * 360) / 4;
                    return (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-white/40 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          boxShadow: `0 0 15px ${styles.particles[i % styles.particles.length]}`,
                          x: Math.cos((angle * Math.PI) / 180) * 100,
                          y: Math.sin((angle * Math.PI) / 180) * 100,
                        }}
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: i * 0.3,
                        }}
                      />
                    );
                  })}
                </div>
              </motion.div>
            </>
          ) : (
            // Default: Simple cube
            <>
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
            </>
          )}
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

