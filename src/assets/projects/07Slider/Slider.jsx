import { useState, useEffect } from "react";
import {
  CgPushChevronRightR,
  CgPushChevronLeftR,
  CgQuoteO,
} from "react-icons/cg";
import { reviews } from "../../data/data";

const Slider = () => {
  const [people, setPeople] = useState(reviews);
  const [index, setIndex] = useState(0);
  const {image, name, id, job, text} = people[index];
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-1 d-flex align-items-center cur-pointer">
          <CgPushChevronLeftR size={55} className="text-primary" />
        </div>
        <div className="col-10">
          <div className="card">
            <div className="card-img-top text-center p-3">
              <img src={image} alt={name}
                   className="rounded-circle shadow p-2"
                   width="150px" style={{backgroundColor: "#eee"}}/>
            </div>
            <div className="card-body d-flex align-items-center"
              style={{ minHeight: 250 }}>
              <div className="text-center w-100">
                <h2 className="text-capitalize text-primary mb-0">{name}</h2>
                <h4 className="text-capitalize text-muted mt-0">{job}</h4>
                <p className="fs-5 mt-5 border-start border-5 border-primary">{text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 d-flex align-items-center cur-pointer">
          <CgPushChevronRightR size={55} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
