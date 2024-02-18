import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";

const Post = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-row ">
        <div className="self-stretch">
          <img
            src="https://pbs.twimg.com/profile_images/1752680550203355136/wFgJZZU9_400x400.jpg"
            alt="profile-img"
            className="w-9  rounded-[100%]"
          />
        </div>
      </div>
      <div className="flex-wrap">
        <div className="flex flex-row gap-2">
          <h1 className="text-xl ">Rajshekar Pujari</h1>
          <span className="text-gray-600">rajshekar_pujari</span>
          <span className="text-gray-600">1d</span>
        </div>
        <div className="mt-4 flex flex-col flex-wrap">
          <div className=" w-[500px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              pariatur nam molestias itaque ex exercitationem eligendi optio,
              provident facere incidunt recusandae repudiandae molestiae
              doloribus odio. At ratione fugit omnis aliquam!
            </p>
          </div>
        </div>
        <div className="mt-4">
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
  );
};

export default Post;
