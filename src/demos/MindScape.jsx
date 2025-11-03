import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplineScene from '../components/SplineScene';
import { FaLeaf, FaBrain, FaHeart, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const MindScape = () => {
  const features = [
    {
      icon: <FaBrain />,
      title: 'Self-Discovery',
      description: 'Explorez votre esprit et découvrez votre véritable potentiel',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: <FaHeart />,
      title: 'Mindfulness',
      description: 'Pratiquez la pleine conscience avec des exercices guidés',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <FaLeaf />,
      title: 'Growth Journey',
      description: 'Suivez votre progression vers une meilleure version de vous',
      gradient: 'from-blue-600 to-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Back to Portfolio Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold flex items-center gap-2 hover:bg-white/20 transition-all"
        >
          <FaArrowLeft />
          Retour au portfolio
        </Link>
      </motion.div>
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-4">
                  Self-Discovery Platform
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  MindScape
                </span>
                <br />
                <span className="text-white">Your Journey</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Begins Here
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Une application révolutionnaire pour l'auto-découverte et la pleine conscience. 
                Explorez votre esprit avec des outils interactifs et des visualisations 3D immersives.
              </p>

              <motion.button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start your journey
                <FaArrowRight />
              </motion.button>
            </motion.div>

            {/* Right: Spline 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10"
            >
              <SplineScene 
                sceneUrl={null}
                theme="mindscape"
                fallbackGradient="from-blue-500 via-purple-600 to-indigo-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
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
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Découvrez vos forces
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des fonctionnalités conçues pour vous accompagner dans votre développement personnel
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
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all group"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 text-2xl text-white shadow-lg group-hover:shadow-xl transition-all`}>
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
            className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Prêt à commencer ?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de personnes sur leur chemin vers l'auto-découverte et le bien-être mental.
            </p>
            <motion.button
              className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-xl flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start your journey
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MindScape;

