/*Template generated by WebStorm on Friday (4/28/23), 7:07 PM.
 * Author: kramstyles
 * Filename: Navbar.jsx
 */

import { useCartContext } from "./context";
import Cart from "../../images/cart/cart.png";

const Navbar = () => {
  const { amount } = useCartContext();
  return (
    <div className="bg-secondary mb-5" style={{ height: "100px" }}>
      <div className="container d-flex align-items-center justify-content-between h-100">
        <h1 className="text-light text-shadow fw-bold">Cart Component</h1>
        <div className="cur-pointer">
          <img src={Cart} alt="Cart logo" width={50} />
          <span className="fs-3 p-1 text-light text-shadow fw-bold">
            {amount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;