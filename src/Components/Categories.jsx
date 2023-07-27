import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CategoryBTns } from "../CategoryBTns";
export const Categories = ({
  categoryData,
  handleCategory,
  activeCategory,
}) => {
  return (
    <div className="Products">
      {console.log(categoryData)}
      {categoryData.map((ele) => (
        <CategoryBTns
          ele={ele}
          key={uuidv4()}
          handleCategory={handleCategory}
          activeCategory={activeCategory}
        ></CategoryBTns>
      ))}
      {/* mapping ends*/}
    </div>
  );
};
