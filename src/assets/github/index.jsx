import Jumbotron from "../components/Jumbotron";
import Dashboard from "./pages/Dashboard";
import AuthWrapper from "./pages/AuthWrapper";

const Index = () => (
  <AuthWrapper>
    <Jumbotron title="Github Project" noGap />
    <Dashboard />
  </AuthWrapper>
);

export default Index;
