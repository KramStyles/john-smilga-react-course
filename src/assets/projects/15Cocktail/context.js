import { useState, useContext, createContext, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("ada");
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async (value) => {
    setLoading(true);
    let search_url = `${url}${searchValue}`;
    console.log(search_url);
    try {
      const storageName = `cocktail_${searchValue}`;
      const storageDetails = sessionStorage.getItem(storageName);

      if (storageDetails) {
        setCocktails(JSON.parse(storageDetails));
        setLoading(false);
      } else {
        const response = await fetch(search_url);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          // Change name of incoming identifier
          const newCocktails = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
              strInstructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
              instructions: strInstructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            };
          });

          setCocktails(newCocktails);

          // send details to sessionStorage
          sessionStorage.setItem(storageName, JSON.stringify(newCocktails));
        } else setCocktails([]);
      }
    } catch (e) {
      console.error("Fetch Drink Error");
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDrinks(searchValue);
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{ searchValue, setSearchValue, cocktails, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useCocktailContext = () => useContext(AppContext);

export { useCocktailContext, AppProvider };
