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
  const [initialLoading, setInitialLoading] = useState(true);
  const [feedback, setFeedback] = useState({ message: "", type: "" });
  const [userValue, setUserValue] = useState("");

  const checkRequests = () => {
    try {
      axios(`${rootUrl}/rate_limit`).then((response) => {
        setInitialLoading(false);
        setRequests(response.data.rate.remaining);
      });
    } catch (e) {
      console.log("Error fetching requests");
    }
  };

  const getUser = (githubUser) => {
    const url = `${rootUrl}/users/${githubUser}`;
    if (githubUser !== "kramstyles") setUserValue(githubUser);
    setInitialLoading(true);
    try {
      axios(url).then((response) => {
        if (response) {
          setGitUser(response.data);
          const { followers_url } = response.data;
          axios.get(`${url}/repos?per_page=100`).then((data) => {
            setRepos(data.data);
          });
          axios.get(`${followers_url}?per_page=100`).then((data) => {
            setFollowers(data.data);
          });
          checkRequests();
        }
      });
    } catch (e) {
      console.log(e);
      updateFeedback(e.response.data.message, "is-invalid");
      setInitialLoading(false);
    }
  };

  const updateFeedback = (message = "", type = "") =>
    setFeedback({ message, type });

  // useEffect(checkRequests, []);

  useEffect(() => {
    getUser("kramstyles");
    checkRequests();
  }, []);

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
        userValue,
        setUserValue,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

const useGithubContext = () => useContext(GithubContext);

export { GithubProvider, useGithubContext };
