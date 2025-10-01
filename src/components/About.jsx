import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaBasketballBall, FaMusic, FaCamera, FaUtensils } from 'react-icons/fa';

const About = () => {
  const interests = [
    { icon: <FaBasketballBall />, name: 'Basketball' },
    { icon: <FaMusic />, name: 'Musique' },
    { icon: <FaCamera />, name: 'Photographie' },
    { icon: <FaUtensils />, name: 'Cuisine' },
  ];

  const languages = [
    { name: 'Anglais', level: 'Bilingue', percentage: 95 },
    { name: 'Français', level: 'Langue maternelle', percentage: 100 },
    { name: 'Espagnol', level: 'Intermédiaire', percentage: 60 },
    { name: 'Japonais', level: 'Débutant', percentage: 30 },
  ];

  const awards = [
    { year: '2017', title: 'Meilleur ONG au Sénégal' },
    { year: '2016', title: 'Récompense en coaching de basketball petite catégorie' },
    { year: '2023', title: 'TOEIC - Score de 895' },
  ];

  return (
    <section id="apropos" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">À propos de moi</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Passionné par la technologie et l'innovation, je combine mes compétences en business et en développement 
            pour créer des solutions impactantes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Langues</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-200">{lang.name}</span>
                    <span className="text-gray-500">{lang.level}</span>
                  </div>
                  <div className="w-full bg-dark-gray rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Récompenses</h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      {award.year}
                    </span>
                    <p className="text-gray-200 font-medium">{award.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Centres d'intérêt</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="bg-dark-gray/50 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl text-primary mb-3 flex justify-center">
                  {interest.icon}
                </div>
                <p className="font-semibold text-gray-200">{interest.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

