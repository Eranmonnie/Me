import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between md:justify-normal gap-14">
      <Link to="/" className="text-lg font-inter-semibold lg:text-2xl">
        Feranmi&reg;
      </Link>
      <div>
        <Link to="/" className="text-lg font-inter-semibold lg:text-2xl">
          Projects
        </Link>
        <Link to="/" className="text-lg ml-2 font-inter-semibold lg:text-2xl">
          About
        </Link>
      </div>
      <Link
        to="/"
        className="text-lg font-inter-semibold hidden md:inline-flex ml-auto lg:text-2xl"
      >
        ajalaferanmi123@gmail.com
      </Link>
    </div>
  );
};

export default Navbar;
