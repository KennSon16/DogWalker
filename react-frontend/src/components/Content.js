import React from "react";
import ImageOne from "../images/coverpicdog.jpg";
import ImageTwo from "../images/nonodog.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="" className="h-full rounded-lg mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-4xl mb-2">Explore!</h2>
          <p className="mb-2">Find places that intrigues you!</p>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="" className="h-full rounded-lg mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-4xl mb-2">Connect with other users!</h2>
          <p className="text-2xl mb-2">
            Start chatting with other dog sitters and make connections here!
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
