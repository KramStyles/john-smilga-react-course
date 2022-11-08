import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { reviews } from "../../data/data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const nextPerson = () => {
    setIndex((index) => {
      if (index < reviews.length - 1) {
        let newIndex = index + 1;
        return newIndex;
      }
      return 0;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      if (index > 0) {
        let newIndex = index - 1;
        return newIndex;
      }
      return reviews.length - 1;
    });
  };

  const surprise = () => {
    let newIndex = Math.floor(Math.random() * reviews.length);
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * reviews.length);
    }
    setIndex(newIndex);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3 col-sm-8 offset sm-2">
          <div className="card shadow-lg">
            <div className="card-body text-center">
              <div className="avatar-holder">
                <img src={image} alt={name} className="rounded-circle avatar" />
                <FaQuoteRight className="avatar-quote" />
              </div>
              <div className="my-4">
                <h4 className="small text-capitalize">{name}</h4>
                <p className="fw-bold text-uppercase text-primary">{job}</p>
              </div>
              <small className="px-4 mb-4">{text}</small>
              <div className="d-flex justify-content-center px-2">
                <button className="btn text-primary" onClick={prevPerson}>
                  {<FaChevronLeft />}
                </button>
                <button className="btn text-primary" onClick={nextPerson}>
                  {<FaChevronRight />}
                </button>
              </div>
              <div className="row">
                <div className="col-md-4 offset-md-4">
                  <button
                    className="btn btn-outline-primary mt-2"
                    onClick={surprise}
                  >
                    <small>Surprise me!</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
