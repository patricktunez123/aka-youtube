import React, { useState } from "react";
import "./_categoriesBar.scss";

const categories = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6",
  "item 7",
  "item 8",
  "item 9",
  "item 10",
  "item 11",
  "item 12",
  "item 13",
  "item 14",
  "item 15",
  "item 16",
  "item 17",
  "item 18",
  "item 19",
  "item 20",
  "item 8",
  "item 9",
  "item 10",
  "item 11",
  "item 12",
  "item 13",
  "item 14",
  "item 15",
  "item 16",
  "item 17",
  "item 18",
  "item 19",
  "item 20",
  "item 8",
  "item 9",
  "item 10",
  "item 11",
  "item 12",
  "item 13",
  "item 14",
  "item 15",
  "item 16",
  "item 17",
  "item 18",
  "item 19",
  "item 20",
];

const CategoriesBar = () => {
  const [activeCategy, setActiveItem] = useState("item 1");
  const handleClick = (value) => {
    setActiveItem(value);
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
