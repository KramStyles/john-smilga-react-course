import {useContext, createContext, useState, useReducer} from "react";
import reducer from "./reducer";
import {data} from "./data";

const AppContext = createContext();
const url = "https://course-api.com/api/react-useReducer-cart-project";

const initialState = {
    loading: false,
    cart: data,
    total: 0,
    amount: 0,
}
export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const clearCart = () => {
        dispatch({type: "CLEAR_CART"});
    }
    const remove = (index) => {
        dispatch({type: "REMOVE", payload: {index}});
    }
    return <AppContext.Provider value={{...state, clearCart, remove}}>{children}</AppContext.Provider>
}

export const useCartContext = () => useContext(AppContext);