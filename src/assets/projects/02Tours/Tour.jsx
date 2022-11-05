import { useState } from "react";
import PropTypes from "prop-types";

const Tour = ({ image, info, name, price }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="card mt-3">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <div>
          <h4 className="card-title float-start">{name}</h4>
          <span className="badge bg-dark float-end">$ {price}</span>
        </div>
        <p className="card-text" style={{ clear: "both" }}>
          {readMore ? info : `${info.substring(0, 200)} ...`}{" "}
          <button
            className="btn btn-sm text-primary"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Hide" : "Read More"}
          </button>
        </p>
        <div className="d-grid mt-2">
          <button className="btn btn-outline-dark btn-sm text-center">
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};

Tour.propTypes = {
  image: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Tour;
