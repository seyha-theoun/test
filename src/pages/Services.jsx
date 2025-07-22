import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    dataFetching();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Premium Products
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Discover quality items at unbeatable prices
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="absolute h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {product.brand}
                </span>
                <span className="absolute bottom-3 left-3 bg-white text-indigo-600 text-xs font-bold px-2 py-1 rounded-md shadow">
                  {product.rating} ★
                </span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-bold text-gray-900">
                    <Link
                      to={`/products/${product.id}`}
                      className="hover:text-indigo-600 transition-colors duration-200"
                    >
                      {product.title}
                    </Link>
                  </h2>
                  <p className="text-lg font-bold text-indigo-600">
                    ${product.price}
                    {product.discountPercentage > 0 && (
                      <span className="ml-2 text-xs line-through text-gray-400">
                        $
                        {Math.round(
                          product.price * (1 + product.discountPercentage / 100)
                        )}
                      </span>
                    )}
                  </p>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-gray-500">
                    {product.stock} in stock
                  </span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg overflow-hidden">
          <div className="px-8 py-12 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to shop?</span>
              <span className="block">Join our membership today!</span>
            </h2>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/membership"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                >
                  CUB MEMBERSHIP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
