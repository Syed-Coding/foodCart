import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { MyOrders } from "./Components/MyOrders";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<MyOrders />} />
    </Routes>
  );
};
