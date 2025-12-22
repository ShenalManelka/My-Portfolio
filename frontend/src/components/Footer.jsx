import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] text-white pt-20 pb-10 px-8 relative overflow-hidden">
      {/* Background Glow to tie in with the CTA section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-b border-white/5 pb-16">
          
          {/* Branding Column */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-purple-500">SHENAL <span className="text-cyan-400">MANELKA</span></span>

              
            </h2>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left leading-relaxed">
              Driven by curiosity, built with code, and focused on creating meaningful software.
            </p>
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

          {/* Quick Contact Column */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Contact Details</h3>
            
            <div className="space-y-4">
              <a href="mailto:shenalmanelka774@gmail.com" className="flex items-center space-x-3 group">
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <Mail size={18} className="text-purple-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">shenalmanelka774@gmail.com</span>
              </a>

              <a href="tel:0702242247" className="flex items-center space-x-3 group">
                <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Phone size={18} className="text-cyan-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">070 224 2247</span>
              </a>
            </div>
          </div>

          {/* Location Column */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Location</h3>
            <a 
              href="https://maps.app.goo.gl/kdvSD3mx4WcGfcgK9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-3 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all overflow-hidden w-full max-w-[280px]"
            >
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <MapPin size={20} className="text-purple-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-medium">Find me on Maps</span>
                <span className="text-gray-500 text-xs flex items-center gap-1">Open Navigation <ExternalLink size={10} /></span>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs tracking-wide">
          <p>© {currentYear} Shenal Manelka. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;