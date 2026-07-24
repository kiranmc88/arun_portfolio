import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCpu, FiFeather, FiLayers } from 'react-icons/fi';

const achievements = [
  {
    icon: <FiAward className="w-8 h-8 text-amber-500" />,
    title: '97% in SSLC',
    category: 'Academic Milestone',
    desc: 'Scored outstanding grades in all board subjects in 10th Standard. Recognized as a school-wide top-performing student.'
  },
  {
    icon: <FiBookOpen className="w-8 h-8 text-violet-500" />,
    title: 'Academic Excellence',
    category: 'Consistent Performance',
    desc: 'Maintained a track record of top grades throughout schooling, demonstrating strong discipline and deep mathematical aptitude.'
  },
  {
    icon: <FiLayers className="w-8 h-8 text-emerald-500" />,
    title: 'Quick Learner',
    category: 'Cognitive Ability',
    desc: 'Possesses a strong ability to digest complex scientific concepts quickly, from intricate biology diagrams to advanced calculus theories.'
  },
  {
    icon: <FiFeather className="w-8 h-8 text-pink-500" />,
    title: 'Creative Thinker',
    category: 'Problem Solving',
    desc: 'Always looking for lateral and out-of-the-box approaches to solve algebraic equations and real-world technology problems.'
  },
  {
    icon: <FiCpu className="w-8 h-8 text-indigo-500" />,
    title: 'Future IIT Aspirant',
    category: 'High Ambition',
    desc: 'Committed to clearing one of the toughest examinations in the world (JEE) to qualify for a seat in computer science at top IIT colleges.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-[#07070d]/30">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-indigo-500 dark:text-indigo-400 uppercase">
            Recognitions
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Honors &amp; Core Strengths
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-card glow-border flex flex-col justify-between h-full group"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10 mb-6 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500/80 dark:text-indigo-400/80">
                  {item.category}
                </span>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-light text-slate-500 dark:text-slate-400 leading-relaxed mt-4">
                  {item.desc}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="w-full h-[1px] bg-slate-200 dark:bg-white/10 mt-6 group-hover:bg-indigo-500/50 transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
