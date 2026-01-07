import { Project } from '../types';

import globeOne from '../assets/Images/globeone.png';
import globeTwo from '../assets/Images/globetwo.png';
import socialOne from '../assets/Images/socialone.png';
import socialTwo from '../assets/Images/socialtwo.png';
import chatbotOne from '../assets/Images/chatbotone.png';
import qualifindImg from '../assets/Images/qualifind.png';
import iridisOne from '../assets/Images/iridisone.png';
import iridisTwo from '../assets/Images/iridistwo.png';


export const projects: Project[] = [
  {
    id: 1,
    title: "AR Globe Mobile App",
    tagline: "Interactive AR application with 3D globe visualization",
    tags: ["Mobile", "AR", "AI", "Active"],
    description:
      "Developing an augmented reality application featuring an in-camera interactive 3D globe for immersive geographical data exploration.",
    role: "Solo Developer & Designer",
    challenges: [
      "Implementing smooth AR camera integration with 3D model rendering",
      "Optimizing performance for real-time data visualization on mobile devices",
      "Creating intuitive gesture controls for globe manipulation",
    ],
    technologies: ["JavaScript", "C#", "Firebase", "REST APIs", "ARCore"],
    githubUrl: "https://github.com/Nia123-glitch/ar-globe",
    demoUrl: "#",
    isFeatured: true,
    images: [globeOne, globeTwo],
  },

  {
    id: 2,
    title: "Find-a-Party Social App",
    tagline: "Social discovery platform for event planning and networking",
    tags: ["Mobile", "Android", "Social", "Solo Project"],
    description:
      "A comprehensive social media application for discovering and organizing events, with real-time chat and location-based features.",
    role: "Solo Full-Stack Developer",
    challenges: [
      "Building real-time chat functionality with message persistence",
      "Implementing location-based event discovery with Google Maps API",
      "Designing scalable database architecture for user-generated content",
      "Creating an intuitive UI/UX for seamless social interaction",
    ],
    technologies: ["Java", "Android Studio", "Firebase", "Google Maps API", "REST APIs"],
    githubUrl: "https://github.com/Nia123-glitch/find-a-party",
    demoUrl: "#",
    isFeatured: true,
    images: [socialOne, socialTwo],
  },

  {
    id: 3,
    title: "AI Document Chatbot",
    tagline: "Desktop application for document-aware AI querying",
    tags: ["AI", "Desktop", "Full-Stack", "Team Project"],
    description:
      "A desktop application that allows users to upload documents and query them through an AI-powered conversational interface.",
    role: "Full-Stack Developer (Team of 3)",
    technologies: ["TypeScript", "Vue.js", "Node.js", "Electron", "REST APIs", "JWT", "Auth0"],
    githubUrl: "#",
    demoUrl: "#",
    isFeatured: true,
    images: [chatbotOne],
  },

  {
    id: 4,
    title: "Qualifind",
    tagline: "Capstone service marketplace connecting clients and providers",
    tags: ["Capstone", "Full-Stack", "Team Lead", "Mobile"],
    description:
      "A service-based application connecting clients with providers through discovery, booking, and communication tools.",
    role: "Project Lead & Full-Stack Developer (Team of 4)",
    technologies: ["Java", "Firebase", "REST APIs", "Android Studio"],
    githubUrl: "#",
    demoUrl: "#",
    isFeatured: true,
    images: [qualifindImg],
  },

  {
    id: 5,
    title: "Iridis Website",
    tagline: "Responsive company website with integrated booking flow",
    tags: ["Web", "Frontend", "Professional", "Responsive"],
    description:
      "A responsive business website built to clearly present services and support consultation requests.",
    role: "Web Developer",
    technologies: ["React", "JavaScript", "HTML", "CSS", "REST APIs"],
    githubUrl: "#",
    demoUrl: "#",
    isFeatured: false,
    images: [iridisOne, iridisTwo],
  },

  {
    id: 6,
    title: "Mandarin Learning Game",
    tagline: "Interactive game for beginner Mandarin language practice",
    tags: ["Game", "Education", "Frontend", "Interactive"],
    description:
      "An educational game designed to help beginners practice Mandarin through short interactive challenges.",
    role: "Developer",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "#",
    demoUrl: "#",
    isFeatured: false,
    images: [],
  },
];

