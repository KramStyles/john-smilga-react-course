import Jumbotron from "../../../../components/Jumbotron";
import { NavBar, SideBar, Footer } from "../../../components";

const Index = ({ children }) => {
  return (
    <>
      <Jumbotron title="E-Commerce" noGap/>
      <NavBar />
      <div className="container-fluid">{children}</div>
      <Footer/>
    </>
  );
};

export default Index;
