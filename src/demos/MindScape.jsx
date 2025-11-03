import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplineScene from '../components/SplineScene';
import { FaBrain, FaHeart, FaLeaf, FaArrowRight, FaArrowLeft, FaSpinner } from 'react-icons/fa';

const MindScape = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      rotateX.set(y);
      rotateY.set(x);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rotateX, rotateY]);

  const features = [
    {
      icon: <FaBrain />,
      title: 'Self-Discovery',
      description: 'Explorez votre esprit et découvrez votre véritable potentiel à travers des exercices guidés personnalisés.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: <FaHeart />,
      title: 'Mindfulness',
      description: 'Pratiquez la pleine conscience avec des sessions de méditation adaptées à votre rythme.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <FaLeaf />,
      title: 'Growth Journey',
      description: 'Suivez votre progression avec des outils de tracking et visualisation de votre évolution.',
      gradient: 'from-blue-600 to-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 text-white overflow-hidden relative">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-blue-400/30 text-white font-semibold flex items-center gap-2 hover:bg-blue-500/20 transition-all"
        >
          <FaArrowLeft />
          Retour
        </Link>
      </motion.div>

      {/* Floating organic shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section - Asymmetrical organic layout */}
      <section className="relative z-10 min-h-screen flex items-center px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left: Text with organic curves */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-3 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block"
              >
                <span className="px-5 py-2 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-sm font-semibold backdrop-blur-sm">
                  <FaSpinner className="inline mr-2 animate-spin" />
                  Self-Discovery Platform
                </span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold leading-[1.1]">
                <motion.span
                  className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
                  animate={{ filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Mind
                </motion.span>
                <motion.span
                  className="block text-white"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Scape
                </motion.span>
              </h1>

              <motion.p
                className="text-xl md:text-2xl text-blue-200 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Plongez dans une expérience immersive d'auto-découverte. Explorez votre esprit, développez votre pleine conscience et transformez votre bien-être mental.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start your journey
                  <FaArrowRight />
                </motion.button>
                <motion.button
                  className="px-8 py-4 rounded-full border-2 border-blue-400/50 text-blue-300 font-semibold hover:bg-blue-500/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right: 3D Scene with parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="lg:col-span-2 relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border-2 border-blue-400/30 backdrop-blur-xl">
                <SplineScene 
                  sceneUrl={null}
                  theme="mindscape"
                  fallbackGradient="from-blue-500 via-purple-600 to-indigo-700"
                />
                {/* Organic overlay shapes */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-10 right-10 w-32 h-32 border-2 border-blue-400/30 rounded-full"
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-10 left-10 w-24 h-24 border-2 border-purple-400/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1], rotate: [360, 180, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section - Side scrolling */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Votre parcours
              </span>
              <span className="text-white block">commence ici</span>
            </h2>
          </motion.div>

          {/* Horizontal scrolling cards */}
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`min-w-[350px] md:min-w-[400px] p-8 rounded-3xl border-2 cursor-pointer transition-all ${
                  activeFeature === index 
                    ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-blue-400/60 scale-105' 
                    : 'bg-white/5 border-blue-400/20 hover:border-blue-400/40'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 text-3xl text-white shadow-2xl`}
                  animate={activeFeature === index ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 1 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-blue-200 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Circular design */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Circular background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-full h-full max-w-2xl max-h-2xl rounded-full border-4 border-blue-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-full h-full max-w-xl max-h-xl rounded-full border-2 border-purple-400/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            
            <div className="relative bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-2xl border-2 border-blue-400/30 rounded-3xl p-16 text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Prêt à explorer votre esprit ?
                </span>
              </h2>
              <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Rejoignez une communauté de personnes en quête d'auto-découverte et de bien-être mental.
              </p>
              <motion.button
                className="px-12 py-5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-xl flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start your journey
                <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MindScape;
