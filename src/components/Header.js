import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="fixed w-full py-6 z-30 bg-[#121b27]">
        <header className="flex justify-between items-center container ">
          <img className="w-[120px] md:w-[200px]" src={logo} alt="logo" />
          <button className="requestBtn text-[14px] md:text-base">
            Get Priority Access
          </button>
        </header>
      </div>
    </div>
  );
};

export default Header;
