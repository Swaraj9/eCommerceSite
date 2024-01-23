import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PiUserCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { useCategories } from "../hooks/useCategories";
import { IoClose } from "react-icons/io5";

const Category = ({ category, selectedCats, setSelectedCats }) => {
  const [selected, setSelected] = useState(false);

  const modifyCategories = () => {
    setSelected(!selected);

    if (selected) {
      if (selectedCats.includes(category)) {
        let tempArr = [...selectedCats];
        tempArr.splice(tempArr.indexOf(category), 1);
        setSelectedCats([...tempArr]);
      }
    } else {
      setSelectedCats([...selectedCats, category]);
    }
  };

  return (
    <button
      key={category}
      onClick={() => modifyCategories()}
      className={`bg-neutral-700 flex items-center gap-2 rounded-3xl duration-100 p-2 pl-3 pr-3 text-nowrap ${
        selected && "border-2 border-neutral-400"
      }`}
    >
      {category}
      {selected && (
        <div className="text-xl">
          <IoClose />
        </div>
      )}
    </button>
  );
};

const Navbar = ({
  searchBar,
  searchInput,
  setSearchInput,
  selectedCats,
  setSelectedCats,
}) => {
  const cartItemCount = useSelector((state) => state.cart.productCount);

  const categories = useCategories();

  return (
    <div className="flex flex-col fixed z-10 w-full">
      <div className="flex p-5 items-center justify-around w-full bg-neutral-800 border-b-2 border-neutral-700 text-xl sm:text-4xl duration-300">
        <div className="w-fit text-yellow-400 duration-100 hover:font-bold mr-5">
          <Link to="/">
            <div>eCommerceSite</div>
          </Link>
        </div>
        {searchBar && (
          <div className="flex w-4/6 rounded-3xl shadow-inner md:w-3/6 items-center border-2 border-neutral-700 pr-5 text-base md:text-lg">
            <input
              placeholder="Search"
              className="p-5 w-full outline-none font-extralight rounded-3xl text-base md:text-lg h-6 shadow-2xl bg-inherit"
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
        <div className="text-2xl flex-1 flex items-center gap-3 justify-end ml-5">
          <Link to="/cart">
            <div className="flex gap-3 border-2 border-neutral-700 rounded-3xl p-3 pt-2 pb-2 justify-center items-center">
              <div className="text-base text-center z-10 text-[#FFD60A]">
                {cartItemCount}
              </div>
              <MdOutlineShoppingCart />
            </div>
          </Link>
          <div className="text-4xl">
            <PiUserCircle />
          </div>
        </div>
      </div>
      {searchBar && (
        <div className="flex pl-2 no-scrollbar overflow-x-scroll  items-center gap-2 pt-3 pb-3 border-b-2 border-neutral-700 bg-neutral-800">
          {categories.map((category) => {
            return (
              <Category
                category={category}
                selectedCats={selectedCats}
                setSelectedCats={setSelectedCats}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
