import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { MyOrdersItems } from "./MyOrdersItems";
import { v4 as uuidv4 } from "uuid";
import empycart from "../assets/empty-cart.png";
export const MyOrders = ({ cart, setCart, cartData }) => {
  return (
    <div>
      <Link className="home" to="/">
        CLICK TO ORDER MORE 🍕
      </Link>
      <Navbar data="CART ITEMS" cartData={cartData}></Navbar>
      <div className="cartFooter">
        <h2 style={{ color: "blue" }}>
          TOTAL: <b> {cartData.totalPrice.toFixed(2)} </b> SAR
        </h2>
      </div>
      <hr></hr>
      <div className="products-comp">
        <div className="row">
          <div className="items">
            {!cart.length && <img className="emptyCart" src={empycart}></img>}
            {cart.map((dish) => {
              return (
                <MyOrdersItems
                  dish={dish}
                  setCart={setCart}
                  cart={cart}
                  key={uuidv4()}
                ></MyOrdersItems>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
