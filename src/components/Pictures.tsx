import { FC } from "react";

const Pictures: FC = () => {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-center w-full">
        <img
          src="src\images\Screenshot (147).png"
          className="object-cover rounded-xl w-full lg:w-[24%]"
          alt="///"
        />
        <img
          src="src\images\Screenshot (147).png"
          className="object-cover rounded-xl w-full lg:w-[24%]"
          alt="///"
        />
        <img
          src="src\images\Screenshot (147).png"
          className="object-cover rounded-xl w-full lg:w-[24%]"
          alt="///"
        />
        <img
          src="src\images\Screenshot (147).png"
          className="object-cover rounded-xl w-full lg:w-[24%]"
          alt="///"
        />
      </div>
    </>
  );
};

export default Pictures;
