/*Template generated by WebStorm on Tuesday (5/9/23), 5:46 PM.
 * Author: kramstyles
 * Filename: Info.jsx
 */

import { useGithubContext } from "../context/context";
import { VscRepo, VscGist, VscPerson, VscPersonAdd } from "react-icons/vsc";
import styled from "styled-components";

const Info = () => {
  const { gitUser } = useGithubContext();
  const { public_repos, followers, following, public_gists } = gitUser;
  const userInfo = [
    {
      title: "repos",
      icon: <VscRepo className="text-primary fs-1" />,
      value: public_repos,
      bg: "primary",
    },
    {
      title: "gists",
      icon: <VscGist className="text-dark fs-1" />,
      value: public_gists,
      bg: "dark",
    },
    {
      title: "followers",
      icon: <VscPerson className="text-success fs-1" />,
      value: followers,
      bg: "success",
    },
    {
      title: "following",
      icon: <VscPersonAdd className="text-warning fs-1" />,
      value: following,
      bg: "warning",
    },
  ];

  const Wrapper = styled.section`
    .primary {
      border: 2px solid #2fa4e7;
      background-color: #2fa4e755;
    }
    .dark {
      border: 2px solid #666;
      background-color: #e9ecef55;
    }
    .success {
      border: 2px solid #73a839;
      background-color: #73a83955;
    }
    .warning {
      border: 2px solid #dd5600;
      background-color: #dd560055;
    }
  `;

  const InfoCard = ({ icon, title, value, bg }) => (
    <div className="col-md-3">
      <div className="card shadow flex-row py-3 justify-content-center align-items-center">
        <div className={`rounded-circle me-3 p-2 ${bg}`}>{icon}</div>
        <div className="text-center ms-3">
          <h2 className="text-dark">{value}</h2>
          <p className={`text-capitalize fw-bold text-${bg}`}>{title}</p>
        </div>
      </div>
    </div>
  );
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          {userInfo.map((item, index) => (
            <InfoCard {...item} key={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Info;
