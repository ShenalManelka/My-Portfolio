import { useState } from 'react';
import API from '../api';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.get('/users'); // Example: fetch all users
      const user = res.data.find(u => u.email === form.email && u.password === form.password);
      if (user) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      alert('Login failed.');
    }
  };

  return (
    <section className="max-w-md mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" className="p-3 border rounded" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" className="p-3 border rounded" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition">Login</button>
      </form>
    </section>
  );
};

export default Login;
