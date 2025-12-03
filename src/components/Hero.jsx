import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      rotateX.set(y * 10);
      rotateY.set(x * 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rotateX, rotateY]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20 sm:pt-24 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-6 sm:mb-8"
            >
              <span className="text-xs sm:text-sm font-medium text-gray-500">[01]</span>
              <span className="text-xs sm:text-sm text-gray-500">BUSINESS & TECHNOLOGY MANAGER</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Bonjour, je suis{' '}
              <span className="font-normal">Kane Abdoul</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Business & Technology Manager
              </span>
            </motion.h1>

            <motion.div
              className="flex items-center gap-4 text-xs sm:text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>[EN SAVOIR PLUS]</span>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Étudiant à EPITECH passionné par le développement web, la gestion de projet et l'innovation technologique. 
              Expertise en e-commerce, community management et développement full-stack.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="mailto:KaneAbdoulPro1@outlook.com"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Me contacter
              </motion.a>
              <motion.a
                href="#apropos"
                className="px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                En savoir plus
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 sm:gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
              >
                <FaGithub className="text-lg sm:text-xl" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </motion.a>
              <motion.a
                href="mailto:KaneAbdoulPro1@outlook.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
              >
                <FaEnvelope className="text-lg sm:text-xl" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Image with 3D effect */}
          <motion.div
            ref={containerRef}
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              className="relative w-full aspect-square max-w-md lg:max-w-lg mx-auto"
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src="/images/profile.jpeg"
                  alt="Kane Abdoul"
                  className="w-full h-full object-cover"
                  style={{
                    transform: 'translateZ(20px)',
                  }}
                />
                {/* 3D floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-lg opacity-20"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    transform: 'translateZ(30px)',
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-full opacity-20"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  style={{
                    transform: 'translateZ(25px)',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
