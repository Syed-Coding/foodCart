import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CategoryBTns } from "../CategoryBTns";
export const Categories = ({ categoryData, handleCategory }) => {
  return (
    <div className="Products">
      {/* mapping starts*/}
      {categoryData.map((ele) => (
        <CategoryBTns
          ele={ele}
          key={uuidv4()}
          handleCategory={handleCategory}
        ></CategoryBTns>
      ))}
      {/* mapping ends*/}
    </div>
  );
};
