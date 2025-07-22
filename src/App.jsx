import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./components/HeaderFooter/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import LoginComponent from "./components/HeaderFooter/Auth/LoginComponent";
import SignUpComponent from "./components/HeaderFooter/Auth/SignUpComponent";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<LoginComponent />} />
        <Route path="/SignUp" element={<SignUpComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
