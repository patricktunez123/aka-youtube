import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/auth/auth";
import { menus } from "../../data/menus";
import "./_sideBar.scss";

const SideBar = ({ toggleSideBar, handleToggleSideBar }) => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const handleClick = (value) => {
    setActiveMenu(value);
  };

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
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
            onClick={() =>
              menu.name === "Logout" ? handleLogout() : handleClick(menu.name)
            }
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
