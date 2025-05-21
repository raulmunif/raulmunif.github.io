import React, { useState, useEffect } from 'react';
import TitleBar from './layout/TitleBar';
import Sidebar from './layout/Sidebar';
import MainContent from './layout/MainContent';
import StatusBar from './layout/StatusBar';

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
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

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

  const handleFileClick = (file: string, content: string) => {
    setActiveTab(file);
    setActiveContent(content);
    if (!openTabs.includes(file)) {
      setOpenTabs([...openTabs, file]);
    }
  };

  const closeTab = (tab: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(t => t !== tab);
    setOpenTabs(newTabs);
    if (activeTab === tab && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
      // Set active content based on the tab name
      const contentMapping: Record<string, string> = {
        'README.md': 'readme',
        'About.jsx': 'about',
        'Experience.jsx': 'experience',
        'Projects.jsx': 'projects',
        'Skills.jsx': 'skills',
        'Education.jsx': 'education',
        'Contact.jsx': 'contact'
      };
      setActiveContent(contentMapping[newTabs[newTabs.length - 1]]);
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-300 font-mono overflow-hidden">
      <TitleBar />
      
      <div className="flex flex-1 overflow-hidden">
        {showSidebar && (
          <Sidebar 
            expandedFolders={expandedFolders} 
            toggleFolder={toggleFolder} 
            handleFileClick={handleFileClick} 
          />
        )}
        
        <MainContent 
          activeTab={activeTab}
          activeContent={activeContent}
          openTabs={openTabs}
          handleFileClick={handleFileClick}
          closeTab={closeTab}
          toggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />
      </div>
      
      <StatusBar />
    </div>
  );
};

export default VSCodePortfolio;