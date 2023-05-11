import { useState, useEffect } from "react";

import Jumbotron from "../../components/Jumbotron";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  // Introducing short circuit
  const firstValue = text || "Hello"; // This would pick hello if text is empty
  const secondValue = text && "Hi"; // This would pick hi if text exist

  const [show, setShow] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const toggleValues = () => {
    if (secondValue) setText("");
    else setText("Bye");
  };

  const Item = () => {
    return (
      <h3 className="mt-3">
        Window Size: <span className="text-primary fw-bold">{size}px</span>
      </h3>
    );
  };

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // return ()=>{
    //     window.removeEventListener('resize', checkSize);
    // }
  }, []);
  return (
    <>
      <Jumbotron title="short circuit example" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>{firstValue}</p>
            <p>{secondValue ? secondValue : " "}</p>
            <p>{secondValue || " "}</p>
            <button
              className="btn btn-outline-primary mt-2"
              onClick={toggleValues}
            >
              Toggle values
            </button>
          </div>
          <div className="col-md-6 mt-sm-3">
            <button className="btn btn-primary" onClick={() => setShow(!show)}>
              Show/Hide
            </button>
            {show && <Item />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortCircuit;
