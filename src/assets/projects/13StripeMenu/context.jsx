import { useContext, createContext, useState } from "react";
import { sublinks } from "./data";

const AppContext = createContext();

export const useStripeContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [location, setLocation] = useState({});

  const toggleSidebar = () => setIsSidebar(!isSidebar);
  const toggleSubmenu = (text="", coordinates={}) => {
      setLocation(coordinates);
      return setIsSubmenu(!isSubmenu)
  };

  return (
    <AppContext.Provider
      value={{ isSidebar, isSubmenu, toggleSubmenu, toggleSidebar, sublinks, location }}
    >
      {children}
    </AppContext.Provider>
  );
};
