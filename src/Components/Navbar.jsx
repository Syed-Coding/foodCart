import { Cart } from "./Cart";

export const Navbar = ({ data, cart }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h2>{data.restaurant_name}</h2>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};
