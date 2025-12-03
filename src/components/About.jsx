import React from 'react';
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
    <section id="apropos" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium text-gray-500">[02]</span>
            <span className="text-sm text-gray-500">ABOUT</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Passionné par la technologie et l'innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Je combine mes compétences en business et en développement pour créer des solutions impactantes. 
            Étudiant à EPITECH, j'allie expertise technique et vision stratégique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-medium mb-8 text-gray-900">Langues</h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span className="font-medium text-gray-900">{lang.name}</span>
                    <span className="text-gray-500 text-sm">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <motion.div
                      className="bg-gray-900 h-1.5 rounded-full"
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-medium mb-8 text-gray-900">Récompenses</h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-sm text-gray-500 font-medium min-w-[60px]">{award.year}</span>
                    <p className="text-gray-700">{award.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-medium mb-12 text-gray-900">Centres d'intérêt</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 p-8 text-center hover:border-gray-900 transition-colors"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl text-gray-900 mb-4 flex justify-center">
                  {interest.icon}
                </div>
                <p className="font-medium text-gray-700">{interest.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
