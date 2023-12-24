import Button from "./Button";
import { FC } from "react";

interface questionProps {
  one: string;
  two?: string;
  button: boolean;
}

const Question: FC<questionProps> = ({ one, two, button }) => {
  return (
    <>
      {two ? (
        <div className="flex flex-col gap-3 pt-10 lg:flex-row lg:gap-[22%] font-inter-tight-regular">
          <h2 className="text-xl text-left lg:text-xl ">(002)</h2>
          <div className="lg:w-[55%]">
            <h2 className="text-2xl text-left lg:text-4xl">{one}</h2>
            <h2 className="text-2xl mt-5 text-left lg:text-4xl">{two}</h2>
            {button ? (
              <div className="mt-10">
                <Button />
              </div>
            ) : (
              <div className="mb-44"></div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 pt-10 lg:flex-row lg:gap-[22%] ">
          <h2 className="text-xl text-left lg:text-xl">(002)</h2>
          <div className="lg:w-[55%]">
            <h2 className="text-2xl text-left lg:text-4xl">{one}</h2>
            <h2 className="text-2xl mt-5 text-left lg:text-4xl">{two}</h2>
            {button ? <Button /> : <div></div>}
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
