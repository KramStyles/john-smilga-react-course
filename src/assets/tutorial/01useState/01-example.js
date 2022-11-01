import { useState } from "react";
import Jumbotron from "../../components/Jumbotron";

const Example = () => {
  const [title, setTitle] = useState("use state example");
  const handleClick = () => {
    if (title === "use state example")
      setTitle("shake it! i feel your vibration!!");
    else setTitle("use state example");
  };

  return (
    <>
      <Jumbotron title={title} />

      <button className="btn btn-primary d-block m-auto" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default Example;
