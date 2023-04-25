import PropTypes from "prop-types";
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="container">
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item.id}
          >
            {item.title}
            <span className="badge badge-pill">
              <RiEdit2Fill className="fs-4 mx-2 cur-pointer text-success" onClick={()=> editItem(item.id)}/>
              <RiDeleteBin2Fill
                className="fs-4 mx-2 cur-pointer text-danger"
                onClick={() => removeItem(item.id)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func,
};

export default List;
