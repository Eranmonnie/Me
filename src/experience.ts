interface WorkExperienceItem {
  title: string;
  company: string;
  duration: string;
  project?: Record<string, string>;
  description: string[];
  technologies: string[];
}

export const experiences: WorkExperienceItem[] = [
  {
    title: "Backend Engineer",
    company: "Fastamoni Technologies ",
    duration: "Feb 2026 - Present",
    description: [
      "Contributed to the development and maintenance of the fintech API infrastructure powering Bizflex Africa’s B2B platform, enabling seamless integration of virtual card issuance and wallet management for merchants and developers.",
      "Contributed to the redesign of the account architecture to support multi-account switching, enabling users to operate both freelance and business profiles under a single identity, reducing duplication and improving user experience.",
      "Built and integrated a scalable rewards and points system, implementing event-driven logic to track user actions (signups, bill payments, international transfers) and trigger reward allocation, driving increased platform engagement.",
    ],
    technologies: ["Node.js", "Nest Js", "Typescript", "Docker", "PostgreSQL", "Redis", "BullMQ"]
  },
  {
    title: "Backend Engineer",
    company: "Bumble Technologies (contract)",
    duration: "May 2026 - August 2026",
    project: {
      name: "Tycon Editors"
    },
    description: [
      "Built and maintained a NestJS, PostgreSQL, Prisma backend services, including AWS S3 presigned-URL upload and delivery for video assets.",
      "Designed a points ledger system rewarding approved editor submissions, powering leaderboards and editor dashboards; built a payout system on top with request/withhold/accept/reject flows, atomic ledger debits, and concurrency safe processing to prevent double payment.",
      "Built an admin analytics service computing revenue, turnaround times, and top editor metrics server side, plus a role aware notification settings system with templated email delivery.",
      "Built and extended JWT auth and RBAC with fine grained permissions for role based endpoints; built an admin invitation and onboarding flow for secure access provisioning."
    ],
    technologies: ["Typescript", "NestJS", "Prisma", "PostgreSQL", "S3"]
  },
  {
    title: "Backend Engineer",
    company: "Deaf Access Foundation (contract)",
    duration: "Oct 2025 - May 2026",
    project: {
      name: "SignAI"
    },
    description: [
      "Developed backend infrastructure for an accessibility platform enabling speech-to-sign language translation for Deaf and Hard of Hearing users.",
      "Implemented asynchronous task processing using Celery and Redis to handle audio and text workloads, reducing request latency and improving overall system responsiveness.",
      "Utilized OpenCV and Google MediaPipe to process video datasets for pose estimation, extracting skeletal landmark data and preparing gloss-based lookup datasets for sign language translation workflows."
    ],
    technologies: ["Python", "Django Rest Framework", "Opencv", "Mediapipe", "PostgreSQL", "Redis", "Celery"]
  },
  {
    title: "Backend Engineer",
    company: "DEO Technological ",
    duration: "Oct 2024 - Jan 2026",
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
    technologies: ["Python", "Django", "Celery", "PostgreSQL", "Redis"]
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

