import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between lg:gap-7">
      <Link to="/" className="text-lg font-inter-semibold lg:text-2xl">
        Feranmi&reg;
      </Link>

      <div className="ml-auto flex lg:gap-7 lg:ml-auto">
        <Link to="/projects" className="text-lg font-inter-medium lg:text-xl">
          Projects
        </Link>

        <Link
          to="/about"
          className="text-lg ml-2 font-inter-medium lg:text-xl"
        >
          About
        </Link>
      </div>
      <Link
        to="/"
        className="text-lg font-inter-medium hidden lg:inline-flex  lg:text-xl"
      >
        ajalaferanmi123@gmail.com
      </Link>
    </div>
  );
};

export default Navbar;
