import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          We provide quality products and top-notch services to support your
          lifestyle. Explore our site to learn more!
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
