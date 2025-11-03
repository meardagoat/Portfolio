import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaPalette, FaRocket } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiVercel, SiFramer } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'Mood Flow Corporate Wellness',
      description: 'Plateforme de bien-être en entreprise conçue pour améliorer la santé mentale et physique des employés. Application web moderne avec une interface intuitive et des fonctionnalités interactives.',
      longDescription: 'Une solution complète de bien-être corporate permettant aux entreprises de prendre soin de leurs employés grâce à des outils de suivi, des programmes personnalisés et une interface utilisateur optimale.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop',
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
  ];

  return (
    <section id="projets" className="py-20 bg-black relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border border-primary/30 mb-4 text-sm font-semibold gradient-text">
              <FaCode className="inline mr-2" />
              Mes Projets
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Réalisations & Projets
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Découvrez mes projets de développement web, alliant design moderne et fonctionnalités innovantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-dark-gray/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Project Image or Placeholder */}
                  <div 
                    className="w-full h-full bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 flex items-center justify-center"
                    style={{
                      backgroundImage: project.image ? `url(${project.image})` : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {!project.image && (
                      <div className="text-center p-8">
                        <FaRocket className="text-6xl text-white/50 mx-auto mb-4" />
                        <p className="text-white/70 font-semibold">{project.title}</p>
                      </div>
                    )}
                  </div>

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

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full gradient-bg-interactive text-white font-semibold flex items-center gap-2 hover:shadow-xl transition-all glow-effect"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                        Voir le projet
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg text-white font-semibold flex items-center gap-2 hover:bg-white/20 transition-all border border-white/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                        Code source
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary font-semibold text-sm">{project.category}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 text-sm">
                          <FaPalette className="inline mr-1" />
                          UI/UX Design
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      {project.longDescription && (
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center gap-2 hover:border-white/20 transition-all"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span 
                          className="text-xl"
                          style={{ color: tech.color }}
                        >
                          {tech.icon}
                        </span>
                        <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full gradient-bg-interactive text-white font-semibold flex items-center gap-2 hover:shadow-xl transition-all glow-effect"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                        Visiter le site
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-dark-gray/50 border border-white/20 text-white font-semibold flex items-center gap-2 hover:bg-dark-gray transition-all"
                        whileHover={{ scale: 1.05 }}
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
          <p className="text-gray-400 mb-4">D'autres projets arrivent bientôt...</p>
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

