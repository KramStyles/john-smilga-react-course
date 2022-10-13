import React from "react";
import ReactDOM from "react-dom";

const BookList = () => (
  <section style={{ fontFamily: "poppins" }}>
    <Book />
  </section>
);

const Book = () => <article>This is a book</article>;

ReactDOM.render(<BookList />, document.getElementById("root"));
