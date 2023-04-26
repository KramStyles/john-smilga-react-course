import Jumbotron from "../../components/Jumbotron";
import Sidebar from "./Sidebar";
import "./style.css";
import { AppProvider } from "./context";
import Modal from "./Modal";
import Home from "./Home";

const Index = () => (
  <AppProvider>
    <Jumbotron title="Sidebar & Modal with Context" />
    <Sidebar />
    <Home />
    <Modal />
  </AppProvider>
);

export default Index;
