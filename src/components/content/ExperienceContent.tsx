import React from 'react';

const ExperienceContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-green-400 mb-6">Work Experience</h1>
      
      {/* Auto & General Australia */}
      <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-purple-500">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Software Developer</h2>
          <span className="text-gray-400 text-sm">Jan. 2025 – Present</span>
        </div>
        <h3 className="text-lg text-gray-400 mb-4">Auto & General Australia, Sydney, NSW (Part-time)</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contribute to the development of AI-powered applications for both internal company use and external customer-facing products.</li>
          <li>Collaborate with a dynamic team in an AI scale-up environment, focusing on rapid prototyping and iterative development cycles.</li>
          <li>Assist in designing, building, and maintaining scalable software solutions that integrate machine learning models and data analytics.</li>
        </ul>
      </div>

      {/* DoryAI */}
      <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-green-500">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Software Engineer</h2>
          <span className="text-gray-400 text-sm">May 2024 – Jul. 2024</span>
        </div>
        <h3 className="text-lg text-gray-400 mb-4">DoryAI, Sydney, NSW (Hybrid)</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Developed and tested RESTful API endpoints for user management features.</li>
          <li>Assisted senior engineers in debugging and resolving software defects, contributing to improved application stability.</li>
          <li>Participated in team meetings, gaining exposure to Agile development methodologies and software development lifecycle practices.</li>
          <li>Prepared and maintained technical documentation for API functionalities and internal processes.</li>
        </ul>
      </div>
      
      {/* UNSW Software Development Society (DevSoc) */}
      <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-yellow-500">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Training Program Team Lead</h2>
          <span className="text-gray-400 text-sm">Feb. 2024 – Jul. 2024</span>
        </div>
        <h3 className="text-lg text-gray-400 mb-4">UNSW Software Development Society (DevSoc), Sydney, NSW</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Led and mentored a team of 5 computer science students through a training program focused on practical web application development.</li>
          <li>Provided guidance on software design principles, coding best practices, and effective teamwork strategies.</li>
          <li>Facilitated regular team meetings, code reviews, and feedback sessions to support skill development and project progression.</li>
          <li>Successfully guided the team in the conceptualization and initial development of a web application.</li>
        </ul>
      </div>

    </div>
  );
};

export default ExperienceContent;