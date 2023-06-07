/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";
import Item from "../Item/Item";

export default function ItemList(props) {
  const { children, onDelete } = props;
  const [cartTotal, setCartTotal] = useState(0);

  function fixNum(num) {
    return Number((Math.round(num * 100) / 100).toFixed(2));
  }

  function addToCart(value) {
    setCartTotal((prevCartTotal) => fixNum(Math.max(prevCartTotal + value, 0)));
  }

  return (
    <div className={styles.listContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Listado</h1>
        <div className={styles.cartContainer}>
          <i className={`fa-solid fa-cart-shopping ${styles.cartIcon}`}></i>
          <h3 className={styles.cartTotal}> $ {cartTotal}</h3>
        </div>
      </div>
      <div className={styles.list}>
        {children.map((item) => {
          return (
            <Item
              name={item.name}
              description={item.description}
              price={item.price}
              id={item.id}
              key={item.id}
              onDelete={onDelete}
              addToCart={addToCart}
              fixNum={fixNum}
            />
          );
        })}
      </div>
    </div>
  );
}
