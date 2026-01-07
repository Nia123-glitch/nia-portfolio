import React from 'react';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';
import introbg from '../assets/Images/introbg.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import globeOne from '../assets/Images/globeone.png';
import globeTwo from '../assets/Images/globetwo.png';
import chatbotOne from '../assets/Images/chatbotone.png';
import iridisOne from '../assets/Images/iridisone.png';
import iridisTwo from '../assets/Images/iridistwo.png';
import socialOne from '../assets/Images/socialone.png';
import socialTwo from '../assets/Images/socialtwo.png';

type ProjectMeta = {
  year: string;
  images: string[];
  longDescription?: string[];
};

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 450,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  swipe: true,
  draggable: true,
};


const projectMetaByTitle: Record<string, ProjectMeta> = {
  'AR Globe Mobile App': {
    year: '2026',
    images: [globeOne, globeTwo],
    longDescription: [
      'An AR mobile experience centered around an interactive 3D globe placed into the real world through the device camera. Users can explore regions, select locations, and view region-specific company data through dashboards and data panels.',
      'Built with a focus on secure multi-organization access, performant 3D/AR interaction, and a smooth flow from dashboard → AR exploration → insights.',
    ],
  },

  'AI Document Chatbot': {
    year: '2026',
    images: [chatbotOne],
    longDescription: [
      'A desktop application that lets users upload documents and ask questions to receive context-aware answers with reliable grounding and citation-style support.',
      'Built with a team of 3, focusing on a clean UX, secure access, and a robust pipeline that produces consistent results across different file types.',
    ],
  },

  Qualifind: {
    year: '2026',
    images: [],
    longDescription: [
      'A capstone service marketplace application connecting clients with service providers through discovery, booking, and communication features.',
      'Built with a team of 4. As team lead, I coordinated milestones, aligned scope, and contributed across implementation and delivery to meet both functional and usability goals.',
    ],
  },

  'Iridis Website': {
    year: '2026',
    images: [iridisOne, iridisTwo],
    longDescription: [
      'A responsive company website designed to present services clearly and convert visitors through a clean flow and modern UI.',
      'Included an interactive consultation/booking experience with validation and API integration for a smooth user journey.',
    ],
  },

  'Find-a-Party Social App': {
    year: '2026',
    images: [socialOne, socialTwo],
    longDescription: [
      'A social + events application designed to help users discover events, browse details quickly, and manage attendance in a simple RSVP-style flow.',
      'Focused on fast navigation, clear event information, and a lightweight experience that still supports practical planning and sharing.',
    ],
  },

  'Mandarin Learning Game': {
    year: '2026',
    images: [],
    longDescription: [
      'A small learning game designed to make Mandarin practice more engaging through short interactive exercises, quick feedback, and progression.',
      'Built for beginners with clear prompts, friendly UI, and gameplay elements that encourage consistent practice.',
    ],
  },
};

function getProjectMeta(title: string): ProjectMeta {
  return (
    projectMetaByTitle[title] ?? {
      year: '2026',
      images: [],
      longDescription: [],
    }
  );
}

const Work: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section
        className="py-20 md:py-28 relative -mt-16 pt-16"
        style={{
          backgroundImage: `url(${introbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-white/35" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-16">Portfolio</h1>
            <div className="inline-flex items-center  gap-2 px-4 py-1.5 rounded-full bg-[#F9EAEC] text-gray-800 border border-[#F1D2D7] text-sm font-medium">
              Full-Stack • Mobile • AI • Web • Database
            </div>
            <p className="text-lg md:text-xl text-gray-700 mt-7 max-w-3xl mx-auto">
              My selected projects and professional experience.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Projects */}
          <section className="mt-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Projects</h2>
              <div className="mt-3 h-1 w-16 mx-auto rounded-full bg-[#E8B4BC]" />
              <p className="mt-3 text-gray-600">A few projects that show how I build end-to-end.</p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {projects.map((project) => {
                const meta = getProjectMeta(project.title);
                const images =
                  project.images && project.images.length > 0
                    ? project.images
                    : meta.images;
                const paragraphs =
                  meta.longDescription && meta.longDescription.length > 0
                    ? meta.longDescription
                    : project.description
                    ? [project.description]
                    : [];

                return (
                  <div
                    key={project.id}
                    id={`project-${project.id}`}
                    className="bg-white rounded-2xl border border-[#F1D2D7] shadow-sm overflow-hidden"
                  >
                    <div className="p-6 md:p-6">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-2xl font-bold">{project.title}</h3>

                            {/* Year badge */}
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F9EAEC] text-gray-800 border border-[#F1D2D7]">
                              {meta.year}
                            </span>
                          </div>

                          {project.tagline && (
                            <p className="text-gray-600 mt-2">{project.tagline}</p>
                          )}
                        </div>

                      </div>

                      {/* Body */}
                      <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Slideshow */}
                        <div className="lg:col-span-6">
                          <div className="rounded-2xl border border-[#F1D2D7] overflow-hidden bg-[#F7F7F7]">
                            {images.length > 0 ? (
                              <div className="project-slider">
                              <Slider {...sliderSettings}>
                                {images.map((src, idx) => (
                                  <div key={`${project.id}-img-${idx}`}>
                                    <div className="w-full aspect-[4/3] bg-white flex items-center justify-center">
                                      <div className="w-full bg-white">
                                        <div className="relative mx-auto my-4 w-[240px] sm:w-[260px] md:w-[280px] aspect-[9/19] rounded-[26px] border border-[#F1D2D7] bg-[#FFF7F8] shadow-sm overflow-hidden">
                                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full bg-[#E8B4BC]/30" />
                                          <img
                                            src={src}
                                            alt={`${project.title} screenshot ${idx + 1}`}
                                            className="absolute inset-0 w-full h-full object-contain p-3"
                                            loading="lazy"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </Slider>
                              </div>
                            ) : (
                              <div className="w-full aspect-[4/3] flex items-center justify-center text-gray-500 bg-white">
                                Add images for this project
                              </div>
                            )}
                          </div>

                          {/* Links */}
                          <div className="flex flex-wrap gap-4 mt-4">
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
                        </div>

                        {/* Details */}
                        <div className="lg:col-span-6">
                          {/* Description */}
                          {paragraphs.length > 0 && (
                            <div className="mb-5">
                              <h4 className="font-bold mb-2">Overview</h4>
                              <div className="space-y-3 text-gray-700 leading-relaxed">
                                {paragraphs.slice(0, 2).map((p, i) => (
                                  <p key={`${project.id}-p-${i}`}>{p}</p>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Role */}
                          {project.role && (
                            <div className="mb-5">
                              <h4 className="font-bold mb-2">Role</h4>
                              <p className="text-gray-700">{project.role}</p>
                            </div>
                          )}

                          {/* Technologies */}
                          {project.technologies?.length > 0 && (
                            <div>
                              <h4 className="font-bold mb-2">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full text-sm bg-[#F9EAEC] text-gray-800 border border-[#F1D2D7]"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Experience */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Professional Experience</h2>

            <div className="max-w-5xl mx-auto space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-lg text-gray-700">{exp.company}</p>
                    </div>
                    <div className="text-gray-600 mt-2 md:mt-0">
                      <p>
                        {exp.location} • {exp.period}
                      </p>
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
                        className="px-3 py-1 rounded-full text-sm bg-[#F9EAEC] text-gray-800 border border-[#F1D2D7]"
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
    </div>
  );
};

export default Work;
