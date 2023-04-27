import { useContext, createContext, useState } from "react";
import { sublinks } from "./data";

const AppContext = createContext();

export const useStripeContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);

  const toggleSidebar = () => setIsSidebar(!isSidebar);
  const toggleSubmenu = () => setIsSubmenu(!isSubmenu);

  return (
    <AppContext.Provider
      value={{ isSidebar, isSubmenu, toggleSubmenu, toggleSidebar, sublinks }}
    >
      {children}
    </AppContext.Provider>
  );
};
