import { useState } from "react";

import Jumbotron from "../../components/Jumbotron";

const Forms = () => {
  //   const [name, setName] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [age, setAge] = useState("");
  const [person, setPerson] = useState({ fullname: "", age: "", password: "" });
  const [db, setDb] = useState([]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (name && password) {
  //       setDb((prev) => {
  //         const createdAt = new Date().getTime().toString();
  //         return [...db, [name, password, age, createdAt]];
  //       });
  //       setName("");
  //       setPassword("");
  //     } else alert("Please ensure all fields are complete");
  //   };

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    console.log(name, value);
  };

  const handleSubmit = (e) => {};

  return (
    <>
      <Jumbotron title="Form Examples" />
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    id="name"
                    name="name"
                    value={person.fullname}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Age"
                    id="age"
                    name="age"
                    value={person.age}
                    onChange={handleChange}
                    autoComplete="on"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    id="pswd"
                    name="pswd"
                    value={person.password}
                    onChange={handleChange}
                    autoComplete="on"
                  />
                </div>
                <div className="col-md-12 mt-3 d-grid">
                  <button
                    className="btn btn-outline-primary btn-lg"
                    type={"submit"}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table mt-5">
              <table className="table table-light table-hover">
                <thead>
                  <tr>
                    <th>Fullname</th>
                    <th>Password</th>
                    <th>Age</th>
                    <th>Time ID</th>
                  </tr>
                </thead>
                <tbody>
                  {db.length > 0 ? (
                    db.map((detail) => {
                      return (
                        <tr key={detail[2]}>
                          <td>{detail[0]}</td>
                          <td>{detail[1]}</td>
                          <td>{detail[2]}</td>
                          <td>{detail[3]}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">
                        Nothing in Database yet!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
