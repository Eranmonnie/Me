import { FC } from "react";

interface profileProp {
  image: String;
}

const profile: FC<profileProp> = ({ image }) => {
  return (
    <>
      <div className="w-[99.7%] mt-28  mb-24 gap-5 lg:mt-48 lg:mb-32">
        <div className="">
          <img
            src={`${image}`}
            className="object-cover rounded-xl w-full lg:h-[88vh]"
            alt="///"
          />
        </div>
      </div>
    </>
  );
};

export default profile;
