import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";

export const SidebarItems = {
  SidebarTop: [
    { icon: <AiOutlineHome size={21} />, name: "Home" },
    { icon: <BiUserCircle size={21} />, name: "Profile" },
    { icon: <MdOutlineSubscriptions size={21} />, name: "Subscriptions" },
  ],
  SidebarMiddle: [
    { icon: <MdOutlineVideoLibrary size={21} />, name: "Library" },
    { icon: <VscHistory size={21} />, name: "History" },
    { icon: <AiOutlineClockCircle size={21} />, name: "Watch later" },
    { icon: <AiOutlineHeart size={21} />, name: "Liked videos" },
  ],
  SidebarExplore: [
    { icon: <IoMusicalNoteOutline size={21} />, name: "Music" },
    { icon: <IoGameControllerOutline size={21} />, name: "Gaming" },
    { icon: <CiTrophy size={23} />, name: "Sports" },
  ],
};