import { useState } from "react";
import { individuals } from "../../data/data";
import Jumbotron from "../../components/Jumbotron";

const UseArray = () => {
  const title = "usestate array example";
  const [people, setPeople] = useState(individuals);

  const removePerson = (id) => {
    const newPeople = people.filter((person, index) => index !== id);
    setPeople(newPeople);

    // attempting with functional update
    // setPeople((oldPeople) => {
    //   oldPeople.splice(id, 1);
    //   console.log(oldPeople);
    //   return oldPeople;
    // });
  };
  return (
    <div>
      <Jumbotron title={title} />
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
