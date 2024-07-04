import { skills } from "@/skills";
import { ForwardIcon } from "lucide-react";

import { FC } from "react";



const Question = () => {
  return (
    <>
      <div className="w-full p-10  bg-white rounded-lg">

        <h1 className="text-4xl lg:text-6xl font-bold mb-10   text-gray-500">About</h1>

        <div className="flex flex-col gap-3 py-10 lg:flex-row lg:gap-64 text-gray-500 border-b-2 border-t-2">
          <div className="w-32  ">

            <div className="flex items-center gap-3">

              <ForwardIcon className="w-5 h-5" />
              <h2 className="text-xl   font-inter-tight-regular ">Career</h2>
            </div>
          </div>
          <div className="lg:w-[60%]">
            <h2 className="text-md md:text-lg  font-inter-tight-regular">I am currently working at Bumble Techonologies as a Backend Eineer on a # month contract. It will end by August</h2>

          </div>
        </div >


        <div className="flex flex-col gap-3 py-10 lg:flex-row lg:gap-64 text-gray-500 border-b-2 ">
          <div className=" w-32  ">

            <div className="flex items-center gap-3">

              <ForwardIcon className="w-5 h-5" />
              <h2 className="text-xl   font-inter-tight-regular ">Experience</h2>
            </div>
          </div>
          <div className="lg:w-[60%] space-y-5">
            <div className="flex justify-between">
              <h2 className="text-md md:text-lg font-inter-tight-regular">Engineering student trinee @ Edenlife,Ojota,Lagos</h2>
              <h2 className="text-md md:text-lg font-inter-tight-regular">January - June, 2023</h2>
            </div>

            <div className="flex justify-between">
              <h2 className="text-md md:text-lg font-inter-tight-regular">Backend Engineer @ Bubmble Techonologies,Lagos</h2>
              <h2 className="text-md mg:text-lg font-inter-tight-regular">May - August, 2023</h2>
            </div>

          </div>
        </div >

        <div className="flex flex-col gap-3 pt-10 lg:flex-row lg:gap-64 text-gray-500 ">
          <div className=" w-32  ">

            <div className="flex items-center gap-3">

              <ForwardIcon className="w-5 h-5" />
              <h2 className="text-xl   font-inter-tight-regular ">Skills</h2>
            </div>
          </div>
          <div className="lg:w-[60%]">
            <div className="flex flex-wrap items-center gap-2 text-black">

              {skills.map((skill) => {
                return (

                  <div className="flex items-center  bg-gray-500 px-3 py-1 rounded-md">

                    <span className="text-xs font-medium text-white">{skill}</span>
                  </div>
                )
              })


              }

            </div>
          </div>
        </div >

      </div>
    </>
  );
};

export default Question;
