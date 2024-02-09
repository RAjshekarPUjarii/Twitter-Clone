import { LuHome } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { PiBookmarkSimple } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";

import React from "react";
import { sideBarLinks } from "../constants/data";

const SidebarIcons = (props) => {
  const iconsData = [
    { label: "Home", icon: <LuHome /> },
    { label: "Explore", icon: <BiSearch /> },
    { label: "Notifications", icon: <IoMdNotificationsOutline /> },
    { label: "Messages", icon: <FiMail /> },
    { label: "Lists", icon: <HiOutlineClipboardList /> },
    { label: "Bookmarks", icon: <PiBookmarkSimple /> },
    { label: "Communities", icon: <RiGroupLine /> },
    { label: "Premium", icon: <FaXTwitter /> },
    { label: "Profile", icon: <BsPerson /> },
  ];
  const matchedIcon = iconsData.find((ele) => ele.label === props.label);

  return <div className="text-3xl "> {matchedIcon && matchedIcon.icon}</div>;
};

export default SidebarIcons;
