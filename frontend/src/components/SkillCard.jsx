import React from 'react';

const SkillCard = ({ title, skills, gradientColor }) => {
  return (
    <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[2rem] backdrop-blur-3xl shadow-2xl hover:border-white/20 transition-all duration-300">
      <h3 className="text-xl font-bold mb-8 text-white/90 border-b border-white/5 pb-4">
        {title}
      </h3>
      <div className="space-y-8">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              <span className="text-xs font-bold text-gray-500">{skill.level}%</span>
            </div>
            {/* Progress Bar Track */}
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              {/* Animated Progress Fill */}
              <div 
                className={`h-full bg-gradient-to-r ${gradientColor} transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;