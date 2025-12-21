import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold">Shenal Manelka</Link>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <span className="text-2xl">{open ? '✖' : '☰'}</span>
          </button>
        </div>
        <ul className={`md:flex md:space-x-6 ${open ? 'block' : 'hidden'}`}>
          <li><Link to="/" className="hover:text-indigo-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-indigo-500">About</Link></li>
          <li><Link to="/skills" className="hover:text-indigo-500">Skills</Link></li>
          <li><Link to="/projects" className="hover:text-indigo-500">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-indigo-500">Contact</Link></li>
          <li><Link to="/register" className="hover:text-indigo-500">Register</Link></li>
          <li><Link to="/login" className="hover:text-indigo-500">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
