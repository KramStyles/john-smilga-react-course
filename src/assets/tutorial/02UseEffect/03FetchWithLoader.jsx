import { useState, useEffect } from "react";

import Jumbotron from "../../components/Jumbotron";
import Loader from "../../components/Loader";

const FetchWithLoader = () => {
  const [username, setUsername] = useState("kramstyles");
  const [profile, Setprofile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Something Wrong");
  const url = `https://api.github.com/users/${username}`;

  const getProfile = (e) => {
    if (e.keyCode === 13) {
      setUsername(e.target.value);
      e.target.value = "";
    }
  };

  const reportError = (response) => {
    setIsLoading(false);
    setIsError(true);
    setErrorMsg(response.statusText ? response.statusText : response.status);
    setUsername("kramstyles");
    setTimeout(() => {
      setIsError(false);
    }, 2000);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299)
          return response.json();
        else reportError(response);
      })
      .then((user) => {
        setIsLoading(false);
        Setprofile(user);
      })
      .catch((error) => console.log("error"));
  }, [username, url]);

  return (
    <>
      <Jumbotron title="fetch data with Loader" />
      {isLoading ? <Loader /> : ""}
      {isError ? <Loader error={errorMsg} /> : ""}

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <input
              type="text"
              className="form-control"
              onKeyDown={getProfile}
              placeholder="Enter Github username to get profile"
            />
          </div>
          <div className="col-md-6 col-sm-12">
            {isError ? (
              ""
            ) : (
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={profile.avatar_url}
                      class="img-fluid rounded-start"
                      alt={profile.login}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{profile.login}</h5>
                      <p className="card-text">{profile.bio}</p>
                      <p className="card-text">
                        <small class="text-muted">
                          Followers: <span>{profile.followers}</span>
                        </small>
                      </p>
                      <p className="card-text">
                        <small class="text-muted">
                          Following: <span>{profile.following}</span>
                        </small>
                      </p>
                      <p className="card-text">
                        <small class="text-muted">
                          Name: <span>{profile.name}</span>
                        </small>
                      </p>
                      <p className="card-text">
                        <small class="text-muted">
                          Location: <span>{profile.location}</span>
                        </small>
                      </p>
                      <p className="card-text">
                        <small class="text-muted">
                          Email: <span>{profile.email}</span>
                        </small>
                      </p>
                      <p className="card-text">
                        <small class="text-muted">
                          Type: <span>{profile.type}</span>
                        </small>
                      </p>
                      <a
                        href={profile.url}
                        className="btn btn-outline-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchWithLoader;
