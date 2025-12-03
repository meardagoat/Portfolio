import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

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
      value: '78420, Carrière Sur Seine',
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
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-medium text-gray-500">[07]</span>
            <span className="text-xs sm:text-sm text-gray-500">CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-4 sm:mb-8 leading-tight">
            Me contacter
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute collaboration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-gray-900 text-lg sm:text-xl">
                  {info.icon}
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2">{info.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm break-words">{info.value}</p>
              </a>
            ))}
          </div>

          <div className="border border-gray-200 p-6 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-6 sm:mb-8">Votre nom</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Votre email"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Sujet"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Message"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent text-gray-900 placeholder-gray-400 resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              
              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 text-sm">
                  Message envoyé avec succès !
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 text-sm">
                  Erreur lors de l'envoi. Veuillez réessayer.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-sm sm:text-base"
              >
                {status === 'sending' ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    Envoyer le message
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 sm:mt-6 text-center">
              En soumettant ce formulaire, vous acceptez nos Conditions d'utilisation et notre Politique de confidentialité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
