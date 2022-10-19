import { useState } from "react";
import { individuals } from "../../data/data";

const UseArray = () => {
  const title = "usestate array example";
  const [people, setPeople] = useState(individuals);

  const removePerson = (id) => {
    let newPeople = people.filter((person, index) => index !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      <div className="bg-primary p-5 text-white text-center fs-3 fw-bold text-capitalize mb-5">
        {title}
      </div>
      <div className="container">
        <ul className="list-group">
          {people.map((persons, index) => {
            return (
              <li
                className="list-group-item list-group-item-action text-capitalize"
                key={index}
              >
                {persons.name}
                <small
                  className="float-end btn fw-normal text-danger"
                  onClick={() => removePerson(index)}
                >
                  Remove Item
                </small>
              </li>
            );
          })}
        </ul>
        <button
          className="btn btn-danger d-block m-auto mt-3"
          onClick={() => setPeople([])}
        >
          Clear Names
        </button>
      </div>
    </div>
  );
};

export default UseArray;
