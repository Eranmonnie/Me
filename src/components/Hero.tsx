import { FC } from "react";

interface heroProps {
  message: string;
}

const Hero: FC<heroProps> = ({ message }) => {
  return (
    <>
      <p className="mt-5   text-gray-500 w-[70%]  md:text-xl md:w-[53%] lg:text-1.5xl  font-inter-tight-medium  ">
        {message}
      </p>
    </>
  );
};  

export default Hero;
