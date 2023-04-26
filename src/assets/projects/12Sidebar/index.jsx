import Jumbotron from "../../components/Jumbotron";
import Sidebar from "./Sidebar";
import "./style.css";
import Modal from "./Modal";
import Home from "./Home";

const Index = () => (
    <>
        <Jumbotron title="Sidebar & Modal with Context" />
        <Home/>
        <Modal/>
        <Sidebar/>
    </>
)

export default Index