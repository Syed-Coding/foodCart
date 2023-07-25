import { ProductInfo } from "./ProductInfo";
export const ProductItems = ({ activeMenu, setCart, cart }) => {
  return (
    <div className="items">
      {activeMenu.category_dishes.map((ele) => {
        return (
          <ProductInfo
            key={ele.dish_id}
            {...ele}
            setCart={setCart}
            cart={cart}
          ></ProductInfo>
        );
      })}
    </div>
  );
};
