import InventoryCard from "./InventoryCard";
import CartList from "./CartList";
import { products } from "./data/products";
import { useState } from "react";

const GroceriesApp =() => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    setCartList((cartList) => [...cartList, item ]);
  };

  const emptyCart = () => {
    setCartList([]);
  };

  const removeItem = (id) => {
    setCartList((prevList) => {
      return prevList.filter((i) => i.id !== id);
    });
  };

  return (
    <>
      <h1>Groceries App</h1>
      <div className="GroceriesApp-Container">
        <InventoryCard products={products} onClick={addToCart} />
        <CartList
          cartList={cartList}
          onClickEmpty={emptyCart}
          onClickRemove={removeItem}
        />
      </div>
    </>
  );
}
 export default GroceriesApp;