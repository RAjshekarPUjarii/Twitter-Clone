import React from "react";
import SideBar from "../components/sidebar/SideBar";
import MainSection from "../components/main-section/MainSection";
import RightSide from "../components/footer/RightSideBar";

const Home = () => {
  return (
    <div className="bg-black flex flex-row    h-full ">
      <section className="sticky top-0 left-0 ml-28 pt-10 h-full">
        <SideBar />
      </section>

      <section className="ml-8 bg-black  flex-1 w-[500px]">
        <MainSection />
      </section>
      <section className="bg-black sticky top-0 right-0 mr-28 ml-10 h-screen w-[320px] ">
        <RightSide />
      </section>
    </div>
  );
};

export default Home;
