import {useState, useContext, createContext, useEffect, useCallback} from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const AppContext = createContext();

const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>
    )
}

const useCocktailContext = () => useContext(AppContext);

export {useCocktailContext, AppProvider}