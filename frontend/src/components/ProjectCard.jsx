import React from 'react';
import { Github, ExternalLink, Code2, Coffee } from 'lucide-react';

const ProjectCard = ({ repo }) => {
  // Clean up repository names for display
  const displayTitle = repo.name.replace(/-/g, ' ');
  
  // Use the detailed description from README if available, else fallback
  const description = repo.detailedDescription || repo.description || 
    "A software engineering project focused on solving real-world problems with clean, efficient code.";

  return (
    <div className="group relative flex flex-col bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden hover:border-purple-500/30 transition-all duration-500 shadow-2xl">
      
      {/* Project Image/Icon Holder */}
      <div className="relative h-52 w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-4 border border-purple-500/10 rounded-2xl group-hover:border-purple-500/30 transition-colors" />
        
        <div className="relative z-10 transition-transform duration-500 group-hover:scale-125">
          {/* Custom Icons for your specific projects */}
          {repo.name.toLowerCase().includes('cafe') || repo.name.toLowerCase().includes('mocha') ? (
            <span className="text-6xl drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">☕</span>
          ) : repo.name.toLowerCase().includes('zooparc') ? (
            <span className="text-6xl drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">🐾</span>
          ) : (
            <Code2 size={60} className="text-purple-500/40 group-hover:text-purple-400" />
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors capitalize">
          {displayTitle}
        </h3>
        
        {/* Shows the first 150 characters of your README */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Dynamic Tech Stack Tags (All languages detected by GitHub) */}
        <div className="flex flex-wrap gap-2 mb-8">
          {repo.allLanguages?.length > 0 ? (
            repo.allLanguages.map((lang) => (
              <span key={lang} className="px-3 py-1 text-[10px] font-bold bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 uppercase tracking-wider">
                {lang}
              </span>
            ))
          ) : (
            // Fallback if no languages detected
            <span className="px-3 py-1 text-[10px] font-bold bg-gray-500/10 border border-gray-500/20 rounded-full text-gray-400 uppercase tracking-wider">
              Software
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto">
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-sm font-bold"
          >
            <Github size={18} /> Code
          </a>
          
          {/* Only show Demo button if a homepage URL is set in GitHub */}
          {repo.homepage && (
            <a 
              href={repo.homepage} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl hover:scale-105 transition-all text-sm font-bold shadow-lg shadow-purple-500/20"
            >
              <ExternalLink size={18} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;