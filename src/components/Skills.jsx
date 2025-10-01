import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJava, FaPython, 
  FaFigma, FaMailchimp, FaRobot, FaFileWord
} from 'react-icons/fa';
import { 
  SiAdobecreativecloud, SiNotion,
  SiJavascript, SiTailwindcss
} from 'react-icons/si';
import { MdWork } from 'react-icons/md';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Développement',
      skills: [
        { name: 'HTML/CSS', icon: <FaHtml5 />, level: 85 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 75 },
        { name: 'React', icon: <FaReact />, level: 70 },
        { name: 'Java', icon: <FaJava />, level: 65 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80 },
      ],
    },
    {
      title: 'Design & Créativité',
      skills: [
        { name: 'Suite Adobe', icon: <SiAdobecreativecloud />, level: 80 },
        { name: 'Figma', icon: <FaFigma />, level: 75 },
        { name: 'Photographie', icon: <FaHtml5 />, level: 85 },
        { name: 'Prototypage', icon: <FaFigma />, level: 80 },
      ],
    },
    {
      title: 'Outils & Productivité',
      skills: [
        { name: 'Suite Office', icon: <FaFileWord />, level: 90 },
        { name: 'Mailchimp', icon: <FaMailchimp />, level: 75 },
        { name: 'Notion', icon: <SiNotion />, level: 85 },
        { name: 'ERP/CMS', icon: <MdWork />, level: 70 },
      ],
    },
    {
      title: 'Technologies Émergentes',
      skills: [
        { name: 'IA', icon: <FaRobot />, level: 65 },
        { name: 'Automatisations', icon: <FaRobot />, level: 70 },
      ],
    },
  ];

  return (
    <section id="competences" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Compétences</h2>
          <p className="text-gray-600 text-lg">Technologies et outils que je maîtrise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl gradient-text">{skill.icon}</span>
                        <span className="font-semibold text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

