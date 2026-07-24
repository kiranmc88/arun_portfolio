import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Count up animation
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowLogo(true);
            setTimeout(() => {
              setIsDone(true);
              setTimeout(() => {
                onComplete();
              }, 600); // Allow exit transition
            }, 1200); // Show logo for 1.2s
          }, 300); // Delay before showing logo
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508] text-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Background Ambient Glow */}
            <div className="absolute w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!showLogo ? (
                <motion.div
                  key="progress"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  {/* Digital-style luxury typography */}
                  <span className="text-7xl md:text-8xl font-thin tracking-widest text-gradient-primary font-sans select-none">
                    {Math.round(progress)}%
                  </span>
                  
                  {/* Subtle bar indicator */}
                  <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden mt-6 relative">
                    <motion.div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-indigo-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-xs tracking-[0.25em] text-gray-500 uppercase mt-4">
                    Initializing Brand Profile
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/10 shadow-2xl relative mb-6 glow-border">
                    <span className="text-2xl font-bold tracking-widest text-white">MCA</span>
                    {/* Ring animation around initials */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        stroke="rgba(139, 92, 246, 0.3)"
                        strokeWidth="1.5"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="48"
                        stroke="url(#purpleGradient)"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray="301.6"
                        initial={{ strokeDashoffset: 301.6 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                      <defs>
                        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  <h1 className="text-2xl font-semibold tracking-wider text-white">
                    M C ARUN KUMAR
                  </h1>
                  <p className="text-sm tracking-[0.15em] text-indigo-400/80 uppercase mt-1">
                    Future IITian &amp; AI Innovator
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
