import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        
        {/* Logo / Name */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-white flex gap-2 group">
          <span className="text-cyan-400 transition-colors group-hover:text-purple-400">Shenal</span>
          <span>Manelka</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-2xl">
          {/* Home Link */}
          <Link
            to="/"
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              isActive('/') 
                ? "bg-white/10 text-purple-400 border border-white/5 shadow-inner" 
                : "text-gray-300 hover:bg-white/10 hover:text-purple-400"
            }`}
          >
            Home
          </Link>

          {/* Dynamic Map for other pages */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive(link.path)
                  ? "bg-white/10 text-purple-400 border border-white/5 shadow-inner"
                  : "text-gray-300 hover:bg-white/10 hover:text-purple-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)} className="p-2 focus:outline-none">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden animate-in fade-in slide-in-from-top-4">
          <Link 
            to="/" 
            onClick={() => setOpen(false)} 
            className={`text-lg px-4 py-2 rounded-xl ${isActive('/') ? "text-purple-400 bg-white/5" : "text-gray-300"}`}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setOpen(false)}
              className={`text-lg px-4 py-2 rounded-xl border-l-2 transition-all ${
                isActive(link.path) 
                ? "text-purple-400 bg-white/5 border-purple-500" 
                : "text-gray-300 border-transparent hover:border-white/20"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;