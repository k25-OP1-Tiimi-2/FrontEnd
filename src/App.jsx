import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsTable from "./ProductsTable";

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/rest/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Virhe haettaessa dataa:", error));
  }, []);

  return <ProductsTable products={products} />;
};

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
  </Routes>
);

export default App;