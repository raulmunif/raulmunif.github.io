import React, { useState, useEffect } from 'react';
import TitleBar from './layout/TitleBar';
import Sidebar from './layout/Sidebar';
import MainContent from './layout/MainContent';
import StatusBar from './layout/StatusBar';

const VSCodePortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Terminal');
  const [expandedFolders, setExpandedFolders] = useState({
    'src': true,
    'about': true,
    'experience': false,
    'projects': false,
    'skills': false,
    'education': false,
    'contact': false
  });

  const [activeContent, setActiveContent] = useState('terminal');
  const [openTabs, setOpenTabs] = useState(['README.md', 'Terminal']);
  // We still need setIsMobile for the useEffect, but we can mark isMobile as unused
  const [, setIsMobile] = useState(false);
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

  const handleFileClick = (file: string, content?: string) => {
    if (!openTabs.includes(file)) {
      setOpenTabs([...openTabs, file]);
    }
    setActiveTab(file);
    if (content) {
      setActiveContent(content);
    } else if (file === 'Terminal') {
      setActiveContent('terminal'); // Specific handling for Terminal
    } else {
      setActiveContent(file.replace('.jsx', '').replace('.md', '').toLowerCase());
    }
  };

  const closeTab = (tab: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (tab === 'Terminal') { // Prevent closing the Terminal tab
      return;
    }
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

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-300 font-mono overflow-hidden">
      <TitleBar />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          expandedFolders={expandedFolders} 
          toggleFolder={toggleFolder} 
          handleFileClick={handleFileClick}
          openTabs={openTabs}
          activeTab={activeTab}
          showSidebar={showSidebar} // Pass showSidebar prop
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
      
      <StatusBar />
    </div>
  );
};

export default VSCodePortfolio;