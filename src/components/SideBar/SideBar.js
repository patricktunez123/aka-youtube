import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { logOut } from "../../redux/actions/auth/auth.action";
import {
  menus1,
  menus2,
  menus3,
  menus4,
  menus5,
  menus6,
} from "../../data/menus";
import "./_sideBar.scss";

const SideBar = ({ toggleSideBar, handleToggleSideBar }) => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const loading = useSelector((state) => state?.auth?.loading);
  const accessToken = useSelector((state) => state?.auth?.accessToken);

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
      {menus1.map((menu, index) => (
        <div key={index}>
          <Link to={menu.url}>
            <li
              className={activeMenu === menu.name ? "active" : ""}
              onClick={() => handleClick(menu.name)}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </li>
          </Link>
        </div>
      ))}
      <hr />
      {menus2.map((menu, index) => (
        <div key={index}>
          <Link to={menu.url}>
            <li
              className={activeMenu === menu.name ? "active" : ""}
              onClick={() => handleClick(menu.name)}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </li>
          </Link>
        </div>
      ))}
      <hr />
      <div className="sidebar__menu--header">Subscriptions</div>
      {menus3.map((menu, index) => (
        <div key={index}>
          <Link to={menu.url}>
            <li
              className={activeMenu === menu.name ? "active" : ""}
              onClick={() => handleClick(menu.name)}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </li>
          </Link>
        </div>
      ))}
      <hr />
      <div className="sidebar__menu--header">MORE FROM YOUTUBE</div>
      {menus4.map((menu, index) => (
        <div key={index}>
          <Link to={menu.url}>
            <li
              className={activeMenu === menu.name ? "active" : ""}
              onClick={() => handleClick(menu.name)}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </li>
          </Link>
        </div>
      ))}
      <hr />

      {menus5.map((menu, index) => (
        <div key={index}>
          <Link to={menu.url}>
            <li
              className={activeMenu === menu.name ? "active" : ""}
              onClick={() => handleClick(menu.name)}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </li>
          </Link>
        </div>
      ))}

      {menus6.map((menu, index) => (
        <div key={index}>
          {!loading && !accessToken ? (
            <Link to="/login">
              <li>
                <AiOutlineLogin />
                <span>Login</span>
              </li>
            </Link>
          ) : (
            <Link to={menu.url}>
              <li
                className={activeMenu === menu.name ? "active" : ""}
                onClick={() =>
                  menu.name === "Logout"
                    ? handleLogout()
                    : handleClick(menu.name)
                }
              >
                {menu.icon}
                <span>{menu.name}</span>
              </li>
            </Link>
          )}
        </div>
      ))}
      <hr />
      <div className="sidebar__bottom--menu">
        <a
          href="https://www.linkedin.com/in/patrick-tunezerwane-0a901ba8/"
          target="_blank"
          rel="noreferrer"
        >
          About
        </a>
        <a href="https://wa.me/+250781429268" target="_blank" rel="noreferrer">
          Contact
        </a>
        <a
          href="https://github.com/patricktunez123/aka-youtube"
          target="_blank"
          rel="noreferrer"
        >
          Source code
        </a>
      </div>
    </nav>
  );
};

export default SideBar;
