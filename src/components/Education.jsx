import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      year: '2023-2028',
      school: 'EPITECH',
      degree: 'Business et Technology Manager',
      description: 'Formation complète en gestion de projet technologique, développement informatique et management.',
      logo: '/logos/epitech.png',
    },
    {
      year: '2020-2022',
      school: 'ISEMA BUSINESS SCHOOL',
      degree: 'Responsable d\'affaires en agro-alimentaire',
      description: 'Formation en gestion commerciale et management dans le secteur agro-alimentaire.',
      logo: '/logos/isema.png',
    },
    {
      year: '2018-2020',
      school: 'BEM DAKAR',
      degree: 'Première année en Agro business and industry',
      description: 'Fondamentaux du business et de l\'industrie agro-alimentaire.',
      logo: '/logos/bem.png',
    },
    {
      year: '2017-2018',
      school: 'Lycée privé Mikado',
      degree: 'Baccalauréat L2, sciences humaines',
      description: 'Formation générale avec spécialisation en sciences humaines.',
      logo: null,
    },
  ];

  return (
    <section id="formation" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-medium text-gray-500">[06]</span>
            <span className="text-xs sm:text-sm text-gray-500">EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-4 sm:mb-8 leading-tight">
            Formation
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Mon parcours académique et mes diplômes
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-200 pb-6 sm:pb-8 last:border-0"
              whileHover={{ x: 4 }}
            >
              <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-start">
                <div className="w-full md:w-1/4">
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">{edu.year}</span>
                </div>
                <div className="w-full md:w-3/4">
                  <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                    {edu.logo && (
                      <motion.img 
                        src={edu.logo} 
                        alt={`Logo ${edu.school}`}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-1">{edu.school}</h3>
                      <p className="text-gray-600 font-medium text-sm sm:text-base mb-1 sm:mb-2">{edu.degree}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
