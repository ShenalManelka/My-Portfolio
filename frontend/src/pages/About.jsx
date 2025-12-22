import React from 'react';
import { motion } from 'framer-motion'; // Added Framer Motion
import { MapPin, GraduationCap, Code2, Globe, Cpu, Terminal, Laptop, Brackets } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '3rd Year', label: 'Undergraduate' },
    { value: '15+', label: 'Projects Built' },
    { value: '10+', label: 'Technologies' },
    { value: '3.0+', label: 'Current GPA' },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-24 px-6 overflow-hidden">
      {/* Background Ambient Glows */}
      <motion.div 
        animate={{ opacity: [0.1, 0.15, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ opacity: [0.05, 0.1, 0.05], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP SECTION: TERMINAL AND TEXT */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          
          {/* Left Side: Interactive Code Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative flex justify-center w-full"
          >
            <div className="relative group w-full max-w-[550px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono">
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

                <div className="p-6 text-sm md:text-base leading-relaxed">
                  <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {[
                      { l: "1", c: <><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = &#123;</> },
                      { l: "2", c: <span className="ml-4"><span className="text-white">name:</span> <span className="text-yellow-200">"Shenal Manelka"</span>,</span> },
                      { l: "3", c: <span className="ml-4"><span className="text-white">role:</span> <span className="text-yellow-200">"SE Undergraduate"</span>,</span> },
                      { l: "4", c: <span className="ml-4"><span className="text-white">location:</span> <span className="text-yellow-200">"Sri Lanka"</span>,</span> },
                      { l: "5", c: <span className="ml-4"><span className="text-white">focus:</span> [<span className="text-yellow-200">"Full-Stack"</span>, <span className="text-yellow-200">"Scalability"</span>],</span> },
                      { l: "6", c: <span className="ml-4"><span className="text-white">curious:</span> <span className="text-purple-400">true</span></span> },
                      { l: "7", c: <>&#125;;</> }
                    ].map((line, i) => (
                      <motion.div key={i} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex gap-4">
                        <span className="text-gray-600">{line.l}</span>
                        <p>{line.c}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                  <div className="mt-4 flex gap-4">
                    <span className="text-gray-600">8</span>
                    <p className="text-cyan-400 animate-pulse">_</p>
                  </div>
                </div>
              </div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-purple-800 p-4 rounded-2xl shadow-xl border border-white/10"
              >
                <Brackets size={32} className="text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Professional Intro */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0"
          >
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
          </motion.div>
        </div>

        {/* BOTTOM SECTION: NUMERICAL STATS */}
        <div className="relative pt-20 border-t border-white/5">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group cursor-default">
                <h3 className="text-5xl md:text-7xl font-bold mb-3 tracking-tighter text-white group-hover:text-purple-500 transition-colors duration-500">
                  {stat.value}
                </h3>
                <p className="text-gray-500 font-medium tracking-widest uppercase text-xs md:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* EXTRA: PRINCIPLES */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            {[
              { icon: <Code2 className="text-purple-500" size={32}/>, title: "Clean Architecture", desc: "Focusing on object-oriented programming and maintainable design patterns." },
              { icon: <Globe className="text-cyan-400" size={32}/>, title: "Full-Stack Focus", desc: "Developing seamless user experiences with integrated backend systems." },
              { icon: <Cpu className="text-purple-400" size={32}/>, title: "Continuous Learning", desc: "Staying curious about emerging industry trends and modern frameworks." }
            ].map((principle, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {principle.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{principle.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;