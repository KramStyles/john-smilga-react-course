/*Template generated by WebStorm on Sunday (4/7/24), 12:04 AM.
 * Author: kramstyles
 * Filename: CartButtons.jsx
 */

import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineLogin } from "react-icons/ai";

const CartButtons = () => {
  return (
    <Wrapper>
      <Link
        to="/ecommerce/cart"
        className="text-dark text-decoration-none fs-5 fw-bold"
      >
        Cart
        <span className="position-relative">
          <GiShoppingCart className="fs-1" />
            <span className="rounded-circle p-1 px-2 circle-span">12</span>
        </span>
      </Link>

      <Link
        to="/ecommerce/login"
        className="text-dark text-decoration-none fs-5 fw-bold"
      >
        Login
        <span className="position-relative">
          <AiOutlineLogin className="fs-1" />

        </span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .circle-span {
    position: absolute;
    background-color: #814990;
    color: white;
    font-size: 13px;
    right: -20px;
    top: -10px;
  }
`;

export default CartButtons;