import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import myLogo from "../../public/logo.svg";

const Navbar = ({ searchBar, searchInput, setSearchInput }) => {
  const cartItemCount = useSelector((state) => state.cart.productCount);

  return (
    <div className="flex p-3 items-center justify-around fixed z-10 w-full bg-[#000814] text-xl sm:text-4xl duration-300">
      <div className="w-fit text-yellow-400 duration-100 hover:font-bold mr-5">
        <Link to="/">
          <img
            src={myLogo}
            alt="Logo"
            className="h-10 sm:h-12 md:h-16 bg-neutral-900"
          />
        </Link>
      </div>
      {searchBar && (
        <div className="flex w-4/6 shadow-inner md:w-3/6 items-center bg-[#001D3D] pr-5 text-base md:text-lg">
          <input
            placeholder="Search"
            className="p-5 w-full outline-none font-extralight rounded-md text-base md:text-lg h-6 shadow-2xl bg-inherit"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
          />
          <button className="text-[#FFD60A]">
            <FaSearch />
          </button>
        </div>
      )}
      <div className="text-2xl flex-1 flex justify-end mr-5 ml-5">
        <Link to="/cart">
          <div className="text-sm text-center z-10 text-[#FFD60A]">
            {cartItemCount}
          </div>
          <MdOutlineShoppingCart />
          <div className="text-xs text-center">Cart</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
