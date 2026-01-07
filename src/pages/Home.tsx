import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import introbg from '../assets/Images/introbg.png';

const Home: React.FC = () => {
  const featuredProjects = projects.filter(project => project.isFeatured).slice(0, 3);
  
  return (
      <div>
            {/* Hero Section */}
            <section 
        className="py-16 md:py-24 relative"
        style={{
          backgroundImage: `url(${introbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B4BC]/10 text-[#D9A5B3] text-sm font-medium mb-6">
                <Sparkles size={14} />
                Software Engineer
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nia Legerton
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Full-stack developer specializing in AI-integrated applications and cross-platform mobile solutions.
              </p>
              <Link 
                to="/work" 
                className="inline-flex items-center gap-2 bg-[#FFBAD5] text-white px-6 py-3 rounded-full font-medium hover:bg-[#D9A5B3] transition-colors"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                {/* Replace with your headshot */}
                <div className="w-full h-full bg-gradient-to-br from-[#E8B4BC]/20 to-[#D9A5B3]/20 flex items-center justify-center text-gray-400">
                  Your Photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I'm a detail-oriented Software Engineering graduate with international experience in China, 
                specializing in full-stack development with a focus on AI integration and mobile applications. 
                I thrive on solving complex problems and building user-centric solutions that make an impact.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                My experience spans from building document-aware AI chatbots at Yick Solutions in Suzhou 
                to developing responsive web applications in Trinidad. I'm passionate about leveraging 
                cutting-edge technologies like AR and AI to create innovative digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-[#E8B4BC]/10 to-[#D9A5B3]/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">🌐</div>
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#E8B4BC]/10 text-[#D9A5B3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{project.tagline}</p>
                  <Link 
                    to={`/work#project-${project.id}`}
                    className="inline-flex items-center text-[#E8B4BC] font-medium hover:text-[#D9A5B3] transition-colors"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Competencies</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {['Full-Stack Development', 'AI/ML Integration', 'Mobile Development', 
              'Cloud Services', 'International Collaboration', 'Team Leadership'].map((skill) => (
              <div 
                key={skill}
                className="px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 font-medium hover:border-[#E8B4BC] hover:text-[#D9A5B3] transition-all cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;