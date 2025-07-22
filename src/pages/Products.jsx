import React, { useState, useEffect } from "react";

export default function Pricing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataFetching = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };
    dataFetching();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            {product.title}: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
