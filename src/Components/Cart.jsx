import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Cart = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cart">My orders</Link>

          <FaOpencart></FaOpencart>
          <span id="cart">0</span>
        </li>
      </ul>
    </nav>
  );
};
