import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex bg-gradient-to-r from-gray-800 to-gray-900
 justify-between py-3 "
    >
      <h1 className="logo flex  gap-3 select-none p-3 text-orange-500  cursor-pointer font-mono font-extrabold  text-xl mx-8 my-auto">
        <img src="./appicon.svg" alt="" className="" />
        NextUP
      </h1>

      <ul className="flex items-center gap-8 mx-5 my-0">
        <li className=" h-10 flex gap-2 items-center bg-gradient-to-r  from-slate-700 to-slate-900 transition-all duration-300 hover:scale-110 cursor-pointer font-mono font-thin border-2 p-4 rounded-lg text-orange-500">
          <img
            src="./linkedin.svg"
            alt=""
            className="w-4 y-4 filter invert saturate-0"
          />
          <div className="text mt-1">LinkedIn</div>
        </li>

        <li className=" h-10 flex gap-2 items-center bg-gradient-to-r from-slate-700 to-slate-900 transition-all duration-300 hover:scale-110 cursor-pointer font-mono font-thin border-2 p-4 rounded-lg text-white">
          <img
            src="./github.svg"
            alt=""
            className="w-4 y-4 filter invert saturate-0"
          />
<div className="text mt-1">Github</div>        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
