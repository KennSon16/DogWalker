import React from "react";
import { Link } from "react-router-dom";
import ImageDogo from "../images/dogo.png";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-4">
        Dog Walker
      </Link>
      <img src={ImageDogo} alt="" className="object-scale-down h-12 w-12  rounded-lg" />
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/profile">
          Connect
        </Link>
        <Link className="p-4" to="/about">
          About
        </Link>
        <Link className="p-4" to="/signup">
          Sign Up
        </Link>
        <Link className="p-4" to="/signin">
          Sign In
        </Link>
        <Link className="p-4" to="/userprofile">
          My Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
