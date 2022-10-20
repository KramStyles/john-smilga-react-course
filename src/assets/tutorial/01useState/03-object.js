import React, { useState } from "react";

import { profile } from "../../data/data";
import Jumbotron from "../../components/Jumbotron";

const UseStateObject = () => {
  const title = "use state object example";
  const [user, setUser] = useState(profile);

  const editInfo = (option, event) => {
    if (event.key === "Enter") {
      const value = event.target.value;
      event.target.value = "";
      // Update userProfile
      if (option === "name") setUser({ ...user, name: value });
      else if (option === "age") setUser({ ...user, age: value });
      if (option === "message") setUser({ ...user, message: value });
    }
  };

  return (
    <React.Fragment>
      <Jumbotron title={title} />
      <div className="container">
        <h2>Profile Table</h2>
        <p>
          This contains information stored in an object about the user that can
          be changed anytime.
        </p>
        <div className="row">
          <div className="col-md-12 col-lg-9">
            <table class="table table-light">
              <thead>
                <tr>
                  <th>Details</th>
                  <th>Values</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td className="text-capitalize">{user.name}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      onKeyDown={(e) => editInfo("name", e)}
                    />
                  </td>
                </tr>

                <tr>
                  <th>Age</th>
                  <td className="text-capitalize">{user.age}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      onKeyDown={(e) => editInfo("age", e)}
                    />
                  </td>
                </tr>

                <tr>
                  <th>Message</th>
                  <td className="text-capitalize">{user.message}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      onKeyDown={(e) => editInfo("message", e)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UseStateObject;
