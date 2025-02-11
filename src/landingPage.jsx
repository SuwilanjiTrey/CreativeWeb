import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Page Components
const Navbar = () => (
  <motion.nav 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-blue-500/20"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          {['Home', 'Features', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </motion.nav>
);

const Page1 = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden"
  >
    {/* Background glow effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
    
    {/* Container for ARGUS text and underline */}
    <div className="relative">
      {/* ARGUS text with zoom animation */}
      <motion.h1
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.5,
          ease: "easeOut"
        }}
        className="text-8xl font-bold tracking-widest relative"
        style={{
          textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          fontFamily: 'Orbitron, sans-serif'
        }}
      >
        A R G U S
      </motion.h1>

      {/* Left angled line */}
      <motion.div
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-0 right-1/2 transform rotate-12 origin-right"
      >
        <div 
          className="h-0.5 w-16 bg-blue-500"
          style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
        />
      </motion.div>

      {/* Right angled line */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-0 left-1/2 transform -rotate-12 origin-left"
      >
        <div 
          className="h-0.5 w-16 bg-blue-500"
          style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
        />
      </motion.div>
    </div>

    {/* Optional subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-6 text-gray-400 text-xl"
      style={{ fontFamily: 'Orbitron, sans-serif' }}
    >
      Your Vision, Enhanced
    </motion.p>
  </motion.div>
);

const Page2 = () => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    className="h-screen flex flex-col items-center justify-center bg-black text-white"
  >
    <h2 className="text-3xl mb-6">Features</h2>
    <div className="grid grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-4 rounded-lg border border-white"
      >
        Feature 1
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-4 rounded-lg border border-white"
      >
        Feature 2
      </motion.div>
    </div>
  </motion.div>
);

const Page3 = () => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    className="h-screen flex flex-col items-center justify-center bg-black text-white"
  >
    <h2 className="text-3xl mb-6">About Us</h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-md text-center"
    >
      Your company description here. This text will fade in after the page appears.
    </motion.p>
  </motion.div>
);

const Page4 = () => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    className="h-screen flex flex-col items-center justify-center bg-black text-white"
  >
    <h2 className="text-3xl mb-6">Contact</h2>
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col gap-4 w-full max-w-md"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2 rounded-full bg-transparent border-2 border-white text-white"
      />
      <button className="px-6 py-2 rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors">
        Submit
      </button>
    </motion.form>
  </motion.div>
);

// Landing Page Component

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0 && currentPage < 3) {
        setDirection(1);
        setCurrentPage(prev => prev + 1);
      } else if (e.deltaY < 0 && currentPage > 0) {
        setDirection(-1);
        setCurrentPage(prev => prev - 1);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentPage]);

  const pages = [
    <Page1 key="page1" />,
    <Page2 key="page2" />,
    <Page3 key="page3" />,
    <Page4 key="page4" />
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <AnimatePresence mode="wait">
        {pages[currentPage]}
      </AnimatePresence>
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col gap-2">
          {[0, 1, 2, 3].map(pageNum => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-3 h-3 rounded-full border border-white ${
                currentPage === pageNum ? 'bg-white' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;