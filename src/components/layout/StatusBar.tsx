import React from 'react';
import { Github } from 'lucide-react';

const StatusBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-4 py-1 bg-blue-600 text-white text-xs">
      <div className="flex items-center space-x-4">
        <span className="flex items-center">
          <span className="flex items-center"><Github className="h-4 w-4 mr-1" /> main</span>
        </span>
        <span>UTF-8</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>JavaScript</span>
        <span>Ln 1, Col 1</span>
      </div>
    </div>
  );
};

export default StatusBar;