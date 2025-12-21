const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
      <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
      <p className="text-gray-700">{skill.level}</p>
    </div>
  );
};

export default SkillCard;
