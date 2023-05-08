import {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";

let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("m");
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async (value) => {
    setLoading(true);
    url = url.concat(value);
    try {
      const storageName = `cocktail_${searchValue}`;
      const storageDetails = localStorage.getItem(storageName);

      if (storageDetails) {
        setCocktails(JSON.parse(storageDetails));
        setLoading(false);
      } else {
        const response = await fetch(url);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
            // Change name of incoming identifier
          const newCocktails = drinks.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });

            setCocktails(newCocktails);

            // send details to localstorage
            localStorage.setItem(storageName, JSON.stringify(newCocktails));
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
