import React from 'react';
import { Folder, X } from 'lucide-react';
import ReadmeContent from '../content/ReadmeContent';
import AboutContent from '../content/AboutContent';
import ExperienceContent from '../content/ExperienceContent';
import ProjectsContent from '../content/ProjectsContent';
import SkillsContent from '../content/SkillsContent';
import EducationContent from '../content/EducationContent';
import ContactContent from '../content/ContactContent';

interface MainContentProps {
  activeTab: string;
  activeContent: string;
  openTabs: string[];
  handleFileClick: (file: string, content: string) => void;
  closeTab: (tab: string, e: React.MouseEvent) => void;
  toggleSidebar: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
  activeTab,
  activeContent,
  openTabs,
  handleFileClick,
  closeTab,
  toggleSidebar
  // Removed unused isMobile parameter
}) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700 overflow-x-auto">
        <button 
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={toggleSidebar}
        >
          <Folder className="h-5 w-5" />
        </button>
        
        {openTabs.map(tab => (
          <div 
            key={tab} 
            className={`flex items-center px-4 py-2 border-r border-gray-700 cursor-pointer ${activeTab === tab ? 'bg-gray-700 text-white' : 'bg-slate-700 text-gray-400 hover:bg-slate-600 hover:text-gray-100'}`}
            onClick={() => handleFileClick(tab, tab.replace('.jsx', '').replace('.md', '').toLowerCase())}
          >
            <span className="text-sm mr-2">{tab}</span>
            <X 
              className={`h-4 w-4 ${activeTab === tab ? 'text-gray-300' : 'text-gray-600'} hover:text-white hover:bg-gray-500 rounded-sm p-0.5`}
              onClick={(e) => closeTab(tab, e)}
            />
          </div>
        ))}
      </div>

      {/* Editor Content */}
      <div className="flex-1 overflow-auto bg-gray-900 p-4">
        {activeContent === 'readme' && <ReadmeContent />}
        {activeContent === 'about' && <AboutContent />}
        {activeContent === 'experience' && <ExperienceContent />}
        {activeContent === 'projects' && <ProjectsContent />}
        {activeContent === 'skills' && <SkillsContent />}
        {activeContent === 'education' && <EducationContent />}
        {activeContent === 'contact' && <ContactContent />}
      </div>
    </div>
  );
};

export default MainContent;