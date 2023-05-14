/*Template generated by WebStorm on Tuesday (5/9/23), 5:43 PM.
 * Author: kramstyles
 * Filename: Card.jsx
 */

import { useGithubContext } from "../context/context";
import Tab from "./Tab";
import {
  ImTwitter,
  ImGithub,
  ImCalendar,
  ImLocation2,
  ImLink,
  ImOffice,
} from "react-icons/im";
import styled from "styled-components";

const Wrapper = styled.div`
    p {
      margin-bottom: 0;
      font-size: 14px;
      display: flex;
      align-items: center;
    }
    svg {
      font-size: 1.2rem;
      margin-right: 15px;
    }
  `;
const Card = () => {
  const { gitUser } = useGithubContext();
  const {
    login,
    avatar_url,
    html_url: url,
    name,
    location,
    bio,
    blog,
    company,
    twitter_username,
    created_at,
  } = gitUser;

  return (
    <Tab title={`@${login}`}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src={avatar_url}
            alt={login}
            className="rounded-circle"
            style={{ width: 80, height: 80 }}
          />
          <div className="ms-3 d-flex flex-column justify-content-center">
            <p className="fw-bold text-capitalize mb-0">{name}</p>
            <p className="mb-0">
              <ImTwitter className="text-primary" />{" "}
              {twitter_username || "No profile yet!"}
            </p>
          </div>
        </div>
        <a
          href={url}
          className="btn btn-outline-primary d-flex align-items-center"
          rel="noreferrer"
          target="_blank"
        >
          <ImGithub className="me-3" /> Follow
        </a>
      </div>
      <p className="my-3">{bio}</p>
      <Wrapper>
        <p>
          <ImOffice /> {company || "None for now."}
        </p>
        <p>
          <ImLocation2 /> {location || "Somewhere on earth."}
        </p>
        <p>
          <ImLink /> <a href={blog || url} target="_blank" rel="noreferrer">{blog || url}</a>
        </p>
        <p>
          <ImCalendar /> Member since : <b> {created_at.slice(0, 4)}</b>
        </p>
      </Wrapper>
    </Tab>
  );
};

export default Card;
