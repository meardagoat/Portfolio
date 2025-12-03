import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import moodFlowBanner from '../assets/Mood_flow.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Mood Flow Corporate Wellness',
      description: 'Plateforme de bien-être en entreprise conçue pour améliorer la santé mentale et physique des employés. Application web moderne avec une interface intuitive et des fonctionnalités interactives.',
      image: moodFlowBanner,
      liveUrl: 'https://mood-flow-corporate-wellness.vercel.app/',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    },
    {
      title: 'MindScape',
      description: 'Plateforme immersive d\'auto-découverte et de pleine conscience avec visualisations 3D interactives. Explorez votre esprit et développez votre potentiel grâce à des outils innovants.',
      liveUrl: '/mindscape',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Spline 3D'],
    },
    {
      title: 'Zenify',
      description: 'Outil de digital detox et relaxation avec environnement 3D apaisant. Trouvez votre équilibre entre technologie et bien-être avec des sessions de méditation guidée.',
      liveUrl: '/zenify',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Spline 3D'],
    },
    {
      title: 'Aurora',
      description: 'Application de focus créatif combinant musique, visualisation 3D et environnement immersif. Atteignez un état de flow optimal pour maximiser votre productivité et créativité.',
      liveUrl: '/aurora',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Spline 3D'],
    },
  ];

  return (
    <section id="projets" className="py-20 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-medium text-gray-500">[05]</span>
            <span className="text-xs sm:text-sm text-gray-500">PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-4 sm:mb-8 leading-tight">
            Mes Projets
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Découvrez mes projets de développement web, alliant design moderne et fonctionnalités innovantes
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-200 pb-12 sm:pb-16 last:border-0"
            >
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-3 sm:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith('/') ? undefined : '_blank'}
                      rel={project.liveUrl.startsWith('/') ? undefined : 'noopener noreferrer'}
                      className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-4 transition-all text-sm sm:text-base"
                      whileHover={{ x: 4 }}
                    >
                      Voir le projet
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </div>
                {project.image && (
                  <motion.div
                    className="relative order-1 md:order-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                      />
                      {/* 3D shadow effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
