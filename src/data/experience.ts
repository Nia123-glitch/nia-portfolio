import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Yick Solutions",
    position: "Full Stack Developer Intern",
    location: "Suzhou, China",
    period: "Mar 2025- Jun 2025",
    achievements: [
      "Built a document-aware AI chatbot capable of retrieving and answering user queries based on uploaded files",
      "Implemented citation support and intelligent response generation",
      "Developed secure authentication with JWT and Auth0",
      "Integrated REST APIs for the Modv website and AI chatbot"
    ],
    technologies: ["TypeScript", "Vue.js", "Node.js", "Electron", "Auth0", "REST APIs"]
  },
  {
    id: 2,
    company: "Golden Future Resource Group",
    position: "Robotics Engineering Intern",
    location: "Suzhou, China",
    period: "Feb 2025 - Apr 2025",
    achievements: [
      "Contributed to the design and optimization of navigation maps for Automated Guided Vehicles",
      "Improved path planning algorithms for efficient warehouse navigation",
      "Collaborated on ROS-based system integration"
    ],
    technologies: ["C++", "ROS", "Python", "Linux"]
  },
  {
    id: 3,
    company: "Iridis Solutions",
    position: "Web Developer",
    location: "Trinidad and Tobago",
    period: "2024-2025",
    achievements: [
      "Built responsive company websites using React, JavaScript, HTML, and CSS",
      "Developed a consultation booking system with RESTful API integration",
      "Implemented form validation and state management for improved user experience"
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "REST APIs"]
  },

    {
    id: 3,
    company: "NovaTech Software Solutions",
    position: "Co-Founder & Developer",
    location: "Trinidad and Tobago/Remote",
    period: "Present",
    achievements: [
      "Built and delivered client-facing web solutions.",
      "Developing an AR globe application for a client (scoping, implementation, delivery).",
      "Handling end-to-end delivery: planning, UI, implementation, and handoff.",
      "Collaborating with a co-founder on product direction and client requirements."
    ],
    technologies: ["React", "JavaScript", "HTML", "Firebase", "REST APIs", "Unity", "C#", ".NET"]
  }
];