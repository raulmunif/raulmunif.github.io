import React from 'react';

const EducationContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Education</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">University of New South Wales Sydney</h2>
          <span className="text-gray-400 text-sm">Feb. 2022 – Nov 2025</span>
        </div>
        <p className="text-lg text-gray-300 mb-4">Bachelor of Computer Science and Commerce (Finance)</p>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">Extracurricular Activities</h3>
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded">
            <h4 className="font-medium">UNSW Software Development Society Trainee Lead</h4>
            <p className="text-sm text-gray-400">Feb. 2024 – Aug. 2024</p>
            <p className="text-sm mt-2">Javascript, React, Git</p>
          </div>
          
          <div className="bg-gray-700 p-4 rounded">
            <h4 className="font-medium">International Collegiate Programming Contest (ICPC)</h4>
            <p className="text-sm text-gray-400">Nov. 2023</p>
            <p className="text-sm mt-2">Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationContent;