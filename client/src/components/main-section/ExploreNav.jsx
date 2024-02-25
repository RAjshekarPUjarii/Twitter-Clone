import React from "react";
import { Link } from "react-router-dom";
import { rightSideData } from "../../constants/data";
import { CiSearch } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";

const ExploreNav = () => {
  return (
    <section className={`sticky top-0 bg-black backdrop-blur-lg bg-opacity-70`}>
      <div className="flex flex-row justify-between  border-b border-b-[#2F3336] border-b-solid p-2.5">
        <Link to={"/"}><IoMdArrowBack  className="text-4xl ml-auto rounded-full p-2 hover:bg-[#21232593]"/></Link>
        <span className="text-xl flex-1 pl-5">Explore</span>
      </div>
      <div className="text-white p-4 ">
      <div className="flex flex-row rounded-full bg-[#16181c] sticky top-0">
        <h1 className="text-xl p-2.5">
          <CiSearch />
        </h1>
        <input
          type="search"
          name="search"
          id="search"
          class="appearance-none bg-transparent border-none w-full text-white mr-3  p-3 rounded-full leading-tight focus:outline-none "
          placeholder="Search"
        />
        <h1></h1>
        <CiSearch className=" peer-focus:text-sky-500 absolute top-3.5 left-5 text-xl p-3" />
      </div>
      <div className="flex flex-col gap-2 mt-4 bg-[#16181c] rounded-2xl pl-5 pt-3">
        <h1 className="text-xl">Recommended for you</h1>
        <div>
          <div className="flex flex-col  p-1">
            {rightSideData.map((data) => (
              <div key={data.id} className="flex flex-col gap-4  w-full ">
                <div className="flex flex-row  m-2 gap-3">
                  <img
                    src={data.img}
                    alt="Profile-img"
                    className="w-10 h-10  rounded-[100%] cursor-pointer "
                  />
                  <div className="cursor-pointer">
                    <h1 className="text-[1rem] hover:underline">{data.Name}</h1>
                    <h2 className="text-gray-600 hover:underline">{data.username}</h2>
                  </div>
                  <span className="text-[#1d9bf0] ml-[-0.3rem] pt-1">
                    <MdVerified />
                  </span>
                  <button
                    className="ml-auto h-7 mr-4 rounded-xl px-4
                    bg-white text-black  self-center "
                  >
                    {data.follow}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ExploreNav;
