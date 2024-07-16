interface work {
  id: number;
  image: string;
  name: string;
  data: string;
  year: string;
  githubLink?: string;
  liveLink?: string;
  languages:Array<string>;
}

export const works: work[] = [
  {
    id: 1,
    image:
      "/silhouette.png",
    name: "Silhouette®",
    data: "A  Profile Management Tool, made  to allow businesses share their persona in an organized way.",
    year: "2023",
    githubLink: "",
    liveLink: "",
    languages:["Nextjs", "Tailwind ", "MySQL", "ShadcnUI" ]
  },
  {
    id: 2,
    image:
    "/stacks.png",
    name: "Stacks®",
    data: "An Academic Repository System, made with React and styled with Tailwind CSS.",
    year: "2023",
    githubLink: "",
    liveLink: "",
    languages:["HTML", "CSS", "MySQL" ,"Js" ]
  },
  {
    id: 3,
    image:
    "/space.png",
    name: "Space®",
    data: "Online collaboration tool that allows teams communicate and share information with eachother. ",
    year: "2023",
    githubLink: "",
    liveLink: "",
    languages:["Nextjs", "Tailwind", "ShadcnUI" ]
  },
  {
    id: 4,
    image:
      "/nerflix.png",
    name: "Nerflix",
    data: "A video-streaming service, made with React and styled with Tailwind CSS, inspired by Netflix.",
    year: "2023",
    githubLink: "",
    liveLink : "",
    languages:["React", "Tailwind CSS", "Firebase" ]
  },
];
