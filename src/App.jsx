import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { MyOrders } from "./Components/MyOrders";
import { useState } from "react";
export const App = () => {
  const [cart, setCart] = useState([]);
  // console.log(cart);
  const cartData = cart.reduce(
    (acc, crr) => {
      const length = cart.length;
      acc.cartCount = length;
      acc.totalPrice += crr.dish_price * crr.count;
      return acc;
      // return acc.cartCount = length // her we get only 1 no object , bez here we are return acc.length value
    },
    { cartCount: 0, totalPrice: 0 }
  );
  // console.log(cartData);
  return (
    <Routes>
      <Route
        path="/"
        element={<Home cart={cart} setCart={setCart} cartData={cartData} />}
      />
      <Route
        path="/cart"
        element={<MyOrders cart={cart} setCart={setCart} cartData={cartData} />}
      />
    </Routes>
  );
};
