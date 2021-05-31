import {
  MdSubscriptions,
  MdExitToApp,
  MdHistory,
  MdHome,
  MdVideoLibrary,
  MdHelp,
  MdFeedback,
} from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import {
  AiOutlinePlaySquare,
  AiFillLike,
  AiFillSetting,
  AiFillFlag,
} from "react-icons/ai";
import { BsClockFill } from "react-icons/bs";
import { CgPlayList, CgProfile } from "react-icons/cg";
import { IoGameController } from "react-icons/io5";
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { GiLargeDress, GiBedLamp, GiTrophyCup } from "react-icons/gi";

export const menus1 = [
  {
    name: "Home",
    icon: <MdHome size={23} />,
    url: "/",
  },
  {
    name: "Explore",
    icon: <FaCompass size={23} />,
    url: "/oops",
  },
  {
    name: "Subscriptions",
    icon: <MdSubscriptions size={23} />,
    url: "/feed/subscriptions",
  },
];

export const menus2 = [
  {
    name: "Library",
    icon: <MdVideoLibrary size={23} />,
    url: "/oops",
  },
  {
    name: "History",
    icon: <MdHistory size={23} />,
    url: "/oops",
  },
  {
    name: "Your videos",
    icon: <AiOutlinePlaySquare size={23} />,
    url: "/oops",
  },
  {
    name: "Watch later",
    icon: <BsClockFill size={23} />,
    url: "/oops",
  },
  {
    name: "Liked videos",
    icon: <AiFillLike size={23} />,
    url: "/oops",
  },
  {
    name: "Playlist one",
    icon: <CgPlayList size={23} />,
    url: "/oops",
  },
  {
    name: "Playlist two",
    icon: <CgPlayList size={23} />,
    url: "/oops",
  },
  {
    name: "Playlist three",
    icon: <CgPlayList size={23} />,
    url: "/oops",
  },
];

export const menus3 = [
  {
    name: "Channel one",
    icon: <CgProfile size={23} />,
    url: "/oops",
  },
  {
    name: "Channel two",
    icon: <CgProfile size={23} />,
    url: "/oops",
  },
];

export const menus4 = [
  {
    name: "Gaming",
    icon: <IoGameController size={23} />,
    url: "/oops",
  },
  {
    name: "Live",
    icon: <FcEnteringHeavenAlive size={23} />,
    url: "/oops",
  },
  {
    name: "Fashion & Beauty",
    icon: <GiLargeDress size={23} />,
    url: "/oops",
  },
  {
    name: "Learning",
    icon: <GiBedLamp size={23} />,
    url: "/oops",
  },
  {
    name: "Sports",
    icon: <GiTrophyCup size={23} />,
    url: "/oops",
  },
];

export const menus5 = [
  {
    name: "Settings",
    icon: <AiFillSetting size={23} />,
    url: "/oops",
  },
  {
    name: "Report history",
    icon: <AiFillFlag size={23} />,
    url: "/oops",
  },
  {
    name: "Help",
    icon: <MdHelp size={23} />,
    url: "/oops",
  },
  {
    name: "Send feedback",
    icon: <MdFeedback size={23} />,
    url: "/oops",
  },
];

export const menus6 = [
  {
    name: "Logout",
    icon: <MdExitToApp size={23} />,
    url: "#",
  },
];
