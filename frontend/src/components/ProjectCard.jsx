const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-2">{project.description}</p>
      <p className="text-sm text-gray-500 mb-2">Tech: {project.techStack.join(', ')}</p>
      <a href={project.link} className="text-indigo-600 hover:underline">View Project</a>
    </div>
  );
};

export default ProjectCard;
