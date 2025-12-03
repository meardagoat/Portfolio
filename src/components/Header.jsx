import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (item) => {
    const sectionMap = {
      'About': 'apropos',
      'Experience': 'experience',
      'Skills': 'competences',
      'Projects': 'projets',
      'Education': 'formation',
      'Contact': 'contact',
    };
    const id = sectionMap[item] || item.toLowerCase();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl font-medium text-gray-900 cursor-pointer"
            whileHover={{ opacity: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Kane Abdoul
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
