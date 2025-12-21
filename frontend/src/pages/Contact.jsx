import { useState } from 'react';
import API from '../api';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/contact', form);
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send message.');
    }
  };

  return (
    <section className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 border rounded" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" className="p-3 border rounded" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Message" className="p-3 border rounded" rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
        <button type="submit" className="bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
