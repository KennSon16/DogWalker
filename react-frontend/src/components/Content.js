import React from "react";
import ImageOne from "../images/csuf-night.jpg";
import ImageTwo from "../images/Tuffy_Waving_ECS_Orange-01.png";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Explore!</h2>
          <p className="mb-2">Find places that intrigues you!</p>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Connect with other Titans!</h2>
          <p className="mb-2">
            Start chatting with other Titans and make connections here!
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
