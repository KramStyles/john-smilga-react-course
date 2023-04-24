import { useEffect, useState } from "react";
import { InlineForm } from "../../components/Forms";
import {
  MdOutlineLocalGroceryStore,
  MdLocalGroceryStore,
} from "react-icons/md";
import List from "./List";

const GroceryList = () => {
  const defaultFeedback = {
    message: "",
    type: "",
  };
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [editID, setEditID] = useState(null);
  const [feedback, setFeedback] = useState(defaultFeedback);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // show negative feedback
      setFeedback({
        ...feedback,
        type: "is-invalid",
        message: "Name is missing",
      });
    } else if (name && editFlag) {
      // Deal with editing
    } else {
      // show positive feedback
      setFeedback({
        ...feedback,
        type: "is-valid",
        message: "Congratulations",
      });
    }
  };

  useEffect(() => {
    const newTimer = setTimeout(() => {
      setFeedback(defaultFeedback);
    }, 3000);
    return () => clearTimeout(newTimer);
  }, [feedback]);
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
            />
            <div className="text-end">
              <List />
              <button className="btn btn-outline-danger my-4">
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
