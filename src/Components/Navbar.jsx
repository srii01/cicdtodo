import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-gradient-to-r from-teal-400 to-indigo-600 justify-between py-3 ">
      <div className="logo select-none cursor-pointer font-mono font-semibold text-xl mx-8 my-auto">
        NextUP
      </div>
      <ul className="flex gap-8 mx-5">
        <li className=" flex gap-2 items-center bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 hover:scale-110 cursor-pointer font-mono font-thin border-2 p-4 rounded-lg text-white">
        <img src="./linkedin.svg" alt="" className="w-4 y-4 filter invert saturate-0" />

          LinkedIn
        </li>

        <li className=" flex gap-2 items-center bg-gradient-to-r from-green-600 to-green-400 transition-all duration-300 hover:scale-110 cursor-pointer font-mono font-thin border-2 p-4 rounded-lg text-white">
          <img src="./github.svg" alt="" className="w-4 y-4 filter invert saturate-0" />
          Github
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
