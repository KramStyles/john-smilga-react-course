import { useState, useEffect } from "react";

import Jumbotron from "../../components/Jumbotron";
import Loader from "../../components/Loader";
import Tours from "./tours";

const url = "https://course-api.com/react-tours-project";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState("");

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsError(error);
    }
  };

  useEffect(() => {
    fetchTours();
  });

  return (
    <>
      <Jumbotron title="tours project" />
      {isError ? <Loader error={isError} /> : ""}
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="row justify-content-center">
            {tours.length === 0 ? (
              <div className="col-md-6 offset-md-3">
                <div className="d-grid">
                  <button className="btn btn-dark" onClick={fetchTours}>
                    Refresh
                  </button>
                </div>
              </div>
            ) : (
              <Tours tours={tours} removeTours={removeTours} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
