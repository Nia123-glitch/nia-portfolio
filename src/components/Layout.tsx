import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">
            Nia Legerton
          </Link>
          
          <nav className="flex gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-[#E8B4BC]' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Home
            </Link>
            <Link 
              to="/work" 
              className={`text-sm font-medium transition-colors ${location.pathname === '/work' ? 'text-[#E8B4BC]' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Work & Experience
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">Nia Legerton</h3>
              <p className="text-gray-600 text-sm">Software Engineer</p>
              <p className="text-gray-500 text-sm mt-1">Full-Stack • Mobile • AI</p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="mailto:nialegerton@gmail.com" 
                className="text-gray-600 hover:text-[#E8B4BC] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/Nia123-glitch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#E8B4BC] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" // Add your LinkedIn URL
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#E8B4BC] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Nia Legerton. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;