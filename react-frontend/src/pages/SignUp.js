import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-wrap justify-center mt-20">
      <div className="w-full max-w-sm">
        <form
          action=""
          className="shadown-md bg-white rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              className="shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>

            <input
              type="password"
              className="shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
