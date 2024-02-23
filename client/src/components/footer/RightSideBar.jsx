import React from "react";
import { rightSideData } from "../../constants/data";
import { CiSearch } from "react-icons/ci";
import { MdVerified } from "react-icons/md";

const RightSide = () => {
  return (
    <section className="text-white p-4 ">
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
      <div className="flex flex-col gap-2 mt-4">
        <h1 className="text-xl">Who to Follow</h1>
        <div>
          <div className="flex flex-col bg-[#16181c] rounded-2xl p-1">
            {rightSideData.map((data) => (
              <div key={data.id} className="flex flex-col gap-4  w-full ">
                <div className="flex flex-row  m-2 gap-3">
                  <img
                    src={data.img}
                    alt="Profile-img"
                    className="w-10 h-10  rounded-[100%] cursor-pointer "
                  />
                  <div className="cursor-pointer">
                    <h1 className="text-[1rem]">{data.Name}</h1>
                    <h2 className="text-gray-600">{data.username}</h2>
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
    </section>
  );
};

export default RightSide;
