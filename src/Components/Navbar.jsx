import { Cart } from "./Cart";

export const Navbar = ({ data, cart }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1 style={{ padding: "20px 15px" }}>{data.restaurant_name || data}</h1>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};
