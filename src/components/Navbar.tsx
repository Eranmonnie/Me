import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3 md:justify-normal gap-14">
      <Link to="/" className="text-lg font-inter-semibold">Feranmi&reg;</Link>
      <div>
        <Link to="/" className="text-lg font-inter-semibold" >Projects</Link>
        <Link to="/" className="text-lg ml-2 font-inter-semibold">About</Link>
      </div>
      <Link to="/" className="text-lg font-inter-semibold hidden md:inline-flex ml-auto">ajalaferanmi123@gmail.com</Link>
    </div>
  );
};

export default Navbar;
