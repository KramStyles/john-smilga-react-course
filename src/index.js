import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const books = [
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51znoqd9roL._AC_SX184_.jpg",
    title: "Diary of a Wimpy Kid",
    author: "Jeff Kinney",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit ab fugiat voluptatibus beatae vitae, molestias ipsum repellat mollitia itaque quaerat ex fugit nostrum impedit.",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51+GySc8ExL._AC_SX184_.jpg",
    title: "A brief history of time",
    author: "Stephen Hawking",
    desc: "To make them have different height, go to book class and use align-items: start",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/41qI9quGIdL._SX324_BO1,204,203,200_.jpg",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    desc: "Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.”",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/41rxoi1jMQL._SX331_BO1,204,203,200_.jpg",
    title: "Dune (Dune Chronicles, Book 1)",
    author: "Frank Herbert",
    desc: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for....",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51R8AA8QEVL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Giver",
    author: "Lois Lowry",
    desc: "Jonas's world is perfect. Everything is under control. There is no war or fear of pain. There are no choices. Every person is assigned a role in the community. Jonas lives in a seemingly ideal world.",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51jSPyJ8v2L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Shining",
    author: "Stephen King",
    desc: "Jack Torrance’s new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he’ll have plenty of time to spend reconnecting with his family...",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51IvQ1MrWjL._SX330_BO1,204,203,200_.jpg",
    title: "The Poisonwood Bible",
    author: "Barbara Kingsolver",
    desc: "The Poisonwood Bible is a story told by the wife and four daughters of Nathan Price, a fierce, evangelical Baptist who takes his family and mission to the Belgian Congo in 1959. They carry with them everything they believe they will need from home, but soon find that all of it",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51+WEx+YLHL._SX326_BO1,204,203,200_.jpg",
    title: "The Power Broker",
    author: "Robert A Caro",
    desc: "One of the Modern Library’s hundred greatest books of the twentieth century, Robert Caro's monumental book makes public what few outsiders knew: that Robert Moses was the single most powerful man of his time in the City and in the State of New York.",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg",
    title: "Fairy Tale",
    author: "Stephen King",
    desc: "Charlie Reade looks like a regular high school kid, great at baseball and football, a decent student. But he carries a heavy load. His mom was killed in a hit-and-run accident when he was seven, and grief drove his dad to drink.",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51Bt7XQpiLL._SX329_BO1,204,203,200_.jpg",
    title: "Children of Star Dust",
    author: "Edudzi Adodo",
    desc: "Zero Adedji dreams of joining one of the Saba guilds―groups of intergalactic travelers who explore space, retrieve lost treasures, and hunt down criminals. Instead, he must scrape by as a guide to travelers stranded on his home planet of Anansi 12. ",
  },
];

const Book = (props) => {
  const { image, title, author, children } = props; // Destructuring to prevent using props each time
  return (
    <article className="book">
      <Image source={image} title={title} />
      <Title title={title} />
      <Author name={author} />
      {children}
    </article>
  );
};
const Image = ({ source, title }) => (
  <img src={source} alt={title} width={185} />
);
const Title = ({ title }) => <h4>{title}</h4>;
const Author = ({ name }) => <p>{name}</p>;

const BookInformation = books.map((book, index) => (
  <Book image={book.image} title={book.title} author={book.author} key={index}>
    <p className="desc">{book.desc}</p>
  </Book>
));

const BookList = () => (
  <section className="booklist">{BookInformation}</section>
);

ReactDOM.render(<BookList />, document.getElementById("root"));
