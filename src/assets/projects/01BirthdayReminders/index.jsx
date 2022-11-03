import { birthdayDetails } from "../../data/data";
import Jumbotron from "../../components/Jumbotron";
import List from "./List";

const index = () => {
  return (
    <>
      <Jumbotron title="birthday reminder project" />
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
            <div className="card bg-light">
              <div className="card-body">
                {birthdayDetails.map((birthday) => (
                  <List {...birthday} key={birthday.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
