import React, { Children } from "react";
import Navbar from "./Navbar";
import TweetSection from "./TweetSection";
import Post from "./Post";
const MainSection = () => {
  return (
    <section className="text-white border  border-[#2F3336] border-solid   ">
      <Navbar />
      <section className="p-5 mb-2 border-b-[2px] border-b-[#2F3336]">
        <TweetSection />    
      </section>
      <section className=" border-b border-b-[#2F3336]">
        <Post />
      </section>
    </section>
  );
};

export default MainSection;
