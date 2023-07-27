import React from "react";

export const CategoryBTns = ({ ele, handleCategory, activeCategory }) => {
  const activeClass = activeCategory === ele ? "active" : "";
  return (
    <div className="Products-container">
      <button className={activeClass} onClick={() => handleCategory(ele)}>
        {ele}
      </button>
    </div>
  );
};
