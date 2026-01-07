import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Yick Solutions",
    position: "Full Stack Developer Intern",
    location: "Suzhou, China",
    period: "2023",
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
    period: "2023",
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
    period: "2022",
    achievements: [
      "Built responsive company websites using React, JavaScript, HTML, and CSS",
      "Developed a consultation booking system with RESTful API integration",
      "Implemented form validation and state management for improved user experience"
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "REST APIs"]
  }
];