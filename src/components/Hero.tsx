import { FC } from "react";

interface heroProps {
  message: string;
}

const Hero: FC<heroProps> = ({ message }) => {
  return (
    <>
      <p className="mt-10   text-gray-500  text-xl text-left lg:text-4xl lg:w-[53%] lg:mt-8 font-inter-tight-medium  ">
        {message}
      </p>
    </>
  );
};

export default Hero;
