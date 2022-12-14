import { useState } from "react";
import PropTypes from "prop-types";

const Tour = ({ id, image, info, name, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="card mt-3 mb-3">
      <img
        className="card-img-top"
        src={image}
        alt={name}
        style={{ height: 300, objectFit: "cover" }}
      />
      <div className="card-body">
        <div>
          <h6 className="card-title float-start">{name}</h6>
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
          <button
            className="btn btn-outline-dark btn-sm text-center"
            onClick={() => removeTours(id)}
          >
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
