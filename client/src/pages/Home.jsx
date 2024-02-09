import React from "react";
import SideBar from "../components/SideBar";
import Aside from "../components/Aside";

const Home = () => {
  return (
    <div className="bg-black flex flex-row pl-32 pt-4 h-[100vh]">
      <SideBar />
      <Aside />
    </div>
  );
};

export default Home;
