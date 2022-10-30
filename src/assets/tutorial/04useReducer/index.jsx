import { useReducer, useState } from "react";

import Jumbotron from "../../components/Jumbotron";
import Modal from "../../components/modal";
import { individuals } from "../../data/data";
import { reducer } from "./reducer";

// A simple usestate would go well with a simple todo list but use reducer is for more
// complicated structures. Use reducer relies heavily on redux

const defaultState = {
  db: individuals,
  modalShow: false,
  modalText: "",
};

const Index = () => {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const closeModal = () => {
    setTimeout(() => {
      dispatch({ type: "CLOSE_MODAL" });
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      const payload = { id: new Date().getTime().toString(), value };
      const action = { type: "ADD_ITEM", payload: payload };
      dispatch(action);
      setValue("");
    } else dispatch({ type: "NO_VALUE" });

    closeModal();
  };

  const deleteItem = (type, payload) => {
    dispatch({
      type: type,
      payload: { index: payload },
    });
    closeModal();
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
                      <td className="text-capitalize">{item.value}</td>
                      <td>
                        <button
                          className="btn btn-outline-dark btn-sm"
                          onClick={() => deleteItem("REMOVE_ITEM", index)}
                        >
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
