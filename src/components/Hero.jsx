import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-dark-gray to-black pt-20 sm:pt-24 md:pt-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Bonjour, je suis{' '}
              <span className="gradient-text text-glow">Kane Abdoul</span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Business & Technology Manager
            </motion.p>
            <motion.p
              className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Étudiant à EPITECH passionné par le développement web, la gestion de projet et l'innovation technologique.
              Expertise en e-commerce, community management et développement full-stack.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="mailto:KaneAbdoulPro1@outlook.com"
                className="gradient-bg-interactive text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl transition-all glow-effect"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.a>
              <motion.a
                href="#apropos"
                className="border-2 border-primary text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-primary hover:text-white transition-all hover:border-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                En savoir plus
              </motion.a>
            </motion.div>
            <motion.div
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a 
                href="mailto:KaneAbdoulPro1@outlook.com" 
                className="text-2xl sm:text-3xl text-gray-200 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
              <motion.a 
                href="tel:0628601413" 
                className="text-2xl sm:text-3xl text-gray-200 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPhone />
              </motion.a>
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl sm:text-3xl text-gray-200 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl sm:text-3xl text-gray-200 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <motion.div
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white/20 shadow-2xl mx-auto"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/profile.jpeg"
                  alt="Kane Abdoul"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Effet de code animé */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-28 h-28 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full border-2 border-white/20"
                animate={{
                  scale: [1, 1.1, 1],
                  borderColor: ['rgba(255,107,53,0.2)', 'rgba(191,90,242,0.3)', 'rgba(10,132,255,0.2)', 'rgba(255,107,53,0.2)'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Symbole </> unifié */}
                <motion.div
                  className="text-5xl font-bold tracking-tighter"
                  style={{
                    background: 'linear-gradient(to right, #FF6B35, #BF5AF2, #0A84FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 15px rgba(191,90,242,0.6))',
                  }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  &lt;/&gt;
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

