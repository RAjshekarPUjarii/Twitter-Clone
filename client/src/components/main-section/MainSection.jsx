import React from "react";
import Navbar from "./Navbar";
import TweetSection from "./TweetSection";
import Post from "./Post";
import Raj from "./Raj";
const MainSection = () => {
  return (
    <section className="text-white border  border-[#2F3336] border-solid   ">
      <Navbar />
      <section className="p-5 mb-2 border-b-[2px] border-b-[#2F3336]">
        <TweetSection />
      </section>
      <section className=" border-b border-b-[#2F3336]">
        <Raj />
      </section>
      
    </section>
  );
};

export default MainSection;
