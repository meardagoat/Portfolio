import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Bonjour, je suis{' '}
              <span className="gradient-text">Kane Abdoul</span>
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Business & Technology Manager
            </motion.p>
            <motion.p
              className="text-lg text-gray-500 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Étudiant à EPITECH passionné par le développement web, la gestion de projet et l'innovation technologique.
              Expertise en e-commerce, community management et développement full-stack.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="mailto:KaneAbdoulPro1@outlook.com"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-all transform hover:scale-105 shadow-lg"
              >
                Me contacter
              </a>
              <a
                href="#apropos"
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all transform hover:scale-105"
              >
                En savoir plus
              </a>
            </motion.div>
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a href="mailto:KaneAbdoulPro1@outlook.com" className="text-3xl text-gray-200 hover:text-primary transition-colors transform hover:scale-110">
                <FaEnvelope />
              </a>
              <a href="tel:0628601413" className="text-3xl text-gray-200 hover:text-primary transition-colors transform hover:scale-110">
                <FaPhone />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-200 hover:text-primary transition-colors transform hover:scale-110">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-200 hover:text-primary transition-colors transform hover:scale-110">
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl"
                whileHover={{ scale: 1.05 }}
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
                className="absolute -bottom-4 -right-4 w-32 h-32 flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Brackets animés */}
                <motion.div className="relative w-full h-full">
                  {/* < bracket */}
                  <motion.div
                    className="absolute top-0 left-0 text-6xl font-bold"
                    style={{
                      background: 'linear-gradient(to right, #FF6B35, #BF5AF2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 10px rgba(255,107,53,0.5))',
                    }}
                    animate={{
                      x: [-5, 5, -5],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    &lt;
                  </motion.div>
                  
                  {/* /> bracket */}
                  <motion.div
                    className="absolute bottom-0 right-0 text-6xl font-bold"
                    style={{
                      background: 'linear-gradient(to right, #0A84FF, #BF5AF2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 10px rgba(10,132,255,0.5))',
                    }}
                    animate={{
                      x: [5, -5, 5],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    /&gt;
                  </motion.div>
                  
                  {/* Point central qui pulse */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                    style={{
                      background: 'linear-gradient(to right, #FF6B35, #BF5AF2, #0A84FF)',
                      boxShadow: '0 0 20px rgba(191,90,242,0.8)',
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
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

