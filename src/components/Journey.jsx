import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiCircle, FiLoader } from 'react-icons/fi';

const timelineEvents = [
  {
    year: '2026',
    title: 'Completed 10th Standard',
    status: 'completed',
    icon: <FiCheckCircle className="w-5 h-5 text-emerald-500" />,
    bullets: [
      'Scored an excellent 97% in SSLC board exams',
      'Awarded for academic brilliance and consistency',
      'Built foundational strength in Mathematics & Science'
    ]
  },
  {
    year: '2026 (Current)',
    title: 'Started PUC & JEE Prep',
    status: 'in-progress',
    icon: <FiLoader className="w-5 h-5 text-indigo-500 animate-spin" />,
    bullets: [
      'Admitted to 1st PUC in PCMB stream (Physics, Chemistry, Maths, Biology)',
      'Enrolled in advanced coaching for JEE Main & Advanced prep',
      'Mastering analytical physics, chemical bonding, and advanced calculus'
    ]
  },
  {
    year: 'Future (Target)',
    title: 'Crack JEE Main & Advanced',
    status: 'future',
    icon: <FiCircle className="w-5 h-5 text-slate-400" />,
    bullets: [
      'Targeting top percentiles in JEE Main',
      'Cracking the highly competitive JEE Advanced examination',
      'Securing a top All India Rank (AIR)'
    ]
  },
  {
    year: 'Future (Target)',
    title: 'IIT Admission & CSE',
    status: 'future',
    icon: <FiCircle className="w-5 h-5 text-slate-400" />,
    bullets: [
      'Admission into one of the top IITs (e.g., IIT Bombay, IIT Madras, IIT Delhi)',
      'Studying Computer Science Engineering (CSE) to gain core algorithmic skills',
      'Participating in college coding clubs and tech research labs'
    ]
  },
  {
    year: 'Future (Target)',
    title: 'Software Engineer & AI Innovator',
    status: 'future',
    icon: <FiCircle className="w-5 h-5 text-slate-400" />,
    bullets: [
      'Building cutting-edge AI and machine learning tools',
      'Working at premier international tech companies',
      'Founding tech startups to build smart, scalable software solutions'
    ]
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-indigo-500 dark:text-indigo-400 uppercase">
            Milestones
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            My Journey &amp; Vision
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-white/10 -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={event.title}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Outer circle pointer */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-slate-50 dark:bg-[#0b0b14] border-2 border-slate-200 dark:border-white/10 flex items-center justify-center shadow-md">
                    {event.icon}
                  </div>

                  {/* Left spacer / right active box */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`p-6 rounded-2xl glass-card relative overflow-hidden group ${
                        event.status === 'in-progress' 
                          ? 'border-indigo-500/30 bg-indigo-500/[0.03] dark:bg-indigo-500/[0.01]' 
                          : ''
                      }`}
                    >
                      {/* Active tag glowing */}
                      {event.status === 'in-progress' && (
                        <span className="absolute top-4 right-4 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                      )}

                      {/* Year badge */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
                        event.status === 'completed' 
                          ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                          : event.status === 'in-progress'
                          ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                          : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                      }`}>
                        {event.year}
                      </span>

                      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">
                        {event.title}
                      </h3>

                      {/* Detail points */}
                      <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 font-light list-disc list-inside">
                        {event.bullets.map((bullet, idx) => (
                          <li key={idx} className="leading-relaxed">
                            <span className="dark:text-slate-300 text-slate-600">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty space for grid balancing on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
