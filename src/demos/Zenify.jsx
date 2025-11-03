import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplineScene from '../components/SplineScene';
import { FaYinYang, FaMountain, FaWind, FaBalanceScale, FaArrowLeft, FaLeaf } from 'react-icons/fa';

const Zenify = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const features = [
    {
      icon: <FaMountain />,
      title: 'Digital Detox',
      description: 'Prenez une pause digitale et reconnectez-vous avec vous-même dans un environnement apaisant.',
      iconClass: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: <FaWind />,
      title: 'Respiration guidée',
      description: 'Techniques de méditation et de relaxation pour trouver la paix intérieure.',
      iconClass: 'bg-teal-100 text-teal-600',
    },
    {
      icon: <FaBalanceScale />,
      title: 'Équilibre de vie',
      description: 'Trouvez l\'harmonie entre technologie et bien-être avec des outils simples et efficaces.',
      iconClass: 'bg-green-100 text-green-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg"
        >
          <FaArrowLeft />
          Retour
        </Link>
      </motion.div>

      {/* Minimalist floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-0 left-0 w-full h-full opacity-5"
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#10b981" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,171,1152,165.3C1248,160,1344,117,1392,96L1440,74.7L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>
        {/* Minimal dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-400/30"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Hero Section - Centered minimalist */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                Digital Detox & Relaxation
              </span>
            </motion.div>

            {/* Title - Large and centered */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-7xl md:text-9xl font-light leading-none tracking-tight"
            >
              <span className="text-emerald-600 font-normal">Zenify</span>
              <br />
              <span className="text-gray-800">Trouvez votre</span>
              <br />
              <span className="text-emerald-500">équilibre</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Une expérience minimaliste de détente digitale. Détachez-vous du stress quotidien et retrouvez votre sérénité.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center gap-4"
            >
              <motion.button
                className="px-10 py-4 rounded-full bg-emerald-600 text-white font-medium text-lg flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaYinYang className="mr-2" />
                Find your balance
              </motion.button>
            </motion.div>
          </div>

          {/* 3D Scene - Centered below */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ opacity }}
            className="relative mt-20 max-w-4xl mx-auto"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-emerald-200/50 bg-gradient-to-br from-emerald-50 to-white shadow-xl">
              <SplineScene 
                sceneUrl={null}
                theme="zenify"
                fallbackGradient="from-emerald-400 via-green-300 to-teal-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Vertical cards with lots of space */}
      <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-800">
              Reconnectez-vous
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Des fonctionnalités simples pour votre bien-être
            </p>
          </motion.div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 space-y-6">
                  <div className={`w-24 h-24 rounded-full ${feature.iconClass} flex items-center justify-center text-4xl shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-4xl font-light text-gray-800">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-light max-w-md">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-1 h-64 bg-white border border-gray-200 rounded-2xl shadow-sm"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra minimal */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
              <FaLeaf className="text-6xl text-emerald-600" />
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-800">
              Trouvez votre paix
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-xl mx-auto leading-relaxed">
              Commencez votre parcours vers la sérénité et le bien-être mental aujourd'hui.
            </p>
            <motion.button
              className="px-12 py-5 rounded-full bg-emerald-600 text-white font-medium text-lg flex items-center gap-3 mx-auto hover:bg-emerald-700 transition-all shadow-lg"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaBalanceScale className="ml-2" />
              Find your balance
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Zenify;
