import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { data } from "./data";

const AppContext = createContext();
// const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0,
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const remove = (index) => dispatch({ type: "REMOVE", payload: { index } });
  const decrease = (index) =>
    dispatch({ type: "DECREASE", payload: { index } });

  const increase = (index) =>
    dispatch({ type: "INCREASE", payload: { index } });

  // const fetchData = async () => {
  //     dispatch({type: "LOADING"});
  //     const response = await fetch(url);
  //     const cart = await response.json();
  //     dispatch({type: "DISPLAY_ITEMS", payload: cart})
  // }

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  useEffect(() => {
    // fetchData();
    console.log("Not using fetched data");
  }, []);
  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useCartContext = () => useContext(AppContext);
