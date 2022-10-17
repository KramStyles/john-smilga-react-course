import BookList from "./assets/components/Book"; // without {} because it's a default export;
// N:B You can change Booklist to anyname because it's a default and not named export

const app = () => {
  return <BookList />;
};

export default app;
