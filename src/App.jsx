import { useState } from "react";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-black min-h-[100vh]">
      <Navbar />
      <div
        className="container mx-auto mt-20 my-5 rounded-xl p-5 w-1/2  "
        style={{ backgroundColor: "#C8D5B9" }}
      >
        
        <div className="addtodo">
          <h2 className="text-3xl  font-bold text-center ">Plan Your Day</h2>
          <div className="flex items-center justify-center mt-5">
            <input
              type="text"
              name=""
              className=" transition-all duration-100 hover:scale-110 h-12 w-[80%] rounded-l-xl p-2  mx-0 border border-gray-300 placeholder-gray-500 placeholder:text-center"
              id=""
              placeholder="Enter your todo"
            />
            <button
              type="submit"
              className="rounded-r-xl w-25 mx-0  p-2 h-12 flex items-center transition-all duration-100 hover:scale-125"
              style={{ backgroundColor: "#FE654F" }}
            >
              Submit
            </button>
          </div>
        </div>

        <h2 className="text-lg font-mono font-semibold">Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum dolor sit.</div>
            <div className="buttons">
              <button className=""><img src="./edit.svg" alt="" /></button>
              <button><img src="./delete.svg" alt="" /></button>
            </div>
          </div>
        </div>
      </div>

      </div>
          </>
  );
}

export default App;
