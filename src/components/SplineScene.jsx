import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Animated3DScene from './Animated3DScene';

// Lazy load Spline pour améliorer les performances
const Spline = lazy(() => import('@splinetool/react-spline'));

const SplineScene = ({ sceneUrl, theme = 'mindscape', fallbackGradient = 'from-blue-500 to-purple-600', className = '' }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Si pas d'URL ou erreur, afficher l'animation 3D CSS
  if (!sceneUrl || sceneUrl.includes('placeholder') || error) {
    return <Animated3DScene theme={theme} className={className} />;
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {loading && <Animated3DScene theme={theme} className="absolute inset-0" />}
      <Suspense fallback={<Animated3DScene theme={theme} className="absolute inset-0" />}>
        <Spline 
          scene={sceneUrl}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
};

export default SplineScene;

