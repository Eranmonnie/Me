import React from "react";

const Solution = ({ heading, data }) => {
  return (
    <>
      <div className="lg:w-[74%] lg:ml-auto text-xl">
        <div className="lg:flex lg:flex-row lg:gap-[70px]">
          <h3 className="hidden lg:inline ">01.</h3>

          <div className="lg:w-[60%]">
            <h3 className="text-xl mb-5">{heading}</h3>

            <p className="text-xl">{data}</p>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Solution;
