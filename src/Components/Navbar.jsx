import React, { useState } from "react";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <nav
        className="flex bg-gradient-to-r from-gray-800 to-gray-900
 justify-between py-3 select-none"
      >
        <h1
          className="logo flex gap-3 select-none p-3 cursor-pointer text-orange-500 font-mono font-extrabold text-xl mx-8 my-auto"
          onClick={togglePopup}
        >
          <img src="./appicon.svg" alt="" />
          NextUP
        </h1>

        <ul className="flex items-center gap-8 mx-5 my-0">
          <li>
            <a
              className="h-10 flex gap-2 items-center bg-gradient-to-r from-slate-700 to-slate-900 transition-all duration-300 hover:scale-110 cursor-pointer font-mono font-thin border-2 border-orange-500 p-4 rounded-lg text-orange-500"
              target="_blank"
              href="https://www.linkedin.com/in/abhiram-ys-8a3a2b266/"
              rel="noopener noreferrer"
            >
              <img src="./linkedin_orange.svg" alt="" className="w-4 y-4" />
              <div className="text mt-1">LinkedIn</div>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Abhiram241"
              target="_blank"
              className="h-10 flex gap-2 items-center bg-gradient-to-r from-slate-700 to-slate-900 transition-all duration-300 hover:scale-110 cursor-pointer font-mono font-thin border-2 border-orange-500 p-4 rounded-lg text-orange-500"
              rel="noopener noreferrer"
            >
              <img src="./github_orange.svg" alt="" className="w-4 y-4 filter" />
              <div className="text mt-1">Github</div>
            </a>
          </li>
        </ul>
      </nav>

      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={togglePopup}
        >
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-lg relative max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // Prevents closing the popup when clicking inside it
          >
            <h2 className="text-2xl font-bold text-blue-500 mb-4">
              Welcome to NextUP!
            </h2>
            <p className="text-white">
              Boost your productivity with NextUP! 🚀 Stay organized, crush
              tasks, and own your day! ✅💪
            </p>
            <button
              className="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
