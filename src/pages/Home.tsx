import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import introbg from '../assets/Images/introbg.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home: React.FC = () => {
  const featuredProjects = projects.filter(project => project.isFeatured).slice(0, 3);

  const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '20px',
      }
    }
  ]
};
  
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
            <section className="py-16 bg-[#F9EAEC]">
              <div>
                <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
                <Slider {...sliderSettings}>
                  {featuredProjects.map((project) => (
                    <div key={project.id} className="px-4">
                      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg p-8 transform transition-transform duration-300 hover:scale-[1.02]">
                        {/* Project Name at Top */}
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        
                        {/* Project Image */}
                        <div className="h-64 mb-6 rounded-lg overflow-hidden">
              <img 
                src={require(`../assets/Images/${
                  project.id === 1 ? 'globe.png' : 
                  project.id === 2 ? 'social.png' : 
                  'qualifind.png'
                }`)}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[#E8B4BC]/10 text-[#D9A5B3]">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Updated Paragraph Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.id === 1 
                ? "An innovative Augmented Reality application that transforms geographical data visualization through an interactive 3D globe accessible via mobile camera. This project combines computer vision with real-time data processing to deliver immersive educational experiences, featuring multi-company authentication systems and AI-powered data querying capabilities for dynamic information display."
                : project.id === 2
                ? "A comprehensive social networking platform designed to connect people through local events and gatherings. Built as a solo full-stack project, it features real-time chat functionality, location-based event discovery, secure user authentication, and an intuitive booking system. The application supports multimedia sharing, user reviews, and personalized event recommendations based on interests and location history."
                : "A service marketplace platform developed as a capstone project with team leadership responsibilities. The application connects clients with qualified service providers through an intelligent matching algorithm, featuring integrated chat systems, secure payment processing, service booking, and community forums. The project emphasizes scalability, security, and user experience across both web and mobile interfaces."
              }
            </p>
            
            {/* View Details Link */}
            <Link 
              to={`/portfolio#project-${project.id}`}
              className="inline-flex items-center text-[#E8B4BC] font-medium hover:text-[#D9A5B3] transition-colors"
            >
              View Details
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      ))}
    </Slider>
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