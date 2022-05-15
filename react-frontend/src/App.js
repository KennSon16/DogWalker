import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import FAQ from "./pages/FAQ";
import Home from "./pages/index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import UserProfile from "./pages/userprofile";
import NeedHelp from "./pages/needhelp";
import Choose from "./pages/choose";
import GiveHelp from "./pages/givehelp";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized lol");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/needhelp" element={<NeedHelp />} />
        <Route path="/givehelp" element={<GiveHelp />} />
        <Route path="/choose" element={<Choose />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
