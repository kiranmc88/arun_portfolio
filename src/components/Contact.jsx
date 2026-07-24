import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiGithub, FiInstagram, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-[#07070d]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-indigo-500 dark:text-indigo-400 uppercase">
            Get In Touch
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Connect With Me
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Handles */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                Let's discuss future prospects
              </h3>
              <p className="text-sm font-light text-slate-500 dark:text-slate-400 leading-relaxed">
                Whether you want to talk about academic collaborations, innovative AI product ideas, coding partnerships, or simply share some guidance, feel free to reach out. I try to reply as soon as possible.
              </p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {/* Email Card */}
              <a 
                href="mailto:arunkumar.m.c.2026@gmail.com" 
                className="p-5 rounded-2xl glass-card flex items-center space-x-4 border border-slate-200 dark:border-white/5 hover:border-indigo-500/50 hover:bg-indigo-500/5"
              >
                <div className="p-3 bg-red-500/10 text-red-500 rounded-xl">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Email</span>
                  <p className="text-xs font-semibold text-slate-850 dark:text-white truncate max-w-[150px]">
                    arun.mc@gmail.com
                  </p>
                </div>
              </a>

              {/* Instagram Card */}
              <a 
                href="https://instagram.com/arun_kumar_m_c" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-5 rounded-2xl glass-card flex items-center space-x-4 border border-slate-200 dark:border-white/5 hover:border-pink-500/50 hover:bg-pink-500/5"
              >
                <div className="p-3 bg-pink-500/10 text-pink-500 rounded-xl">
                  <FiInstagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Instagram</span>
                  <p className="text-xs font-semibold text-slate-850 dark:text-white">
                    @arun_kumar_m_c
                  </p>
                </div>
              </a>

              {/* LinkedIn Placeholder */}
              <div 
                className="p-5 rounded-2xl glass-card flex items-center space-x-4 border border-slate-200 dark:border-white/5 opacity-70"
              >
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                  <FiLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">LinkedIn</span>
                  <p className="text-xs font-semibold text-slate-850 dark:text-white">
                    Connect Soon
                  </p>
                </div>
              </div>

              {/* GitHub Placeholder */}
              <div 
                className="p-5 rounded-2xl glass-card flex items-center space-x-4 border border-slate-200 dark:border-white/5 opacity-70"
              >
                <div className="p-3 bg-slate-500/10 text-slate-800 dark:text-slate-200 rounded-xl">
                  <FiGithub className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">GitHub</span>
                  <p className="text-xs font-semibold text-slate-850 dark:text-white">
                    Follow Soon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              className="p-8 md:p-10 rounded-3xl glass-card border border-white/10 relative overflow-hidden"
              layout
            >
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
                Send a Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Your email"
                      className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject (Optional)"
                    className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe your message here..."
                    className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSending || isSubmitted}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:-translate-y-0.5 disabled:opacity-50 transition-all duration-300 cursor-pointer focus:outline-none"
                >
                  {isSending ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Feedback Success Popup */}
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-[#0d0d15] flex flex-col items-center justify-center p-8 text-center"
                >
                  <FiCheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-sm font-light text-slate-400 max-w-sm">
                    Thank you for reaching out, M C Arun Kumar will receive your message and respond shortly.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
