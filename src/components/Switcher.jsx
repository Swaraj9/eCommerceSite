import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const Switcher = ({drawer}) => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(!checked);
  };

  return (
    <div>
      <button
        className={`${!drawer && "dark:border-2"} text-base ${drawer && "text-[#FFD60A] text-xl bg-neutral-100"} sm:text-2xl dark:border-neutral-700 rounded-3xl ${!drawer && "p-3 bg-neutral-300"} pt-2 pb-2 dark:bg-inherit ${!drawer && "shadow-lg"} dark:shadow-none`}
        onClick={() => toggleDarkMode(darkMode)}
      >
        {darkMode ? <FaRegMoon className="hover:animate-spin" /> : <IoSunny className="hover:animate-spin" />}
      </button>
    </div>
  );
};

export default Switcher;
