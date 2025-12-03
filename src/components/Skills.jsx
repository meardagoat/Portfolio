import React from 'react';
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
        { name: 'Notion', icon: <SiNotion />, level: 85, color: '#F5F5F7' },
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
    <section id="competences" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium text-gray-500">[04]</span>
            <span className="text-sm text-gray-500">SKILLS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Compétences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Technologies et outils que je maîtrise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                        <span className="font-medium text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        className="bg-gray-900 h-1.5 rounded-full"
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
