import React from "react";

function Home() {
  return (
    <>
      <div className="flex flex-col mt-5 lg:mt-10">
        <h1 className="text-4xl font-inter-tight-semibold uppercase lg:text-7xl">
          Selected work
        </h1>
        <h1 className="text-4xl font-inter-tight-semibold uppercase lg:text-7xl">
          (2020-2023)
        </h1>
      </div>
      <p className="mt-5 text-xl text-left lg:text-3xl lg:w-[50%] lg:mt-10"> 
      Have a look at some of the projects I’ve worked on. Clients vary from lifestyle to tech and design companies.
      </p>
    </>
  );
}

export default Home;
