import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'KaneAbdoulPro1@outlook.com',
      link: 'mailto:KaneAbdoulPro1@outlook.com',
    },
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      value: '06.28.60.14.13',
      link: 'tel:0628601413',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Adresse',
      value: '2 Rue Jean Anouilh, 78420, Carrière Sur Seine',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Me contacter</h2>
          <p className="text-gray-600 text-lg">N'hésitez pas à me contacter pour discuter de vos projets</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="block"
              >
                <motion.div
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-5xl gradient-text mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.value}</p>
                </motion.div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white text-center shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">Travaillons ensemble !</h3>
            <p className="text-lg mb-6 opacity-90">
              Je suis toujours ouvert aux nouvelles opportunités et collaborations.
              Que ce soit pour un stage, un projet ou simplement pour échanger, n'hésitez pas !
            </p>
            <div className="flex gap-4 justify-center">
              <motion.a
                href="mailto:KaneAbdoulPro1@outlook.com"
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Envoyer un email
              </motion.a>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

