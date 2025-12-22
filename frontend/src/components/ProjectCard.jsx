import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ repo }) => {
  // Clean up repository names (e.g., "my-repo-name" -> "My Repo Name")
  const displayTitle = repo.name.replace(/-/g, ' ');
  
  return (
    <div className="group relative flex flex-col bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden hover:border-purple-500/30 transition-all duration-500 shadow-2xl">
      
      {/* Project "Image" Holder (Matching your screenshot icons) */}
      <div className="relative h-52 w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden border-b border-white/5">
        {/* Glowing Inner Border */}
        <div className="absolute inset-4 border border-purple-500/10 rounded-2xl group-hover:border-purple-500/30 transition-colors" />
        
        {/* Central Icon - Pulled from Tech or Default */}
        <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
          <Code2 size={60} className="text-purple-500/40 group-hover:text-purple-400" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors capitalize">
          {displayTitle}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {repo.description || "A software engineering project focused on solving real-world problems with clean, efficient code."}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {repo.language && (
            <span className="px-3 py-1 text-xs font-medium bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">
              {repo.language}
            </span>
          )}
          {repo.topics?.slice(0, 2).map(topic => (
            <span key={topic} className="px-3 py-1 text-xs font-medium bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">
              {topic}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-sm font-bold"
          >
            <Github size={18} /> Code
          </a>
          
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