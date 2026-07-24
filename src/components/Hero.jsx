import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiImage, FiMail } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg.jpeg';

const typingWords = [
  'Future IITian',
  'JEE Aspirant',
  'Software Engineer',
  'Tech Entrepreneur',
  'AI Enthusiast',
  'Problem Solver'
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentWord = typingWords[index];

    if (!isDeleting && subText === currentWord) {
      // Pause when full word is typed
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && subText === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % typingWords.length);
      setSpeed(100);
    } else {
      timer = setTimeout(() => {
        setSubText((prev) => 
          isDeleting 
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
        setSpeed(isDeleting ? 40 : 100);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, index, speed]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Elegant Top Badge */}
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6 w-fit shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              Welcome To My Vision
            </span>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-800 dark:text-white leading-tight">
              Hi, I'm <br />
              <span className="text-gradient-primary text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide block mt-2 pb-1">
                M C Arun Kumar
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-16 flex items-center mt-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-300">
                I am a{' '}
                <span className="font-semibold text-gradient-gold border-r-2 border-amber-500 dark:border-amber-400 pr-1 animate-pulse">
                  {subText}
                </span>
              </p>
            </div>

            {/* Personality Core Concept */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-light">
              "Work Smart, Not Just Work Hard." A PCMB student, creative thinker, and future IITian, designing solutions for tomorrow's AI challenges today.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
              <button
                onClick={() => scrollToSection('journey')}
                className="group inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-[0_8px_30px_rgb(99,102,241,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none"
              >
                Know My Journey
                <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('gallery')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-300 dark:border-white/10 hover:border-violet-500 dark:hover:border-violet-500/50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none"
              >
                <FiImage className="mr-2 w-4 h-4" />
                View Gallery
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase bg-transparent text-slate-700 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400 transition-all duration-300 cursor-pointer focus:outline-none"
              >
                <FiMail className="mr-2 w-4 h-4" />
                Contact
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Ambient Background Circles behind profile */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-full blur-3xl opacity-20 dark:opacity-30 -z-10 animate-pulse scale-105" />

            {/* Floating Outer Glassmorphic Border */}
            <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full p-2 glass-card flex items-center justify-center animate-float relative z-10 shadow-2xl">
              
              {/* Profile Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/15 dark:border-white/10 relative">
                <img 
                  src={profileImg} 
                  alt="M C Arun Kumar" 
                  className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform duration-700 ease-out select-none"
                />
              </div>

              {/* Decorative floating sub-badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-sans text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1 border border-white/20 select-none animate-float-delayed">
                <span>IITian Mindset</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
