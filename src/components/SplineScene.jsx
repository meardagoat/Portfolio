import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { FaCube } from 'react-icons/fa';

const SplineScene = ({ sceneUrl, fallbackGradient = 'from-blue-500 to-purple-600', className = '' }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Si pas d'URL ou erreur, afficher un fallback
  if (!sceneUrl || sceneUrl.includes('placeholder') || error) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${fallbackGradient} ${className}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center p-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="mb-6"
          >
            <FaCube className="text-8xl text-white/50 mx-auto" />
          </motion.div>
          <p className="text-white/70 font-semibold text-lg">Scène 3D à venir</p>
          <p className="text-white/50 text-sm mt-2">Intégration Spline en cours</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {loading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${fallbackGradient}`}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <FaCube className="text-6xl text-white/30" />
          </motion.div>
        </div>
      )}
      <Spline 
        scene={sceneUrl}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        className="w-full h-full"
      />
    </div>
  );
};

export default SplineScene;

