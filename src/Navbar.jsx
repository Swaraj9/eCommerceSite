import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-5 fixed z-10 w-full bg-neutral-900 text-3xl duration-300 hover:text-4xl">
      <div className="w-fit">
        <Link to="/">Test Site</Link>
      </div>
    </div>
  );
};

export default Navbar;
