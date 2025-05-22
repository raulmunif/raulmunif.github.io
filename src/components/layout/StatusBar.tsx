import React from 'react';
import { Github, Bell, TerminalSquare } from 'lucide-react'; // Added TerminalSquare

interface StatusBarProps {
  toggleTerminal: () => void;
}

const StatusBar: React.FC<StatusBarProps> = ({ toggleTerminal }) => {
  return (
    <div className="flex justify-between items-center px-4 py-1 bg-blue-600 text-white text-xs select-none">
      <div className="flex items-center space-x-4">
        <span className="flex items-center">
          <Github className="h-4 w-4 mr-1" /> main
        </span>
        {/* Placeholder items - can be made dynamic later */}
        <span>UTF-8</span>
        <span>Spaces: 2</span>
      </div>
      <div className="flex items-center space-x-4">
        {/* Placeholder items - can be made dynamic later */}
        <span>TypeScript React</span>
        <button 
          onClick={toggleTerminal} 
          className="flex items-center hover:bg-blue-500 px-2 py-0.5 rounded"
          title="Toggle Terminal Panel"
        >
          <TerminalSquare className="h-4 w-4 mr-1" />
          <span>Terminal</span>
        </button>
        <Bell className="h-4 w-4" />
        <span>Raul Munif</span>
      </div>
    </div>
  );
};

export default StatusBar;