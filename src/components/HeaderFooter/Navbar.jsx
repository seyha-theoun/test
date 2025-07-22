import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export function NavbarComponent() {
  const location = useLocation();

  return (
    <Navbar fluid rounded>
      {/* Use href for external links */}
      <NavbarBrand
        href="https://flowbite-react.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active={location.pathname === "/"}>
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/about"
          active={location.pathname === "/about"}
        >
          About
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/services"
          active={location.pathname === "/services"}
        >
          Products
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/contact"
          active={location.pathname === "/contact"}
        >
          Contact
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/login"
          active={location.pathname === "/login"}
        >
          Login
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/signup"
          active={location.pathname === "/register"}
        >
          Register
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
