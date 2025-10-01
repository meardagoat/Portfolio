import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJava, FaPython, 
  FaFigma, FaMailchimp, FaRobot, FaFileWord, FaCamera
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
        { name: 'HTML/CSS', icon: <FaHtml5 />, level: 85, color: '#E34F26' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 75, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact />, level: 70, color: '#61DAFB' },
        { name: 'Java', icon: <FaJava />, level: 65, color: '#007396' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80, color: '#06B6D4' },
      ],
    },
    {
      title: 'Design & Créativité',
      skills: [
        { name: 'Suite Adobe', icon: <SiAdobecreativecloud />, level: 80, color: '#FF0000' },
        { name: 'Figma', icon: <FaFigma />, level: 75, color: '#F24E1E' },
        { name: 'Photographie', icon: <FaCamera />, level: 85, color: '#6366f1' },
        { name: 'Prototypage', icon: <FaFigma />, level: 80, color: '#0ACF83' },
      ],
    },
    {
      title: 'Outils & Productivité',
      skills: [
        { name: 'Suite Office', icon: <FaFileWord />, level: 90, color: '#185ABD' },
        { name: 'Mailchimp', icon: <FaMailchimp />, level: 75, color: '#FFE01B' },
        { name: 'Notion', icon: <SiNotion />, level: 85, color: '#FFFFFF' },
        { name: 'ERP/CMS', icon: <MdWork />, level: 70, color: '#6366f1' },
      ],
    },
    {
      title: 'Technologies Émergentes',
      skills: [
        { name: 'IA', icon: <FaRobot />, level: 65, color: '#8B5CF6' },
        { name: 'Automatisations', icon: <FaRobot />, level: 70, color: '#6366f1' },
      ],
    },
  ];

  return (
    <section id="competences" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Compétences</h2>
          <p className="text-gray-300 text-lg">Technologies et outils que je maîtrise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-dark-gray/30 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <motion.span 
                          className="text-3xl" 
                          style={{ 
                            color: skill.color || '#6366f1',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                          }}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="font-semibold text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-gray/50 rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-primary via-accent to-secondary h-2.5 rounded-full"
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

