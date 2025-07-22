import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Shop With Us</h4>
          <p className="text-gray-300">
            Your one-stop destination for quality products at affordable prices.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-300 hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/faqs" className="text-gray-300 hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-policy"
                className="text-gray-300 hover:text-white"
              >
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link
                to="/returns-refunds"
                className="text-gray-300 hover:text-white"
              >
                Returns & Refunds
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Stay Connected</h4>
          <div className="flex space-x-4">
            {/* Keep <a> for external/social links */}
            <a href="#" className="text-gray-300 hover:text-white">
              FB
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              IG
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              TW
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
