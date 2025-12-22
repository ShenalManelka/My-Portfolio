import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

// 1. DEFINE FALLBACK DATA OUTSIDE THE COMPONENT
// This ensures it's available even if the API fails or hits a rate limit.
const fallbackProjects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    html_url: "https://github.com/ShenalManelka",
    allLanguages: ["JavaScript", "TailwindCSS"],
    stargazers_count: 5,
    forks_count: 2
  },
  {
    id: 2,
    name: "Project Two",
    description: "A placeholder project shown when GitHub API is unavailable.",
    html_url: "https://github.com/ShenalManelka",
    allLanguages: ["React"],
    stargazers_count: 0,
    forks_count: 0
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.github.com/users/ShenalManelka/repos?sort=updated&per_page=9'
        );

        // If GitHub returns 403 (Rate Limit) or any other error
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const repos = await response.json();

        // 2. OPTIMIZED FETCH: 
        // We only fetch detailed languages if we aren't already failing.
        const detailedRepos = await Promise.all(
          repos.map(async (repo) => {
            try {
              // Note: Every 'fetch' here counts against your 60-req/hr limit!
              const langRes = await fetch(repo.languages_url);
              if (!langRes.ok) return { ...repo, allLanguages: [repo.language].filter(Boolean) };
              const langData = await langRes.json();
              return { ...repo, allLanguages: Object.keys(langData) };
            } catch {
              // Fallback to the primary language if the detail fetch fails
              return { ...repo, allLanguages: [repo.language].filter(Boolean) };
            }
          })
        );

        setProjects(detailedRepos);
      } catch (error) {
        console.warn("Using fallback projects due to error:", error.message);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="min-h-screen bg-[#050505] py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter"
          >
            Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A real-time feed of my latest work directly from GitHub.
          </p>
        </header>

        {loading ? (
          <div className="flex flex-col justify-center items-center py-20 gap-4">
            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 animate-pulse">Fetching from GitHub...</p>
          </div>
        ) : (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} repo={project} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;