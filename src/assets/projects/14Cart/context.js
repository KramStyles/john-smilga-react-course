import {useContext, createContext} from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    return <AppContext.Provider value="hello">{children}</AppContext.Provider>
}

export const useCartContext = () => useContext(AppContext);