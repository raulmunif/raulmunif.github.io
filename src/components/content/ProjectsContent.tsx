import React from 'react';

const ProjectsContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">Projects</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-red-500">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Emergency Alert System</h2>
          <span className="text-gray-400 text-sm">Mar. 2025</span>
        </div>
        <p className="text-gray-400 mb-4">Next.js, React, TailwindCSS, Mapbox API</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Developed a real-time emergency alert dashboard that displays various types of alerts including transport issues, weather events, and fire warnings</li>
          <li>Implemented interactive filtering by category and severity with a responsive UI using TailwindCSS and Shadcn UI components</li>
          <li>Integrated map visualization using Mapbox to display alert locations and provide geographical context</li>
          <li>Created a location-based nearby alerts feature that calculates distance using the Haversine formula and allows users to adjust search radius</li>
          <li>Built a natural language query system that allows users to ask questions about current situations in plain English</li>
        </ul>
      </div>
      
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
        <p className="text-gray-400 mb-4">Javascript, TailwindCSS, React, Node.js, MongoDB</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Built a personal productivity web application that helps users organize their daily life with customizable dashboards</li>
          <li>Designed and implemented a modern UI with dark mode support using TailwindCSS and custom animations</li>
          <li>Created a robust backend with Node.js and Express that handles data persistence through MongoDB</li>
          <li>Implemented secure user authentication with JWT and bcrypt for password hashing</li>
          <li>Developed real-time notification features using Socket.io to keep users updated on important events</li>
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