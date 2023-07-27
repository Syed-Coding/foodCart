import React from "react";
import { Products } from "./Products";

export const Main = ({
  categoryData,
  handleCategory,
  activeMenu,
  setCart,
  cart,
  activeCategory,
}) => {
  return (
    <div className="Main">
      <Products
        categoryData={categoryData}
        handleCategory={handleCategory}
        activeMenu={activeMenu}
        setCart={setCart}
        cart={cart}
        activeCategory={activeCategory}
      ></Products>
    </div>
  );
};
