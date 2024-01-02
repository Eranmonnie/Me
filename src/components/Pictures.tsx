import { FC } from "react";

const Pictures: FC = () => {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-center w-full lg:h-96">
        <img
          src="https://res.cloudinary.com/djtlzuxfa/image/upload/v1703443457/Screenshot_147_ghd6mh.png"
          className="object-cover rounded-xl w-full lg:w-[24%]"
          alt="///"
        />
        <img
          src="https://res.cloudinary.com/djtlzuxfa/image/upload/v1703443457/Screenshot_147_ghd6mh.png"
          className="object-cover rounded-xl w-full lg:w-[24%]"
          alt="///"
        />
        <img
          src="https://res.cloudinary.com/djtlzuxfa/image/upload/v1703443457/Screenshot_147_ghd6mh.png"
          className="object-cover rounded-xl w-full lg:w-[24%]"
          alt="///"
        />
        <img
          src="https://res.cloudinary.com/djtlzuxfa/image/upload/v1703443457/Screenshot_147_ghd6mh.png"
          className="object-cover rounded-xl w-full lg:w-[24%]"
          alt="///"
        />
      </div>
    </>
  );
};

export default Pictures;
