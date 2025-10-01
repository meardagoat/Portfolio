import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xdkozqkz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Me contacter</h2>
          <p className="text-gray-300 text-lg">N'hésitez pas à me contacter pour discuter de vos projets</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Cartes de contact avec hauteur fixe */}
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
                  className="bg-dark-gray/30 backdrop-blur-lg border border-white/10 p-6 rounded-2xl text-center hover:shadow-xl transition-shadow h-48 flex flex-col items-center justify-center border-2 border-transparent hover:border-primary"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-primary via-accent to-secondary rounded-full flex items-center justify-center mb-4 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-3xl text-white">
                      {info.icon}
                    </span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-gray-300 text-sm break-words">{info.value}</p>
                </motion.div>
              </motion.a>
            ))}
          </div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-gray/30 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Envoyez-moi un message</h3>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-200 font-semibold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-200 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-200 font-semibold mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-200 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center font-semibold">
                  ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
              )}
              
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center font-semibold">
                  ❌ Erreur lors de l'envoi. Veuillez réessayer ou m'envoyer un email directement.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-primary via-accent to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
              >
                {status === 'sending' ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Section appel à l'action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary via-accent to-secondary p-8 rounded-2xl text-white text-center shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">Travaillons ensemble !</h3>
            <p className="text-lg mb-6 opacity-90">
              Je suis toujours ouvert aux nouvelles opportunités et collaborations.
              Que ce soit pour un stage, un projet ou simplement pour échanger, n'hésitez pas !
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                href="mailto:KaneAbdoulPro1@outlook.com"
                className="bg-dark-gray/50 text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="inline mr-2" />
                Email direct
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
                  className="bg-dark-gray/50 text-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-gray/50 text-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all"
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
