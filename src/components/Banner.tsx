import { FC } from "react";
import { motion } from "framer-motion"


interface bannerProps {
  first: string;
  second: string;
}
const Banner: FC<bannerProps> = ({ first, second }) => {
  return (
    <>
     
        <div className="flex flex-col mt-10  text-center mb-5  text-rose-500 ">
          <motion.h1
           initial={{opacity:0, y:30}}
           animate={{opacity:1, y:0}}
           transition={{ type:'spring', stiffness:40}}
           className="text-3xl font-inter-tight-bold uppercase lg:text-6xl">
            {first}
          </motion.h1>
          <motion.h1
           initial={{opacity:0, y:30}}
           animate={{opacity:1, y:0}}
           transition={{delay:0.1, type:'spring', stiffness:40}}
           className="text-3xl font-inter-tight-bold uppercase lg:text-6xl">
            {second}
          </motion.h1>
        </div>
      
    </>
  );
};

export default Banner;
