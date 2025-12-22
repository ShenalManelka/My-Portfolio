import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ repo }) => {
  // Clean up repository names for display (e.g., mocha-cafe-pos -> Mocha Cafe Pos)
  const displayTitle = repo.name.replace(/-/g, ' ');
  
  // Use description from GitHub API or a default fallback
  const description = repo.description || "A software engineering project focused on solving real-world problems with clean, efficient code.";

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -12 }}
      className="group relative flex flex-col bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-purple-500/40 transition-all duration-500 shadow-2xl h-full backdrop-blur-sm"
    >
      {/* Animated Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon/Visual Holder */}
      <div className="relative h-56 w-full bg-[#080808] flex items-center justify-center overflow-hidden border-b border-white/5">
        {/* Decorative inner border */}
        <div className="absolute inset-5 border border-white/5 rounded-[1.5rem] group-hover:border-purple-500/20 transition-colors duration-500" />
        
        <motion.div 
          whileHover={{ scale: 1.15, rotate: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative z-10"
        >
          {repo.name.toLowerCase().includes('cafe') || repo.name.toLowerCase().includes('mocha') ? (
            <span className="text-7xl drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">☕</span>
          ) : repo.name.toLowerCase().includes('zooparc') || repo.name.toLowerCase().includes('zoo') ? (
            <span className="text-7xl drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">🐾</span>
          ) : (
            <div className="p-5 bg-white/5 rounded-3xl border border-white/10 group-hover:border-purple-500/50 transition-colors">
              <Code2 size={50} className="text-purple-500/40 group-hover:text-purple-400 transition-colors" />
            </div>
          )}
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors capitalize leading-tight">
            {displayTitle}
          </h3>
          {/* GitHub Star Count (Optional added detail from API) */}
          {repo.stargazers_count > 0 && (
             <span className="flex items-center gap-1 text-xs font-medium text-gray-500">
               ⭐ {repo.stargazers_count}
             </span>
          )}
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Tags - Populated by the detailed fetch in Projects.jsx */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(repo.allLanguages && repo.allLanguages.length > 0 ? repo.allLanguages : [repo.language || 'Software']).map((lang, i) => (
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              key={lang} 
              className="px-3 py-1 text-[10px] font-bold bg-white/5 border border-white/10 rounded-full text-gray-400 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all uppercase tracking-widest"
            >
              {lang}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer"
            className="flex-[1.2] flex items-center justify-center gap-2 py-3.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-sm font-bold text-white shadow-inner"
          >
            <Github size={18} /> Source Code
          </motion.a>
          
          {repo.homepage && (
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={repo.homepage} 
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl transition-all text-sm font-bold text-white shadow-[0_10px_20px_rgba(168,85,247,0.15)] hover:shadow-purple-500/40"
            >
              <ExternalLink size={18} /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;