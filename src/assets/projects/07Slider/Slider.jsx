import { useState, useEffect } from "react";
import {
  CgPushChevronRightR,
  CgPushChevronLeftR,
  CgQuoteO,
} from "react-icons/cg";
import { reviews } from "../../data/data";
import "./style.css";

const Slider = () => {
  const [people, setPeople] = useState(reviews);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, people]);

  // useEffect(() => {
  //     let sliderInterval = setInterval(()=> {
  //         setIndex(index + 1)
  //     }, 3000)
  //
  //     return () => clearInterval(sliderInterval);
  // }, [index])
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="position-absolute cur-pointer left-icon">
          <CgPushChevronLeftR
            size={55}
            className="text-primary"
            onClick={() => setIndex(index - 1)}
          />
        </div>
        <div className="col-12">
          {people.map((person, personIndex) => {
            const { image, name, id, job, text } = person;
            let position = "next-slider";
            if (personIndex === index) position = "active-slider";
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            )
              position = "last-slider";
            return (
              <div
                className={`card position-absolute shadow p-3 my-card-slider ${position}`}
                key={personIndex}
              >
                <div className="card-img-top text-center p-3">
                  <img
                    src={image}
                    alt={name}
                    className="rounded-circle shadow p-2"
                    width="150px"
                    style={{ backgroundColor: "#eee" }}
                  />
                </div>
                <div
                  className="card-body d-flex align-items-center"
                  style={{ minHeight: 250 }}
                >
                  <div className="text-center w-100">
                    <h2 className="text-capitalize text-primary mb-0">
                      {name}
                    </h2>
                    <h4 className="text-capitalize text-muted mt-0">{job}</h4>
                    <p className="fs-5 mt-5 border-start border-5 border-primary">
                      {text}
                    </p>
                    <CgQuoteO size={67} className="text-center text-primary" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="position-absolute cur-pointer right-icon">
          <CgPushChevronRightR
            size={55}
            className="text-primary"
            onClick={() => setIndex(index + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
