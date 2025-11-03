import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6 text-white">Page non trouvée</h2>
        <p className="text-gray-300 text-lg mb-8">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-4 rounded-full gradient-bg-interactive text-white font-semibold flex items-center gap-2 hover:shadow-xl transition-all glow-effect"
          >
            <FaHome />
            Retour à l'accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold flex items-center gap-2 hover:bg-primary hover:text-white transition-all"
          >
            <FaArrowLeft />
            Retour
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;

