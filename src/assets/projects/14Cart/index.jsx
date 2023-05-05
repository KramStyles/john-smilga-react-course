import Jumbotron from "../../components/Jumbotron";
import Navbar from "./Navbar";
import { AppProvider } from "./context";
import CartContainer from "./CartContainer";
const Index = () => {
  return (
    <AppProvider>
      <Jumbotron title="Cart with Reducer and Context" />
      <Navbar />
      <CartContainer />
    </AppProvider>
  );
};

export default Index;
