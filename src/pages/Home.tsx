import React from "react";
import Works from "../components/Works";

function Home() {
  return (
    <>
      <div className="flex flex-col mt-5 lg:mt-20">
        <h1 className="text-4xl font-inter-tight-bold uppercase lg:text-9xl">
          Selected work
        </h1>
        <h1 className="text-4xl font-inter-tight-bold uppercase lg:text-9xl">
          (2020-2023)
        </h1>
      </div>
      <p className="mt-5 text-xl text-left lg:text-4xl lg:w-[50%] lg:mt-10 "> 
      Have a look at some of the projects I’ve worked on. Clients vary from lifestyle to tech and design companies.
      </p>
      <Works name ={`Nerflix`} year={`2023`} />
      <Works name ={`Laracast`} year={`2023`} />
      <Works name ={`Worddle clone`} year={`2023`} />
      <Works name ={`custo`} year={`2020`} />

      <div className="flex flex-col gap-2 pt-10 lg:flex-row lg:gap-[20%] lg:mt-64">
      <h2 className="text-xl text-left lg:text-2xl">(002)</h2>
        <div className="lg:w-[55%]">
        <h2 className="text-xl text-left lg:text-4xl">Looking to grow your business through the power of great digital design?</h2>
        <h2 className="text-xl mt-5 text-left lg:text-4xl">Reach out to get the conversation started about your digital design needs.</h2>
        <button className="py-5 mt-16 px-7 border rounded-full w-[300px] lg:w-[320px] lg:text-xl">ajalaferanmi123@gmail.com</button>
        </div>
        
      </div>
    </>
  );
}

export default Home;
