import React, { useEffect, useState } from "react";
import arrowdown from "../images/arrowdown.svg";

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("Select Country");
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((value) => setValue(value));
  }, []);

  console.log(value);

  return (
    <div
      onClick={(e) => setIsActive(!isActive)}
      className="relative flex justify-between bg-none border rounded-md w-full"
      style={{
        border: "1px solid rgba(221, 221, 221, 0.5)",
        padding: "10px 15px",
        margin: "0.5rem 0",
      }}
    >
      <p className=" text-gray-400 hover:text-gray-700 rounded-l-md">
        {selected}
      </p>

      <div>
        <img src={arrowdown} alt="Arrow down" />

        {isActive && (
          <div
            style={{ border: "2px solid rgba(221, 221, 221, 0.5)" }}
            className="absolute right-0 z-10  mt-6 w-full h-[120px] overflow-x-hidden overflow-y-auto  bg-[#1d2939] rounded-md shadow-lg cursor-pointer"
          >
            {value.map((option) => (
              <p
                onClick={(e) => {
                  setSelected(option.name.common);
                }}
                className="block px-4 py-2  text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
              >
                {option.name.common}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
