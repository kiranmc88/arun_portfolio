import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-200/50 dark:border-white/5 bg-slate-100/50 dark:bg-[#06060c]/50 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center z-10 relative">
        
        {/* Brand details */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-bold tracking-widest text-slate-800 dark:text-white uppercase">
            M C Arun Kumar
          </h3>
          <p className="text-xs font-semibold text-indigo-500/80 dark:text-indigo-400/80 uppercase tracking-[0.15em] mt-1">
            Future IITian &bull; Future Software Engineer
          </p>
          <p className="text-[10px] text-slate-500 dark:text-slate-500 mt-3">
            &copy; {new Date().getFullYear()} M C Arun Kumar. All Rights Reserved.
          </p>
        </div>

        {/* Back to top & Brand motto */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-light italic text-center md:text-right max-w-[250px]">
            "Work Smart, Stay Consistent, Dream Big."
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group p-2.5 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-violet-500/50 text-slate-700 dark:text-white transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer focus:outline-none"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
