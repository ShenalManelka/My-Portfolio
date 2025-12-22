import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] text-white pt-20 pb-10 px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 border-b border-white/5 pb-16">
          
          {/* Column 1: Branding & Availability */}
          <div className="flex flex-col items-center md:items-start space-y-5">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-purple-500">SHENAL <span className="text-cyan-400">MANELKA</span></span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left leading-relaxed">
              Driven by curiosity, built with code, and focused on creating meaningful software solutions.
            </p>
            
            {/* Availability Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a href="https://github.com/ShenalManelka" target="_blank" rel="noreferrer" 
                 className="p-2.5 bg-white/5 rounded-xl hover:bg-purple-500/20 transition-all text-gray-400 hover:text-purple-400 border border-white/5">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/shenalmanelka" target="_blank" rel="noreferrer" 
                 className="p-2.5 bg-white/5 rounded-xl hover:bg-cyan-500/20 transition-all text-gray-400 hover:text-cyan-400 border border-white/5">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Navigation</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    // Home maps to '/', others map to '/projects', '/skills', etc.
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="flex items-center group text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <ChevronRight 
                      size={14} 
                      className="mr-1 text-purple-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" 
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3: Contact Details */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Contact Details</h3>
            
            <div className="space-y-4 w-full">
              {/* Email */}
              <a href="mailto:shenalmanelka774@gmail.com" className="flex items-center space-x-3 group justify-center md:justify-start">
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <Mail size={18} className="text-purple-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">shenalmanelka774@gmail.com</span>
              </a>

              {/* Phone */}
              <a href="tel:0702242247" className="flex items-center space-x-3 group justify-center md:justify-start">
                <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Phone size={18} className="text-cyan-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">070 224 2247</span>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-3 group cursor-default justify-center md:justify-start">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <MapPin size={18} className="text-emerald-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">Gampaha, Sri Lanka</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em]">
          <p>© {currentYear} SHENAL MANELKA. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;