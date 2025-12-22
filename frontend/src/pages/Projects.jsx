import React, { useEffect, useState } from 'react';
import ProjectCard from "../components/ProjectCard";
import { Layers, Loader2 } from 'lucide-react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        // 1. Fetch the main list of repositories
        const response = await fetch('https://api.github.com/users/ShenalManelka/repos?sort=updated&per_page=6');
        const basicRepos = await response.json();

        // 2. Fetch extra details (Languages & README) for each repo
        const detailedRepos = await Promise.all(
          basicRepos.map(async (repo) => {
            // Fetch Languages
            const langRes = await fetch(repo.languages_url);
            const languages = await langRes.json();

            // Fetch README (decoding from Base64)
            let readmeContent = "";
            try {
              const readmeRes = await fetch(`https://api.github.com/repos/ShenalManelka/${repo.name}/readme`);
              const readmeData = await readmeRes.json();
              // Decoding the base64 content and stripping some markdown tags for a clean preview
              readmeContent = atob(readmeData.content).slice(0, 150) + "...";
            } catch (err) {
              readmeContent = repo.description || "No description available.";
            }

            return {
              ...repo,
              allLanguages: Object.keys(languages), // Array of all languages used
              detailedDescription: readmeContent
            };
          })
        );

        setRepos(detailedRepos);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching detailed GitHub data:", err);
        setLoading(false);
      }
    };

    fetchRepoDetails();
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-24 px-6 overflow-hidden">
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold uppercase tracking-widest">
            My Work
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A deep dive into my repositories, featuring live data pulled directly from GitHub, including full tech stacks and documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
             <div className="col-span-full flex flex-col items-center justify-center py-20">
                <Loader2 className="animate-spin text-purple-500 mb-4" size={48} />
                <p className="text-gray-500 animate-pulse">Fetching READMEs and Language data...</p>
             </div>
          ) : (
            repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))
          )}
        </div>

        <div className="mt-24 text-center">
            <a href="https://github.com/ShenalManelka" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
              <Layers size={20} />
              <span className="font-semibold">Explore Full GitHub Profile</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;