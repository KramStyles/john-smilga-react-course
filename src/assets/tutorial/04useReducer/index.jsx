import { useReducer, useState } from "react";

import Jumbotron from "../../components/Jumbotron";
import Modal from "../../components/modal";
import { people } from "../../data/data";

// A simple usestate would go well with a simple todo list but use reducer is for more
// complicated structures. Use reducer relies heavily on redux

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const details = [...state.db, action.payload];
    console.log(details);
    return {
      ...state,
      db: details,
      modalShow: true,
      modalText: action.payload.value + " added!",
    };
  } else if (action.type === "NO_VALUE")
    return { ...state, modalShow: true, modalText: "Please enter a value" };
  else return { ...state, modalShow: false, modalText: "Bye" };
};

const defaultState = {
  db: [],
  modalShow: false,
  modalText: "",
};

const Index = () => {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      const payload = { id: new Date().getTime().toString(), value };
      const action = { type: "ADD_ITEM", payload: payload };
      dispatch(action);
      setValue("");
    } else dispatch({ type: "NO_VALUE" });

    setTimeout(() => {
      dispatch("Nothing");
    }, 2000);
  };
  return (
    <>
      <Jumbotron title="use-reducer basics" />
      <div className="container">
        <Modal text={state.modalText} show={state.modalShow} />
        <form className="form mb-3" onSubmit={handleSubmit}>
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
        <div className="table-responsive">
          <table className="table table-light table-hover">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Value</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {state.db.length > 0 ? (
                state.db.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.value}</td>
                      <td>
                        <button className="btn btn-outline-dark btn-sm">
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="text-center">
                  <td colSpan="3">Nothing to display</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Index;
