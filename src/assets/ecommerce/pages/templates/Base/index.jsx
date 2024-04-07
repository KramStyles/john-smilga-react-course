import Jumbotron from "../../../../components/Jumbotron";
import { NavBar, SideBar, Footer } from "../../../components";

const Index = ({ children }) => {
  return (
    <>
      <Jumbotron title="E-Commerce" noGap />
      <div className="position-relative">
        <NavBar />
        <SideBar />
        <div className="container-fluid">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
