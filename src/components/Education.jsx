import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBusinessTime, FaSeedling, FaBook } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      year: '2023-2028',
      school: 'EPITECH',
      degree: 'Business et Technology Manager',
      description: 'Formation complète en gestion de projet technologique, développement informatique et management.',
      icon: <FaLaptopCode />,
      color: '#6366f1',
      logo: '/logos/epitech.png',
    },
    {
      year: '2020-2022',
      school: 'ISEMA BUSINESS SCHOOL',
      degree: 'Responsable d\'affaires en agro-alimentaire',
      description: 'Formation en gestion commerciale et management dans le secteur agro-alimentaire.',
      icon: <FaBusinessTime />,
      color: '#10B981',
      logo: null,
    },
    {
      year: '2018-2020',
      school: 'BEM DAKAR',
      degree: 'Première année en Agro business and industry',
      description: 'Fondamentaux du business et de l\'industrie agro-alimentaire.',
      icon: <FaSeedling />,
      color: '#F59E0B',
      logo: null,
    },
    {
      year: '2017-2018',
      school: 'Lycée privé Mikado',
      degree: 'Baccalauréat L2, sciences humaines',
      description: 'Formation générale avec spécialisation en sciences humaines.',
      icon: <FaBook />,
      color: '#8B5CF6',
      logo: null,
    },
  ];

  return (
    <section id="formation" className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Formation</h2>
          <p className="text-gray-600 text-lg">Mon parcours académique et mes diplômes</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8"
            >
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex items-start gap-6"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                  style={{ 
                    backgroundColor: edu.logo ? '#ffffff' : edu.color,
                    boxShadow: `0 4px 14px ${edu.color}40`,
                    border: edu.logo ? '2px solid #e5e7eb' : 'none'
                  }}
                  whileHover={{ rotate: edu.logo ? 0 : 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {edu.logo ? (
                    <img 
                      src={edu.logo} 
                      alt={`Logo ${edu.school}`}
                      className="w-14 h-14 object-contain p-1"
                    />
                  ) : (
                    <span className="text-2xl text-white">{edu.icon}</span>
                  )}
                </motion.div>
                <div className="flex-grow">
                  <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {edu.year}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{edu.school}</h3>
                  <h4 className="text-lg font-semibold mb-3" style={{ color: edu.color }}>{edu.degree}</h4>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
