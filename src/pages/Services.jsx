import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Services() {
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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                <Link
                  to={`/products/${product.id}`}
                  className="text-indigo-600 hover:underline"
                >
                  {product.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <p className="text-sm text-gray-500 line-clamp-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
