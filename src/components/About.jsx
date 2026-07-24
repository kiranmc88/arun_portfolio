import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCpu, FiTrendingUp } from 'react-icons/fi';

const stats = [
  {
    icon: <FiAward className="w-6 h-6 text-amber-500" />,
    value: '97%',
    label: '10th SSLC Score',
    desc: 'Academic Excellence Award'
  },
  {
    icon: <FiBookOpen className="w-6 h-6 text-indigo-500" />,
    value: 'PCMB',
    label: '1st PUC Stream',
    desc: 'Physics, Chemistry, Maths, Biology'
  },
  {
    icon: <FiTrendingUp className="w-6 h-6 text-emerald-500" />,
    value: 'JEE Prep',
    label: 'Main & Advanced',
    desc: 'Targeting Top IITs'
  },
  {
    icon: <FiCpu className="w-6 h-6 text-purple-500" />,
    value: 'AI + CSE',
    label: 'Future Focus',
    desc: 'Software & AI Entrepreneur'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-indigo-500 dark:text-indigo-400 uppercase">
            Introduction
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Driven by Passion, Guided by Focus
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Who is M C Arun Kumar?
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              I am an ambitious student currently studying in 1st PUC (PCMB). Having achieved a score of <strong className="text-indigo-500 font-semibold">97% in my 10th Standard</strong>, I have set my sights on a challenging path. My primary focus is preparing intensively for the <strong className="text-indigo-500 font-semibold">JEE Main and JEE Advanced</strong>, with the core objective of entering one of India's prestigious IITs.
            </p>

            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              I believe in the philosophy: <em className="text-gradient-gold font-normal">"Work Smart, Not Just Work Hard."</em> Simply studying for hours is not enough; one must study with focus, strategies, and deep conceptual clarity. I am passionate about utilizing mathematics, science, and computer algorithms to solve complex challenges, and I aim to study Computer Science Engineering to build AI innovations.
            </p>

            {/* Quote Insert */}
            <div className="p-5 border-l-2 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/[0.02] rounded-r-xl">
              <p className="italic text-slate-700 dark:text-slate-300 font-light text-sm">
                "Smart work builds the foundation of entrepreneurship. Coding is the brush, AI is the ink, and the future is our canvas."
              </p>
            </div>
          </motion.div>

          {/* Right Grid Block */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="p-6 rounded-2xl glass-card relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Glowing subtle hover corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10 mb-6 group-hover:scale-105 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  
                  <span className="text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
                    {stat.value}
                  </span>
                  
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-300 mt-2">
                    {stat.label}
                  </h4>
                </div>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-2">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
