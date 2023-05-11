import Jumbotron from "../../components/Jumbotron";
import Cocktail from "./Cocktail";
import { AppProvider } from "./context";

const Index = () => (
  <AppProvider>
    <Jumbotron title="Cocktails Project" />
    <Cocktail />
  </AppProvider>
);

export default Index;
