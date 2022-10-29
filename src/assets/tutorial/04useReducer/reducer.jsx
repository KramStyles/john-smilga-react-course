export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const details = [...state.db, action.payload];
    console.log(details);
    return {
      ...state,
      db: details,
      modalShow: true,
      modalText: action.payload.value + " added!",
    };
  } else if (action.type === "NO_VALUE")
    return {
      ...state,
      modalShow: true,
      modalText: "Please enter a value",
    };
  else if (action.type === "REMOVE_ITEM") {
    const index = action.payload.index;
    const item = state.db[index].value;
    const id = state.db[index].id;
    return {
      ...state,
      db: state.db.filter((person) => person.id !== id),
      modalText: item + " Deleted",
      modalShow: true,
    };
  } else
    return {
      ...state,
      modalShow: false,
      modalText: "Bye",
    };
};
