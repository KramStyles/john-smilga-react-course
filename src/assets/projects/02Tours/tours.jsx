import React from "react";
import PropTypes from "prop-types";

import Tour from "./Tour";

const Tours = (props) => {
  const { tours, removeTours } = props;
  return tours.map((tour) => {
    return (
      <div className="col-md-6 col-sm-12" key={tour.id}>
        <Tour {...tour} removeTours={removeTours} />
      </div>
    );
  });
};

Tours.propTypes = {
  tours: PropTypes.array.isRequired,
};

export default Tours;
