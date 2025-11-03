import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplineScene from '../components/SplineScene';
import { FaMusic, FaPalette, FaRocket, FaArrowRight, FaArrowLeft, FaBolt } from 'react-icons/fa';

const Aurora = () => {
  const [activeTab, setActiveTab] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const features = [
    {
      icon: <FaMusic />,
      title: 'Flow State Music',
      description: 'Plongez dans un état de concentration maximale avec notre sélection musicale immersive',
      gradient: 'from-purple-500 via-pink-500 to-orange-500',
    },
    {
      icon: <FaPalette />,
      title: 'Creative Focus',
      description: 'Libérez votre créativité avec des environnements visuels dynamiques et inspirants',
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
    },
    {
      icon: <FaRocket />,
      title: 'Productivity Boost',
      description: 'Atteignez des niveaux de productivité exceptionnels en mode flow continu',
      gradient: 'from-cyan-500 via-blue-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-purple-500/30 text-white font-semibold flex items-center gap-2 hover:bg-purple-500/20 transition-all"
        >
          <FaArrowLeft />
          Retour
        </Link>
      </motion.div>

      {/* Dynamic animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            background: 'linear-gradient(-45deg, #0a0a0f, #1a0a2e, #16213e, #0f3460, #533483, #0a0a0f)',
            backgroundSize: '400% 400%',
          }}
        />
        {/* Energetic glowing orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 2) * 50}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(168, 85, 247, 0.4)' : i % 3 === 1 ? 'rgba(236, 72, 153, 0.4)' : 'rgba(6, 182, 212, 0.4)'
              }, transparent)`,
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.3, 0.7, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}
        {/* Geometric grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Hero Section - Dynamic split screen */}
      <section className="relative z-10 min-h-screen flex items-center px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Dynamic text */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-5 py-2 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-sm font-semibold backdrop-blur-sm flex items-center gap-2">
                  <FaBolt className="animate-pulse" />
                  Creative Focus Tool
                </span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9]">
                <motion.span
                  className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #a855f7, #ec4899, #06b6d4, #a855f7)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Aurora
                </motion.span>
                <span className="block text-white">Enter Your</span>
                <motion.span
                  className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  animate={{ 
                    filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Flow State
                </motion.span>
              </h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Une expérience immersive pour libérer votre créativité. Combinez musique, visualisation 3D et focus pour des sessions productives exceptionnelles.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enter flow state
                  <FaArrowRight />
                </motion.button>
                <motion.button
                  className="px-8 py-4 rounded-full border-2 border-purple-400/50 text-purple-300 font-semibold hover:bg-purple-500/20 transition-all"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch demo
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right: 3D Scene with energetic effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border-2 border-purple-500/40 backdrop-blur-xl">
                <SplineScene 
                  sceneUrl={null}
                  theme="aurora"
                  fallbackGradient="from-purple-600 via-pink-600 to-cyan-600"
                />
                {/* Energetic border glow */}
                <motion.div
                  className="absolute inset-0 border-2 border-purple-500/30 rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(168, 85, 247, 0.3)',
                      '0 0 60px rgba(236, 72, 153, 0.4)',
                      '0 0 30px rgba(6, 182, 212, 0.3)',
                      '0 0 30px rgba(168, 85, 247, 0.3)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Tabbed interface */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Libérez
              </span>
              <span className="text-white block">votre créativité</span>
            </h2>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {features.map((feature, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white/5 border border-purple-500/30 text-gray-300 hover:border-purple-400/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature.title}
              </motion.button>
            ))}
          </div>

          {/* Active Feature Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${features[activeTab].gradient} flex items-center justify-center mb-8 text-4xl text-white shadow-2xl`}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  {features[activeTab].icon}
                </motion.div>
                <h3 className="text-4xl font-black mb-6 text-white">{features[activeTab].title}</h3>
                <p className="text-xl text-gray-300 leading-relaxed">{features[activeTab].description}</p>
              </div>
              <div className="h-64 bg-black/30 rounded-2xl border border-purple-500/20"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Energetic design */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(45deg, #a855f7, #ec4899, #06b6d4, #a855f7)',
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative bg-black/80 backdrop-blur-2xl border-2 border-purple-500/40 rounded-3xl p-16 text-center">
              <motion.h2
                className="text-5xl md:text-7xl font-black mb-8"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #a855f7, #ec4899, #06b6d4, #a855f7)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Prêt à entrer dans le flow ?
              </motion.h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Découvrez un nouveau niveau de créativité et de productivité avec Aurora.
              </p>
              <motion.button
                className="px-12 py-5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-black text-xl flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Enter your flow state
                <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Aurora;
