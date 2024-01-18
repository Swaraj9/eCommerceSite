import { Input } from "postcss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-5 fixed z-10 w-full bg-neutral-900 text-3xl duration-300 hover:text-4xl">
      <div className="w-fit">
        <Link to="/">Test Site</Link>
      </div>
      <input
        placeholder="Search"
        className="p-5 font-extralight rounded-md text-lg h-6 shadow-2xl"
      />
    </div>
  );
};

export default Navbar;
