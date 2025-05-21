import React from 'react';

const SkillsContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-red-400 mb-6">Technical Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
          <h2 className="text-xl font-semibold mb-4">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {['Java', 'Python', 'C', 'JavaScript', 'HTML/CSS', 'R'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
          <h2 className="text-xl font-semibold mb-4">Frameworks</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'Flask', 'JUnit', 'Tailwindcss', 'Material-UI', 'GSAP', 'FastAPI'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold mb-4">Developer Tools</h2>
          <div className="flex flex-wrap gap-2">
            {['Git', 'Docker', 'VS Code', 'Visual Studio', 'PyCharm', 'IntelliJ', 'Eclipse'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
          <h2 className="text-xl font-semibold mb-4">Soft Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership', 'Time Management', 'Critical Thinking'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;