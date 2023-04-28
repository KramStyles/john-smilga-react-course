import Jumbotron from "../../components/Jumbotron";
import Navbar from "./Navbar";
import {AppProvider} from "./context";
const Index = () => (
  <AppProvider>
    <Jumbotron title="Cart with Reducer and Context" />
    <Navbar />
  </AppProvider>
);

export default Index;