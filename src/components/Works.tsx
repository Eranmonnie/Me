import React from "react";

const Works = ({ name, year }) => {
  return (
    <>
      <div className="w-[99.7%] flex flex-col mt-24 gap-5">
        <div className="">
          <img
            src="src\images\Screenshot (26).png"
            className="object-cover"
            alt="///"
            className="rounded-xl"
          />
        </div>

        <div className="flex justify-between">
          <h3 className="">{`${name}`}&reg;</h3>
          <h3 className="lg:hidden">{`(${year})`}</h3>
          <h3 className="hidden lg:inline">
            Ecommerce website for the first smart mailbox Custo®.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Works;
