import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChatDotsFill } from 'react-icons/bs';
import { IoClose, IoSend } from 'react-icons/io5';
import { FaRobot, FaUser } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Arun's AI assistant. Ask me anything about his skills, experience, or projects!", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatSession, setChatSession] = useState(null);
  const messagesEndRef = useRef(null);

  // Initialize the AI chat session
  useEffect(() => {
    if (genAI) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest",
          systemInstruction: `You are the official AI assistant for M C Arun Kumar's portfolio website. 
You act as his personal representative. 
Answer questions about Arun intelligently, enthusiastically, and concisely.

Information about Arun:
- He is currently a 1st PUC student in PCMB (Physics, Chemistry, Mathematics, Biology) stream.
- He scored an excellent 97% in his 10th Standard (SSLC board exams).
- He is preparing for JEE Main & Advanced, aiming to secure a top rank and get into a prestigious IIT.
- His future goal is to study Computer Science Engineering (CSE) and become a Software Engineer and AI Innovator/Entrepreneur.
- His philosophy is "Work Smart, Not Just Work Hard".
- His core skills include Problem Solving, Smart Work, Critical Thinking, Leadership, Quick Learning, Creativity, Time Management, and Communication.
- His technical skills include modern web development with React, Tailwind CSS, and Framer Motion.
- For contact, suggest using the contact form at the bottom of the page or his social links.
- Do not make up information that is not present in his portfolio. Keep responses conversational and concise (1-3 short sentences max).`
        });
        
        const session = model.startChat({
          history: [],
        });
        setChatSession(session);
      } catch (error) {
        console.error("Failed to initialize Gemini:", error);
      }
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setInput('');
    
    // Add user message to UI
    setMessages(prev => [...prev, { text: userText, isBot: false }]);
    
    // If no API key, use fallback mock logic
    if (!chatSession) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { 
          text: "I'm currently running in offline mode. Please add a VITE_GEMINI_API_KEY in the .env file to activate my AI brain!", 
          isBot: true 
        }]);
      }, 1000);
      return;
    }

    setIsTyping(true);
    
    try {
      // Send message to Gemini
      const result = await chatSession.sendMessage(userText);
      const botResponse = result.response.text();
      
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        text: `Sorry, I ran into an error: ${error.message || 'Unknown error'}`, 
        isBot: true 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[calc(100vw-3rem)] sm:w-96 bg-white dark:bg-[#0f0f13] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <FaRobot className="text-xl" />
                <h3 className="font-semibold tracking-wide">AI Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors outline-none"
              >
                <IoClose className="text-xl" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 dark:bg-[#0a0a0f] flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-2 max-w-[85%] ${msg.isBot ? 'self-start' : 'self-end flex-row-reverse'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.isBot ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400' : 'bg-violet-600 text-white'}`}>
                    {msg.isBot ? <FaRobot className="text-sm" /> : <FaUser className="text-sm" />}
                  </div>
                  <div className={`p-3 text-sm ${msg.isBot ? 'bg-white dark:bg-[#15151a] border border-slate-100 dark:border-white/5 text-slate-700 dark:text-slate-300 rounded-2xl rounded-tl-sm shadow-sm' : 'bg-violet-600 text-white rounded-2xl rounded-tr-sm shadow-md'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start gap-2 max-w-[85%] self-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                    <FaRobot className="text-sm" />
                  </div>
                  <div className="p-4 bg-white dark:bg-[#15151a] border border-slate-100 dark:border-white/5 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="p-3 bg-white dark:bg-[#0f0f13] border-t border-slate-200 dark:border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2 bg-slate-100 dark:bg-[#1a1a24] p-1 pl-4 rounded-full border border-slate-200 dark:border-white/5 focus-within:border-indigo-500 transition-colors"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask something..."
                  disabled={isTyping}
                  className="flex-1 bg-transparent py-2 outline-none text-sm text-slate-700 dark:text-slate-200 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors shrink-0"
                >
                  <IoSend className="text-lg ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full shadow-[0_4px_20px_rgba(79,70,229,0.4)] flex items-center justify-center hover:shadow-[0_4px_25px_rgba(79,70,229,0.6)] transition-all"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoClose className="text-3xl" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <BsChatDotsFill className="text-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
