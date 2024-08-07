import Question from "../components/Question";

import Navbar from "@/components/Navbar";

import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ProjectCarousel } from "@/components/Project-Carousel";
import { Github, Linkedin, Twitter } from "lucide-react";

function Home() {
  return (
    <>
      <div className="bg-black h-screen">
      <Navbar />
        <div className="w-full h-full bg-[#f8f7f8] px-[0.80rem] md:px-[3rem]  rounded-b-2xl ">
          <div className="p-5 md:p-10 flex items-center justify-between">

            <div className="flex  flex-col ">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 40 }}
                className="  text-rose-500 text-2xl font-inter-tight-bold uppercase md:text-4xl lg:w-[60%] mb-10">
                I'm a digital architect with a passion for bringing software to life!
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 40 }}
                className="text-2xl font-inter-tight-bold uppercase md:text-4xl mb-5">
                #Software engineer
              </motion.h1>
              <div className="flex gap-5">

                <Github />
                <Linkedin />
                <Twitter />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-black">

        <div className=" w-full   px-[0.80rem] pt-[0.80rem] md:px-[3rem] md:pt-[2rem] h-screen ">
          <ProjectCarousel />
        </div>
      </div>


      <div className="w-full p-[0.80rem]  pt-[0.80rem] md:px-[3rem] md:pt-[2rem] ">

        <Question

        />

      </div>



      <div className="w-full p-[0.80rem] pt-[0.80rem] md:px-[3rem] md:pt-[2rem] pb-10  rounded-t-xl">
        <Footer />
      </div>


    </>
  );
}

export default Home;
