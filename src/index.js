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
    "https://images-na.ssl-images-amazon.com/images/I/51+GySc8ExL._AC_SX184_.jpg",
  title: "A brief history of time",
  author: "Stephen Hawking",
};

const BookList = () => (
  <section className="booklist">
    <Book image={first.image} title={first.title} author={first.author} />
    <Book image={second.image} title={second.title} author={second.author} />
  </section>
);

const Book = (props) => {
  const { image, title, author } = props; // Destructuring to prevent using props each time
  return (
    <article className="book">
      <Image source={image} title={title} />
      <Title title={title} />
      <Author name={author} />
    </article>
  );
};
const Image = ({ source, title }) => <img src={source} alt={title} />;
const Title = ({ title }) => <h4>{title}</h4>;
const Author = ({ name }) => <p>{name}</p>;

ReactDOM.render(<BookList />, document.getElementById("root"));
