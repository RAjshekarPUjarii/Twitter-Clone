import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { sideBarLinks } from "../constants/data";
import Icons from "./SidebarIcons";

const SideBar = () => {
  return (
    <header className=" flex flex-col gap-3">
      <div>
        <h1 className="text-3xl m-3">
          <a href="/">
            <BsTwitterX className="  bg-black text-white " />
          </a>
        </h1>
      </div>
      <div>
        <nav className="text-white">
          {sideBarLinks.map(({ href, label }) => (
            <div key={href} className="w-[14rem] p-1">
              <a href={href} className="bg-white">
                <div className="flex flex-row gap-4 rounded-full hover:bg-[#202327]  p-2 ">
                  <div className="flex place-self-center">
                    <Icons label={label} />
                  </div>
                  <div>
                    <span className="p3 text-xl">{label}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </nav>
      </div>
      <div>
        <div className="rounded-full  bg-[#1d9bf0] text-white p-2">
          <a href="#post">
            <div className="text-center">
              <span className="text-xl">Post</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default SideBar;
