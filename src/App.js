import React from "react";
import { useState } from "react";
import Card from "./component/Card";

import "./App.css";
const App = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductprice] = useState("");
  const [description, setDescription] = useState("");

  console.log(description);

  const [listOfProduct, setlistOfProduct] = useState([]);
  console.log(listOfProduct);
  const add = () => {
    setlistOfProduct([
      { productName, productPrice, description },
      ...listOfProduct,

    ]);
    setProductName("");
    setProductprice("");
    setDescription("");
    
  };


return (
  <div className="mainContainer">
    <div className="appName">App</div>
    <div className="inputBox">
      <input
        type="text"
        className="inputBox"
        placeholder="Enter the Product Name"
        value={productName}
        onChange={(e) => {
          setProductName(e.target.value);
        }}
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter the Product Price"
        value={productPrice}
        onChange={(e) => {
          setProductprice(e.target.value);
        }}
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter the Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
    </div>
    <button className="btn" onClick={add}>
      ADD
    </button>

    {listOfProduct.map((descriptionProduct) => {
      return (
        <Card
          product={descriptionProduct.productName}
          productPrice={descriptionProduct.productPrice}
          decription={descriptionProduct.description} />
      )
    })}
  </div>

);
};
export default App;

