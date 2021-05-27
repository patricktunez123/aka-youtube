import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps, MdMovieCreation } from "react-icons/md";
import { Link } from "react-router-dom";
import "./_header.scss";
import profile from "../../files/images/profile.png";

const Header = ({ handleToggleSideBar }) => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.length === 0) return;
    history.push(`search/${input}`);
  };

  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSideBar()}
      />
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdMovieCreation size={28} />
        <MdApps size={28} />
        <MdNotifications size={28} />
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
