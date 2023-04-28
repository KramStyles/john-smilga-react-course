import Jumbotron from "../../components/Jumbotron";
import "./styles.css";
import NavBar from "./Navbar";
import SubMenu from "./SubMenu";
import SideBar from "./SideBar";
import { AppProvider } from "./context";
import Body from "./Body";

const Index = () => (
  <AppProvider>
    <Jumbotron title="Stripe Menus with Context" />
    <NavBar />
    <SideBar />
    <SubMenu />
    <Body />
  </AppProvider>
);

export default Index;
