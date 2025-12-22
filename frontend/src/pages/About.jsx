import React from 'react';
import { MapPin, GraduationCap, Code2, Globe, Cpu, Terminal, Laptop, Brackets } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '3rd Year', label: 'Undergraduate' },
    { value: '15+', label: 'Projects Built' },
    { value: '10+', label: 'Technologies' },
    { value: '3.0+', label: 'Current GPA' },
  ];

  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-24 px-6 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP SECTION: TERMINAL AND TEXT */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          
          {/* Left Side: Interactive Code Terminal (Replaces Image) */}
          <div className="lg:w-1/2 relative flex justify-center w-full">
            <div className="relative group w-full max-w-[550px]">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              {/* Terminal Window */}
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono">
                {/* Terminal Header */}
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs text-gray-500 ml-2 flex items-center gap-2">
                    <Terminal size={12} /> developer.json
                  </div>
                </div>

                {/* Terminal Content (JSON Profile) */}
                <div className="p-6 text-sm md:text-base leading-relaxed">
                  <div className="flex gap-4">
                    <span className="text-gray-600">1</span>
                    <p><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = &#123;</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600">2</span>
                    <p className="ml-4"><span className="text-white">name:</span> <span className="text-yellow-200">"Shenal Manelka"</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600">3</span>
                    <p className="ml-4"><span className="text-white">role:</span> <span className="text-yellow-200">"SE Undergraduate"</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600">4</span>
                    <p className="ml-4"><span className="text-white">location:</span> <span className="text-yellow-200">"Sri Lanka"</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600">5</span>
                    <p className="ml-4"><span className="text-white">focus:</span> [<span className="text-yellow-200">"Full-Stack"</span>, <span className="text-yellow-200">"Scalability"</span>],</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600">6</span>
                    <p className="ml-4"><span className="text-white">curious:</span> <span className="text-purple-400">true</span></p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600">7</span>
                    <p>&#125;;</p>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <span className="text-gray-600">8</span>
                    <p className="text-cyan-400 animate-pulse">_</p>
                  </div>
                </div>
              </div>

              {/* Decorative floating element */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-purple-800 p-4 rounded-2xl shadow-xl animate-profile-glow border border-white/10">
                <Brackets size={32} className="text-white" />
              </div>
            </div>
          </div>

          {/* Right Side: Professional Intro */}
          <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold tracking-wide uppercase">
              About Me
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1]">
              Passionate Developer & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Creative Thinker
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left">
              <p>
                I am a passionate <span className="text-white font-medium">Software Engineering undergraduate</span> pursuing a BSc (Hons). I enjoy designing and developing reliable, user-focused software solutions that solve real-world problems.
              </p>
              <p>
                I value collaboration, responsibility, and turning complex ideas into functional systems while maintaining <span className="text-white">clean code</span> and good design practices.
              </p>
            </div>

            {/* Quick Details Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="text-purple-500" size={20} />
                <span>Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <GraduationCap className="text-cyan-400" size={20} />
                <span>BSc (Hons) SE</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: NUMERICAL STATS */}
        <div className="relative pt-20 border-t border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="group cursor-default">
                <h3 className="text-5xl md:text-7xl font-bold mb-3 tracking-tighter text-white group-hover:text-purple-500 transition-colors duration-500">
                  {stat.value}
                </h3>
                <p className="text-gray-500 font-medium tracking-widest uppercase text-xs md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EXTRA: PRINCIPLES */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.04] transition-all group">
                <Code2 className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-bold mb-3">Clean Architecture</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Focusing on object-oriented programming and maintainable design patterns.</p>
            </div>
            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.04] transition-all group">
                <Globe className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-bold mb-3">Full-Stack Focus</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Developing seamless user experiences with integrated backend systems.</p>
            </div>
            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.04] transition-all group">
                <Cpu className="text-purple-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-bold mb-3">Continuous Learning</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Staying curious about emerging industry trends and modern frameworks.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;