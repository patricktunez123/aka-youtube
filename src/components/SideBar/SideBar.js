import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/actions/auth/auth.action";
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
          <Link to={menu.url}>
            <li
              className={activeMenu === menu.name ? "active" : ""}
              onClick={() =>
                menu.name === "Logout" ? handleLogout() : handleClick(menu.name)
              }
            >
              {menu.icon}
              <span>{menu.name}</span>
            </li>
          </Link>
          {menu.name === "Logout" ? <hr /> : null}
        </div>
      ))}
    </nav>
  );
};

export default SideBar;
