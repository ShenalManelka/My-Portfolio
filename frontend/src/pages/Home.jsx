import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Added Framer Motion
import { ArrowRight, Code2, Paintbrush, Rocket, Download, Mail } from 'lucide-react';
import profileImg from '../assets/myImage.png';

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="relative w-full bg-[#050505] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center py-20">
        {/* Animated Hero Mesh Gradients */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" 
        />

        <main className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24 px-6 max-w-[1400px] mx-auto w-full">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-left order-2 lg:order-1"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-8 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
              Available for new opportunities
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
              Hi, I'm <span className="text-purple-500">Shenal</span> <br />
              <span className="text-cyan-400">Manelka</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
              A passionate full-stack developer crafting beautiful digital experiences. 
              I specialize in building modern web applications with high performance.
            </motion.p>

            {/* BUTTON GROUP */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/projects" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-purple-500/20 group transition-all hover:scale-105 active:scale-95">
                View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="/Shenal_Manelka_CV.pdf"
                download="Shenal_Manelka_CV.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 transition-all hover:scale-105 shadow-lg shadow-cyan-500/5"
              >
                Download CV <Download size={20} />
              </a>

              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 text-center rounded-2xl font-bold text-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                Contact
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-[3rem] blur opacity-30 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-[3rem] overflow-hidden border border-white/10 bg-[#050505] shadow-2xl">
                <img 
                  src={profileImg} 
                  alt="Shenal Manelka" 
                  className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                />
              </div>

              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </main>
      </section>

      {/* SECTION DIVIDER */}
      <div className="relative w-full px-8">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" 
        />
      </div>

      {/* 2. SERVICES / WHAT I DO SECTION */}
      <section className="relative py-32 px-6 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-400 mb-16 max-w-xl mx-auto text-lg">
              I build modern, scalable web applications with a focus on clean design and exceptional user experience.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          >
            {[
              { icon: <Code2 />, title: "Clean Code", desc: "Building modular, readable, and efficient software architecture." },
              { icon: <Paintbrush />, title: "Creative Design", desc: "User-centric interfaces that blend aesthetics with functionality." },
              { icon: <Rocket />, title: "High Performance", desc: "Optimizing for speed, SEO, and seamless interactivity." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-8 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl hover:border-purple-500/40 hover:bg-white/[0.06] transition-all group"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#050505]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto text-center bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-12 md:p-24 rounded-[40px] relative z-10 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Something Amazing</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed text-lg">
            Have a project in mind? Let's collaborate to turn your vision into a reality.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-purple-800 px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-purple-500/30 hover:scale-105 transition-all">
            Start a Conversation <ArrowRight size={24} />
          </Link>
        </motion.div>
      </section>

      {/* FOOTER DIVIDER */}
      <div className="w-full bg-[#050505] px-8 pb-10">
        <div className="max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

    </div>
  );
};

export default Home;