import React from 'react';
import { Code, Minus, Maximize2, X } from 'lucide-react';

const TitleBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center space-x-2">
        <Code className="h-5 w-5 text-blue-500" />
        <span className="text-sm">Raul Munif - Portfolio</span>
      </div>
      <div className="flex space-x-4">
        <Minus className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />
        <Maximize2 className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />
        <X className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default TitleBar;