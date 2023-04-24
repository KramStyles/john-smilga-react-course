import { useState } from "react";
import {InlineForm} from "../../components/Forms";
import {MdOutlineLocalGroceryStore, MdLocalGroceryStore} from "react-icons/md";

const GroceryList = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [editID, setEditID] = useState(null);
  const [infoAlert, setInfoAlert] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [invalid, setInvalid] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvalid(!invalid);
    alert(value);
  }
  return (
    <div className="container">
      <h1 className="text-center">Track your Grocery List</h1>
      <InlineForm
        invalid={invalid}
        handleSubmit={handleSubmit}
        label="Populate Grocery List"
        icon={<MdOutlineLocalGroceryStore />}
        handleChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default GroceryList;
