import Hex from "./utils";
import { useState } from "react";

const SingleColor = ({ rgb, index, weight, hexColor }) => {
  const [toastAlert, setToastAlert] = useState(false);
  const color = `rgb(${rgb.join(",")})`;
  const hexString = Hex(...rgb);
  const btnColors = index >= 11 ? "light text-dark" : "dark text-light";
  const [copiedCode, setCopiedCode] = useState("");

  const handleClick = (e) => {
    const code = e.target.textContent;
    setCopiedCode(code === "hex" ? hexString : color);

    // Copy hex or rgb to clipboard
    navigator.clipboard.writeText(copiedCode);

    // Turn on toast
    setToastAlert(true);

    const newTimer = setTimeout(() => {
      setToastAlert(false);
    }, 3000);

    return () => clearTimeout(newTimer);
  };

  return (
    <div
      className={`col-md-3 p-0 ${
        index >= 11 ? "text-light" : ""
      } position-relative`}
      style={{ height: 200 }}
    >
      <d
        className="d-grid h-100 align-items-center justify-content-center"
        style={{ backgroundColor: color }}
      >
        <div className="text-center">
          <p className="mb-0">Weight: {weight}%</p>
          <p className="mb-0">{color}</p>
          <p className="mb-0 d-none">{hexString}</p>
          <p className="mb-0">{hexColor}</p>
          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <button type="button" className={`btn btn-sm btn-${btnColors}`}>
              Click to Copy
            </button>
            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop4"
                type="button"
                className={`btn btn-${btnColors} dropdown-toggle`}
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <div
                className="dropdown-menu"
                aria-labelledby="btnGroupDrop4"
                id="copy-dropdown"
              >
                <button
                  className="dropdown-item text-uppercase"
                  onClick={handleClick}
                >
                  hex
                </button>
                <button
                  className="dropdown-item text-uppercase"
                  onClick={handleClick}
                >
                  rgb
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`toast ${toastAlert ? "show" : ""} position-absolute`}
          style={{ top: 15, left: 15, zIndex: 10 }}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Message</strong>
            <button
              type="button"
              className="btn-close ms-2 mb-1"
              onClick={() => setToastAlert(false)}
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="toast-body text-success">
            Color code:{" "}
            <span className="fw-bold">{`${copiedCode.toUpperCase()}`}</span>{" "}
            copied!
          </div>
        </div>
      </d>
    </div>
  );
};

export default SingleColor;
