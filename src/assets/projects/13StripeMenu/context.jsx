import { useContext, createContext, useState } from "react";
import { sublinks } from "./data";

const AppContext = createContext();

export const useStripeContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(true);
  const [isSubmenu, setIsSubmenu] = useState(true);

  const toggleSidebar = () => setIsSidebar(!isSidebar);
  const toggleSubmenu = () => setIsSubmenu(!isSubmenu);

  return (
    <AppContext.Provider
      value={{ isSidebar, isSubmenu, toggleSubmenu, toggleSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};
