export const MyOrders = ({ cart, setCart }) => {
  console.log(
    "cart in orders***********************************************",
    cart
  );
  return (
    <div>
      <div className="products-comp">
        <div className="row">
          <div className="items">
            <div className="dishes-main">
              <div className="left-section">
                <div className="dishes">
                  <h3>Spinach Salad</h3>
                </div>
                <div className="dishes-details">
                  <h3>SAR</h3>
                  <span>7.96</span>
                </div>
                <div className="dishes-addon">
                  <h3>Customization available</h3>
                  <div className="button-cart">
                    <span className="min">-</span>

                    <span> 0 </span>

                    <span className="plus">+</span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="right-section">
                <h5>15 calories</h5>
                <img
                  src="https://i.imgur.com/PoJfqsD.jpg"
                  alt=""
                  className="img-cart"
                />
              </div>
            </div>
            <div className="dishes-main">
              <div className="left-section">
                <div className="dishes">
                  <h3>Spinach Salad</h3>
                </div>
                <div className="dishes-details">
                  <h3>SAR</h3>
                  <span>7.96</span>
                </div>
                <div className="dishes-addon">
                  <h3>Customization available</h3>
                  <div className="button-cart">
                    <span className="min">-</span>

                    <span> 0 </span>

                    <span className="plus">+</span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="right-section">
                <h5>15 calories</h5>
                <img
                  src="https://i.imgur.com/l3PKuH0.jpg"
                  alt=""
                  className="img-cart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
