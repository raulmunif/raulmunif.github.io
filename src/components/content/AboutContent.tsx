import React from 'react';

const AboutContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">About Me</h1>
      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <p className="mb-4">Hello! I'm a Computer Science and Commerce student at the University of New South Wales (UNSW) with a deep passion for software engineering. I get excited about building innovative and scalable solutions, focusing on crafting elegant, efficient code and designing robust system architectures.</p>
        <p className="mb-4">My dual background in technology and finance offers me a unique viewpoint, allowing me to approach complex problems and develop solutions that are not only technically sound but also make good business sense. I genuinely enjoy collaborating with teams to create impactful results and am always eager to dive into challenging projects that push the boundaries of what's possible.</p>
        <p>Beyond my academic and professional work, you'll often find me teaching as a private tutor, sharpening my skills in programming competitions, or exploring new technologies through personal projects.</p>
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