import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getVideos,
  getVideosByCategory,
} from "../../redux/actions/videos/videos.action";
import "./_categoriesBar.scss";

const categories = ["All", "ReactJS", "Music", "Football"];

const CategoriesBar = () => {
  const [activeCategy, setActiveItem] = useState("All");
  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveItem(value);
    if (value === "All") {
      dispatch(getVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="categoriesBar">
      {categories.map((category, index) => (
        <span
          key={index}
          onClick={() => handleClick(category)}
          className={activeCategy === category ? "active" : ""}
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
