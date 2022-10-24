import { useRef } from "react";

/* 
    UseRef is similar to useState. It preserves value but unlike useState, it doesn't trigger re-render and 
    it targets DOM node/elements
*/

import Jumbotron from "../../components/Jumbotron";

const UseRefExample = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    refContainer.current.value = "";
  };
  const refContainer = useRef(null);
  return (
    <>
      <Jumbotron title="use ref example" />
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter input"
              ref={refContainer}
            />
          </div>
          <div className="form-group d-grid mt-3">
            <button className="btn btn-outline-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UseRefExample;
