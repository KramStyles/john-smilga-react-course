import { useReducer, useState } from "react";

import Jumbotron from "../../components/Jumbotron";
import { people } from "../../data/data";
import Modal from "../../components/modal";

// A simple usestate would go well with a simple todo list but use reducer is for more
// complicated structures. Use reducer relies heavily on redux

const UseReducerBasics = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalText, setModalText] = useState("");
  const [value, setValue] = useState("");
  const [db, setDb] = useState(people);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      setModalText(value + " added!");
      setModalShow(true);
      setValue("");

      const data = { id: new Date().getTime().toString(), value: value };
      setDb([...db, data]);

      setTimeout(() => {
        setModalShow(false);
      }, 2000);
    }
  };
  return (
    <>
      <Jumbotron title="use-reducer basics" />
      <div className="container">
        <Modal text={modalText} show={modalShow} />
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
              {db.length > 0 ? (
                db.map((item, index) => {
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

export default UseReducerBasics;
