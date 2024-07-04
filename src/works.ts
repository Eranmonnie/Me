interface work {
  id: number;
  image: string;
  name: string;
  data: string;
  year: string;
  languages:Array<string>;
}

export const works: work[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/djtlzuxfa/image/upload/v1704538074/Screenshot_152_qbszj0.png",
    name: "Nerflix",
    data: "A video-streaming service, made with React and styled with Tailwind CSS, inspired by Netflix.",
    year: "2023",
    languages:["React", "Tailwind CSS", "Firebase" ]
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/djtlzuxfa/image/upload/v1704538074/Screenshot_152_qbszj0.png",
    name: "silhouette®",
    data: "A  Profile Management Tool, made  to allow businesses share their persona in an organized way.",
    year: "2023",
    languages:["Nextjs", "Tailwind ", "MySQL", "ShadcnUI" ]
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/djtlzuxfa/image/upload/v1704538074/Screenshot_152_qbszj0.png",
    name: "Stacks®",
    data: "An Academic Repository System, made with React and styled with Tailwind CSS.",
    year: "2023",
    languages:["HTML", "CSS", "MySQL" ,"Js" ]
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/djtlzuxfa/image/upload/v1704538074/Screenshot_152_qbszj0.png",
    name: "Space®",
    data: "Online collaboration tool that allows teams communicate and share information with eachother. ",
    year: "2023",
    languages:["Nextjs", "Tailwind", "ShadcnUI" ]
  },
  
];
