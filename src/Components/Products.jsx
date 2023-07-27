import React from "react";
import { Categories } from "./Categories";
import { ProductItems } from "./ProductItems";
export const Products = ({
  categoryData,
  handleCategory,
  activeMenu,
  setCart,
  cart,
  activeCategory,
}) => {
  return (
    <div className="products-comp">
      <div className="row">
        <Categories
          categoryData={categoryData}
          handleCategory={handleCategory}
          activeCategory={activeCategory}
        ></Categories>
        <ProductItems
          activeMenu={activeMenu}
          setCart={setCart}
          cart={cart}
        ></ProductItems>
      </div>
    </div>
  );
};
