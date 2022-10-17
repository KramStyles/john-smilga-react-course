import { useState } from "react";

const Example = () => {
  const [title, setTitle] = useState("use state example");
  const handleClick = () => {
    if (title === "use state example")
      setTitle("shake it! i feel your vibration!!");
    else setTitle("use state example");
  };

  return (
    <>
      <div className="bg-primary p-5 text-white text-center fs-3 fw-bold text-capitalize">
        {title}
      </div>

      <button
        className="btn mt-3 btn-primary d-block m-auto"
        onClick={handleClick}
      >
        Change Title
      </button>
    </>
  );
};

export default Example;
