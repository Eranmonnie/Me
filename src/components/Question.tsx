import React from "react";
import Button from "./Button";

const Question = ({ one, two, button }) => {
  return (
    <>
    {two ? (  <div className="flex flex-col gap-2 pt-10 lg:flex-row lg:gap-[20%] lg:mt-64">
        <h2 className="text-xl text-left lg:text-xl">(002)</h2>
        <div className="lg:w-[55%]">
          <h2 className="text-3xl text-left lg:text-4xl">{one}</h2>
          <h2 className="text-3xl mt-5 text-left lg:text-4xl">{two}</h2>
          { button ?(<div className="mt-10"><Button /></div>):
          
          (<div className="mb-44"></div>)
            }
          
        </div>
      </div>):

      (  <div className="flex flex-col gap-2 pt-10 lg:flex-row lg:gap-[20%] lg:mt-40">
      <h2 className="text-xl text-left lg:text-xl">(002)</h2>
      <div className="lg:w-[55%]">
        <h2 className="text-3xl text-left lg:text-4xl">{one}</h2>
        <h2 className="text-3xl mt-5 text-left lg:text-4xl">{two}</h2>
        { button ?(<Button />):
        
        (<div className="mb-44"></div>)
          }
        
      </div>
    </div>)
      }
    
    </>
  );
};

export default Question;
