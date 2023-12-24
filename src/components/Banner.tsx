import { FC } from "react";

interface bannerProps {
  first: string;
  second: string;
  align: boolean;
}
const Banner: FC<bannerProps> = ({ first, second, align }) => {
  return (
    <>
      {align ? (
        <div className="flex flex-col mt-5 lg:mt-10">
          <h1 className="text-4xl font-inter-tight-bold uppercase lg:text-8xl">
            {first}
          </h1>
          <h1 className="text-4xl font-inter-tight-bold uppercase lg:text-8xl">
            {second}
          </h1>
        </div>
      ) : (
        <div className="flex flex-col mt-40  text-center mb-10 ">
          <h1 className="text-4xl font-inter-tight-bold uppercase lg:text-8xl">
            {first}
          </h1>
          <h1 className="text-4xl font-inter-tight-bold uppercase lg:text-8xl">
            {second}
          </h1>
        </div>
      )}
    </>
  );
};

export default Banner;
