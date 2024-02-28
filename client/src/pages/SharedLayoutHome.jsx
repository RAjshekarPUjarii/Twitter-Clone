import React from "react";
import SideBar from "../components/sidebar/SideBar";
import RightSide from "../components/footer/RightSideBar";

import { Outlet } from "react-router-dom";

const Home = ({ children }) => {
  return (
    <div className="bg-black flex flex-row    h-full selection:bg-slate-600 ">
      <section className="sticky top-0 left-0 ml-28 pt-10 h-full">
        <SideBar />
      </section>

      <section className="ml-8 bg-black  flex-1 w-[500px]">
        {children}
        <Outlet />
      </section>
      <section className="bg-black sticky top-0 right-0 mr-28 ml-4 h-screen w-[360px] pt-5 ">
        <RightSide />
      </section>
    </div>
  );
};

export default Home;
