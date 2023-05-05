const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE":
      const cart = state.cart.filter(
        (item, index) => index !== action.payload.index
      );
      return { ...state, cart: cart };

    case "INCREASE":
      let cartItems = state.cart.map((item, index) => {
        if (index === action.payload.index) return {...item, amount: item.amount + 1}
        return item;
      });
      return {...state, cart: cartItems}

    case "DECREASE":
      let cartItemsDecrease = state.cart.map((item, index) => {
        if (index === action.payload.index) return {...item, amount: item.amount - 1}
        return item;
        // Add filter item to remove values less than 1
      }).filter(item => item.amount !== 0);
      return {...state, cart: cartItemsDecrease}

    case "GET_TOTALS":
      /*Cart total is the object we are returning and cart items are the items we iterate over
      * You can check out javascript nuggets on reduce function if you don't understand this.
      * */
      let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
        const {price, amount} = cartItem;
        cartTotal.amount += amount;
        cartTotal.total += (amount * price);
        return cartTotal;
      }, {
        total: 0,
        amount: 0,
      });
      total = parseFloat(total.toFixed(2));
      return {...state, total, amount}
  }
  return state;
};

export default reducer;
