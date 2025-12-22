import React from 'react';
import { motion } from 'framer-motion'; // Added Framer Motion
import { Github, Linkedin, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <footer className="w-full bg-[#050505] text-white pt-20 pb-10 px-8 relative overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 border-b border-white/5 pb-16"
        >
          
          {/* Column 1: Branding & Availability */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start space-y-5">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-purple-500">SHENAL <span className="text-cyan-400">MANELKA</span></span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left leading-relaxed">
              Driven by curiosity, built with code, and focused on creating meaningful software solutions.
            </p>
            
            {/* Availability Badge */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-xs font-medium cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </motion.div>

            <div className="flex items-center space-x-3 pt-2">
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/ShenalManelka" target="_blank" rel="noreferrer" 
                className="p-2.5 bg-white/5 rounded-xl hover:bg-purple-500/20 transition-all text-gray-400 hover:text-purple-400 border border-white/5"
              >
                <Github size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/shenalmanelka" target="_blank" rel="noreferrer" 
                className="p-2.5 bg-white/5 rounded-xl hover:bg-cyan-500/20 transition-all text-gray-400 hover:text-cyan-400 border border-white/5"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Navigation</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="flex items-center group text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <ChevronRight 
                      size={14} 
                      className="mr-1 text-purple-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" 
                    />
                    <motion.span whileHover={{ x: 2 }}>{item}</motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Details */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Contact Details</h3>
            
            <div className="space-y-4 w-full">
              {/* Email */}
              <motion.a 
                whileHover={{ x: 5 }}
                href="mailto:shenalmanelka774@gmail.com" 
                className="flex items-center space-x-3 group justify-center md:justify-start"
              >
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <Mail size={18} className="text-purple-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">shenalmanelka774@gmail.com</span>
              </motion.a>

              {/* Phone */}
              <motion.a 
                whileHover={{ x: 5 }}
                href="tel:0702242247" 
                className="flex items-center space-x-3 group justify-center md:justify-start"
              >
                <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Phone size={18} className="text-cyan-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">070 224 2247</span>
              </motion.a>

              {/* Location */}
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group cursor-default justify-center md:justify-start"
              >
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <MapPin size={18} className="text-emerald-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">Gampaha, Sri Lanka</span>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Section: Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em]"
        >
          <p>© {currentYear} SHENAL MANELKA. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <motion.span whileHover={{ color: "#A855F7" }} className="cursor-pointer transition-colors">Privacy Policy</motion.span>
            <motion.span whileHover={{ color: "#22D3EE" }} className="cursor-pointer transition-colors">Terms of Service</motion.span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;