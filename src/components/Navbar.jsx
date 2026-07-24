import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Journey', id: 'journey' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Goals', id: 'goals' },
  { name: 'Skills', id: 'skills' },
  { name: 'Quotes', id: 'quotes' },
  { name: 'Contact', id: 'contact' }
];

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar transparency on scroll
      setScrolled(window.scrollY > 50);

      // Section intersection detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky navbar
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
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'py-3 glass-navbar shadow-lg' 
          : 'py-5 bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 text-xl font-bold tracking-widest text-slate-900 dark:text-white group cursor-pointer focus:outline-none"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold mr-1 group-hover:scale-105 transition-transform duration-300">
              MCA
            </span>
            <span className="hidden sm:inline font-sans font-semibold text-base tracking-[0.2em] group-hover:text-violet-500 transition-colors">
              ARUN KUMAR
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-300 cursor-pointer focus:outline-none ${
                  activeSection === item.id 
                    ? 'text-slate-900 dark:text-white' 
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 transition-all duration-300 cursor-pointer shadow-sm focus:outline-none"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FiSun className="w-4 h-4 text-amber-400" /> : <FiMoon className="w-4 h-4 text-violet-600" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full lg:hidden bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 transition-all duration-300 cursor-pointer focus:outline-none"
            >
              {isOpen ? <HiX className="w-4 h-4" /> : <HiMenu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden w-full glass-navbar overflow-hidden border-t border-slate-200/20 dark:border-white/5 absolute top-full left-0"
            >
              <div className="flex flex-col space-y-2 py-6 px-8 max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`py-3 text-left text-sm font-semibold tracking-widest uppercase transition-colors border-b border-slate-200/10 dark:border-white/5 cursor-pointer focus:outline-none ${
                      activeSection === item.id
                        ? 'text-violet-600 dark:text-violet-400'
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
