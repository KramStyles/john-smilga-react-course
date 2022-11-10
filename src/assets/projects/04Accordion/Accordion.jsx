import React from "react";
import PropTypes from "prop-types";
import AccSlides from "./AccSlides";

const Accordion = ({ data }) => {
  return data.map((slides) => {
    return <AccSlides {...slides} />;
  });
};

Accordion.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Accordion;
