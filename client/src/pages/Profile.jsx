import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { tweetSectionData } from "../constants/data";
import profile from "../assets/profile.webp";
import { IoBalloonOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { TbLink } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <section className="text-white    border  border-[#2F3336] border-solid">
      <div className="flex flex-row justify-between  border-b border-b-[#2F3336] border-b-solid p-2.5 sticky top-0 bg-black">
        <Link to={"/"}>
          <IoMdArrowBack className="text-4xl ml-auto rounded-full p-2 hover:bg-[#21232593]" />
        </Link>
        <span className="text-xl flex-1 pl-5">Rajshekar</span>
      </div>
      <div className="h-[22rem]  border-b border-b-[#2F3336] relative">
        <div>
          <div className="w-[39.43rem] bg-cover">
            <img src={profile} alt="" className="w-full h-[10rem]" />
          </div>
        </div>
        <div className="flex flex-row justify-between p-2 h-[4rem]">
          <img
            src={profile}
            alt=""
            className="rounded-full  h-[8rem] ml-4 relative z-10 bottom-20   border-2 border-solid border-gray-600"
          />
          <span className="cursor-pointer hover:bg-[#21232593] rounded-xl border border-[#2F3336] h-12 pt-2.5 px-2  text-white ">
            Edit Profile
          </span>
        </div>
        <div className="pl-5 pb-2 ">
          <h1 className="text-xl ">Rajshekar Pujari</h1>
          <p className="text-gray-600 ">rajshekar_pujari</p>
          <p>🚩​</p>
        </div>
        <div
          className="flex flex-row px-4 gap-3
         "
        >
          <div className="flex flex-row gap-1">
            <span>
              <CiLocationOn />
            </span>
            <span>Wadi, India</span>
          </div>
          <div className="flex flex-row gap-1">
            <span>
              <TbLink />{" "}
            </span>
            <span>
              <a href="google.com">google</a>
            </span>
          </div>
          <div className="flex flex-row gap-1">
            <span>
              <IoBalloonOutline />
            </span>
            <span>Born July 23,2002</span>
          </div>
          <div className="flex flex-row gap-1">
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Joined November 2020</span>
          </div>
        </div>
      </div>
      <div>
        {tweetSectionData
          .filter((tweet) => tweet.id > 4)
          .map((tweet) => (
            <div
              key={tweet.id}
              className="flex flex-row gap-4  w-full border-b border-b-[#2F3336] mt-3 cursor-pointer"
            >
              <div className="flex flex-row ml-4">
                <div className="self-stretch">
                  <img
                    src={tweet.img}
                    alt="profile-img"
                    className="w-9  rounded-[100%] cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex-wrap">
                <div className="flex flex-row gap-2">
                  <h1 className="text-xl cursor-pointer hover:underline">
                    {tweet.Name}
                  </h1>
                  <span className="text-gray-600 cursor-pointer hover:underline">
                    {tweet.username}
                  </span>
                  <span className="text-gray-600">{tweet.time}</span>
                </div>
                <div className="mt-4 flex flex-col flex-wrap">
                  <div className=" w-[500px]">
                    <p>{tweet.content}</p>
                  </div>
                </div>
                <div className="m-4">
                  <div className="flex flex-row justify-between">
                    <span className="flex flex-row gap-2 hover:text-blue-600">
                      <FaRegComment className=" text-xl mt-2 cursor-pointer " />
                      <span className="mt-1">13</span>
                    </span>
                    <span className="flex flex-row gap-2 cursor-pointer hover:text-green-600">
                      <BiRepost className="text-2xl  mt-2   " />
                      <span className="mt-1">6</span>
                    </span>
                    <span className="flex flex-row gap-2 cursor-pointer hover:text-red-500">
                      <AiOutlineHeart className="text-xl  mt-2" />
                      <span className="mt-1">1</span>
                    </span>
                    <span className="flex flex-row gap-2 cursor-pointer">
                      <BsBookmark className="text-xl  mt-2  text-[#1d9bf0]" />
                      <span className="mt-1">1</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Profile;
