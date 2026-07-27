import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component imports
import Loader from './components/Loader';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Goals from './components/Goals';
import Skills from './components/Skills';
import Quotes from './components/Quotes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize theme from system preference or local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Update theme class on HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Loader screen */}
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen relative font-sans text-slate-800 dark:text-slate-100 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#050508]' : 'bg-[#fafafa]'
      }`}>
        
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none">
          <motion.div 
            className="h-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 shadow-[0_1px_10px_rgba(139,92,246,0.5)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Animated Background */}
        <Background isDarkMode={isDarkMode} />

        {/* Main Content */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Navbar */}
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            {/* Layout Wrappers */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Sections */}
              <Hero />
              
              {/* Divider lines */}
              <div className="h-[1px] w-full bg-slate-200/50 dark:bg-white/5" />
              <About />
              
              <div className="h-[1px] w-full bg-slate-200/50 dark:bg-white/5" />
              <Journey />
              
              <div className="h-[1px] w-full bg-slate-200/50 dark:bg-white/5" />
              <Achievements />
              
              <div className="h-[1px] w-full bg-slate-200/50 dark:bg-white/5" />
              <Gallery />
              
              <div className="h-[1px] w-full bg-slate-200/50 dark:bg-white/5" />
              <Goals />
              
              <div className="h-[1px] w-full bg-slate-200/50 dark:bg-white/5" />
              <Skills />
              
              <div className="h-[1px] w-full bg-slate-200/50 dark:bg-white/5" />
              <Quotes />
              
              <div className="h-[1px] w-full bg-slate-200/50 dark:bg-white/5" />
              <Contact />

            </main>

            {/* Footer */}
            <Footer />
            
            {/* Chatbot Agent */}
            <Chatbot />
          </motion.div>
        )}
      </div>
    </>
  );
}
