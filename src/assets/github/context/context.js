import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

import mockUser from "../mockData/user";
import mockRepos from "../mockData/repos";
import mockFollowers from "../mockData/followers";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [initialLoading, setInitialLoading] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  const checkRequests = () => {
    setInitialLoading(true);
    try {
      axios(`${rootUrl}/rate_limit`).then((response) => {
        setInitialLoading(false);
        setRequests(response.data.rate.remaining);
      });
    } catch (e) {
      console.log("Error fetching requests");
    }
  };

  const getUser = async (githubUser) => {
    const url = `${rootUrl}/users/${githubUser}`;
    setInitialLoading(true);
    try {
      await axios(url).then((response) => {
        setInitialLoading(false);
        setGitUser(response.data)
      });
    } catch (e) {
      console.log(e);
      updateFeedback(e.response.data.message, "is-invalid")
      setInitialLoading(false);
    }
  };

  const updateFeedback = (message = "", type = "") =>
    setFeedback({ message, type });

  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{
        gitUser,
        repos,
        followers,
        rootUrl,
        initialLoading,
        requests,
        setRequests,
        getUser,
        feedback,
        updateFeedback,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

const useGithubContext = () => useContext(GithubContext);

export { GithubProvider, useGithubContext };
