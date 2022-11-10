import Jumbotron from "../../components/Jumbotron";
import Reviews from "./reviews";
import "./reviews.css";

const Index = () => {
  return (
    <>
      <Jumbotron title="Sacked 11-07! Reviews" />
      <div className="container">
        <Reviews />
      </div>
    </>
  );
};

export default Index;
