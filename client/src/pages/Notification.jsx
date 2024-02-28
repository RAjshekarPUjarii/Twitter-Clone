import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { NotificationData } from "../constants/data";
import { BsTwitterX } from "react-icons/bs";

const Notification = () => {
  return (
    <section className="text-white  h-screen  border  border-[#2F3336] border-solid">
      <div className="flex flex-row justify-between  border-b border-b-[#2F3336] border-b-solid p-2.5">
        <Link to={"/"}>
          <IoMdArrowBack className="text-4xl ml-auto rounded-full p-2 hover:bg-[#21232593]" />
        </Link>
        <span className="text-xl flex-1 pl-5">Notification</span>
      </div>
      <div className="">
        {NotificationData.map((data) => (
          <div
            key={data.id}
            className="flex flex-row  px-3 py-3 gap-3  border-b border-b-[#2F3336] hover:bg-[#21232593] cursor-pointer "
          >
            <span>
              <BsTwitterX className=" bg-black text-white w-9 h-9  rounded-[100%] cursor-pointer  " />
            </span>

            <div className="cursor-pointer">
              <h1 className="text-[1rem] ">{data.notificatin}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notification;
