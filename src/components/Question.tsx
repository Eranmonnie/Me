import React from "react";
import Button from "./Button";

const Question = ({ one, two, button }) => {
  return (
    <>
      <div className="flex flex-col gap-2 pt-10 lg:flex-row lg:gap-[20%] lg:mt-64">
        <h2 className="text-xl text-left lg:text-xl">(002)</h2>
        <div className="lg:w-[55%]">
          <h2 className="text-xl text-left lg:text-3xl">{one}</h2>
          <h2 className="text-xl mt-5 text-left lg:text-3xl">{two}</h2>
          { button ?(<Button />):
          (<div className="mb-44"></div>)
            }
          
        </div>
      </div>
    </>
  );
};

export default Question;
