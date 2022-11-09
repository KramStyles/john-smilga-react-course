import Jumbotron from "../../components/Jumbotron";
import Accordion from "./Accordion";
import { accordion } from "../../data/data";

const Index = () => {
  return (
    <>
      <Jumbotron title="accordion project" />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h2 className="text-center">
              Frequently asked Questions and Answers
            </h2>
          </div>
          <div className="col-md-8 col-sm-12">
            <Accordion data={accordion} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
