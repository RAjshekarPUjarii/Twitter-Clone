import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { sideBarLinks } from "../../constants/data";
import Icons from "./SidebarIcons";
import { PiDotsThreeBold } from "react-icons/pi";

const SideBar = () => {
  return (
    <header className=" flex flex-col gap-3 ">
      <div>
        <h1 className="text-3xl ml-3 ">
          <a href="/">
            <BsTwitterX className=" bg-black text-white  " />
          </a>
        </h1>
      </div>
      <div>
        <nav className="text-white">
          {sideBarLinks.map(({ href, label }) => (
            <div key={href} className="w-[14rem] p-1">
              <a href={href} className="bg-white">
                <div className="flex flex-row gap-4 rounded-full hover:bg-[#21232593]  p-2 ">
                  <div className="flex place-self-center">
                    <Icons label={label} />
                  </div>
                  <div>
                    <span className="p-2.5 text-xl">{label}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </nav>
      </div>
      <div>
        <div className="rounded-full  bg-[#1d9bf0] text-white p-2 w-60 ">
          <a href="#post">
            <div className="text-center  ">
              <span className="text-xl">Post</span>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-5  rounded-full  hover:bg-[#202327] p-2 ">
        <div className=" flex flex-row gap-5  cursor-pointer ">
          <img
            src="https://pbs.twimg.com/profile_images/1752680550203355136/wFgJZZU9_400x400.jpg"
            alt="profile-img"
            className="w-12 rounded-[100%]"
          />

          <div className="text-white flex flex-col ">
            <span className="text-[1rem]">RAjshekar PUjari 𝕏</span>
            <span className="text-[#444848]">@Rajshekar_pujari</span>
          </div>
          <div className="text-white text-2xl flex place-items-center">
            <PiDotsThreeBold />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SideBar;
