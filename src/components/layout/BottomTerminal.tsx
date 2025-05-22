import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, X } from 'lucide-react';

// Assuming SearchableItem is defined in VSCodePortfolio.tsx and passed as prop
// For clarity, let's define it here too for this file's context if not using a global types file
interface SearchableItem {
    id: string; // e.g., "readme", "about"
    type: 'page' | 'section' | 'project';
    title: string; // e.g., "README.md", "About Me" (this is the tab name)
    keywords: string[];
    description?: string;
}

interface BottomTerminalProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  searchableData: SearchableItem[];
  navigateTo: (file: string, contentId?: string) => void; // New prop
}

const BottomTerminal: React.FC<BottomTerminalProps> = ({ 
    isVisible, 
    toggleVisibility, 
    searchableData, 
    navigateTo 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  const ohMyZshStyleAscii = `
  ____  _   _ ____  _     ___ ____ ____  
 / __ \| | | |  _ \| |   |_ _|___ \___ \ 
| |  | | | | | |_) | |    | | __) |__) |
| |  | | |_| |  __/| |___ | |/ __/ __/  
 \__\_\\___/|_|   |_____|___|_____|_____|
  `;
  const welcomeMessage = "Welcome to Raul's VSCode Portfolio Terminal!";

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && commandHistory.length === 0) {
        setCommandHistory([
            `RAINBOW_ASCII:${ohMyZshStyleAscii}`,
            `RAINBOW_TEXT:${welcomeMessage}`,
            "Type <span class=\"text-yellow-400\">help</span> for available commands.",
            "Try: <span class=\"text-green-400\">search projects</span> or <span class=\"text-green-400\">help</span>"
        ]);
    }
  }, [isVisible, commandHistory.length, ohMyZshStyleAscii, welcomeMessage]);

  useEffect(() => {
     if (terminalContentRef.current) {
         terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
     }
  }, [commandHistory]);

  const processCommand = (command: string) => {
    let newHistory = [...commandHistory, `PROMPT:${command}`];
    const [cmd, ...args] = command.trim().split(' ');
    const query = args.join(' ');

    switch (cmd.toLowerCase()) {
      case 'help':
        newHistory.push("Available commands:");
        newHistory.push("- <span class='text-green-400'>search &lt;query&gt;</span>: Search portfolio content.");
        newHistory.push("- <span class='text-green-400'>clear</span>: Clear the terminal.");
        newHistory.push("- <span class='text-green-400'>welcome</span>: Display the welcome message again.");
        newHistory.push("- <span class='text-yellow-400'>Tip:</span> Click on search results to navigate.");
        break;
      case 'search':
        if (!query) {
          newHistory.push("Usage: search <query>");
          break;
        }
        const results = searchableData.filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords.some(k => k.toLowerCase().includes(query.toLowerCase())) ||
          (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
        );
        if (results.length > 0) {
          newHistory.push(`Search results for "${query}" (click to navigate):`);
          results.forEach((item, index) => {
            newHistory.push(`RESULT:${index}:${item.title}:${item.id}:${item.description || item.type}`);
          });
        } else {
          newHistory.push(`No results found for "${query}".`);
        }
        break;
      case 'clear':
        // Set to empty array, initial messages will be repopulated by the useEffect
        // if terminal is closed and reopened, or by typing 'welcome'.
        setCommandHistory([]); 
        return; 
      case 'welcome':
          setCommandHistory([ 
              `RAINBOW_ASCII:${ohMyZshStyleAscii}`,
              `RAINBOW_TEXT:${welcomeMessage}`,
              "Type <span class=\"text-yellow-400\">help</span> for available commands.",
              "Try: <span class=\"text-green-400\">search projects</span> or <span class=\"text-green-400\">help</span>"
          ]);
          return;
      default:
        if (command.trim() !== '') {
         newHistory.push(`Command not found: ${command}. Type 'help' for available commands.`);
        }
        break;
    }
    setCommandHistory(newHistory);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    processCommand(inputValue);
    setInputValue('');
  };

 const handleResultClick = (title: string, contentId: string) => {
   navigateTo(title, contentId); 
   setCommandHistory(prev => [...prev, `Navigating to <span class="text-cyan-400">${title}</span>...`]);
 };

 const renderHistoryItem = (item: string, index: number) => {
    if (item.startsWith("RAINBOW_ASCII:")) {
      return <pre key={index} className="rainbow-text text-lg whitespace-pre-wrap">{item.substring("RAINBOW_ASCII:".length)}</pre>;
    }
    if (item.startsWith("RAINBOW_TEXT:")) {
      return <div key={index} className="rainbow-text mt-1">{item.substring("RAINBOW_TEXT:".length)}</div>;
    }
    if (item.startsWith("PROMPT:")) {
        return (
            <div key={index} className="flex">
              <span className="text-cyan-400">~/portfolio</span>
              <span className="text-pink-500">&nbsp;(main)</span>
              <span className="text-gray-300">&nbsp;$ </span>
              <span className="ml-1">{item.substring("PROMPT:".length)}</span>
            </div>
        );
    }
   if (item.startsWith("RESULT:")) {
     const parts = item.split(':');
     const resultTitle = parts[2]; 
     const resultContentId = parts[3]; 
     const resultDescription = parts.slice(4).join(':'); 

     return (
       <div key={index} className="pl-2">
         <button 
           onClick={() => handleResultClick(resultTitle, resultContentId)}
           className="text-cyan-400 hover:underline focus:outline-none"
         >
           {resultTitle}
         </button>
         <span className="text-gray-500 ml-2">- {resultDescription}</span>
       </div>
     );
   }
   return <div key={index} dangerouslySetInnerHTML={{ __html: item }} />;
 };

 if (!isVisible) {
     return null;
 }

 return (
     <div 
         className="fixed bottom-0 left-0 right-0 h-1/3 bg-gray-900 border-t border-gray-700 text-gray-300 flex flex-col shadow-2xl"
         onClick={() => inputRef.current?.focus()}
     >
       <div className="flex items-center justify-between p-1 bg-gray-800 border-b border-gray-600 select-none">
         <span className="ml-2 font-medium text-sm">TERMINAL</span>
         <div className="flex items-center">
           <button title="Hide Terminal" onClick={toggleVisibility} className="p-1 hover:bg-gray-700 rounded">
             <ChevronDown className="h-5 w-5" />
           </button>
           <button title="Close Terminal" onClick={toggleVisibility} className="p-1 hover:bg-red-600 hover:text-white rounded ml-1">
             <X className="h-5 w-5" />
           </button>
         </div>
       </div>
       <div ref={terminalContentRef} className="flex-1 p-3 font-mono text-xs overflow-auto custom-scrollbar">
         {commandHistory.map(renderHistoryItem)}
         <form onSubmit={handleInputSubmit} className="flex mt-1">
           <span className="text-cyan-400">~/portfolio</span>
           <span className="text-pink-500">&nbsp;(main)</span>
           <span className="text-gray-300">&nbsp;$ </span>
           <input
             ref={inputRef}
             type="text"
             value={inputValue}
             onChange={handleInputChange}
             className="flex-1 bg-transparent text-gray-300 outline-none ml-1 placeholder-gray-500"
             placeholder="Type a command..."
             spellCheck="false"
             autoCapitalize="none"
             autoComplete="off"
           />
         </form>
       </div>
     </div>
   );
};

export default BottomTerminal;
