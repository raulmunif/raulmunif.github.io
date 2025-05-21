import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Phone } from '../common/Icons';

const ContactContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-400 mb-6">Contact</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="mb-6">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        
        <div className="space-y-4">
          <a href="mailto:raulmunif34@gmail.com" className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <Mail className="h-6 w-6 text-pink-400 mr-4" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-400">raulmunif34@gmail.com</p>
            </div>
          </a>
          
          <a href="tel:0435775134" className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <Phone className="h-6 w-6 text-green-400 mr-4" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-400">0435 775 134</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/raul-munif/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <Linkedin className="h-6 w-6 text-blue-400 mr-4" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-gray-400">linkedin.com/in/raul</p>
            </div>
          </a>
          
          <a href="https://github.com/raulmunif" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <Github className="h-6 w-6 text-purple-400 mr-4" />
            <div>
              <p className="font-medium">GitHub</p>
              <p className="text-gray-400">github.com/raul</p>
            </div>
          </a>
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Send Me a Message</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactContent;