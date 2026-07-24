import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Quotes() {
  return (
    <section id="quotes" className="py-24 relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-16 rounded-3xl glass-card text-center relative overflow-hidden flex flex-col items-center justify-center border border-white/10"
        >
          {/* Subtle Quote Symbol */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 text-slate-200/20 dark:text-white/5 pointer-events-none select-none">
            <FaQuoteLeft className="w-16 h-16 md:w-24 md:h-24" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Quote icon indicator */}
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <FaQuoteLeft className="w-4 h-4" />
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extralight italic text-slate-800 dark:text-slate-200 tracking-wide leading-relaxed font-sans max-w-3xl">
              "Work Smart, Stay Consistent, <br className="hidden sm:inline" />
              <span className="text-gradient-primary font-bold not-italic tracking-wider uppercase block mt-2">
                Dream Big.
              </span>
              "
            </blockquote>

            <div className="w-10 h-[1px] bg-slate-200 dark:bg-white/15 my-6" />

            <cite className="text-xs font-semibold tracking-[0.25em] text-slate-500 dark:text-indigo-400/80 uppercase not-italic">
              M C Arun Kumar — Personal Motto
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
