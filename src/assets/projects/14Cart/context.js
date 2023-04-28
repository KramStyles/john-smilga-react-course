import {useContext, createContext, useState} from "react";
import {data} from "./data";

const AppContext = createContext();
const url = "https://course-api.com/api/react-useReducer-cart-project";

export const AppProvider = ({children}) => {
    const [cart, setCart] = useState(data);
    return <AppContext.Provider value={{cart}}>{children}</AppContext.Provider>
}

export const useCartContext = () => useContext(AppContext);