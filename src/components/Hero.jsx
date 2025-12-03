import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-sm font-medium text-gray-500">[01]</span>
              <span className="text-sm text-gray-500">DIGITAL CREATIVE</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              From strategy to launch we deliver fast, accessible sites and clear brands with{' '}
              <span className="font-normal">Growth-driven results</span>
            </motion.h1>

            <motion.div
              className="flex items-center gap-4 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>[MORE ABOUT]</span>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              We're a senior creative digital agency focused on clarity and performance. We align strategy, brand, and web into modular systems that ship on time and scale.
            </motion.p>

            <motion.div
              className="flex gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="mailto:KaneAbdoulPro1@outlook.com"
                className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
              </motion.a>
              <motion.a
                href="#apropos"
                className="px-6 py-3 border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="mailto:KaneAbdoulPro1@outlook.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaEnvelope className="text-xl" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <img
                src="/images/profile.jpeg"
                alt="Kane Abdoul"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
