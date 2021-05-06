import React, { useState } from "react";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import "./_sideBar.scss";

const menus = [
  {
    name: "Home",
    icon: <MdHome size={23} />,
  },
  {
    name: "Subscription",
    icon: <MdSubscriptions size={23} />,
  },
  {
    name: "Liked videos",
    icon: <MdThumbUp size={23} />,
  },
  {
    name: "History",
    icon: <MdHistory size={23} />,
  },
  {
    name: "Library",
    icon: <MdLibraryBooks size={23} />,
  },
  {
    name: "IDK!",
    icon: <MdSentimentDissatisfied size={23} />,
  },
  {
    name: "Logout",
    icon: <MdExitToApp size={23} />,
  },
];
const SideBar = ({ toggleSideBar, handleToggleSideBar }) => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const handleClick = (value) => {
    setActiveMenu(value);
  };
  return (
    <nav
      className={toggleSideBar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSideBar()}
    >
      {menus.map((menu, index) => (
        <div key={index}>
          {menu.name === "Logout" ? <hr /> : null}
          <li
            className={activeMenu === menu.name ? "active" : ""}
            onClick={() => handleClick(menu.name)}
          >
            {menu.icon}
            <span>{menu.name}</span>
          </li>
          {menu.name === "Logout" ? <hr /> : null}
        </div>
      ))}
    </nav>
  );
};

export default SideBar;
