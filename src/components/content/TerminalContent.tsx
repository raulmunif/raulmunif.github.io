import React from 'react';
import { Terminal } from 'lucide-react'; // Using an icon for VS Code feel

const TerminalContent: React.FC = () => {
  const getCurrentTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="font-mono text-gray-300 p-4 h-full overflow-auto bg-gray-950"> {/* Darker background, slightly lighter text */}
      <div className="flex items-center mb-4"> {/* Welcome message with icon */}
        <Terminal className="h-6 w-6 mr-2 text-green-400" />
        <span className="text-xl text-green-400">VSCode Portfolio Terminal</span>
      </div>
      
      <div className="mb-2">
        <span>--------------------------------------------------------------------</span>
        <br />
        <span>Welcome! This is a simulated terminal interface.</span>
        <br />
        <span>Feel free to look around the portfolio.</span>
        <br />
        <span>--------------------------------------------------------------------</span>
      </div>

      <div className="mb-2">
        <span className="text-gray-500">Last login: {new Date().toDateString()} {getCurrentTime()} on ttys000</span>
      </div>
      
      {/* Example of how command output might look */}
      <div className="mb-1">
        <span className="text-cyan-400">~/portfolio</span>
        <span className="text-pink-500"> (main)</span>
        <span> $</span> ls -la
      </div>
      <div className="mb-2 whitespace-pre-wrap">
        {`drwxr-xr-x  12 user  group   384 Jul 21 10:17 .
drwxr-xr-x   5 user  group   160 Jul 20 09:00 ..
-rw-r--r--   1 user  group  1532 Jul 21 10:00 README.md
-rw-r--r--   1 user  group   875 Jul 20 14:30 about.txt
-rw-r--r--   1 user  group  1204 Jul 20 15:00 projects.json
... (more files here) ...`}
      </div>

      <div className="mb-2">
        Type <span className="text-yellow-400">'help'</span> for a list of available commands (feature coming soon!).
      </div>

      {/* Current command line prompt */}
      <div className="mt-auto"> {/* Pushes prompt to bottom if content is short */}
        <span className="text-cyan-400">~/portfolio</span>
        <span className="text-pink-500"> (main)</span> {/* Git branch indication like OhMyZsh */}
        <span> $ </span>
        <span className="animate-pulse">▋</span>
      </div>
    </div>
  );
};

export default TerminalContent;
