import { DeleteMessage } from "../userNotifications.js/notifications";

export const MyOrdersItems = ({ dish, cart, setCart }) => {
  const dishcount =
    cart?.find((item) => item.dish_id === dish.dish_id)?.count || 0;
  const handleIncrease = (dish_id) => {
    setCart((prev) => {
      return prev?.map((item) =>
        item.dish_id === dish_id ? { ...item, count: item.count + 1 } : item
      );
    });
  };
  const handleDecrease = (dish_id) => {
    if (dishcount === 1) {
      setCart((prev) => {
        return prev?.filter((item) => item.dish_id !== dish_id);
      });
      DeleteMessage("Food Item Deleted From Your Cart 😔😔😔.");
    } else {
      setCart((prev) => {
        return prev?.map((item) =>
          item.dish_id === dish_id ? { ...item, count: item.count - 1 } : item
        );
      });
    }
  };

  const handleRemove = (dish_id) => {
    setCart((prev) => {
      return prev?.filter((item) => item.dish_id !== dish_id);
    });
    DeleteMessage("Food Item Deleted From Your Cart 😔😔😔.");
  };
  return (
    <div className="dishes-main">
      <div className="left-section">
        <div className="dishes">
          <h3>{dish.dish_name}</h3>
        </div>
        <div className="dishes-details">
          <span>{dish.dish_price}</span>
          <h3>{dish.dish_currency}</h3>
        </div>
        <div className="dishes-addon">
          <div className="button-cart">
            <div className="quantity"> Quantity</div>
            <span className="min" onClick={() => handleDecrease(dish.dish_id)}>
              -
            </span>
            <span> {dish.count}</span>
            <span className="plus" onClick={() => handleIncrease(dish.dish_id)}>
              +
            </span>
            <br />
          </div>
          <button
            className="noselect"
            onClick={() => handleRemove(dish.dish_id)}
          >
            <span className="text">Remove</span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="right-section">
        <h5>{dish.dish_calories} Calories</h5>
        <img src={dish.dish_image} alt={dish.dish_name} className="img-cart" />
      </div>
    </div>
  );
};
