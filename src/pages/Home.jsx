import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop",
      category: "Fashion",
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop",
      category: "Accessories",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Shop the Best Products Online
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover amazing deals on quality products. Free shipping on orders
            over $50.
          </p>
          {/* Use Link for internal navigation */}
          <Link
            to="/services"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 inline-block"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  {product.category}
                </span>
                {/* Example: Link to product detail page */}
                <h3 className="text-xl font-bold mt-2 mb-1">
                  <Link
                    to={`/products/${product.id}`}
                    className="hover:underline text-blue-700"
                  >
                    {product.name}
                  </Link>
                </h3>
                <p className="text-gray-800 font-bold text-lg">
                  ${product.price.toFixed(2)}
                </p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Membership Program
          </h2>
          <p className="text-lg mb-8">
            Get exclusive deals, early access to sales, and free shipping on all
            orders.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md inline-block">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">
              CUB MEMBERSHIP
            </h3>
            {/* Example: Link to register page */}
            <Link
              to="/signup"
              className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300 inline-block"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>

    
    </div>
  );
}
