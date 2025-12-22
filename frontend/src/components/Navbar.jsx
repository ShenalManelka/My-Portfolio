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
        <Link to="/" className="text-2xl font-bold tracking-tight text-white flex gap-2">
          <span className="text-cyan-400">Shenal</span>
          <span>Manelka</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Home Link */}
          <Link
            to="/"
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              isActive('/') 
                ? "bg-white/10 text-purple-400 border border-white/5" 
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
                  ? "bg-white/10 text-purple-400 border border-white/5"
                  : "text-gray-300 hover:bg-white/10 hover:text-purple-400"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Login Button */}
          <Link
            to="/login"
            className="ml-4 bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:scale-105 active:scale-95"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)} className="p-2">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#050505]/fb backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden animate-in fade-in slide-in-from-top-4">
          <Link to="/" onClick={() => setOpen(false)} className="text-lg text-gray-300 hover:text-purple-400 px-4 py-2">Home</Link>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setOpen(false)}
              className="text-lg text-gray-300 hover:text-purple-400 px-4 py-2 border-l border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/login" onClick={() => setOpen(false)} className="bg-purple-600 text-white text-center py-3 rounded-xl font-bold">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;