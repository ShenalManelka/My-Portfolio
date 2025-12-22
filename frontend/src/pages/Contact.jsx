import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Added Framer Motion
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert("Message Sent Successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      alert("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#050505] text-white py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-6 tracking-tighter">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Connect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Info */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-6">Contact Information</motion.h3>
              <div className="space-y-4">
                <motion.a variants={fadeInUp} href="mailto:shenalmanelka774@gmail.com" className="block hover:no-underline">
                  <InfoItem 
                    icon={<Mail size={20}/>} 
                    label="Email" 
                    value="shenalmanelka774@gmail.com" 
                  />
                </motion.a>
                <motion.a variants={fadeInUp} href="tel:0702242247" className="block hover:no-underline">
                  <InfoItem icon={<Phone size={20}/>} label="Phone" value="+94702242247" />
                </motion.a>
                <motion.div variants={fadeInUp}>
                  <InfoItem icon={<MapPin size={20}/>} label="Location" value="Gampaha, Sri Lanka" />
                </motion.div>
              </div>
            </div>
            
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/ShenalManelka" target="_blank" rel="noreferrer">
                  <SocialBtn icon={<Github size={20}/>} />
                </a>
                <a href="https://www.linkedin.com/in/shenalmanelka" target="_blank" rel="noreferrer">
                  <SocialBtn icon={<Linkedin size={20}/>} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit} 
            className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 space-y-6 shadow-2xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            <motion.textarea 
                whileFocus={{ borderColor: "rgba(168, 85, 247, 0.5)" }}
                name="message" value={formData.message} onChange={handleChange} 
                placeholder="Tell me about your project..." rows="5"
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none transition-colors"
            />
            <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
            >
              {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

// Helpers (With Internal Animations)
const InfoItem = ({ icon, label, value }) => (
  <motion.div 
    whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
    className="flex items-center gap-5 p-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all cursor-pointer"
  >
    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">{icon}</div>
    <div>
      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{label}</p>
      <p className="font-medium text-white/90">{value}</p>
    </div>
  </motion.div>
);

const Input = ({ ...props }) => (
  <motion.input 
    whileFocus={{ scale: 1.01, borderColor: "rgba(168, 85, 247, 0.5)" }}
    {...props} 
    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none transition-all" 
  />
);

const SocialBtn = ({ icon }) => (
  <motion.button 
    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    whileTap={{ scale: 0.9 }}
    className="p-3 bg-white/[0.05] border border-white/10 rounded-xl transition-colors"
  >
    {icon}
  </motion.button>
);

export default Contact;