import { useState } from "react";

import Jumbotron from "../../components/Jumbotron";
import { individuals } from "../../data/data";

const PropExample = () => {
  const [people, setPeople] = useState(individuals);

  const List = ({ people }) => {
    return (
      <ul className="list-group">
        {people.map((person, index) => {
          return (
            <SinglePerson key={index} value={person.value} id={person.id} />
          );
        })}
      </ul>
    );
  };

  const removePerson = (id) => {
    setPeople((prev) => prev.filter((person) => person.id !== id));
  };

  const SinglePerson = ({ value, id }) => {
    return (
      <li className="list-group-item list-group-item-action text-capitalize">
        {value}{" "}
        <button
          className="btn btn-sm float-end btn-outline-dark"
          onClick={() => removePerson(id)}
        >
          Delete
        </button>
      </li>
    );
  };

  return (
    <>
      <Jumbotron title="prop-drilling example" />
      <div className="container">
        <List people={people} />
      </div>
    </>
  );
};

export default PropExample;
