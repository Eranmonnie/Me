import { experiences } from "@/experience";



function Experience() {

  return (
    <section className="w-full mt-5 mb-5">
      <h2 className="font-extrabold text-lg mb-3">Work Experience</h2>
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-zinc-800 rounded-md p-4 hover:border-zinc-600 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="font-bold">{exp.title} @ {exp.company}</h3>
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

export default Experience;