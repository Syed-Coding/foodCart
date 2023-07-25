import cartimg from "../assets/cart.png";
import { Link } from "react-router-dom";
export const Cart = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cart">My orders</Link>
          <img src={cartimg} alt="cart" />
          <span id="cart">0</span>
        </li>
      </ul>
    </nav>
  );
};
