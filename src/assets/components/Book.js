import { books } from "../data/books"; // Since it's a named export we attach {}

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

export default BookList;
