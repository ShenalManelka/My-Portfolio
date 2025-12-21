import { useEffect, useState } from 'react';
import SkillCard from '../components/SkillCard';
import API from '../api';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await API.get('/skills');
        setSkills(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
