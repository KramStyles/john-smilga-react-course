import { useContext, createContext, useState } from "react";
import { sublinks } from "./data";

const AppContext = createContext();

export const useStripeContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const toggleSidebar = () => setIsSidebar(!isSidebar);
  const openSubmenu = (text = "", coordinates = {}) => {
        const page = sublinks.find((item) => item.page === text);
        setPage(page);
    setLocation(coordinates);
    return setIsSubmenu(true);
  };

  const closeSubmenu = () => setIsSubmenu(false);

  return (
    <AppContext.Provider
      value={{
        isSidebar,
        isSubmenu,
        openSubmenu,
        closeSubmenu,
        toggleSidebar,
        sublinks,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
