import React from 'react';

const ProjectsContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">Projects</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-purple-500">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Interactive RAG Application</h2>
          <span className="text-gray-400 text-sm">Nov. 2024</span>
        </div>
        <p className="text-gray-400 mb-4">Python, BeautifulSoup, ChromaDB, OpenAI, Streamlit</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Developed a Q&A web application integrating Retrieval-Augmented Generation (RAG) for real-time information retrieval from scraped data</li>
          <li>Implemented web scraping with BeautifulSoup to extract and structure FAQ data from a live webpage, improving data processing for further use</li>
          <li>Utilized ChromaDB with embeddings to efficiently store and retrieve contextually relevant information for answering queries</li>
          <li>Integrated OpenAI API for generating detailed answers to user queries by leveraging stored FAQ data and semantic search with embeddings</li>
        </ul>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-indigo-500">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">knoME</h2>
          <span className="text-gray-400 text-sm">Aug. 2024 – Present</span>
        </div>
        <p className="text-gray-400 mb-4">Javascript, TailwindCSS, React, Git</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Developed an interactive relationship-focused web application, incorporating features such as task management, shared calendars, and location sharing for couples</li>
          <li>Implemented smooth user interfaces using TailwindCSS and integrated animations with GSAP for enhanced user experience</li>
          <li>Utilized React hooks and functional components to build modular, maintainable, and efficient code</li>
        </ul>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Personal Portfolio Website</h2>
          <span className="text-gray-400 text-sm">Jun. 2023 – Aug. 2023</span>
        </div>
        <p className="text-gray-400 mb-4">Javascript, HTML/CSS, React, Tailwind</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Developed a full-stack personal portfolio website to showcase projects and experience</li>
          <li>Leveraged GitHub for source control, integrated a custom domain via DNS configuration, and optimized site performance and security with Cloudflare's edge network services</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsContent;