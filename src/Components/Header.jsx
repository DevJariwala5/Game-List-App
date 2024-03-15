import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiMoon,
  HiOutlineBars3CenterLeft,
  HiOutlineXMark,
  HiSun,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

import logo1 from "./../assets/Images/logo1.png";
import { ThemeContext } from "../Context/ThemeContext";
import SideNavGenreList from "./SideNavGenreList";
function Header() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    console.log("THEME--", theme);
  }, []);
  return (
    <div className="flex items-center p-3">
      <div className="md:hidden  ">
        {!toggle ? (
          <HiOutlineBars3CenterLeft
            onClick={() => setToggle(!toggle)}
            className="dark:text-white text-[25px] cursor-pointer transition-all duration-300 ease-out"
          />
        ) : (
          <HiOutlineXMark
            onClick={() => setToggle(!toggle)}
            className="dark:text-white text-[25px] cursor-pointer transition-all duration-1000"
          />
        )}
        {toggle ? (
          <div className="absolute z-10 bg-white  mt-3 dark:bg-[#121212] transition-all duration-1000 ease-linear ">
            <SideNavGenreList />
          </div>
        ) : null}
      </div>
      <img src={logo} height={65} width={65} className="hidden md:block" />

      <div className="flex bg-slate-200 mx-5 w-full p-2 rounded-full items-center px-2 transition-all duration-1000 ease-out">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games.."
          className="bg-transparent w-full outline-none pl-2 center rounded-full "
        />
      </div>
      <div>
        {theme == "dark" ? (
          <HiSun
            className="text-[35px] cursor-pointer
       bg-gray-200 text-black p-1 rounded-full "
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        ) : (
          <HiMoon
            className="text-[35px] cursor-pointer bg-gray-200 text-black p-1 rounded-full"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
