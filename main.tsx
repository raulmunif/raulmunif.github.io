import React, { useState, useEffect } from 'react';
import { File, Folder, ChevronRight, ChevronDown, X, Maximize2, Minus, Github, Linkedin, Mail, Package, User, Briefcase, Code, BookOpen, Award, Calendar } from 'lucide-react';

const VSCodePortfolio = () => {
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

  const toggleFolder = (folder) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev[folder]
    }));
  };

  const handleFileClick = (file, content) => {
    setActiveTab(file);
    setActiveContent(content);
    if (!openTabs.includes(file)) {
      setOpenTabs([...openTabs, file]);
    }
  };

  const closeTab = (tab, e) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(t => t !== tab);
    setOpenTabs(newTabs);
    if (activeTab === tab && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
      // Set active content based on the tab name
      const contentMapping = {
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
      {/* Title Bar */}
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

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {showSidebar && (
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
        )}

        {/* Main Content */}
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
                className={`flex items-center px-4 py-2 border-r border-gray-700 cursor-pointer ${activeTab === tab ? 'bg-gray-900 text-white' : 'bg-gray-800 text-gray-400'}`}
                onClick={() => handleFileClick(tab, tab.replace('.jsx', '').replace('.md', '').toLowerCase())}
              >
                <span className="text-sm mr-2">{tab}</span>
                <X 
                  className="h-4 w-4 text-gray-500 hover:text-white" 
                  onClick={(e) => closeTab(tab, e)}
                />
              </div>
            ))}
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-auto bg-gray-900 p-4">
            {activeContent === 'readme' && (
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-blue-400 mb-6">Raul Munif</h1>
                <p className="text-lg mb-4">👋 Welcome to my portfolio!</p>
                <p className="mb-4">I'm a Computer Science and Commerce (Finance) student at UNSW Sydney with experience in full-stack development.</p>
                <p className="mb-6">Navigate through the folders on the left to explore my experience, projects, skills, and more.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-xl font-semibold mb-2 flex items-center"><User className="h-5 w-5 mr-2 text-blue-400" /> About</h2>
                    <p>Computer Science and Commerce student passionate about creating innovative software solutions.</p>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                    <h2 className="text-xl font-semibold mb-2 flex items-center"><Briefcase className="h-5 w-5 mr-2 text-green-400" /> Experience</h2>
                    <p>Software Engineer at DoryAI and experienced Private Tutor.</p>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
                    <h2 className="text-xl font-semibold mb-2 flex items-center"><Code className="h-5 w-5 mr-2 text-purple-400" /> Projects</h2>
                    <p>Interactive RAG Application, knoME web app, and more.</p>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-pink-500">
                    <h2 className="text-xl font-semibold mb-2 flex items-center"><Mail className="h-5 w-5 mr-2 text-pink-400" /> Contact</h2>
                    <p>Let's connect! Find my contact details in the contact section.</p>
                  </div>
                </div>
                
                <div className="mt-8 text-gray-400 text-sm">
                </div>
              </div>
            )}

            {activeContent === 'about' && (
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-yellow-400 mb-6">About Me</h1>
                <div className="bg-gray-800 p-6 rounded-lg mb-6">
                  <p className="mb-4">I'm a Bachelor of Computer Science and Commerce (Finance) student at the University of New South Wales, Sydney.</p>
                  <p className="mb-4">I'm passionate about software development, particularly web applications and data-driven solutions. My combined background in computer science and finance gives me a unique perspective on building technology solutions with business value in mind.</p>
                  <p>When I'm not coding, I'm teaching others as a private tutor, participating in programming competitions, or working on personal projects to expand my skills.</p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Professional Interests</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Full-stack web development</li>
                    <li>Data-driven applications</li>
                    <li>Financial technology</li>
                    <li>AI and machine learning integration</li>
                    <li>Software architecture</li>
                  </ul>
                </div>
              </div>
            )}

            {activeContent === 'experience' && (
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-green-400 mb-6">Work Experience</h1>
                
                <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-green-500">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">Software Engineer</h2>
                    <span className="text-gray-400 text-sm">May 2024 – Jul. 2024</span>
                  </div>
                  <h3 className="text-lg text-gray-400 mb-4">DoryAI, Sydney, Australia</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Developed REST APIs using FastAPI to handle high volume requests, ensuring efficient data processing</li>
                    <li>Authored technical documentation and API guides that increased the efficiency of onboarding other developers</li>
                    <li>Collaborated with front-end developers to create responsive, user-centric web applications using React, improving user engagement</li>
                    <li>Conducted code reviews to foster a culture of continuous learning and code quality improvement among the development team</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">Private Tutor</h2>
                    <span className="text-gray-400 text-sm">Dec. 2021 – Present</span>
                  </div>
                  <h3 className="text-lg text-gray-400 mb-4">Self Employed, Sydney, Australia</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Tutored students from Year 4 to Year 12 in mathematics, achieving an average improvement of 20% in their first assessment marks</li>
                    <li>Developed and implemented customized lesson plans tailored to individual student needs, effectively targeting specific learning gaps and enhancing understanding</li>
                    <li>Provided one-on-one support and mentorship, fostering a positive learning environment and boosting student confidence and performance</li>
                  </ul>
                </div>
              </div>
            )}

            {activeContent === 'projects' && (
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-purple-400 mb-6">Projects</h1>
                
                <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-purple-500">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">Interactive RAG Application</h2>
                    <span className="text-gray-400 text-sm">Nov. 2024</span>
                  </div>
                  <p className="text-gray-400 mb-4">Python, BeautifulSoup, ChromaDB, OpenAI, Streamlit</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Developed a Q&A web application integrating Retrieval-Augmented Generation (RAG) for real-time information retrieval from scraped data</li>
                    <li>Implemented web scraping with BeautifulSoup to extract and structure FAQ data from a live webpage, improving data processing for further use</li>
                    <li>Utilized ChromaDB with embeddings to efficiently store and retrieve contextually relevant information for answering queries</li>
                    <li>Integrated OpenAI API for generating detailed answers to user queries by leveraging stored FAQ data and semantic search with embeddings</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-indigo-500">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">knoME</h2>
                    <span className="text-gray-400 text-sm">Aug. 2024 – Present</span>
                  </div>
                  <p className="text-gray-400 mb-4">Javascript, TailwindCSS, React, Git</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Developed an interactive relationship-focused web application, incorporating features such as task management, shared calendars, and location sharing for couples</li>
                    <li>Implemented smooth user interfaces using TailwindCSS and integrated animations with GSAP for enhanced user experience</li>
                    <li>Utilized React hooks and functional components to build modular, maintainable, and efficient code</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">Personal Portfolio Website</h2>
                    <span className="text-gray-400 text-sm">Jun. 2023 – Aug. 2023</span>
                  </div>
                  <p className="text-gray-400 mb-4">Javascript, HTML/CSS, React, Tailwind</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Developed a full-stack personal portfolio website to showcase projects and experience</li>
                    <li>Leveraged GitHub for source control, integrated a custom domain via DNS configuration, and optimized site performance and security with Cloudflare's edge network services</li>
                  </ul>
                </div>
              </div>
            )}

            {activeContent === 'skills' && (
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-red-400 mb-6">Technical Skills</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
                    <h2 className="text-xl font-semibold mb-4">Languages</h2>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'Python', 'C', 'JavaScript', 'HTML/CSS', 'R'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
                    <h2 className="text-xl font-semibold mb-4">Frameworks</h2>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Flask', 'JUnit', 'Tailwindcss', 'Material-UI', 'GSAP', 'FastAPI'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                    <h2 className="text-xl font-semibold mb-4">Developer Tools</h2>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'Docker', 'VS Code', 'Visual Studio', 'PyCharm', 'IntelliJ', 'Eclipse'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
                    <h2 className="text-xl font-semibold mb-4">Soft Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership', 'Time Management', 'Critical Thinking'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeContent === 'education' && (
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-cyan-400 mb-6">Education</h1>
                
                <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">University of New South Wales Sydney</h2>
                    <span className="text-gray-400 text-sm">Feb. 2022 – Nov 2025</span>
                  </div>
                  <p className="text-lg text-gray-300 mb-4">Bachelor of Computer Science and Commerce (Finance)</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">Extracurricular Activities</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-700 p-4 rounded">
                      <h4 className="font-medium">UNSW Software Development Society Trainee Lead</h4>
                      <p className="text-sm text-gray-400">Feb. 2024 – Aug. 2024</p>
                      <p className="text-sm mt-2">Javascript, React, Git</p>
                    </div>
                    
                    <div className="bg-gray-700 p-4 rounded">
                      <h4 className="font-medium">International Collegiate Programming Contest (ICPC)</h4>
                      <p className="text-sm text-gray-400">Nov. 2023</p>
                      <p className="text-sm mt-2">Python</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeContent === 'contact' && (
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-pink-400 mb-6">Contact</h1>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <p className="mb-6">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                  
                  <div className="space-y-4">
                    <a href="mailto:raulmunif34@gmail.com" className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <Mail className="h-6 w-6 text-pink-400 mr-4" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-400">raulmunif34@gmail.com</p>
                      </div>
                    </a>
                    
                    <a href="tel:0435775134" className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <Phone className="h-6 w-6 text-green-400 mr-4" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-400">0435 775 134</p>
                      </div>
                    </a>
                    
                    <a href="https://linkedin.com/in/raul" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <Linkedin className="h-6 w-6 text-blue-400 mr-4" />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-gray-400">linkedin.com/in/raul</p>
                      </div>
                    </a>
                    
                    <a href="https://github.com/raul" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <Github className="h-6 w-6 text-purple-400 mr-4" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-gray-400">github.com/raul</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg mt-6">
                  <h2 className="text-xl font-semibold mb-4">Send Me a Message</h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-1 bg-blue-600 text-white text-xs">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <span className="flex items-center"><Github className="h-4 w-4 mr-1" /> main</span>
          </span>
          <span>UTF-8</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>JavaScript</span>
          <span>Ln 1, Col 1</span>
        </div>
      </div>
    </div>
  );
};

// Missing component declaration
const Phone = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
};

export default VSCodePortfolio;