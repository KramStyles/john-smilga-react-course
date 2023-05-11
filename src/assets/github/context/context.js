import { createContext, useContext, useState } from "react";
import mockUser from "../mockData/user";
import mockRepos from "../mockData/repos";
import mockFollowers from "../mockData/followers";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  return (
    <GithubContext.Provider value={{ gitUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
};

const useGithubContext = () => useContext(GithubContext);

export { GithubProvider, useGithubContext };
