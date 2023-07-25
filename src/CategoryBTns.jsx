import React from "react";

export const CategoryBTns = ({ ele, handleCategory }) => {
  return (
    <div className="Products-container">
      <button className="" onClick={() => handleCategory(ele)}>
        {ele}
      </button>
    </div>
  );
};
