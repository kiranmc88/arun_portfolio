import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiCpu, FiMessageSquare, FiTrendingUp, FiUserCheck, FiZap } from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa';
import { MdOutlineLightbulb } from 'react-icons/md';

const skills = [
  {
    name: 'Problem Solving',
    icon: <FaBrain className="w-6 h-6 text-indigo-500" />,
    desc: 'Analyzing mathematical, scientific, or technological problems to identify logical, step-by-step structural answers.'
  },
  {
    name: 'Smart Work',
    icon: <FiZap className="w-6 h-6 text-amber-500" />,
    desc: 'Prioritizing high-impact tasks, utilizing smart time-blocking methods, and staying highly organized over raw grind.'
  },
  {
    name: 'Critical Thinking',
    icon: <FiCpu className="w-6 h-6 text-emerald-500" />,
    desc: 'Evaluating data, theories, and ideas objectively to construct well-reasoned answers and avoid common errors.'
  },
  {
    name: 'Leadership',
    icon: <FiUserCheck className="w-6 h-6 text-violet-500" />,
    desc: 'Guiding study teams, taking ownership of academic initiatives, and inspiring peers with high standards and positive energy.'
  },
  {
    name: 'Quick Learning',
    icon: <FiTrendingUp className="w-6 h-6 text-blue-500" />,
    desc: 'Synthesizing complex technical blueprints, scientific charts, and equations in short periods.'
  },
  {
    name: 'Creativity',
    icon: <MdOutlineLightbulb className="w-6 h-6 text-pink-500" />,
    desc: 'Envisioning innovative tech architectures, lateral shortcuts in math proofing, and smart designs.'
  },
  {
    name: 'Time Management',
    icon: <FiClock className="w-6 h-6 text-rose-500" />,
    desc: 'Balancing rigorous JEE coaching classes, PUC college curricula, personal coding hobbies, and health.'
  },
  {
    name: 'Communication',
    icon: <FiMessageSquare className="w-6 h-6 text-cyan-500" />,
    desc: 'Presenting complicated concepts or projects clearly, collaborating effectively, and writing precise summaries.'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-indigo-500 dark:text-indigo-400 uppercase">
            Strengths
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Core Competencies &amp; Skills
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-2xl glass-card flex flex-col items-start hover:shadow-lg hover:border-indigo-500/30 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-5">
                {skill.icon}
              </div>

              <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2">
                {skill.name}
              </h3>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
