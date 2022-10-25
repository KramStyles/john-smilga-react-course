import React from "react";

import "../styles/modal.css";

const Modal = ({ text, show }) => {
  return (
    <div className="text-center">
      <div className={`my-modal ${show && "show-my-modal"}`}>{text}</div>
    </div>
  );
};

export default Modal;
