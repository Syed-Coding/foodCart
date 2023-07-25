import React, { useState } from "react";

export const ProductInfo = ({
  dish_id,
  dish_name,
  dish_currency,
  dish_price,
  dish_image,
  dish_calories,
  dish_description,
  setCart,
  cart,
}) => {
  // let itemInCart = cart.findIndex((ele) => ele.dish_id === dish_id) >= 0; // expects booolean , check if an item is there
  let count = cart?.find((item) => item.dish_id === dish_id)?.count || 0;
  console.log(cart);
  //initally undefined || 0 ==>  0
  //after heandelincrese or decrease  ,re-rendering occures nerw count value gets
  console.log(count);
  const handleIncrease = () => {
    // if (count === 0) {
    //   console.log("add new product to cart");
    // } else if (count > 0) {
    //   setCart((prev) => {
    //     console.log("inside cart");
    //     return prev?.map((item) =>
    //       item.dish_id === dish_id ? { ...item, count: item.count + 1 } : item
    //     );
    //   });
    // }
    if (count === 0) {
      // if cart emtpy
      let cartProduct = {
        dish_id,
        dish_name,
        dish_currency,
        dish_price,
        dish_image,
        dish_calories,
        dish_description,
        setCart,
        count: 1,
      };
      setCart((prev) => {
        console.log({ prev });
        return [...prev, cartProduct];
      }); //rendering occurs here when state changes
      console.log("adding item to cart initially");
    } else {
      //if already count
      setCart((prev) => {
        return prev?.map((item) =>
          item.dish_id === dish_id ? { ...item, count: item.count + 1 } : item
        );
      });
      console.log("increases count");
    }
  };

  const handleDecrease = () => {
    if (count <= 1) {
      setCart((prev) => {
        return prev.filter((item) => item.dish_id !== dish_id);
      });
    } else {
      setCart((prev) => {
        return prev?.map((item) =>
          item.dish_id === dish_id ? { ...item, count: item.count - 1 } : item
        );
      });
    }
  };
  return (
    <div className="dishes-main">
      <div className="left-section">
        <div className="dishes">
          <img src="" alt="" />
          <h3>{dish_name}</h3>
        </div>

        <div className="dishes-details">
          <h3>{dish_currency}</h3>
          <span>{dish_price}</span>
        </div>
        <div className="dishes-addon">
          <p>{dish_description}</p>
          <div className="button">
            <span className="min" onClick={handleDecrease}>
              -
            </span>
            <span>{count} </span>
            <span className="plus" onClick={handleIncrease}>
              +
            </span>
            <br />
          </div>
          <h3>Customization Not available</h3>
        </div>
      </div>
      <div className="right-section">
        <h5>{dish_calories} Calories</h5>
        <img src={dish_image} alt={dish_name} />
      </div>
    </div>
  );
};
