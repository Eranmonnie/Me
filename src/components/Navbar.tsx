import { FC } from "react";
import { Link } from "react-router-dom";
import DropdownNav from "./drop-nav";

const Navbar: FC = () => {
  return (
    <div className="bg-[#f8f7f8]  flex justify-between lg:gap-7  text-gray-500 font-inter-bold  px-[0.80rem] pt-[0.80rem] md:px-[3rem] md:pt-[2rem]">
      <div className="px-10">

        <Link to="/" className="text-lg font-inter-semibold lg:text-[21px]">
          Ajala Oluwaferanmi&reg;
        </Link>
        <DropdownNav />

      </div>
    </div>
  );
};

export default Navbar;
