import Jumbotron from "../components/Jumbotron";
import Dashboard from "./pages/Dashboard";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// Publickey
// Public secret key 

const Index = () => (
  <Auth0Provider
  domain = "Your_Domain"
  clientId = "Client_ID"
  redirectUri = {window.location.origin}
  >
    <GithubProvider>
      <Jumbotron title="Github Project" noGap />
      <Dashboard />
    </GithubProvider>
  </Auth0Provider>
);

export default Index;
