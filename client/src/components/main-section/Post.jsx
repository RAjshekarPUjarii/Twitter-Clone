import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { tweetSectionData } from "../../constants/data";
import profile from "../../assets/profile.webp";
const Post = () => {
  console.log(profile);
  return (
    <div className="flex flex-col gap-5 mb-2 ">
      {tweetSectionData.map((tweet) => (
        <div
          key={tweet.id}
          className="flex flex-row gap-4  w-full border-b border-b-[#2F3336]  cursor-pointer"
        >
          <div className="flex flex-row ml-4">
            <div className="self-stretch">
              <img
                src={profile}
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
                <span className="flex flex-row gap-1 hover:text-blue-600">
                  <FaRegComment
                    className=" text-xl  cursor-pointer p-1 h-9 w-9 rounded-full 
                  "
                  />
                  <span className="mt-1">13</span>
                </span>
                <span className="flex flex-row gap-2 cursor-pointer hover:text-green-500">
                  <BiRepost className="text-xl  cursor-pointer p-1 h-10 w-10 rounded-full  " />
                  <span className="mt-1">6</span>
                </span>
                <span className="flex flex-row gap-2 cursor-pointer ">
                  <AiOutlineHeart className="text-2xl  cursor-pointer p-1 h-9 w-9 rounded-full text-red-700  " />
                  <span className="mt-1 ">1</span>
                </span>
                <span className="flex flex-row gap-2 cursor-pointer hover:text-blue-600">
                  <BsBookmark className="text-xl  mt-2 " />
                  <span className="mt-1">1</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
