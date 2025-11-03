import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { FaYinYang, FaMountain, FaWind, FaBalanceScale } from 'react-icons/fa';

const Zenify = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const features = [
    {
      icon: <FaMountain />,
      title: 'Digital Detox',
      description: 'Prenez une pause digitale et reconnectez-vous avec vous-même',
    },
    {
      icon: <FaWind />,
      title: 'Respiration guidée',
      description: 'Techniques de méditation et de relaxation pour trouver la paix',
    },
    {
      icon: <FaBalanceScale />,
      title: 'Équilibre de vie',
      description: 'Trouvez l\'harmonie entre technologie et bien-être',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Subtle background waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-0 left-0 w-full h-full opacity-5"
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#10b981" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,171,1152,165.3C1248,160,1344,117,1392,96L1440,74.7L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>
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
                <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-semibold mb-4">
                  Digital Detox & Relaxation
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
                <span className="text-emerald-600">Zenify</span>
                <br />
                Trouvez votre
                <br />
                <span className="text-gray-700">équilibre</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Une expérience immersive de détente digitale. Détachez-vous du stress quotidien 
                et retrouvez votre sérénité avec des outils de méditation guidée.
              </p>

              <motion.button
                className="px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold text-lg flex items-center gap-2 hover:bg-emerald-700 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find your balance
                <FaYinYang className="ml-2" />
              </motion.button>
            </motion.div>

            {/* Right: Spline 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-emerald-200/50 bg-gradient-to-br from-emerald-50 to-white shadow-2xl"
            >
              <Spline 
                scene="https://prod.spline.design/placeholder-scene.splinecode"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Reconnectez-vous avec la nature
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des fonctionnalités conçues pour vous aider à trouver la paix intérieure
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
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-emerald-300 transition-all group"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6 text-2xl text-emerald-600 shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            className="bg-white border-2 border-emerald-200 rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Prêt à trouver votre équilibre ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Commencez votre parcours vers la sérénité et le bien-être mental aujourd'hui.
            </p>
            <motion.button
              className="px-10 py-5 rounded-full bg-emerald-600 text-white font-bold text-xl flex items-center gap-3 mx-auto hover:bg-emerald-700 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find your balance
              <FaBalanceScale className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Zenify;

