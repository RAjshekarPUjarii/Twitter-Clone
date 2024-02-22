import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { tweetSectionData } from "../../constants/data";

const Post = () => {
  return (
    <div className="flex flex-col gap-5 mb-2 ">
      {tweetSectionData.map((tweet) => (
        <div
          key={tweet.id}
          className="flex flex-row gap-4  w-full border-b border-b-[#2F3336]"
        >
          {console.log(tweet)}
          <div className="flex flex-row ml-4">
            <div className="self-stretch">
              <img
                src={tweet.img}
                alt="profile-img"
                className="w-9  rounded-[100%]"
              />
            </div>
          </div>
          <div className="flex-wrap">
            <div className="flex flex-row gap-2">
              <h1 className="text-xl ">{tweet.Name}</h1>
              <span className="text-gray-600">{tweet.username}</span>
              <span className="text-gray-600">{tweet.time}</span>
            </div>
            <div className="mt-4 flex flex-col flex-wrap">
              <div className=" w-[500px]">
                <p>{tweet.content}</p>
              </div>
            </div>
            <div className="m-4">
              <div className="flex flex-row justify-between">
                <span className="flex flex-row gap-2">
                  <FaRegComment className=" text-xl mt-2 cursor-pointer" />
                  <span className="mt-1">13</span>
                </span>
                <span className="flex flex-row gap-2 cursor-pointer">
                  <BiRepost className="text-2xl  mt-2 text-green-500  " />
                  <span className="mt-1">6</span>
                </span>
                <span className="flex flex-row gap-2 cursor-pointer">
                  <AiOutlineHeart className="text-xl  mt-2 text-red-600" />
                  <span className="mt-1">34</span>
                </span>
                <span className="flex flex-row gap-2 cursor-pointer">
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
