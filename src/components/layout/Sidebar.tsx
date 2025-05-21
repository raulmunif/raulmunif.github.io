import React from 'react';
import { File, Folder, ChevronRight, ChevronDown } from 'lucide-react';

interface SidebarProps {
  expandedFolders: Record<string, boolean>;
  toggleFolder: (folder: string) => void;
  handleFileClick: (file: string, content: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ expandedFolders, toggleFolder, handleFileClick }) => {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-700 flex flex-col">
      <div className="p-4 text-sm uppercase tracking-wide font-semibold text-gray-500">
        Explorer
      </div>
      <div className="overflow-y-auto flex-1">
        {/* Portfolio Structure */}
        <div className="px-2">
          <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => toggleFolder('src')}>
            {expandedFolders['src'] ? <ChevronDown className="h-4 w-4 text-gray-500" /> : <ChevronRight className="h-4 w-4 text-gray-500" />}
            <Folder className="h-4 w-4 text-blue-500 ml-1 mr-2" />
            <span className="text-sm">portfolio</span>
          </div>

          {expandedFolders['src'] && (
            <div className="ml-4">
              <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => handleFileClick('README.md', 'readme')}>
                <File className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm">README.md</span>
              </div>

              {/* About Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => toggleFolder('about')}>
                {expandedFolders['about'] ? <ChevronDown className="h-4 w-4 text-gray-500" /> : <ChevronRight className="h-4 w-4 text-gray-500" />}
                <Folder className="h-4 w-4 text-yellow-500 ml-1 mr-2" />
                <span className="text-sm">about</span>
              </div>

              {expandedFolders['about'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => handleFileClick('About.jsx', 'about')}>
                    <File className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">About.jsx</span>
                  </div>
                </div>
              )}

              {/* Experience Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => toggleFolder('experience')}>
                {expandedFolders['experience'] ? <ChevronDown className="h-4 w-4 text-gray-500" /> : <ChevronRight className="h-4 w-4 text-gray-500" />}
                <Folder className="h-4 w-4 text-green-500 ml-1 mr-2" />
                <span className="text-sm">experience</span>
              </div>

              {expandedFolders['experience'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => handleFileClick('Experience.jsx', 'experience')}>
                    <File className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">Experience.jsx</span>
                  </div>
                </div>
              )}

              {/* Projects Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => toggleFolder('projects')}>
                {expandedFolders['projects'] ? <ChevronDown className="h-4 w-4 text-gray-500" /> : <ChevronRight className="h-4 w-4 text-gray-500" />}
                <Folder className="h-4 w-4 text-purple-500 ml-1 mr-2" />
                <span className="text-sm">projects</span>
              </div>

              {expandedFolders['projects'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => handleFileClick('Projects.jsx', 'projects')}>
                    <File className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">Projects.jsx</span>
                  </div>
                </div>
              )}

              {/* Skills Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => toggleFolder('skills')}>
                {expandedFolders['skills'] ? <ChevronDown className="h-4 w-4 text-gray-500" /> : <ChevronRight className="h-4 w-4 text-gray-500" />}
                <Folder className="h-4 w-4 text-red-500 ml-1 mr-2" />
                <span className="text-sm">skills</span>
              </div>

              {expandedFolders['skills'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => handleFileClick('Skills.jsx', 'skills')}>
                    <File className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">Skills.jsx</span>
                  </div>
                </div>
              )}

              {/* Education Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => toggleFolder('education')}>
                {expandedFolders['education'] ? <ChevronDown className="h-4 w-4 text-gray-500" /> : <ChevronRight className="h-4 w-4 text-gray-500" />}
                <Folder className="h-4 w-4 text-cyan-500 ml-1 mr-2" />
                <span className="text-sm">education</span>
              </div>

              {expandedFolders['education'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => handleFileClick('Education.jsx', 'education')}>
                    <File className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">Education.jsx</span>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => toggleFolder('contact')}>
                {expandedFolders['contact'] ? <ChevronDown className="h-4 w-4 text-gray-500" /> : <ChevronRight className="h-4 w-4 text-gray-500" />}
                <Folder className="h-4 w-4 text-pink-500 ml-1 mr-2" />
                <span className="text-sm">contact</span>
              </div>

              {expandedFolders['contact'] && (
                <div className="ml-4">
                  <div className="flex items-center py-1 hover:bg-gray-800 cursor-pointer rounded px-2" onClick={() => handleFileClick('Contact.jsx', 'contact')}>
                    <File className="h-4 w-4 text-blue-400 mr-2" />
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