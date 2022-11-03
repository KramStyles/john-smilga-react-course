import { BrowserRouter } from "react-router-dom";

// import BookList from "./assets/components/Book"; // without {} because it's a default export;
// N:B You can change Booklist to anyname because it's a default and not named export

import MyRouters from "./assets/components/MyRouters";
import { ScrollToTop } from "./assets/components/utils";

import "./assets/styles/bootstrap.css";
import React from "react";

const app = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <MyRouters />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default app;
