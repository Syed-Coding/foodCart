export const ProductInfo = ({ ele, setCart, cart }) => {
  const count = cart?.find((item) => item.dish_id === ele.dish_id)?.count;

  const handleAddCart = () => {
    const cartProduct = {
      ...ele,
      count: 1,
    };
    setCart((prev) => {
      console.log(prev);
      return [...prev, cartProduct];
    });
  };

  const handleRemoveCart = () => {
    setCart((prev) => {
      return prev.filter((item) => item.dish_id !== ele.dish_id);
    });
  };
  return (
    <div className="dishes-main">
      <div className="left-section">
        <div className="dishes">
          <img src="" alt="" />
          <h3>{ele.dish_name}</h3>
        </div>

        <div className="dishes-details">
          <span>Price : {ele.dish_price}</span>

          <h3 style={{ color: "#630063" }}>{ele.dish_currency}</h3>
        </div>
        <div className="dishes-addon">
          <p>{ele.dish_description}</p>
          <div className="button">
            {count ? (
              <span onClick={handleRemoveCart}>Remove Item</span>
            ) : ele.dish_Availability ? (
              <span onClick={handleAddCart}>Add To Cart </span>
            ) : (
              <span style={{ color: "darkblue" }}>Out Of Stock</span>
            )}

            <br />
          </div>
          <h3>{ele.addonCat[0] && "Customization Available"}</h3>
        </div>
      </div>
      <div className="right-section">
        <h5>{ele.dish_calories} Calories</h5>
        <img src={ele.dish_image} alt={ele.dish_name} />
      </div>
    </div>
  );
};
