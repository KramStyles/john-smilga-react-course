import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import BookList from "./assets/components/Book"; // without {} because it's a default export;

ReactDOM.render(<BookList />, document.getElementById("root"));
