import Jumbotron from "../components/Jumbotron";
import Dashboard from "./pages/Dashboard";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// Domain
const DOMAIN = process.env.REACT_APP_AUTH_DOMAIN
// Client ID
const CLIENT_ID = process.env.REACT_APP_AUTH_CLIENT_ID

const Index = () => (
  <Auth0Provider
  domain ={DOMAIN}
  clientId ={CLIENT_ID}
  redirectUri = {window.location.origin}
  >
    <GithubProvider>
      <Jumbotron title="Github Project" noGap />
      <Dashboard />
    </GithubProvider>
  </Auth0Provider>
);

export default Index;
