import React from "react";

const Works = ({ name, year }) => {
  return (
    <>
      <div className="w-[99.7%] flex flex-col mb-36 gap-5 lg:mb-44">
        <div className="">
          <img
            src="src\images\Screenshot (26).png"
            className="object-cover rounded-xl w-full"
            alt="///"
          />
        </div>

        <div className="flex justify-between lg:gap-[21%]">
          <h3 className="text-lg lg:text-xl lg:w-[5%]">{`${name}`}&reg;</h3>
          <h3 className=" text-lg hidden lg:inline text-left md:hidden w-[30%] lg:text-xl">
            Ecommerce website for the first smart mailbox Custo®.
          </h3>
          <h3 className="text-lg text-left lg:inline lg:mr-auto lg:text-xl ">{`(${year})`}</h3>
        </div>
      </div>
    </>
  );
};

export default Works;
