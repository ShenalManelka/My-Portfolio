import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

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
    <section className="min-h-screen bg-[#050505] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-6 tracking-tighter">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Connect</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <InfoItem icon={<Mail size={20}/>} label="Email" value="shenalmanelka774@gmail.com" />
                <InfoItem icon={<Phone size={20}/>} label="Phone" value="+94702242247" />
                <InfoItem icon={<MapPin size={20}/>} label="Location" value="Gampaha, Sri Lanka" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <SocialBtn icon={<Github size={20}/>} />
                <SocialBtn icon={<Linkedin size={20}/>} />
                <SocialBtn icon={<Twitter size={20}/>} />
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <form onSubmit={handleSubmit} className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 space-y-6">
            <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            <textarea 
                name="message" value={formData.message} onChange={handleChange} 
                placeholder="Tell me about your project..." rows="5"
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-purple-500 transition-colors"
            />
            <button 
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Helpers
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-5 p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-white/20 transition-colors">
    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">{icon}</div>
    <div>
      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{label}</p>
      <p className="font-medium text-white/90">{value}</p>
    </div>
  </div>
);

const Input = ({ ...props }) => (
  <input {...props} className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-purple-500 transition-colors" />
);

const SocialBtn = ({ icon }) => (
  <button className="p-3 bg-white/[0.05] border border-white/10 rounded-xl hover:bg-white/10 transition-colors">{icon}</button>
);

export default Contact;