import { Project } from '../types';
import introbg from '../assets/Images/introbg.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const projects: Project[] = [
  {
    id: 1,
    title: "AR Globe Mobile App",
    tagline: "Interactive AR application with 3D globe visualization",
    tags: ["Mobile", "AR", "AI", "Active"],
    description: "Developing an augmented reality application featuring an in-camera interactive 3D globe for immersive geographical data exploration.",
    role: "Solo Developer & Designer",
    challenges: [
      "Implementing smooth AR camera integration with 3D model rendering",
      "Optimizing performance for real-time data visualization on mobile devices",
      "Creating intuitive gesture controls for globe manipulation"
    ],
    technologies: ["JavaScript", "C#", "Firebase", "REST APIs", "ARCore"],
    githubUrl: "https://github.com/Nia123-glitch/ar-globe",
    demoUrl: "#",
    isFeatured: true,
    imageUrl: "/api/placeholder/400/300"
  },

  {
    id: 2,
    title: "Find-a-Party Social App",
    tagline: "Social discovery platform for event planning and networking",
    tags: ["Mobile", "Android", "Social", "Solo Project"],
    description: "A comprehensive social media application for discovering and organizing events, with real-time chat and location-based features.",
    role: "Solo Full-Stack Developer",
    challenges: [
      "Building real-time chat functionality with message persistence",
      "Implementing location-based event discovery with Google Maps API",
      "Designing scalable database architecture for user-generated content",
      "Creating an intuitive UI/UX for seamless social interaction"
    ],
    technologies: ["Java", "Android Studio", "Firebase", "Google Maps API", "REST APIs"],
    githubUrl: "https://github.com/Nia123-glitch/find-a-party",
    demoUrl: "#",
    isFeatured: true,
    imageUrl: "/api/placeholder/400/300"
  },
  // Add your other 4 projects here
];

// Add 3 more projects for now to make it work
for (let i = 3; i <= 6; i++) {
  projects.push({
    id: i,
    title: `Project ${i}`,
    tagline: `Description for project ${i}`,
    tags: ["Tag1", "Tag2"],
    description: `Full description for project ${i}`,
    role: "Developer",
    challenges: ["Challenge 1", "Challenge 2"],
    technologies: ["Tech1", "Tech2"],
    githubUrl: "#",
    demoUrl: "#",
    isFeatured: i === 3, // Make project 3 featured
    imageUrl: "/api/placeholder/400/300"
  });
}