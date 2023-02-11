import React, { useState } from "react";
import check from "../images/check.svg";

const Modal = (modal) => {
  const [click, isClick] = useState(modal);
  return (
    click && (
      <div className="modal" onClick={() => isClick(!click)}>
        <div
          style={{ padding: "3rem 1.5rem" }}
          className="modal-content text-white text-center sm:w-[400px] md:w-[450px]"
        >
          <img className="mx-auto pb-6" src={check} alt="check" />
          <h1 className="font-bold text-[24px] pb-2">Congratulations</h1>
          <p
            style={{ color: "rgba(255, 255, 255, 0.9);" }}
            className="font-normal text-[15px]"
          >
            Great move! You're one step closer to getting your hands on the
            product. Please check your mail for more information.
          </p>
        </div>
      </div>
    )
  );
};

export default Modal;
