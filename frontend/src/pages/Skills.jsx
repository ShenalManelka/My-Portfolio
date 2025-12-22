import React from 'react';
import { motion } from 'framer-motion'; // Added Framer Motion
import SkillCard from '../components/SkillCard';
import { 
  Globe, Server, Cpu, Database, Box, Cloud, Palette, Terminal, 
  Lightbulb, Users, MessageSquare, Clock, ShieldCheck, Zap, 
  RotateCcw, Smartphone, Bell, Flame, Workflow, GitMerge, 
  Search, Layers, FileCode, Layout
} from 'lucide-react';

const Skills = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const frontendSkills = [
    { name: 'React', level: 95 },
    { name: 'Flutter (Web/Mobile)', level: 85 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Next.js', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 88 },
    { name: 'Firebase Functions', level: 85 },
    { name: 'Firebase Messaging', level: 80 },
    { name: 'MongoDB/SQL', level: 82 },
    { name: 'Python', level: 75 },
  ];

  const tools = [
    { name: 'Git & GitHub', level: 92 },
    { name: 'Docker', level: 78 },
    { name: 'AWS/Cloud', level: 75 },
    { name: 'Figma', level: 70 },
    { name: 'CI/CD', level: 80 },
  ];

  const engineeringSkills = [
    { name: 'OOP', icon: <FileCode size={24} />, desc: 'Object Oriented Programming', color: 'text-emerald-400' },
    { name: 'SDLC', icon: <Workflow size={24} />, desc: 'Software Dev Life Cycle', color: 'text-blue-400' },
    { name: 'Agile', icon: <GitMerge size={24} />, desc: 'Scrum & Methodology', color: 'text-purple-400' },
    { name: 'UML', icon: <Layout size={24} />, desc: 'System Modeling', color: 'text-orange-400' },
    { name: 'Requirements', icon: <Search size={24} />, desc: 'Analysis & Planning', color: 'text-pink-400' },
    { name: 'System Design', icon: <Layers size={24} />, desc: 'Architecture Patterns', color: 'text-cyan-400' },
  ];

  const techStack = [
    { name: 'React', icon: <Globe size={20} />, color: 'text-blue-400' },
    { name: 'Flutter', icon: <Smartphone size={20} />, color: 'text-cyan-400' },
    { name: 'Firebase', icon: <Flame size={20} />, color: 'text-orange-500' },
    { name: 'FCM', icon: <Bell size={20} />, color: 'text-yellow-500' },
    { name: 'Node.js', icon: <Server size={20} />, color: 'text-green-500' },
    { name: 'Docker', icon: <Box size={20} />, color: 'text-blue-400' },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Lightbulb size={24} />, color: "text-yellow-400" },
    { name: "Team Collaboration", icon: <Users size={24} />, color: "text-blue-400" },
    { name: "Communication", icon: <MessageSquare size={24} />, color: "text-green-400" },
    { name: "Time Management", icon: <Clock size={24} />, color: "text-purple-400" },
    { name: "Adaptability", icon: <RotateCcw size={24} />, color: "text-orange-400" },
    { name: "Responsibility", icon: <ShieldCheck size={24} />, color: "text-cyan-400" },
  ];

  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-24 px-6 overflow-hidden">
      {/* Animated Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            Expertise
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Engineering</span>
          </h2>
        </motion.div>

        {/* 1. Software Engineering Principles */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold">Software Engineering</h3>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"
            ></motion.div>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {engineeringSkills.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-500"
              >
                <div className={`${item.color} mb-5 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 2. Technical Skill Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32"
        >
          <motion.div variants={fadeInUp}><SkillCard title="Frontend" skills={frontendSkills} gradientColor="from-purple-600 to-purple-400" /></motion.div>
          <motion.div variants={fadeInUp}><SkillCard title="Backend & Firebase" skills={backendSkills} gradientColor="from-cyan-600 to-cyan-400" /></motion.div>
          <motion.div variants={fadeInUp}><SkillCard title="Tools & DevOps" skills={tools} gradientColor="from-gray-600 to-gray-400" /></motion.div>
        </motion.div>

        {/* 3. Soft Skills */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-center mb-12">Soft Skills</h3>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {softSkills.map((skill, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="group p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col items-center text-center gap-4 hover:bg-white/[0.07] transition-all"
              >
                <div className={`${skill.color} group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 4. Tech Stack Footer */}
        <div className='mb-33'>
          <h3 className="text-4xl font-bold text-center mb-12">Tech Stack</h3>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-16 border-t border-white/5"
          >
            {techStack.map((tech, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="group p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col items-center gap-4 transition-all"
              >
                <div className={`${tech.color} group-hover:rotate-12 transition-transform`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;