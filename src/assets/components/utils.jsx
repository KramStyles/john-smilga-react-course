import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    // Code to change title on location change
    // let title = "Kenisce Group";
    // if (location.pathname !== "/") {
    //   title += ` : ${location.pathname.split("/")[1].toUpperCase()}`;
    // }
    // document.title = title;

    // Code to scroll up on location change!
    window.scrollTo({ top: 0, behavior: "smooth" });

    // // Code to hide mobile navbar on location change!
    // const smallNavbar = document.querySelector(".my-mobile-navbar");
    // if (!smallNavbar.classList.contains("mobile-navbar-inactive"))
    //   smallNavbar.classList.toggle("mobile-navbar-inactive");
  }, [location]);

  return <>{props.children}</>;
};
