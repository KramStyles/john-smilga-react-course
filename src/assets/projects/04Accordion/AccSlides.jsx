import { useState } from "react";
import PropTypes from "prop-types";

import { FaPlus, FaMinus } from "react-icons/fa";

const AccSlides = ({ title, info }) => {
  const [icon, setIcon] = useState(FaPlus);
  const [show, setShow] = useState(false);

  const Slide = () => {
    setShow(!show);
    setIcon(() => {
      if (!show) return <FaMinus />;
      else return <FaPlus />;
    });
  };

  return (
    <div>
      <div className="card mb-3">
        <div className="card-header d-flex justify-content-between align-items-center">
          <b>{title}</b>
          <span
            className="bg-primary p-2 text-light rounded-circle"
            onClick={Slide}
          >
            {icon}
          </span>
        </div>
        {show && <div className="card-body">{info}</div>}
      </div>
    </div>
  );
};

AccSlides.propTypes = {
  info: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AccSlides;
