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
        "Developed comprehensive administrative API endpoints powering admin dashboards, enabling real-time system monitoring and streamlined management of critical operations.",
        "Developed a comprehensive customer feedback management system, reducing complaint resolution time from days to hours and boosting customer satisfaction ratings by 30%.",
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
        "Curated and maintained cron jobs and background tasks across multiple services including payments, reducing overall server processing load by 40% and enhancing system reliability through automated task distribution.",
        "Created a robust chat feature to facilitate communication between clients and businesses, improving user engagement and customer service."
      ],
      technologies: ["Python", "Django", "Celery","PostgreSQL", "Redis"]
    },
    {
      title: "Engineering student trainee (Internship)",
      company: "Eden life",
      duration: "Jan 2023 - July 2023",
      description: [
        "Enhanced and maintained an in-house CRM system through strategic bug fixes and feature development, boosting user productivity by 20% while streamlining customer relationship management workflows.",
        "Refactored portions of in-house CRM code from Vue.js 2 to Vue.js 3, reducing code complexity by 25%.",
        "Collaborated with the Quality assurance team, identifying various bugs and their reconciliation, receiving timely updates to tests made on assessed modules."
      ],
      technologies: ["Laravel", "Vue Js", "PostgreSQL"]
    }
  ];

