import React, { useState, useEffect } from "react";
import { FaHamburger, FaSearch } from "react-icons/fa";
import { PiUserCircle } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import { useCategories } from "../hooks/useCategories";
import { useFetch } from "../hooks/useFetch";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Switcher from "./Switcher";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { removeToken } from "../redux/userSlice";

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
      className={`dark:bg-neutral-700 shadow-lg dark:shadow-none bg-neutral-300 text-neutral-500 dark:text-neutral-50 flex items-center gap-2 rounded-3xl duration-100 sm:p-2 p-1 sm:pl-3 sm:pr-3 pl-2 pr-2 sm:text-base text-xs text-nowrap ${
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
  const [username, setUsername] = useState("");

  const cartItemCount = useSelector((state) => state.cart.productCount);
  const token = useSelector((state) => state.user.token)

  const categories = useFetch("https://dummyjson.com/products/categories");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      let res = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      res = await res.json();
      setUsername(res.firstName)
    };

    getUser();
  }, []);

  const signOut = ( ) => {
    dispatch(removeToken());
    navigate("/login");
  }

  return (
    <div className="flex flex-col fixed z-10 shadow-2xl dark:shadow-none w-full">
      <div className="flex p-3 sm:p-5 items-center justify-around w-full bg-neutral-200 dark:bg-neutral-800 border-b-2 border-neutral-300 dark:border-neutral-700 text-lg sm:text-3xl duration-300">
        <div className="w-fit text-neutral-500 dark:text-[#FFD60A] duration-100 hover:font-bold mr-5">
          <Link to="/">
            <div>eCommerceSite</div>
          </Link>
        </div>
        {searchBar && (
          <div className="flex w-4/6 rounded-3xl dark:shadow-inner md:w-3/6 items-center dark:border-2 bg-neutral-300 shadow-lg dark:bg-inherit dark:border-neutral-700 sm:pr-5 pr-3 text-xs sm:text-lg">
            <input
              placeholder="Search"
              className="sm:p-3 p-2 w-full text-neutral-500 dark:text-neutral-50 outline-none font-extralight rounded-3xl text-xs sm:text-lg shadow-2xl bg-transparent"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              value={searchInput}
            />
            <button className="text-[#e4c428] dark:text-[#FFD60A]">
              <FaSearch />
            </button>
          </div>
        )}
        <div className="text-2xl sm:flex flex-1 hidden items-center gap-3 justify-end ml-5 text-neutral-500 dark:text-neutral-50">
          <Switcher />
          <Link to="/cart">
            <div className="flex gap-3 dark:border-2 dark:border-neutral-700 rounded-3xl p-3 pt-2 pb-2 justify-center items-center bg-neutral-300 dark:bg-inherit shadow-lg dark:shadow-none">
              <div className="text-xs sm:text-base text-center z-10 text-neutral-500 dark:text-[#FFD60A]">
                {cartItemCount}
              </div>
              <MdOutlineShoppingCart className="text-base sm:text-2xl" />
            </div>
          </Link>
          <div onClick={() => signOut()} className="text-2xl cursor-pointer flex dark:border-2 dark:border-neutral-700 rounded-3xl p-1 pr-3 items-center gap-3 sm:text-4xl bg-neutral-300 dark:bg-inherit shadow-lg dark:shadow-none">
            <PiUserCircle />
            <div className="text-base">{username}</div>
          </div>
        </div>
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className={`text-neutral-500 ${
            !searchBar && "ml-auto"
          } sm:hidden ml-3 text-2xl`}
        >
          <IoMenu />
        </button>
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(!drawerOpen)}
          direction="right"
          className="flex flex-col text-neutral-400"
        >
          <div className="h-full flex p-5 flex-col gap-5 bg-neutral-100 dark:bg-neutral-800">
            <div className="flex items-end w-full justify-between border-b-2 border-neutral-200 dark:border-neutral-600 pb-2">
              <div>{username}</div>
              <PiUserCircle className="text-3xl text-[#e4c428]" />
            </div>
            <Link to="/cart">
              <div className="flex items-end w-full justify-between border-b-2 border-neutral-200 dark:border-neutral-600 pb-2">
                <div>Cart</div>
                <div className="flex flex-row gap-2 items-center text-[#e4c428]">
                  <MdOutlineShoppingCart className="text-2xl" />
                  <div>{cartItemCount}</div>
                </div>
              </div>
            </Link>
            <div className="flex items-end w-full justify-between border-b-2 border-neutral-200 dark:border-neutral-600 pb-2">
              <div>Theme</div>
              <Switcher drawer={true} />
            </div>
            <button onClick={() => signOut()} className="bg-[#FFD60A] text-neutral-50 dark:text-neutral-800 rounded-md pt-1 pb-1 mt-auto">
              Sign Out
            </button>
          </div>
        </Drawer>
      </div>
      {searchBar && (
        <div className="flex pl-2 no-scrollbar overflow-x-scroll  items-center gap-2 pt-3 pb-3 border-b-2 border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800">
          {categories.map((category) => {
            return (
              <Category
                key={category}
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
