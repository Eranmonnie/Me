import { FC } from "react";
import { motion } from "framer-motion"


interface bannerProps {
  first: string;
  second: string;
  align: boolean;
}
const Banner: FC<bannerProps> = ({ first, second, align }) => {
  return (
    <>
      {align ? (
        <div className="flex flex-col mt-5 lg:mt-10">
          <motion.h1
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{ type:'spring', stiffness:40}}
           className="text-4xl font-inter-tight-bold uppercase lg:text-8xl">
            {first}
          </motion.h1>
          <motion.h1
           initial={{opacity:0, y:30}}
           animate={{opacity:1, y:0}}
           transition={{delay:0.1, type:'spring', stiffness:40}}
          className="text-4xl font-inter-tight-bold uppercase lg:text-8xl">
            {second}
          </motion.h1>
        </div>
      ) : (
        <div className="flex flex-col mt-40  text-center mb-10 ">
          <motion.h1
           initial={{opacity:0, y:30}}
           animate={{opacity:1, y:0}}
           transition={{ type:'spring', stiffness:40}}
           className="text-4xl font-inter-tight-bold uppercase lg:text-8xl">
            {first}
          </motion.h1>
          <motion.h1
           initial={{opacity:0, y:30}}
           animate={{opacity:1, y:0}}
           transition={{delay:0.1, type:'spring', stiffness:40}}
           className="text-4xl font-inter-tight-bold uppercase lg:text-8xl">
            {second}
          </motion.h1>
        </div>
      )}
    </>
  );
};

export default Banner;
