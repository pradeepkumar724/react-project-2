import React from "react";
import Logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="shadow-lg px-4">
      <header className="container flex justify-between items-center  mx-auto h-20">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <ul className="flex gap-8 lg:gap-14">
          <li className="text-lg font-medium">
            <a href="/">Home</a>
          </li>
          <li className="text-lg font-medium">
            <a href="/">About</a>
          </li>
          <li className="text-lg font-medium">
            <a href="/">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
