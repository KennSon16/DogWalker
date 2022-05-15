import React from "react";
import { Link } from "react-router-dom";

const choose = () => {
  return (
    <div className="flex justify-evenly">
      <Link
        to="/profile"
        className="py-96 px-32 bg-blue-500 text-1xl hover:bg-green-300 transition duration-300 ease-in-out items-stretch"
      >
        <div className="lg:text-5xl md:text-5xl sm:text-5xl text-3xl font-black mb-14">
          Looking for a Dog Sitter
        </div>
      </Link>

      <Link
        to="/givehelp"
        className="py-96 px-32 bg-blue-500 text-1xl hover:bg-green-300 transition duration-300 ease-in-out items-stretch justify-evenly"
      >
        <div className="lg:text-5xl md:text-5xl sm:text-5xl text-3xl font-black mb-14">
          Apply for Dog Sitting!
        </div>
      </Link>
    </div>
  );
};

export default choose;
