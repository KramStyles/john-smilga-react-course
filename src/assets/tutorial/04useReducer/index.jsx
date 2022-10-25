import { useReducer } from "react";

import Jumbotron from "../../components/Jumbotron";
import { profile } from "../../data/data";
import Modal from "../../components/modal";

// A simple usestate would go well with a simple todo list but use reducer is for more
// complicated structures. Use reducer relies heavily on redux

const UseReducerBasics = () => {
  return (
    <>
      <Jumbotron title="use-reducer basics" />
      <div className="container">
        <Modal />
      </div>
    </>
  );
};

export default UseReducerBasics;
