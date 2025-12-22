import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Paintbrush, Rocket } from 'lucide-react';
import profileImg from '../assets/myImage.png';

const Home = () => {
  return (
    <div className="relative w-full bg-[#050505] text-white font-sans selection:bg-purple-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center py-20">
        {/* Hero Mesh Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

        <main className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24 px-6 max-w-[1400px] mx-auto w-full">
          
          {/* Left Side: Text Content */}
          <div className="text-left order-2 lg:order-1">
            <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
              Welcome to my portfolio
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
              Hi, I'm <span className="text-purple-500">Shenal</span> <br />
              <span className="text-cyan-400">Manelka</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
              A passionate full-stack developer crafting beautiful digital experiences. 
              I specialize in building modern web applications with high performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link to="/projects" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-purple-500/20 group transition-all hover:scale-105">
                View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-10 py-4 text-center rounded-2xl font-bold text-lg border border-purple-500/30 bg-black/40 hover:bg-purple-500/10 transition-all">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Side: LARGE Image (Optimized for 864x1184) */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Unique Animation Class */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-[3rem] blur opacity-30 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-profile-glow"></div>
              
              {/* Container is 500x500 on large screens */}
              <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-[3rem] overflow-hidden border border-white/10 bg-[#050505] shadow-2xl shadow-purple-500/10">
                <img 
                  src={profileImg} 
                  alt="Shenal Manelka" 
                  /* Note: 'object-top' is added here to ensure 
                     the crop doesn't cut off your head on a portrait photo 
                  */
                  className="w-full h-full object-cover object-top grayscale-[10%] hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                />
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            </div>
          </div>
        </main>
      </section>

      {/* EYE-CATCHING DIVIDER 1 */}
      <div className="relative w-full px-8">
        <div className="max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-[2px] bg-purple-500 blur-[2px] opacity-50" />
      </div>

      {/* 2. WHAT I DO SECTION */}
      <section className="relative py-32 px-6 bg-[#050505] overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
          <p className="text-gray-400 mb-16 max-w-xl mx-auto text-lg">
            I specialize in building modern web applications with a focus on user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { icon: <Code2 />, title: "Clean Code", desc: "Writing maintainable, scalable, and efficient code solutions." },
              { icon: <Paintbrush />, title: "Creative Design", desc: "Crafting beautiful interfaces with attention to every detail." },
              { icon: <Rocket />, title: "Modern Stack", desc: "Using cutting-edge technologies to build amazing experiences." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl hover:border-purple-500/40 hover:bg-white/[0.06] transition-all group">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EYE-CATCHING DIVIDER 2 */}
      <div className="relative w-full px-8">
        <div className="max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </div>

      {/* 3. CTA SECTION */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#050505]">
        {/* --- ADDED BACKGROUND GLOWS --- */}
        {/* Large Central Purple Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
        
        {/* Subtle Cyan Glow Offset to the Right */}
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        
        {/* Subtle Purple Glow Offset to the Left */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        {/* ------------------------------ */}
        
        <div className="max-w-4xl mx-auto text-center bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-12 md:p-24 rounded-[40px] relative z-10 shadow-2xl shadow-purple-900/20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Something Amazing</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed text-lg">
            Ready to start your next project? Let's collaborate and create something extraordinary together.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-purple-800 px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-purple-500/30 hover:scale-105 transition-all">
            Start a Conversation <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      {/* FINAL DIVIDER BEFORE FOOTER */}
      <div className="w-full bg-[#050505] px-8 pb-10">
        <div className="max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

    </div>
  );
};

export default Home;