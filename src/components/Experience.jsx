import React from 'react';
import { motion } from 'framer-motion';
import { FaBiking, FaHotel, FaBox, FaUtensils, FaShoppingCart } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      year: '2025',
      title: 'Stage chez GAYA Bike',
      role: 'Assistant E-commerce et digital',
      description: 'Gestion des opérations e-commerce et marketing digital pour une entreprise innovante dans le secteur du vélo.',
      icon: <FaBiking />,
      color: '#10B981',
      logo: '/logos/gayabike.png',
    },
    {
      year: '2023-2024',
      title: 'B&B Hotel Paris Malakoff',
      role: 'Réceptionniste polyvalent',
      description: 'Accueil et service client, gestion des réservations, coordination avec les différents services de l\'hôtel.',
      icon: <FaHotel />,
      color: '#F59E0B',
      logo: '/logos/bbhotel.png',
    },
    {
      year: '2022-2023',
      title: 'DPL International',
      role: 'Employé échelon 1',
      description: 'Qualité, préparateur de commande et gestion d\'inventaire dans un environnement international.',
      icon: <FaBox />,
      color: '#3B82F6',
      logo: '/logos/dpl.png',
    },
    {
      year: '2021-2022',
      title: 'MIAM REPUBLIQUE',
      role: 'Community Manager',
      description: 'Gestion des réseaux sociaux, création de campagnes marketing, co-réalisation des dossiers de partenariats, et création de supports de communication.',
      icon: <FaUtensils />,
      color: '#EF4444',
      logo: '/logos/miam.png',
    },
    {
      year: '2020-2021',
      title: 'EUROLIBRE SERVICES',
      role: 'Stagiaire',
      description: 'Étiquetage, mise en rayon de produits et vérification DLU et DDM.',
      icon: <FaShoppingCart />,
      color: '#8B5CF6',
      logo: null,
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-medium text-gray-500">[03]</span>
            <span className="text-xs sm:text-sm text-gray-500">EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-4 sm:mb-8 leading-tight">
            Expériences professionnelles
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Mon parcours professionnel et mes réalisations
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
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
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">{exp.year}</span>
                </div>
                <div className="w-full md:w-3/4">
                  <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                    {exp.logo ? (
                      <motion.img 
                        src={exp.logo} 
                        alt={`Logo ${exp.title}`}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    ) : (
                      <motion.div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-lg sm:text-xl"
                        style={{ backgroundColor: exp.color }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {exp.icon}
                      </motion.div>
                    )}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-gray-600 font-medium text-sm sm:text-base">{exp.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
