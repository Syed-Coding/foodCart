import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { MyOrders } from "./Components/MyOrders";
import { useState } from "react";
export const App = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
      <Route
        path="/cart"
        element={<MyOrders cart={cart} setCart={setCart} />}
      />
    </Routes>
  );
};
