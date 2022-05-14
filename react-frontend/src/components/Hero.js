import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
        Dog Walker
      </h1>
      <Link
        to="/signup"
        className="py-6 px-10 bg-blue-500 rounded-full text-3xl hover:bg-green-300 transition duration-300 ease-in-out flex items-center animate-bounce"
      >
        Sign Up!
      </Link>
    </div>
  );
};

export default Hero;
