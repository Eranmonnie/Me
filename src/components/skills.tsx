import { skills } from "@/skills";

function Skills() {
  const data = skills
  return (
    <div className="flex items-center flex-wrap gap-3 my-2">
      {data.map((skill, index) => (
        <div
          key={index}
          className="text-xs bg-zinc-200 text-black rounded-md py-0.5 px-2 md:px-3 font-semibold tracking-wide"
        >
          {skill}
        </div>
      ))}
    </div>

  );
}

export default Skills;
