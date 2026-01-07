import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import introbg from '../assets/Images/introbg.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import profilePic from '../assets/Images/pfpclear.png';


const Home: React.FC = () => {

const [activeProject, setActiveProject] = useState(0);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '200px', // Increased from 100px for more side space
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '100px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '50px',
        centerMode: false // Stack on mobile
      }
    }
  ]
};

const featuredProjects = [
  {
    title: "AR Globe Mobile App",
    image: "/images/globe.png",
    description:
      "An augmented reality mobile application that visualizes geographical and statistical data on an interactive 3D globe using real-time data layers.",
    tags: ["Current", "Mobile", "AR", "AI"],
    link: "/portfolio/ar-globe",
  },
  {
    title: "Find-a-Party",
    image: "/images/social.png",
    description:
      "A mobile platform for discovering and organizing social events with real-time updates, location-based discovery, and intuitive browsing.",
    tags: ["2024", "Mobile", "Android"],
    link: "/portfolio/find-a-party",
  },
  {
    title: "AI Document Chatbot",
    image: "/images/qualifind.png",
    description:
      "A document-aware AI chatbot that enables users to query large files and receive accurate, context-aware responses.",
    tags: ["2025", "AI", "Full-Stack"],
    link: "/portfolio/ai-chatbot",
  },
];


const skills = [
  'Java', 'Python', 'C#', 'JavaScript', 'TypeScript',
  'React', 'Node.js', '.NET', 'REST API', 'Firebase',
  'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker',
  'Git', 'Azure', 'Android Studio', 'Vue.js', 'AI/ML'
];
  
  return (
      <div>
        {/* Hero Section */}
        <section 
          className="py-24 md:py-32 relative -mt-16 pt-16"
          style={{
            backgroundImage: `url(${introbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
  
          <div className="absolute inset-0 bg-white/30"></div>
          
          <div className="relative z-10 w-full px-6">
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
                className="inline-flex items-center gap-2 bg-[#E8B4BC] text-white px-6 py-3 rounded-full font-medium hover:bg-[#D9A5B3] transition-colors"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                {/* Headshot */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg mx-auto">
                  <img
                    src={profilePic}
                    alt="Nia Legerton"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 w-full">
        <div className="w-full px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

          <div className="w-full max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 w-full">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left */}
                <div className="md:col-span-7">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    I’m a Software Engineering graduate focused on full-stack development, AI integration, and
                    cross-platform mobile experiences.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed mt-4">
                    I’ve worked across teams internationally—from building document-aware AI chatbots to shipping
                    responsive web apps. I like turning messy problems into clear, user-friendly products.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm bg-[#F9EAEC] text-gray-800 border border-[#F1D2D7]">
                      Open to full-time roles
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-[#F9EAEC] text-gray-800 border border-[#F1D2D7]">
                      Freelancing (AR / mobile)
                    </span>
                  </div>
                </div>

                {/* Right */}
                <div className="md:col-span-5">
                  <div className="rounded-xl bg-[#FFF7F8] border border-[#F1D2D7] p-5">
                    <h3 className="font-semibold text-gray-900">Highlights</h3>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm leading-relaxed">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D9A5B3] shrink-0" />
                        <span>Full-stack builds with clean UI + solid API/data work</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D9A5B3] shrink-0" />
                        <span>AI features: retrieval/chatbot workflows and integration</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D9A5B3] shrink-0" />
                        <span>Mobile + AR interest (currently building an AR globe project)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D9A5B3] shrink-0" />
                        <span>International experience (China / Trinidad projects)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>




      {/* Featured Projects */}
      <section className="py-20 w-full bg-[#F7ECEE]">
        <div className="px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Projects
            </h2>

            <div className="relative flex items-center justify-center gap-8">
              {featuredProjects.map((project, index) => {
                const isCenter = index === activeProject;

                return (
                  <div
                    key={project.title}
                    className={`transition-all duration-500
                      ${isCenter ? "scale-100 opacity-100" : "scale-90 opacity-50"}
                      w-[340px]`}
                  >
                    <div className="bg-white rounded-2xl shadow-md p-5 h-full flex flex-col">
                      
                      {/* Image container */}
                      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F3F3F3] mb-4 flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold mb-2">
                        {project.title}
                      </h3>

                      {/* Short description */}
                      <p className="text-sm text-gray-700 leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-[#F9EAEC] text-gray-800 border border-[#F1D2D7]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <a
                        href={project.link}
                        className="mt-auto text-sm font-medium text-[#C77A8A] hover:underline"
                      >
                        View case study →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-3 mt-8">
              {featuredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProject(i)}
                  className={`h-2.5 w-2.5 rounded-full transition
                    ${i === activeProject ? "bg-[#C77A8A]" : "bg-[#E6C7CD]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


{/* Skills Section */}
<section className="py-20 w-full bg-white">
  <div className="px-6">
    <div className="max-w-5xl mx-auto text-center">

      <h2 className="text-3xl font-bold mb-3">Technical Skills</h2>
      <p className="text-gray-600 mb-10">
        Technologies and tools I regularly work with across web, mobile, and full-stack projects.
      </p>

      {/* Core stack */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["React", "TypeScript", "Java", "Python", "C#", "Node.js", "Firebase", "SQL"].map(skill => (
          <span
            key={skill}
            className="px-5 py-2 rounded-full bg-[#E8B4BC]/20 text-gray-900 font-semibold text-sm tracking-wide"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="w-24 h-[1px] bg-[#E6C7CD] mx-auto mb-10" />

      {/* Supporting stack */}
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {[
          "JavaScript", "Kotlin", "Swift", ".NET", "REST APIs", "Android Studio", "MongoDB",
          "PostgreSQL", "MySQL", "Redis", "Docker", "Azure", "Git", "CI/CD",
          "HTML", "CSS", "ROS", "Electron"
        ].map(skill => (
          <span
            key={skill}
            className="px-4 py-1.5 rounded-full border border-[#F1D2D7] text-gray-700 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  </div>
</section>


    </div>
  );
};

export default Home;