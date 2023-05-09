import { useState } from "react";

import loremText from "./data";

const Lorem = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(loremText.slice(0, count));
  };
  return (
    <div className="container">
      <h1 className="text-center">Let's Generate our own Lorem Ipsum</h1>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center mt-5">
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              placeholder="Enter number of paragraphs"
              min={1}
              max={10}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </div>
          <div className="col-md-2">
            <div className="d-grid">
              <input
                type="submit"
                className="btn btn-outline-primary"
                value="Generate"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="text-primary mt-5 text-justify">
        {text.map((item, index) => (
          <p key={index} className="my-3">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Lorem;
