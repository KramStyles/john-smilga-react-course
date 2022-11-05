import { useState } from "react";

import { birthdayDetails } from "../../data/data";
import Jumbotron from "../../components/Jumbotron";
import List from "./List";

const Index = () => {
  const [birthdays, setBirthdays] = useState(birthdayDetails);
  return (
    <>
      <Jumbotron title="birthday reminder project" />
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
            <div className="card bg-light">
              <div className="card-body">
                <h3 className="card-title mb-4">
                  {birthdays.length} Birthdays Today
                </h3>
                {birthdays.length > 0 &&
                  birthdays.map((birthday) => (
                    <List {...birthday} key={birthday.id} />
                  ))}
                <div className="d-flex">
                  <button
                    className="btn btn-lg btn-dark w-50 me-1"
                    onClick={() => setBirthdays([])}
                  >
                    Clear all
                  </button>
                  <button
                    className="btn btn-lg btn-dark w-50 ms-1"
                    onClick={() => setBirthdays(birthdayDetails)}
                  >
                    Repopulate
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

export default Index;
