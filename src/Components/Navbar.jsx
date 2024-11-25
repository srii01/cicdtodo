import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-slate-500 justify-between py-3 ">
      <div className="logo font-mono font-semibold text-xl mx-8 my-auto">NextUP</div>
      <ul className="flex gap-8 mx-5">
        <li className="hover:font-bold transition-all cursor-pointer font-mono font-thin border-2 p-2">Home</li>
        <li className="hover:font-bold transition-all cursor-pointer font-mono font-thin border-2 p-2">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
