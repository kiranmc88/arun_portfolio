import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckSquare, FiCompass, FiTarget } from 'react-icons/fi';

const shortTermGoals = [
  { title: 'Complete PUC with Excellence', desc: 'Secure maximum percentages in physics, chemistry, mathematics, and biology classes.', progress: 75 },
  { title: 'Excel in JEE Main', desc: 'Secure a top percentile rank to ensure entrance eligibility and boost overall confidence.', progress: 40 },
  { title: 'Crack JEE Advanced', desc: 'Focus on advanced problem-solving, mock tests, and time management strategies.', progress: 30 }
];

const longTermGoals = [
  { title: 'Study CS Engineering at IIT', desc: 'Gain admission into a top IIT campus majoring in Computer Science to study advanced algorithms and systems.', progress: 10 },
  { title: 'Become a Software Engineer', desc: 'Work with core engineering teams at leading global technology companies (Google, Apple, etc.).', progress: 5 },
  { title: 'Build AI Solutions & Products', desc: 'Innovate with artificial intelligence to solve complex scientific, medical, or business problems.', progress: 0 },
  { title: 'Launch Tech Startup / Entrepreneurship', desc: 'Establish a technology startup and bring innovative products to market as an entrepreneur.', progress: 0 }
];

export default function Goals() {
  const [activeTab, setActiveTab] = useState('short');

  return (
    <section id="goals" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-[#07070d]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-indigo-500 dark:text-indigo-400 uppercase">
            Aspirations
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Future Goals &amp; Vision
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Sliding Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-200/50 dark:bg-white/5 p-1.5 rounded-full flex items-center border border-slate-350 dark:border-white/10 shadow-inner relative z-10">
            <button
              onClick={() => setActiveTab('short')}
              className={`relative px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-300 focus:outline-none cursor-pointer ${
                activeTab === 'short' ? 'text-white' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {activeTab === 'short' && (
                <motion.span
                  layoutId="activeGoalTab"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              Short Term Goals
            </button>

            <button
              onClick={() => setActiveTab('long')}
              className={`relative px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-300 focus:outline-none cursor-pointer ${
                activeTab === 'long' ? 'text-white' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {activeTab === 'long' && (
                <motion.span
                  layoutId="activeGoalTab"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              Long Term Goals
            </button>
          </div>
        </div>

        {/* Goals cards display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {(activeTab === 'short' ? shortTermGoals : longTermGoals).map((goal, idx) => (
                <div
                  key={goal.title}
                  className="p-6 rounded-2xl glass-card flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Goal Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform duration-300">
                        {activeTab === 'short' 
                          ? <FiTarget className="w-5 h-5 text-indigo-500" />
                          : <FiCompass className="w-5 h-5 text-amber-500" />
                        }
                      </div>
                      
                      <span className="text-xs font-bold font-sans text-indigo-400/80 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                        {goal.progress > 0 ? `${goal.progress}% Completed` : 'Planned'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      {goal.title}
                    </h3>
                    
                    <p className="text-sm font-light text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                      {goal.desc}
                    </p>
                  </div>

                  {/* Progress visual indicator */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-light">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-violet-500 to-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
