import { FC } from "react";

const Socials: FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 lg:gap-10 lg:flex-row   text-gray-700">
        <div className="flex items-center lg:items-start justify-center gap-10 ">
          <h3 className="text-md">Github</h3>
          <h3 className="text-md">Twitter</h3>
        </div>
          <h3 className="text-md text-center lg:text-start">ajalaferanmi123@gmail.com</h3>
        <h3 className="text-center text-md   mt-2 lg:mt-0 lg:ml-auto">
          Back to the top↑
        </h3>
      </div>
    </>
  );
};

export default Socials;
