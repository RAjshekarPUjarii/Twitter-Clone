import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const Notification = () => {
  return (
    <section className="text-white border  border-[#2F3336] border-solid">
      <div className="flex flex-row justify-between  border-b border-b-[#2F3336] border-b-solid p-2.5">
        <Link to={"/"}>
          <IoMdArrowBack className="text-4xl ml-auto rounded-full p-2 hover:bg-[#21232593]" />
        </Link>
        <span className="text-xl flex-1 pl-5">Notification</span>
      </div>
    </section>
  );
};

export default Notification;
