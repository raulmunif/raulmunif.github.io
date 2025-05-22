import React from 'react';
import { Folder, ChevronRight, FileText, FileCode } from 'lucide-react'; // Removed File and ChevronDown

interface SidebarProps {
  expandedFolders: Record<string, boolean>;
  toggleFolder: (folder: string) => void;
  handleFileClick: (file: string, content: string) => void;
  openTabs: string[];
  activeTab: string;
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ expandedFolders, toggleFolder, handleFileClick, openTabs, activeTab, showSidebar }) => {
  return (
    <div className={`w-64 bg-gray-900 border-r border-gray-700 flex flex-col transition-transform duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* OPEN EDITORS Section */}
      <div className="pt-2 pb-1 px-4 text-xs font-semibold text-gray-400">
        OPEN EDITORS
      </div>
      <div className="px-2 mb-2">
        {openTabs.map(tabName => {
          const isActive = tabName === activeTab;
          const isReadme = tabName === 'README.md';
          const contentKey = tabName.replace('.jsx', '').replace('.md', '').toLowerCase();

          return (
            <div
              key={`openeditor-${tabName}`}
              className={`flex items-center py-0.5 px-2 rounded cursor-pointer text-sm mb-0.5 ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'}`}
              onClick={() => handleFileClick(tabName, contentKey)}
            >
              {isReadme
                ? <FileText className={`h-4 w-4 mr-2 ${isActive ? 'text-blue-300' : 'text-blue-400'}`} />
                : <FileCode className={`h-4 w-4 mr-2 ${isActive ? 'text-yellow-300' : 'text-yellow-400'}`} />
              }
              <span>{tabName}</span>
            </div>
          );
        })}
      </div>

      {/* Explorer Section */}
      <div className="p-4 text-sm uppercase tracking-wide font-semibold text-gray-500">
        Explorer
      </div>
      <div className="overflow-y-auto flex-1">
        {/* Portfolio Structure */}
        <div className="px-2">
          <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => toggleFolder('src')}>
            <ChevronRight className={`h-4 w-4 text-gray-500 transition-transform duration-200 ease-in-out ${expandedFolders['src'] ? 'rotate-90' : ''}`} />
            <Folder className="h-4 w-4 text-blue-500 ml-1 mr-2" />
            <span className="text-sm">portfolio</span>
          </div>

          {expandedFolders['src'] && (
            <div className="ml-4">
              <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => handleFileClick('README.md', 'readme')}>
                <FileText className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-sm">README.md</span>
              </div>

              {/* About Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => toggleFolder('about')}>
                <ChevronRight className={`h-4 w-4 text-gray-500 transition-transform duration-200 ease-in-out ${expandedFolders['about'] ? 'rotate-90' : ''}`} />
                <Folder className="h-4 w-4 text-yellow-500 ml-1 mr-2" />
                <span className="text-sm">about</span>
              </div>

              {expandedFolders['about'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => handleFileClick('About.jsx', 'about')}>
                    <FileCode className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-sm">About.jsx</span>
                  </div>
                </div>
              )}

              {/* Experience Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => toggleFolder('experience')}>
                <ChevronRight className={`h-4 w-4 text-gray-500 transition-transform duration-200 ease-in-out ${expandedFolders['experience'] ? 'rotate-90' : ''}`} />
                <Folder className="h-4 w-4 text-green-500 ml-1 mr-2" />
                <span className="text-sm">experience</span>
              </div>

              {expandedFolders['experience'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => handleFileClick('Experience.jsx', 'experience')}>
                    <FileCode className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-sm">Experience.jsx</span>
                  </div>
                </div>
              )}

              {/* Projects Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => toggleFolder('projects')}>
                <ChevronRight className={`h-4 w-4 text-gray-500 transition-transform duration-200 ease-in-out ${expandedFolders['projects'] ? 'rotate-90' : ''}`} />
                <Folder className="h-4 w-4 text-purple-500 ml-1 mr-2" />
                <span className="text-sm">projects</span>
              </div>

              {expandedFolders['projects'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => handleFileClick('Projects.jsx', 'projects')}>
                    <FileCode className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-sm">Projects.jsx</span>
                  </div>
                </div>
              )}

              {/* Skills Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => toggleFolder('skills')}>
                <ChevronRight className={`h-4 w-4 text-gray-500 transition-transform duration-200 ease-in-out ${expandedFolders['skills'] ? 'rotate-90' : ''}`} />
                <Folder className="h-4 w-4 text-red-500 ml-1 mr-2" />
                <span className="text-sm">skills</span>
              </div>

              {expandedFolders['skills'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => handleFileClick('Skills.jsx', 'skills')}>
                    <FileCode className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-sm">Skills.jsx</span>
                  </div>
                </div>
              )}

              {/* Education Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => toggleFolder('education')}>
                <ChevronRight className={`h-4 w-4 text-gray-500 transition-transform duration-200 ease-in-out ${expandedFolders['education'] ? 'rotate-90' : ''}`} />
                <Folder className="h-4 w-4 text-cyan-500 ml-1 mr-2" />
                <span className="text-sm">education</span>
              </div>

              {expandedFolders['education'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => handleFileClick('Education.jsx', 'education')}>
                    <FileCode className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-sm">Education.jsx</span>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => toggleFolder('contact')}>
                <ChevronRight className={`h-4 w-4 text-gray-500 transition-transform duration-200 ease-in-out ${expandedFolders['contact'] ? 'rotate-90' : ''}`} />
                <Folder className="h-4 w-4 text-pink-500 ml-1 mr-2" />
                <span className="text-sm">contact</span>
              </div>

              {expandedFolders['contact'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 hover:text-gray-200 cursor-pointer rounded px-2" onClick={() => handleFileClick('Contact.jsx', 'contact')}>
                    <FileCode className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-sm">Contact.jsx</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;