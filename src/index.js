import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const first = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/51znoqd9roL._AC_SX184_.jpg",
  title: "Diary of a Wimpy Kid",
  author: "Jeff Kinney",
};

const second = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/51znoqd9roL._AC_SX184_.jpg",
  title: "Cash Money Focus",
  author: "Random Guy",
};

const BookList = () => (
  <section className="booklist">
    <Book image={first.image} title={first.title} author={first.author} />
    <Book image={second.image} title={second.title} author={second.author} />
  </section>
);

const Book = (props) => (
  <article className="book">
    <Image source={props.image} title={props.title} />
    <Title title={props.title} />
    <Author name={props.author} />
  </article>
);
const Image = ({ source, title }) => <img src={source} alt={title} />;
const Title = ({ title }) => <h4>{title}</h4>;
const Author = ({ name }) => <p>{name}</p>;

ReactDOM.render(<BookList />, document.getElementById("root"));
