
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
      description: "contributing to a crowd-sourced Geo-based alert notification and safety platform that delives instant, AI-interpreted danger alerts, enhancing community awareness and response.",
      technologies: ["Golang", "React"],
    liveUrl: "https://app.turva.co"

    },
    {
      title: "Jqueue - Distributed Job Queue System",
      description: " Designed and implemented Jqueue, a distributed job queue system that enables reliable asynchronous task processing.",
      technologies: ["Golang", ],
      githubUrl: "https://github.com/Eranmonnie/jqueue",
    },

    // Add more projects as needed
  ];