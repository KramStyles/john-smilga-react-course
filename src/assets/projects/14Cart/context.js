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
    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

export const useCartContext = () => useContext(AppContext);