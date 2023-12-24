import React from "react";

const Hero = ({ message }) => {
  return (
    <>
      <p className="mt-5 text-xl text-left lg:text-4xl lg:w-[53%] lg:mt-8 ">
        {message}
      </p>
    </>
  );
};

export default Hero;
