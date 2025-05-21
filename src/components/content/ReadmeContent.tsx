import React from 'react';
import { User, Briefcase, Code, Mail } from 'lucide-react';

const ReadmeContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">Raul Munif</h1>
      <p className="text-lg mb-4">👋 Welcome to my portfolio!</p>
      <p className="mb-4">I'm a Computer Science and Commerce student at UNSW Sydney with experience in full-stack development.</p>
      <p className="mb-6">Navigate through the folders on the left to explore my experience, projects, skills, and more.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold mb-2 flex items-center"><User className="h-5 w-5 mr-2 text-blue-400" /> About</h2>
          <p>Computer Science and Commerce student passionate about creating innovative software solutions.</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
          <h2 className="text-xl font-semibold mb-2 flex items-center"><Briefcase className="h-5 w-5 mr-2 text-green-400" /> Experience</h2>
          <p>Software Engineer at DoryAI and experienced Private Tutor.</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
          <h2 className="text-xl font-semibold mb-2 flex items-center"><Code className="h-5 w-5 mr-2 text-purple-400" /> Projects</h2>
          <p>Interactive RAG Application, knoME web app, and more.</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-pink-500">
          <h2 className="text-xl font-semibold mb-2 flex items-center"><Mail className="h-5 w-5 mr-2 text-pink-400" /> Contact</h2>
          <p>Let's connect! Find my contact details in the contact section.</p>
        </div>
      </div>
      
      <div className="mt-8 text-gray-400 text-sm">
      </div>
    </div>
  );
};

export default ReadmeContent;