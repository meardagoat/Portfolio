import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiVercel, SiFramer } from 'react-icons/si';
import { FaCube, FaBrain, FaLeaf, FaMusic } from 'react-icons/fa';
import moodFlowBanner from '../assets/Mood_flow.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Mood Flow Corporate Wellness',
      description: 'Plateforme de bien-être en entreprise conçue pour améliorer la santé mentale et physique des employés.',
      image: moodFlowBanner,
      liveUrl: 'https://mood-flow-corporate-wellness.vercel.app/',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    },
    {
      title: 'MindScape',
      description: 'Plateforme immersive d\'auto-découverte et de pleine conscience avec visualisations 3D interactives.',
      liveUrl: '/mindscape',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Spline 3D'],
    },
    {
      title: 'Zenify',
      description: 'Outil de digital detox et relaxation avec environnement 3D apaisant.',
      liveUrl: '/zenify',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Spline 3D'],
    },
    {
      title: 'Aurora',
      description: 'Application de focus créatif combinant musique, visualisation 3D et environnement immersif.',
      liveUrl: '/aurora',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Spline 3D'],
    },
  ];

  return (
    <section id="projets" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium text-gray-500">[05]</span>
            <span className="text-sm text-gray-500">PROJECTS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Featured Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Recent launches with real outcomes. Explore the brief, the system we built, and the impact.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-200 pb-16 last:border-0"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium"
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
                      className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-4 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      View Project
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </div>
                {project.image && (
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
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
