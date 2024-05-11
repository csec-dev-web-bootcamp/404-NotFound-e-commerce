"use client";
import { useState } from "react";
// import { NavbarDemo } from "../ui/navbare-demo";

const Header = () => {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <header className="my-8 min-h-60 w-full flex justify-center">
      <div className=" rounded-md border-[1px] border-slate-300 w-11/12 shadow-xl dark:bg-slate-700 dark:text-white">
        <div className="flex h-full flex-col justify-evenly items-center">
          <h1 className="text-3xl font-bold">
            Explore with X-those e-commerce Webiste
          </h1>
          <div className="flex w-2/5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Across our system"
              className="w-full p-2 text-slate-700 rounded-lg outline-none border-2 border-slate-800"
            />
          </div>
          <div className="categories">
            <ul className="flex gap-4">
              <li className="px-3 py-1 hover:bg-slate-800 hover:text-white hover:cursor-pointer border-2 border-slate-700 rounded-sm">
                Fashion
              </li>
              <li className="px-3 py-1 hover:bg-slate-800 hover:text-white hover:cursor-pointer border-2 border-slate-700 rounded-sm">
                Electronics
              </li>
              <li className="px-3 py-1 hover:bg-slate-800 hover:text-white hover:cursor-pointer border-2 border-slate-700 bg-slate-800 text-white rounded-sm">
                Books & Media Hub
              </li>
              <li className="px-3 py-1 hover:bg-slate-800 hover:text-white hover:cursor-pointer border-2 border-slate-700 rounded-sm">
                Home
              </li>
              <li className="px-3 py-1 hover:bg-slate-800 hover:text-white hover:cursor-pointer border-2 border-slate-700 rounded-sm">
                Outdoor
              </li>
              <li className="px-3 py-1 hover:bg-slate-800 hover:text-white hover:cursor-pointer border-2 border-slate-700 rounded-sm">
                Beauty
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
