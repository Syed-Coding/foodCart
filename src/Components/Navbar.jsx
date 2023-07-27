import { Cart } from "./Cart";

export const Navbar = ({ data, cart, cartData }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1
          style={{
            padding: "20px 15px",
            background: "black",
            borderRadius: "10px",
          }}
        >
          {data.restaurant_name || data}
        </h1>
        <Cart cart={cart} cartData={cartData}></Cart>
      </div>
    </div>
  );
};
