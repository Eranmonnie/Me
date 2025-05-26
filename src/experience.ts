interface WorkExperienceItem {
    title: string;
    company: string;
    duration: string;
    description: string[];
    technologies: string[];
  }

export const experiences: WorkExperienceItem[] = [
    {
      title: "Backend Engineer",
      company: "DEO Technological ",
      duration: "Oct 2024 - Present",
      description: [
        "Handled the creation of administrative endpoints for admin dashboards, enabling efficient management and monitoring of system activities.",
        "Managed the creation of feedback and complaint system for customer services, improving communication and customer satisfaction.",
        "Developed and maintained essential endpoints that ensured the smooth operation of critical business processes.",
        "Collaborated with frontend team to integrate seamless data flows.",
      ],
      technologies: ["Node.js", "Nest Js", "MongoDB", "Firebase"]
    },
    {
      title: "Back-end Engineer",
      company: "Orderly",
      duration: "May 2024 - Aug 2024",
      description: [
        "Handled the creation and management of transactions using Paystack, ensuring secure and efficient payment processing and logging",
        "Curated and maintained cron jobs and background tasks for services related to payments and charging, enhancing the reliability and performance of payment services",
        "Created a robust chat feature to facilitate communication between clients and businesses, improving user engagement and customer service"
      ],
      technologies: ["Python", "Django", "Celery","PostgreSQL", "Redis"]
    },
    {
      title: "Engineering student trainee (Internship)",
      company: "Eden life",
      duration: "Jan 2023 - July 2023",
      description: [
        "Maintained an in-house CRM used to monitor and manage customer relations, fixing bugs and adding new features, which increased user productivity by 20%",
        "Refactored portions of in-house CRM code from Vue.js 2 to Vue.js 3, reducing code complexity by 25%",
        "Collaborated with the Quality assurance team, identifying various bugs and their reconciliation, receiving timely updates to tests made on assessed modules"
      ],
      technologies: ["Laravel", "Vue Js", "PostgreSQL"]
    }
  ];

