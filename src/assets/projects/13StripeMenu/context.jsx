import {useContext, createContext} from "react";

const AppContext = createContext();

export const useStripeContext = () => useContext(AppContext);

const AppProvider = ({children}) => {
    return <AppContext.Provider value="hello">{children}</AppContext.Provider>
}

export {AppProvider}