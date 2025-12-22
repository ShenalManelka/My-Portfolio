import React, { useEffect, useState } from 'react';
import ProjectCard from "../Components/ProjectCard";
import { Layers } from 'lucide-react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetches your repos, sorted by most recently updated
    fetch('https://api.github.com/users/ShenalManelka/repos?sort=updated&per_page=6')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching GitHub repos:", err));
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-24 px-6 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold uppercase tracking-widest">
            My Work
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of my software engineering journey, featuring full-stack applications and system-level solutions.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Skeleton Loading State
            [...Array(6)].map((_, i) => (
              <div key={i} className="h-[450px] bg-white/[0.02] border border-white/10 animate-pulse rounded-[2rem]" />
            ))
          ) : (
            repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))
          )}
        </div>

        {/* GitHub Link Footer */}
        <div className="mt-24 text-center">
            <a 
              href="https://github.com/ShenalManelka" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Layers size={20} />
              <span className="font-semibold">View All Repositories</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;