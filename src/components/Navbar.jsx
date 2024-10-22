import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const themes = {
  light: "light",
  sunthwave: "sunthwave",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.light;
};

const Navbar = () => {
  // const [theme, setTheme] = useState("light");

  // const handleTheme = (e) => {
  // if (e.target.checked) {
  // setTheme("sunthwave");
  // } else {
  // setTheme("light");
  // }/
  // };

  // useEffect(() => {
  // localStorage.setItem("theme", theme);
  // const localTheme = localStorage.getItem("theme");

  // document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);

  // New Theme Handler
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { light, sunthwave } = themes;
    const newTheme = theme === light ? sunthwave : light;
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="z-10 navbar shadow-lg lg:px-16">
      <div className="navbar-start">
        <div className="dropdown border-0">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-[1px] border-[#23BE0A] px-3 py-1 font-bold rounded-lg"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listed-books"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-[1px] border-[#23BE0A] px-3 py-1 font-bold rounded-lg"
                  : ""
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pages-read"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-[1px] border-[#23BE0A] px-3 py-1 font-bold rounded-lg"
                  : ""
              }
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <div className="">
          <Link to="/" className="font-bold text-2xl">
            Book <span className="text-[#23BE0A]">Store</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex flex-row justify-center items-center gap-5 menu-horizontal px-1 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-[1px] border-[#23BE0A] px-3 py-1 font-bold rounded-lg"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listed-books"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-[1px] border-[#23BE0A] px-3 py-1 font-bold rounded-lg"
                : ""
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pages-read"
            className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] border-[1px] border-[#23BE0A] px-3 py-1 font-bold rounded-lg"
                : ""
            }
          >
            Pages to Read
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex flex-row gap-5">
        <div className="hidden md:flex flex-row gap-5">
          <a className=" btn bg-[#23BE0A] text-white border-2 border-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A]">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] text-white border-2 border-[#59C6D2] hover:bg-transparent hover:border-[#59C6D2] hover:text-[#59C6D2]">
            Sign Up
          </a>
        </div>

        {/* Theme Controller */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            onChange={handleTheme}
            type="checkbox"
            className="theme-controller"
          />

          {/* sun icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
