import React from 'react';

const AboutContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">About Me</h1>
      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <p className="mb-4">I'm a Bachelor of Computer Science and Commerce (Finance) student at the University of New South Wales, Sydney.</p>
        <p className="mb-4">I'm passionate about software development, particularly web applications and data-driven solutions. My combined background in computer science and finance gives me a unique perspective on building technology solutions with business value in mind.</p>
        <p>When I'm not coding, I'm teaching others as a private tutor, participating in programming competitions, or working on personal projects to expand my skills.</p>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Professional Interests</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full-stack web development</li>
          <li>Data-driven applications</li>
          <li>Financial technology</li>
          <li>AI and machine learning integration</li>
          <li>Software architecture</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutContent;