import { BrowserRouter, Route, Routes } from "react-router-dom";

// import BookList from "./assets/components/Book"; // without {} because it's a default export;
// N:B You can change Booklist to anyname because it's a default and not named export

import Setup from "./assets/tutorial/07Hooks/CustomHooks";
import MyRouters from "./assets/components/MyRouters";

import "./assets/styles/bootstrap.css";
import React from "react";

const app = () => {
  return (
    <BrowserRouter>
      {/* <ScrollToTop> */}
      <Routes>
        <Route path="/" element={<Setup />} />
      </Routes>
      <MyRouters />
      {/* </ScrollToTop> */}
    </BrowserRouter>
  );
};

export default app;
