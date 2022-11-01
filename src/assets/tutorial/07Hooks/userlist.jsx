import React from "react";
import PropTypes from "prop-types";

// export const UserList = ({ product }) => {
export const UserList = ({
  id,
  name,
  username,
  website,
  phone,
  email,
  nickname,
}) => {
  //   const { id, name, username, website, phone, email, nickname } = product;
  return (
    <div className="alert alert-info mt-2 mb-2" key={id}>
      <p className="mb-0">
        Name: <small className="text-muted fw-bold">{name}</small>
      </p>
      <p className="mb-0">
        Username:
        <small className="text-muted fw-bold">{username}</small>
      </p>
      <p className="mb-0">
        Website:
        <small className="text-muted fw-bold">{website}</small>
      </p>
      <p className="mb-0">
        Phone: <small className="text-muted fw-bold">{phone}</small>
      </p>
      <p className="mb-0">
        Email: <small className="text-muted fw-bold">{email}</small>
      </p>
      <p className="mb-0">
        Nickname: <small className="text-muted fw-bold">{nickname}</small>
      </p>
    </div>
  );
};

UserList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};

UserList.defaultProps = {
  nickname: "Not found!", // This is used if nickname is not found in the property.
};

// UserList.propTypes = {
//   product: PropTypes.object.isRequired,
// };
