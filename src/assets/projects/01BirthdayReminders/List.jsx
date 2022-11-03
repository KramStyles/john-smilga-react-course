import React from "react";
import PropTypes from "prop-types";

import "./reminder.css";

const List = ({ name, age, image }) => {
  return (
    <>
      <div className="d-flex align-items-center mt-3 mb-3">
        <img src={image} alt={name} className="my-rounded-image" />
        <section className="ms-4">
          <h4 className="card-title mb-0">{name}</h4>
          <p className="card-text text-muted fs-7">{age} Years old.</p>
        </section>
      </div>
    </>
  );
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default List;
