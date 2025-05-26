
interface ProjectItem {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
  }

export const projects: ProjectItem[] = [
    {
      title: "Turva Geo-Based Safety Alert System (Collaborative Project)",
      description: "contributing to a real-time crowd-sourced danger alert platform for small communities, designed to empower residents with instant updates on local risks like crime, natural hazards, or emergencies.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
      githubUrl: "https://github.com/Eranmonnie/ecommerce-api"
    },
    {
      title: "Jqueue - Distributed Job Queue System",
      description: " Designed and implemented Jqueue, a distributed job queue system that enables reliable asynchronous task processing.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
      githubUrl: "https://github.com/Eranmonnie/Me",
      liveUrl: "https://www.yourwebsite.com"
    },

    // Add more projects as needed
  ];