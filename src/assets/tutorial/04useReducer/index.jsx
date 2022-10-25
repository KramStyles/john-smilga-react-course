import { useReducer, useState } from "react";

import Jumbotron from "../../components/Jumbotron";
import { profile } from "../../data/data";
import Modal from "../../components/modal";

// A simple usestate would go well with a simple todo list but use reducer is for more
// complicated structures. Use reducer relies heavily on redux

const UseReducerBasics = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalText, setModalText] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalText(value);
    setModalShow(true);
    setValue("");

    setTimeout(() => {
      setModalShow(false);
    }, 2000);
  };
  return (
    <>
      <Jumbotron title="use-reducer basics" />
      <div className="container">
        <Modal text={modalText} show={modalShow} />
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Something!"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="d-grid mt-2">
            <button className="btn btn-outline-primary">Create</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UseReducerBasics;
