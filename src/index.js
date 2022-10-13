import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const BookList = () => (
  <section className="booklist">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
);

const Book = () => (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
);
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51znoqd9roL._AC_SX184_.jpg"
    alt="Diary of a wimpy kid"
  />
);
const Title = () => <h4>Diary of a Wimpy Kid</h4>;
const Author = () => <p>Jeff Kinney</p>;

ReactDOM.render(<BookList />, document.getElementById("root"));
