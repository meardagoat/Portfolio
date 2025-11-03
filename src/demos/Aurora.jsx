import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplineScene from '../components/SplineScene';
import { FaMusic, FaPalette, FaRocket, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Aurora = () => {
  const features = [
    {
      icon: <FaMusic />,
      title: 'Flow State Music',
      description: 'Plongez dans un état de concentration maximale avec notre sélection musicale',
      gradient: 'from-purple-500 via-pink-500 to-orange-500',
    },
    {
      icon: <FaPalette />,
      title: 'Creative Focus',
      description: 'Libérez votre créativité avec des environnements visuels inspirants',
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
    },
    {
      icon: <FaRocket />,
      title: 'Productivity Boost',
      description: 'Atteignez des niveaux de productivité exceptionnels en mode flow',
      gradient: 'from-cyan-500 via-blue-500 to-purple-500',
    },
  ];

  // Animated gradient background
  const gradientAnimation = {
    background: 'linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #533483)',
    backgroundSize: '400% 400%',
    animation: 'gradient-shift 15s ease infinite',
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Back to Portfolio Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-purple-500/30 text-white font-semibold flex items-center gap-2 hover:bg-white/20 transition-all"
        >
          <FaArrowLeft />
          Retour au portfolio
        </Link>
      </motion.div>
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            background: 'linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #533483, #1a1a2e)',
            backgroundSize: '400% 400%',
          }}
        />
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-semibold mb-4">
                  Creative Focus Tool
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Aurora
                </span>
                <br />
                <span className="text-white">Enter Your</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Flow State
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Une expérience immersive pour libérer votre créativité et atteindre un état de flow optimal. 
                Combinez musique, visualisation 3D et focus pour des sessions productives exceptionnelles.
              </p>

              <motion.button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-semibold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enter your flow state
                <FaArrowRight />
              </motion.button>
            </motion.div>

            {/* Right: Spline 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-purple-500/30 backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10"
            >
              <SplineScene 
                sceneUrl={null}
                fallbackGradient="from-purple-600 via-pink-600 to-cyan-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              {/* Glowing border effect */}
              <div className="absolute inset-0 border-2 border-purple-500/20 rounded-2xl pointer-events-none animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Libérez votre créativité
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des outils conçus pour vous propulser dans un état de flow optimal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all group"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 text-2xl text-white shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/50 transition-all`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Prêt à entrer dans le flow ?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez un nouveau niveau de créativité et de productivité avec Aurora.
            </p>
            <motion.button
              className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold text-xl flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter your flow state
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Aurora;

