import React from "react";
import { useState } from "react";
import { BiImage } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";

const TweetSection = () => {
  const [tweet, setTweet] = useState("What's Happening?!");

  const handleTweet = (e) => {
    setTweet(e.target.value);
  };

  return (
    <div className="">
      <div className="flex flex-row gap-4">
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1752680550203355136/wFgJZZU9_400x400.jpg"
            alt="profile-img"
            className="w-10 h-10
             rounded-[100%] "
          />
        </div>
        <div
          className="
        "
        >
          <div>
            <span
              className="block w-[553px] p-2 text-xl text-gray-500 focus:text-white bg-black-900 focus:border-b focus:border-blue-500 outline-none placeholder:text-gray-600"
              contentEditable="true"
              maxLength="280"
              onInput={handleTweet}
            >
              {tweet}
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row mt-4 justify-between ">
          <div className=" flex  flex-row gap-14 ml-5 ">
            <span className=" text-2xl cursor-pointer pt-3 ">
              <BiImage className=" text-[#1d9bf0]" />
            </span>
            <span className="text-2xl cursor-pointer pt-3">
              <BsEmojiSmile className="text-[#1d9bf0]" />
            </span>
          </div>
          <div className="rounded-full  bg-[#1d9bf0] text-white p-1 w-28">
            <a href="#post">
              <div className="text-center  ">
                <span className="text-xl">Post</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetSection;
