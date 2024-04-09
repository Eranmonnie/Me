import { FC } from "react";
import { Link } from "react-router-dom";
import DropdownNav from "./drop-nav";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between lg:gap-7  text-gray-500 font-inter-bold">
      <Link to="/" className="text-lg font-inter-semibold lg:text-2xl">
        Feranmi&reg;
      </Link>

      {/* <div className="ml-auto flex lg:gap-7 lg:ml-auto ">
        <Link to="/projects" className="text-lg  lg:text-xl">
          PROJECTS
        </Link>

        <Link
          to="/about"
          className="text-lg ml-2  lg:text-xl"
        >
          ABOUT
        </Link>
      </div> */}

      {/* <Link to="/" className="text-lg  hidden lg:inline-flex  lg:text-xl ">
        AJALAFERANMI123@GMAIL.COM
      </Link> */}
      
      <DropdownNav />
    </div>
  );
};

export default Navbar;
