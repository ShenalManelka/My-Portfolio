import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo Animation */}
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-1 group">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-cyan-400"
          >
            Shenal
          </motion.span>
          <span className="opacity-80 group-hover:opacity-100 transition-opacity">Manelka</span>
        </Link>

        {/* Desktop Navigation with Sliding Pill */}
        <div className="hidden md:flex items-center space-x-1 bg-white/[0.03] backdrop-blur-md border border-white/10 p-1.5 rounded-full relative">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${
                isActive(link.path) ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {isActive(link.path) && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hire Me Button Animation */}
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300 shadow-xl shadow-white/5"
            >
              Hire Me
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle Animation */}
        <div className="md:hidden">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)} 
            className="p-2.5 text-white bg-white/5 rounded-full border border-white/10 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Staggered Links */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setOpen(false)}
                    className={`text-2xl font-bold block transition-all ${
                      isActive(link.path) 
                      ? "text-cyan-400 translate-x-2" 
                      : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;