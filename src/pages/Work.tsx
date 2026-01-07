import React, { useState } from 'react';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Work: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my professional journey and technical projects
          </p>
        </div>

                {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">All Projects</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                id={`project-${project.id}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.tagline}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-[#E8B4BC]/10 text-[#D9A5B3]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-6">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-700 hover:text-[#E8B4BC] transition-colors"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-700 hover:text-[#E8B4BC] transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="flex items-center gap-2 text-[#E8B4BC] font-medium hover:text-[#D9A5B3] transition-colors"
                  >
                    {expandedProject === project.id ? 'Show Less' : 'View Details'}
                    {expandedProject === project.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  
                  {expandedProject === project.id && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold mb-2">Description</h4>
                          <p className="text-gray-700 mb-4">{project.description}</p>
                          
                          <h4 className="font-bold mb-2">My Role</h4>
                          <p className="text-gray-700">{project.role}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-2">Challenges & Solutions</h4>
                          <ul className="space-y-2 mb-6">
                            {project.challenges.map((challenge, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-[#E8B4BC] mr-2">•</span>
                                <span className="text-gray-700">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h4 className="font-bold mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p className="text-lg text-gray-700">{exp.company}</p>
                  </div>
                  <div className="text-gray-600 mt-2 md:mt-0">
                    <p>{exp.location} • {exp.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#E8B4BC] mr-2">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-[#E8B4BC]/10 text-[#D9A5B3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Work;