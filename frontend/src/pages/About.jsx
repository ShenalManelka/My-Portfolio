import { FaLaptopCode, FaUsers, FaProjectDiagram } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaLaptopCode size={30} />, value: '2+', label: 'Years Experience' },
    { icon: <FaProjectDiagram size={30} />, value: '10+', label: 'Projects Completed' },
    { icon: <FaUsers size={30} />, value: '5+', label: 'Clients Worked With' },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Intro */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
            <p className="text-gray-600 mb-4">
              Hi, I'm <span className="font-semibold text-indigo-600">Shenz</span>, a passionate Software Engineer and Web Developer. 
              I love building interactive, responsive, and modern web applications that provide real value to users.
            </p>
            <p className="text-gray-600">
              My focus is on creating clean, maintainable code, leveraging the latest technologies like React, Node.js, Tailwind CSS, and MongoDB.
              I enjoy collaborating with clients and teams to deliver projects that exceed expectations.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Shenz Portfolio" 
              className="rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <div className="text-indigo-600 mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
