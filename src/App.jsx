import { useState } from "react";
import ItemForm from "./components/ItemForm/ItemForm.jsx";
import ItemList from "./components/ItemList/ItemList.jsx";

export default function App() {
  function getId() {
    return Math.random().toString(26).slice(2);
  }

  const [items, setItems] = useState([]);

  function addItem(item) {
    item.id = getId();
    setItems([...items, item]);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <main>
      <ItemForm onAdd={addItem} />
      <ItemList onDelete={deleteItem}>{items}</ItemList>
    </main>
  );
}
