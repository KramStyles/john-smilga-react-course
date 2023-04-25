import { useState } from "react";
import { InlineForm } from "../../components/Forms";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import List from "./List";

const GroceryList = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [editID, setEditID] = useState(null);
  const [feedback, setFeedback] = useState({
    message: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // show negative feedback
      updateFeedback("Name is missing", "is-invalid");
    } else if (name && editFlag) {
      // Deal with editing
      setList(list.map(item => {
        if(item.id === editID)return {...item, title: name}
        return item
      }))
      setEditFlag(false)
      setEditID(null)
      setName("")
      updateFeedback("Value Updated Successfully!", "is-valid")
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      // show positive feedback
      updateFeedback("Successfully saved!", "is-valid");

      // Update name
      setName("");
    }
  };

  const updateFeedback = (message = "", type = "") =>
    setFeedback({ message, type });

  const clearList = () => {
    updateFeedback("Grocery list cleared!", "is-valid");
    setList([]);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    updateFeedback("Item removed", "is-valid");
  }

  const editItem = (id) => {
    const specificItem = list.find(item => item.id === id);
    setEditID(id);
    setEditFlag(true);
    setName(specificItem.title);
  }

  return (
    <div className="container">
      <h1 className="text-center">Track your Grocery List</h1>
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card rounded border-0 shadow p-5 mt-3">
            <InlineForm
              feedback={feedback.type}
              handleSubmit={handleSubmit}
              label="Populate Grocery List"
              icon={<MdOutlineLocalGroceryStore />}
              handleChange={(e) => setName(e.target.value)}
              value={name}
              btnText={editFlag ? "edit" : "submit"}
              placeholder="e.g. Python Course..."
              feedbackMsg={feedback.message}
              clearAlert={updateFeedback}
            />
            <div className="text-end">
              <List items={list} removeItem={removeItem} editItem={editItem}/>
              <button
                className="btn btn-outline-danger my-4"
                onClick={clearList}
              >
                Clear Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
