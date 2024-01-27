import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const Switcher = () => {
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
        className="dark:border-2 text-base sm:text-2xl dark:border-neutral-700 rounded-3xl p-3 pt-2 pb-2 bg-neutral-300 dark:bg-inherit shadow-lg dark:shadow-none"
        onClick={() => toggleDarkMode(darkMode)}
      >
        {darkMode ? <FaRegMoon className="hover:animate-spin" /> : <FaRegSun className="hover:animate-spin" />}
      </button>
    </div>
  );
};

export default Switcher;
