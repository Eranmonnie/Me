
interface WorkExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

function WorkExperience() {
  const experiences: WorkExperienceItem[] = [
    {
      title: "Backend Developer",
      company: "Afroforg",
      duration: "Nov 2023 - Present",
      description: [
        "Designed and implemented RESTful APIs using Node.js and Express",
        "Optimized database queries for performance across PostgreSQL instances",
        "Collaborated with frontend team to integrate seamless data flows",
        "Implemented comprehensive testing strategies using Jest"
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS"]
    },
    {
      title: "Software Developer (Intern)",
      company: "TechStart",
      duration: "May 2023 - Oct 2023",
      description: [
        "Contributed to backend services handling user authentication",
        "Worked with senior developers to improve code quality and maintainability",
        "Assisted in implementing CI/CD pipelines for automated testing and deployment"
      ],
      technologies: ["JavaScript", "TypeScript", "MongoDB", "Git"]
    }
    // Add more experiences as needed
  ];
  
  return (
    <section className="w-full mb-5">
      <h2 className="font-extrabold text-lg mb-3">Work Experience</h2>
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-zinc-800 rounded-md p-4 hover:border-zinc-600 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="font-bold">{exp.title} • {exp.company}</h3>
              <span className="text-zinc-400 text-sm">{exp.duration}</span>
            </div>
            
            <ul className="list-disc pl-5 mb-3">
              {exp.description.map((item, i) => (
                <li key={i} className="text-sm text-zinc-300 mb-1">{item}</li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="bg-zinc-800 text-xs px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;