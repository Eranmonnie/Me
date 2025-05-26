

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

function Education() {
  const educationItems: EducationItem[] = [
    {
      institution: "Babcock University",
      degree: "B.Sc. Software Engineering",
      duration: "2020 - 2024",
      description: "Focused on algorithms, data structures, and systems programming. Graduated with honors."
    },

  ];

  return (
    <section className="w-full mb-5">
      <h2 className="font-extrabold text-lg mb-3">Education</h2>
      <div className="flex flex-col gap-3">
        {educationItems.map((item, index) => (
          <div key={index} className="border border-zinc-800 rounded-md p-4 hover:border-zinc-600 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="font-bold">{item.institution}</h3>
              <span className="text-zinc-400 text-sm">{item.duration}</span>
            </div>
            <p className="text-zinc-300">{item.degree}</p>
            {item.description && (
              <p className="text-sm text-zinc-400 mt-2">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;