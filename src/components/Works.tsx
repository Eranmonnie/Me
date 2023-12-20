import React from "react";

const Works = ({ name, year }) => {
  return (
    <>
      <div className="w-[99.7%] flex flex-col mb-24 gap-5 lg:mb-44">
        <div className="">
          <img
            src="src\images\Screenshot (26).png"
            className="object-cover"
            alt="///"
            className="rounded-xl w-full"
          />
        </div>

        <div className="flex justify-between lg:gap-[20%]">
          <h3 className="text-lg text-left lg:text-xl">{`${name}`}&reg;</h3>
          <h3 className=" text-lg hidden text-left md:inline w-[30%] lg:text-xl">
            Ecommerce website for the first smart mailbox Custo®.
          </h3>
          <h3 className="text-lg text-left md:hidden lg:inline lg:mr-auto lg:text-xl">{`(${year})`}</h3>
        </div>
      </div>
    </>
  );
};

export default Works;
