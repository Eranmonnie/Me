import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between md:justify-normal gap-14">
      <Link to="/" className="text-lg font-inter-semibold lg:text-3xl">
        Feranmi&reg;
      </Link>
      <div>
        <Link to="/" className="text-lg font-inter-semibold lg:text-3xl">
          Projects
        </Link>
        <Link to="/" className="text-lg ml-2 font-inter-semibold lg:text-3xl">
          About
        </Link>
      </div>
      <Link
        to="/"
        className="text-lg font-inter-semibold hidden md:inline-flex ml-auto lg:text-3xl"
      >
        ajalaferanmi123@gmail.com
      </Link>
    </div>
  );
};

export default Navbar;
