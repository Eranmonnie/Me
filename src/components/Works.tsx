import { FC } from "react";

interface worksProps {
  name: string;
  year: string;
  data: string;
}

const Works: FC<worksProps> = ({ name, year, data }) => {
  return (
    <>
      <div className="w-[99.7%] flex flex-col mb-36 gap-5 lg:mb-44">
        <div className="">
          <img
            src="https://res.cloudinary.com/djtlzuxfa/image/upload/v1703443457/Screenshot_147_ghd6mh.png"
            className="object-cover rounded-xl w-full"
            alt="///"
          />
        </div>

        <div className="flex justify-between lg:gap-[21%]">
          <h3 className="text-lg lg:text-xl lg:w-[5%]">{`${name}`}&reg;</h3>
          <h3 className=" text-lg hidden lg:inline text-left md:hidden w-[30%] lg:text-xl">
            {data}
          </h3>
          <h3 className="text-lg text-left lg:inline lg:mr-auto lg:text-xl ">{`(${year})`}</h3>
        </div>
      </div>
    </>
  );
};

export default Works;
