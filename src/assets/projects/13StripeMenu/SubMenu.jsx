/*Template generated by WebStorm on Thursday (4/27/23), 12:01 PM.
 * Author: kramstyles
 * Filename: SubMenu.jsx
 */

import { useStripeContext } from "./context";
import { useEffect, useRef, useState } from "react";
const SubMenu = () => {
  const {
    isSubmenu,
    location,
    page: { page, links },
  } = useStripeContext();
  const container = useRef(null);
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    setColumns(4);
    const subMenu = container.current;
    const { center } = location;
    subMenu.style.left = `${center - subMenu.offsetWidth / 2}px`;
    if (links.length < 3) setColumns(6);
    else if (links.length > 3) setColumns(3);
  }, [location, links]);

  return (
    <div className="position-relative">
      <div
        className={`my-tooltip shadow${isSubmenu ? " show" : ""}`}
        ref={container}
      >
        <div className="row text-capitalize">
          <h3 className="text-center mb-4">{page}</h3>
          {links.map((item, index) => {
            const { label, icon, url } = item;
            return (
              <div className={`col-md-${columns}`}>
                <a
                  href={url}
                  className="text-dark text-decoration-none fs-4 my-nav-link"
                >
                  {icon} {label}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
