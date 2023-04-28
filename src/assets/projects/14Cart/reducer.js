const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE":
      const cart = state.cart.filter(
        (item, index) => index !== action.payload.index
      );
      return { ...state, cart: cart };
  }
  return state;
};

export default reducer;
