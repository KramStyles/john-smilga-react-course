import Jumbotron from "../components/Jumbotron";
import Dashboard from "./pages/Dashboard";
import { GithubProvider } from "./context/context";

const Index = () => (
  <GithubProvider>
    <Jumbotron title="Github Project" />
    <Dashboard />
  </GithubProvider>
);

export default Index;
