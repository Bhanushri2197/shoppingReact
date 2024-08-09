import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import './App.css';
import Navbar from "./Navbar";
import FirstFold from "./FirstFold";
import ProductBlock from "./ProductBlock";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  const addItems = (product) => {
    setItems((prevItems) => [...prevItems, product]);
    setTotal((prevTotal) => prevTotal + parseFloat(product.price.replace('$', '')));
  };

  const removeItems = (product) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter(item => item.name !== product.name);
      setTotal(prevTotal => prevTotal - parseFloat(product.price.replace('$', '')));
      return updatedItems;
    });
  };

  return (
    <>
      <Navbar items={items} total={total} removeItems={removeItems} />
      <FirstFold />
      <ProductBlock addItems={addItems} />
    </>
  );
}

export default App;
