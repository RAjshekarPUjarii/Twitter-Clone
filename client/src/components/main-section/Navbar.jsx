import React, { useState } from "react";

const Navbar = ({ scrolled }) => {
  const [activeTab, setActiveTab] = useState("For-you");

  const handleActiveTab = (tabName) => {
    setActiveTab(tabName);
    
  };

  return (
    <header className={`sticky top-0 bg-black backdrop-blur-lg bg-opacity-70`}>
      <div className="flex flex-row justify-evenly border-b border-b-[#2F3336] border-b-solid">
        <div
          className="w-full hover:bg-[#21232593] text-center"
          onClick={() => handleActiveTab("For-you")} 
        >
          <a href="#for-you" className="flex flex-col">
            <div className="p-3.5">
              <span className="text-[1rem]">For you</span>
            </div>
            <div
              className={`${
                activeTab === "For-you"
                  ? "border-b-4 rounded-sm w-16 border-b-[#1d9bf0] self-center"
                  : ""
              }`}
            ></div>
          </a>
        </div>
        <div
          className="w-full hover:bg-[#21232593] text-center"
          onClick={() => handleActiveTab("Following")} 
        >
          <a href="#following" className="flex flex-col">
            <div className="p-3.5">
              <span className="text-[1rem]">Following</span>
            </div>

            <div
              className={`${
                activeTab === "Following"
                  ? "border-b-4 rounded-sm w-[4.5rem] border-b-[#1d9bf0] self-center"
                  : ""
              }`}
            ></div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
