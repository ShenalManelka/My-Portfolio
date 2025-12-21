import { useState } from 'react';
import API from '../api';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/users', form);
      alert('Registration successful!');
      setForm({ username: '', email: '', password: '' });
    } catch (err) {
      console.error(err);
      alert('Registration failed.');
    }
  };

  return (
    <section className="max-w-md mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Username" className="p-3 border rounded" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
        <input type="email" placeholder="Email" className="p-3 border rounded" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" className="p-3 border rounded" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition">Register</button>
      </form>
    </section>
  );
};

export default Register;
