import React from "react";

export const UserList = ({ product }) => {
  const { id, name, username, website, phone, email } = product;
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
    </div>
  );
};
