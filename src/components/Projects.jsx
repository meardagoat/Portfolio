import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaPalette, FaRocket, FaCube, FaBrain, FaLeaf, FaMusic } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiVercel, SiFramer } from 'react-icons/si';
import moodFlowBanner from '../assets/Mood_flow.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Mood Flow Corporate Wellness',
      description: 'Plateforme de bien-être en entreprise conçue pour améliorer la santé mentale et physique des employés. Application web moderne avec une interface intuitive et des fonctionnalités interactives.',
      longDescription: 'Une solution complète de bien-être corporate permettant aux entreprises de prendre soin de leurs employés grâce à des outils de suivi, des programmes personnalisés et une interface utilisateur optimale.',
      image: moodFlowBanner,
      liveUrl: 'https://mood-flow-corporate-wellness.vercel.app/',
      githubUrl: null,
      technologies: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF' },
        { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
      ],
      category: 'Web Development',
      featured: true,
      gradient: 'from-purple-500 via-pink-500 to-orange-500',
    },
    {
      title: 'MindScape',
      description: 'Plateforme immersive d\'auto-découverte et de pleine conscience avec visualisations 3D interactives. Explorez votre esprit et développez votre potentiel grâce à des outils innovants.',
      longDescription: 'Une application révolutionnaire combinant psychologie, méditation et technologie 3D pour vous accompagner dans votre parcours de développement personnel et de bien-être mental.',
      image: null,
      liveUrl: '/mindscape',
      githubUrl: null,
      logo: <FaBrain />,
      logoColor: '#6366f1',
      technologies: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF' },
        { name: 'Spline 3D', icon: <FaCube />, color: '#FFFFFF' },
      ],
      category: 'Interactive Demo',
      featured: false,
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
    },
    {
      title: 'Zenify',
      description: 'Outil de digital detox et relaxation avec environnement 3D apaisant. Trouvez votre équilibre entre technologie et bien-être avec des sessions de méditation guidée.',
      longDescription: 'Une expérience minimaliste et élégante pour vous aider à vous déconnecter du stress quotidien et reconnecter avec votre sérénité intérieure.',
      image: null,
      liveUrl: '/zenify',
      githubUrl: null,
      logo: <FaLeaf />,
      logoColor: '#10b981',
      technologies: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF' },
        { name: 'Spline 3D', icon: <FaCube />, color: '#10B981' },
      ],
      category: 'Interactive Demo',
      featured: false,
      gradient: 'from-emerald-500 via-green-400 to-teal-500',
    },
    {
      title: 'Aurora',
      description: 'Application de focus créatif combinant musique, visualisation 3D et environnement immersif. Atteignez un état de flow optimal pour maximiser votre productivité et créativité.',
      longDescription: 'Une expérience unique alliant design sombre, animations subtiles et scènes 3D pour vous propulser dans un état de concentration et créativité exceptionnel.',
      image: null,
      liveUrl: '/aurora',
      githubUrl: null,
      logo: <FaMusic />,
      logoColor: '#a855f7',
      technologies: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF' },
        { name: 'Spline 3D', icon: <FaCube />, color: '#A855F7' },
      ],
      category: 'Interactive Demo',
      featured: false,
      gradient: 'from-purple-500 via-pink-500 to-cyan-500',
    },
  ];

  return (
    <section id="projets" className="py-20 bg-gradient-to-br from-black via-dark-gray to-black relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border border-primary/30 mb-4 text-sm font-semibold gradient-text"
          >
            <FaCode className="inline mr-2" />
            Mes Projets
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Réalisations & Projets
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Découvrez mes projets de développement web, alliant design moderne et fonctionnalités innovantes
          </p>
        </motion.div>

        {/* Grid interactive pour desktop, liste pour mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              whileHover={{ y: -8 }}
            >
              <div className="bg-dark-gray/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer h-full flex flex-col">
                <div className="relative overflow-hidden h-64 lg:h-72">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300 z-10`}></div>
                  
                  {/* Project Image or Placeholder with Logo */}
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain bg-dark-gray/20"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-80 flex items-center justify-center relative overflow-hidden`}>
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-full h-full" style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                          backgroundSize: '40px 40px'
                        }}></div>
                      </div>
                      {/* Project Logo */}
                      <motion.div
                        className="relative z-10 text-center p-8"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.div
                          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-2xl"
                          style={{ color: project.logoColor }}
                          animate={{
                            boxShadow: [
                              `0 0 20px ${project.logoColor}40`,
                              `0 0 40px ${project.logoColor}60`,
                              `0 0 20px ${project.logoColor}40`,
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <div className="text-4xl sm:text-5xl md:text-6xl">
                            {project.logo}
                          </div>
                        </motion.div>
                        <p className="text-white font-bold text-lg sm:text-xl md:text-2xl">{project.title}</p>
                      </motion.div>
                    </div>
                  )}

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full gradient-bg-interactive text-white text-xs font-bold flex items-center gap-1 glow-effect"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <FaRocket className="text-xs" />
                      Projet Phare
                    </motion.div>
                  )}

                  {/* Hover Overlay - Just visual effect, no buttons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 lg:p-8 flex-grow flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-primary font-semibold text-sm">{project.category}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">
                        <FaPalette className="inline mr-1" />
                        UI/UX Design
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-2xl font-bold gradient-text mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 lg:gap-3 mb-4 lg:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center gap-2 hover:border-white/20 transition-all"
                        whileHover={{ scale: 1.1, y: -3, rotate: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span 
                          className="text-xl"
                          style={{ color: tech.color }}
                        >
                          {tech.icon}
                        </span>
                        <span className="text-gray-300 text-xs lg:text-sm font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 lg:gap-4 pt-4 border-t border-white/10 mt-auto">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith('/') ? undefined : '_blank'}
                        rel={project.liveUrl.startsWith('/') ? undefined : 'noopener noreferrer'}
                        className="px-5 lg:px-6 py-2.5 lg:py-3 rounded-full gradient-bg-interactive text-white font-semibold text-sm lg:text-base flex items-center gap-2 hover:shadow-xl transition-all glow-effect"
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                        {project.category === 'Interactive Demo' ? 'Live Demo' : 'Visiter le site'}
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 lg:px-6 py-2.5 lg:py-3 rounded-full bg-dark-gray/50 border border-white/20 text-white font-semibold text-sm lg:text-base flex items-center gap-2 hover:bg-dark-gray transition-all"
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                        Voir le code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action for more projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Explorez mes projets interactifs et découvrez mes créations</p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuter d'un projet
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

