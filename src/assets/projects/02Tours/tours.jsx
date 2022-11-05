import React from "react";
import PropTypes from "prop-types";

import Tour from "./Tour";

const Tours = (props) => {
  const { tours } = props;
  return tours.map((tour) => {
    return (
      <div className="col-md-6 col-sm-12">
        <Tour key={tour.id} {...tour} />
      </div>
    );
  });
};

Tours.propTypes = {
  tours: PropTypes.array.isRequired,
};

export default Tours;
