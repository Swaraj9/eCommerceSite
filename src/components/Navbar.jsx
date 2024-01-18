import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = ({ searchBar, searchInput, setSearchInput }) => {
  return (
    <div className="flex p-3 items-center justify-around fixed z-10 w-full bg-neutral-900 text-xl sm:text-4xl duration-300">
      <div className="w-fit text-yellow-400 duration-100 hover:font-bold">
        <Link to="/" reloadDocument>
          Test Site
        </Link>
      </div>
      {searchBar && (
        <div className="flex w-full sm:w-3/5 items-center bg-neutral-700 rounded-md pr-5 text-lg">
          <input
            placeholder="Search"
            className="p-5 w-full outline-none font-extralight rounded-md text-lg h-6 shadow-2xl bg-inherit"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
          />
          <button>
            <FaSearch />
          </button>
        </div>
      )}
      <div className="text-2xl ml-5">
        <Link to="/cart" reloadDocument>
          <div className="text-sm text-center z-10 text-orange-500">1</div>
          <MdOutlineShoppingCart />
          <div className="text-xs text-center">Cart</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
