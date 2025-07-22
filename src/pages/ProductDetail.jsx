import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-medium text-gray-500 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          {product.title}
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md"
          />
          <div className="flex-1 space-y-4">
            <p className="text-lg text-gray-700">
              <strong className="text-gray-900">Price:</strong> ${product.price}
            </p>
            <p className="text-gray-700">
              <strong className="text-gray-900">Description:</strong>{" "}
              {product.description}
            </p>
            <p className="text-gray-700">
              <strong className="text-gray-900">Brand:</strong> {product.brand}
            </p>
            <p className="text-gray-700">
              <strong className="text-gray-900">Category:</strong>{" "}
              {product.category}
            </p>
            <p className="text-gray-700">
              <strong className="text-gray-900">Rating:</strong>{" "}
              {product.rating} ⭐
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
