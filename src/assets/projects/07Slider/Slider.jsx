import { useState, useEffect } from "react";
import {
  CgPushChevronRightR,
  CgPushChevronLeftR,
  CgQuoteO,
} from "react-icons/cg";
import { reviews } from "../../data/data";

const Slider = () => {
  const [people, setPeople] = useState(reviews);
  return (
    <div className="container fs-1">
      <CgPushChevronRightR />
      <CgPushChevronLeftR />
      <CgQuoteO />
    </div>
  );
};

export default Slider;
