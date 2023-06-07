/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";

export default function Item(props) {
  const { name, description, price, id, addToCart, fixNum, onDelete: deleteItem } = props;
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function addOneItem() {
    setItemCount((prevItemCount) => prevItemCount + 1);
    setTotalPrice((prevTotalPrice) => fixNum(Number(prevTotalPrice) + Number(price)));
    addToCart(fixNum(price));
  }

  function removeOneItem() {
    setItemCount((prevItemCount) => Math.max(prevItemCount - 1, 0));
    setTotalPrice((prevTotalPrice) => fixNum(Math.max(prevTotalPrice - price, 0)));

    if (itemCount > 0) {
      addToCart(fixNum(-price));
    }
  }

  function handleDeleteItem() {
    for (let i = 0; i < itemCount; i++) {
      removeOneItem();
    }
    deleteItem(id);
  }

  return (
    <div id={id} className={styles.item}>
      <button className={styles.buttonDelete} onClick={handleDeleteItem}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
      <h1>{name}</h1>
      <p>{description}</p>
      <h4>$ {price}</h4>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={removeOneItem}>
          -
        </button>
        <span className={styles.itemCount}>{itemCount}</span>
        <button className={styles.button} onClick={addOneItem}>
          +
        </button>
        <h3>$ {totalPrice}</h3>
      </div>
    </div>
  );
}
