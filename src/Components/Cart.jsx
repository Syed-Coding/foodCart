import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Cart = ({ cartData }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cart">MY CART🍔🍗</Link>

          <FaOpencart></FaOpencart>
          <span id="cart">{cartData?.cartCount}</span>
        </li>
      </ul>
    </nav>
  );
};
