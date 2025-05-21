import React from 'react';

const ExperienceContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-green-400 mb-6">Work Experience</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-green-500">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Software Engineer</h2>
          <span className="text-gray-400 text-sm">May 2024 – Jul. 2024</span>
        </div>
        <h3 className="text-lg text-gray-400 mb-4">DoryAI, Sydney, Australia</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Developed REST APIs using FastAPI to handle high volume requests, ensuring efficient data processing</li>
          <li>Authored technical documentation and API guides that increased the efficiency of onboarding other developers</li>
          <li>Collaborated with front-end developers to create responsive, user-centric web applications using React, improving user engagement</li>
          <li>Conducted code reviews to foster a culture of continuous learning and code quality improvement among the development team</li>
        </ul>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Private Tutor</h2>
          <span className="text-gray-400 text-sm">Dec. 2021 – Present</span>
        </div>
        <h3 className="text-lg text-gray-400 mb-4">Self Employed, Sydney, Australia</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Tutored students from Year 4 to Year 12 in mathematics, achieving an average improvement of 20% in their first assessment marks</li>
          <li>Developed and implemented customized lesson plans tailored to individual student needs, effectively targeting specific learning gaps and enhancing understanding</li>
          <li>Provided one-on-one support and mentorship, fostering a positive learning environment and boosting student confidence and performance</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceContent;