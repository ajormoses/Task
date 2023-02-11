import React from "react";
import house from "../images/house.svg";
import tel from "../images/tel.svg";

const Footer = () => {
  return (
    <div
      className="container text-white py-2"
      style={{ borderTop: "2px solid white" }}
    >
      <div className="md:flex md:justify-between">
        <div className="flex items-center">
          <img className="w-5 h-5" src={house} alt="" />
          <p className="text-[14px] ml-4">
            2nd Floor, The Garnet Building, KM14{" "}
            <br className="hidden md:block"></br> Lekki Epe Expressway, Lagos,
            Nigeria.
          </p>
        </div>
        <p className="font-extrabold text-[15px] py-4 ">
          Loyalbaze is almost here.
        </p>
        <div className="flex items-center">
          <img className="w-4 h-4" src={tel} alt="" />
          <p className="text-[14px] ml-4">+234 903 618 9485</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
