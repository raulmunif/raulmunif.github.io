import React, { useState, useEffect } from 'react';
import TitleBar from './layout/TitleBar';
import Sidebar from './layout/Sidebar';
import MainContent from './layout/MainContent';
import StatusBar from './layout/StatusBar';
import BottomTerminal from './layout/BottomTerminal'; // Import BottomTerminal

// Define SearchableItem interface here for this subtask
export interface SearchableItem {
  id: string;
  type: 'page' | 'section' | 'project';
  title: string;
  keywords: string[];
  description?: string;
}

const VSCodePortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('README.md');
  const [expandedFolders, setExpandedFolders] = useState({
    'src': true,
    'about': true,
    'experience': false,
    'projects': false,
    'skills': false,
    'education': false,
    'contact': false
  });

  const [activeContent, setActiveContent] = useState('readme');
  const [openTabs, setOpenTabs] = useState(['README.md']);
  const [, setIsMobile] = useState(false); // Keep setIsMobile for now
  const [showSidebar, setShowSidebar] = useState(true);
  const [isTerminalVisible, setIsTerminalVisible] = useState(false); // State for terminal visibility

  // Sample searchable data
  const searchableData: SearchableItem[] = [
    { id: 'readme', type: 'page', title: 'README.md', keywords: ['home', 'welcome', 'introduction'], description: 'Main welcome page.' },
    { id: 'about', type: 'page', title: 'About Me', keywords: ['bio', 'biography', 'who am i'], description: 'Learn more about me.' },
    { id: 'experience', type: 'page', title: 'Experience', keywords: ['work', 'job', 'history'], description: 'My professional experience.' },
    { id: 'projects', type: 'page', title: 'Projects', keywords: ['work', 'portfolio', 'apps'], description: 'Check out my projects.' },
    { id: 'skills', type: 'page', title: 'Skills', keywords: ['tech', 'abilities', 'what i know'], description: 'My technical skills.' },
    { id: 'education', type: 'page', title: 'Education', keywords: ['school', 'college', 'degree'], description: 'My educational background.' },
    { id: 'contact', type: 'page', title: 'Contact', keywords: ['email', 'social', 'connect'], description: 'How to reach me.' },
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setShowSidebar(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev[folder as keyof typeof prev]
    }));
  };

  const handleFileClick = (file: string, content?: string) => {
    if (!openTabs.includes(file)) {
      setOpenTabs([...openTabs, file]);
    }
    setActiveTab(file);
    if (content) {
      setActiveContent(content);
    } else {
      setActiveContent(file.replace('.jsx', '').replace('.md', '').toLowerCase());
    }
  };

  const closeTab = (tab: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const tabIndex = openTabs.indexOf(tab);
    const newTabs = openTabs.filter(t => t !== tab);
    setOpenTabs(newTabs);

    if (activeTab === tab) {
      const contentMapping: Record<string, string> = {
        'README.md': 'readme',
        'About.jsx': 'about',
        'Experience.jsx': 'experience',
        'Projects.jsx': 'projects',
        'Skills.jsx': 'skills',
        'Education.jsx': 'education',
        'Contact.jsx': 'contact'
      };

      if (newTabs.length > 0) {
        let newActiveTabIndex = -1;
        // If the closed tab was not the rightmost, activate the one that took its place (to its right).
        if (tabIndex < newTabs.length) { 
          newActiveTabIndex = tabIndex;
        } else { // Otherwise, activate the new rightmost tab.
          newActiveTabIndex = newTabs.length - 1;
        }
        const newActiveTab = newTabs[newActiveTabIndex];
        setActiveTab(newActiveTab);
        setActiveContent(contentMapping[newActiveTab] || ''); // Fallback for safety
      } else {
        // All tabs are closed
        setActiveTab('');
        setActiveContent('');
      }
    }
    // If an inactive tab was closed, activeTab and activeContent remain unchanged.
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleTerminal = () => {
    setIsTerminalVisible(!isTerminalVisible);
  };

  // Adjust main content height when terminal is visible
  const mainContentHeight = isTerminalVisible ? 'calc(100vh - 33.33% - 4rem)' : 'calc(100vh - 2rem)'; // Assuming status bar and title bar heights

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-300 font-mono overflow-hidden">
      <TitleBar />
      
      <div className="flex flex-1 overflow-hidden" style={{ height: mainContentHeight }}>
        <Sidebar 
          expandedFolders={expandedFolders} 
          toggleFolder={toggleFolder} 
          handleFileClick={handleFileClick}
          openTabs={openTabs}
          activeTab={activeTab}
          showSidebar={showSidebar}
        />
        
        <MainContent
          activeTab={activeTab}
          activeContent={activeContent}
          openTabs={openTabs}
          handleFileClick={handleFileClick}
          closeTab={closeTab}
          toggleSidebar={toggleSidebar}
        />
      </div>
      
      <BottomTerminal
        isVisible={isTerminalVisible}
        toggleVisibility={toggleTerminal}
        searchableData={searchableData}
        navigateTo={handleFileClick} // Pass handleFileClick
      />
      <StatusBar toggleTerminal={toggleTerminal} />
    </div>
  );
};

export default VSCodePortfolio;