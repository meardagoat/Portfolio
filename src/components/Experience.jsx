import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      year: '2025',
      title: 'Stage chez GAYA Bike',
      role: 'Assistant E-commerce et digital',
      description: 'Gestion des opérations e-commerce et marketing digital pour une entreprise innovante dans le secteur du vélo.',
    },
    {
      year: '2023-2024',
      title: 'B&B Hotel Paris Malakoff',
      role: 'Réceptionniste polyvalent',
      description: 'Accueil et service client, gestion des réservations, coordination avec les différents services de l\'hôtel.',
    },
    {
      year: '2022-2023',
      title: 'DPL International',
      role: 'Employé échelon 1',
      description: 'Qualité, préparateur de commande et gestion d\'inventaire dans un environnement international.',
    },
    {
      year: '2021-2022',
      title: 'MIAM REPUBLIQUE',
      role: 'Community Manager',
      description: 'Gestion des réseaux sociaux, création de campagnes marketing, co-réalisation des dossiers de partenariats, et création de supports de communication.',
    },
    {
      year: '2020-2021',
      title: 'EUROLIBRE SERVICES',
      role: 'Stagiaire',
      description: 'Étiquetage, mise en rayon de produits et vérification DLU et DDM.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Expériences professionnelles</h2>
          <p className="text-gray-600 text-lg">Mon parcours professionnel et mes réalisations</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary z-0"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                    whileHover={{ scale: 1.03 }}
                  >
                    <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-primary font-semibold mb-3">{exp.role}</h4>
                    <p className="text-gray-600">{exp.description}</p>
                  </motion.div>
                </div>

                <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0 relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaBriefcase className="text-xl" />
                  </motion.div>
                </div>

                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

