import { useState, useContext, createContext } from "react";
/* Prop drilling also involves passing down function as parameters e.g you can pass down
removePerson the same way you'd pass down id = person.id etc. This gives rise to context apis and redux
*/
import Jumbotron from "../../components/Jumbotron";
import { individuals } from "../../data/data";

const PersonContext = createContext();
// In personContext we have access to two components; Provider & Consumer

const Index = () => {
  const [people, setPeople] = useState(individuals);

  const List = ({ people }) => {
    return (
      <ul className="list-group">
        {people.map((person, index) => {
          return <SinglePerson key={index} {...person} />;
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
      <Jumbotron title="context-api example" />
      <div className="container">
        <List people={people} />
      </div>
    </>
  );
};

export default Index;
