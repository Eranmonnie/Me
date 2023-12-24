import { FC } from "react";

const Socials: FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 lg:flex-row ">
        <div className="flex justify-center gap-[20%] ">
          <h3 className="text-xl">Github</h3>
          <h3 className="text-xl">Twitter</h3>
        </div>
        <h3 className="text-center text-xl mt-2 lg:mt-0 lg:ml-auto">
          Back to the top↑
        </h3>
      </div>
    </>
  );
};

export default Socials;
