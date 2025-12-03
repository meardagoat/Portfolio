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
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium text-gray-500">[07]</span>
            <span className="text-sm text-gray-500">CONTACT</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Start a Project
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Tell to our manager about the goal. We'll reply with scope and timeline.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 text-gray-900 text-xl">
                  {info.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.value}</p>
              </a>
            ))}
          </div>

          <div className="border border-gray-200 p-12">
            <h3 className="text-2xl font-medium text-gray-900 mb-8">Your Name</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent text-gray-900 placeholder-gray-400"
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
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent text-gray-900 placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              
              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 text-sm">
                  Message sent successfully!
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 text-sm">
                  Error sending message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gray-900 text-white px-8 py-4 font-medium hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-6 text-center">
              Before submitting, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
