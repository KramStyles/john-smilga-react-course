import { BrowserRouter, Route, Routes } from "react-router-dom";

// import BookList from "./assets/components/Book"; // without {} because it's a default export;
// N:B You can change Booklist to anyname because it's a default and not named export

// import Setup from "./assets/tutorial/01useState/01-example";
// import Setup from "./assets/tutorial/01useState/02-array";
// import Setup from "./assets/tutorial/01useState/03-object";
// import Setup from "./assets/tutorial/01useState/04-counter";

// import Setup from "./assets/tutorial/02UseEffect/01-basics";
// import Setup from "./assets/tutorial/02UseEffect/02FetchData";
// import Setup from "./assets/tutorial/02UseEffect/03FetchWithLoader";
// import Setup from "./assets/tutorial/02UseEffect/04ShortCircuit";
// import Setup from "./assets/tutorial/02UseEffect/05Forms";

// import Setup from "./assets/tutorial/03useRef/01UseRef";

// import Setup from "./assets/tutorial/04useReducer";

// import Setup from "./assets/tutorial/05PropDrilling/01PropExample";

// import Setup from "./assets/tutorial/06ContextApi";

import Setup from "./assets/tutorial/07Hooks/CustomHooks";

import "./assets/styles/bootstrap.css";

const app = () => {
  return (
    <BrowserRouter>
      {/* <ScrollToTop> */}
      <Routes>
        <Route path="/" element={<Setup />} />
        {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} /> */}
      </Routes>
      {/* </ScrollToTop> */}
    </BrowserRouter>
  );
};

export default app;
