import { FC } from "react";
import { useAnimation, motion } from "framer-motion";

interface worksProps {
  name: string;
  year: string;
  data: string;
}

const Works: FC<worksProps> = ({ name, year, data }) => {
  const controls = useAnimation();

  const worksvariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
      },
    },
  };

  const imagevariance = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 1.03,

      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  const popupvariance = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.6,

      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  const handleHover = () => {
    controls.start("animate");
  };

  const handleHoverEnd = () => {
    controls.start("initial");
  };

  return (
    <>
      <div className="w-[99.7%] flex flex-col mb-36 gap-5 lg:mb-44 ">
        <motion.div
          className="w-full rounded-xl overflow-hidden relative"
          variants={worksvariants}
          initial="initial"
          whileInView="visible"
          onHoverStart={handleHover}
          onHoverEnd={handleHoverEnd}
          whileHover={{ scale: 1 }}
        >
          <motion.img
            variants={imagevariance}
            initial="initial"
            animate={controls}
            src="https://res.cloudinary.com/djtlzuxfa/image/upload/v1703443457/Screenshot_147_ghd6mh.png"
            className="object-cover w-full "
            alt="///"
          />
          <motion.div
            variants={popupvariance}
            initial="initial"
            animate={controls}
            className="hidden lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-y-[-50%] lg:translate-x-[-50%] lg:w-44 lg:h-44 lg:bg-white lg:rounded-full lg:p-14 lg:flex lg:justify-center lg:items-center"
          >
            <h2 className="text-center text-lg">view case</h2>
          </motion.div>
        </motion.div>

        <div className="flex justify-between lg:gap-[21%]">
          <h3 className="text-lg lg:text-xl lg:w-[5%]">{`${name}`}&reg;</h3>
          <h3 className=" text-lg hidden lg:inline text-left md:hidden w-[30%] lg:text-xl">
            {data}
          </h3>
          <h3 className="text-lg text-left lg:inline lg:mr-auto lg:text-xl ">{`(${year})`}</h3>
        </div>
      </div>
    </>
  );
};

export default Works;
