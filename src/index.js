import React from "react";
import ReactDOM from "react-dom";

const Greetings = () => (
  <div style={{ fontFamily: "poppins" }}>
    <Person />
    <h2>This is my message</h2>
  </div>
);

const Person = () => <h1>Michael</h1>;

ReactDOM.render(<Greetings />, document.getElementById("root"));
