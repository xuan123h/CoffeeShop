import React from "react";
import SearchCart from "../../components/SearchCart";
import "./styles.scss";
import Header from "../../components/Header";
function CartFather(props) {
  return (
    <div className="cart-father">
      <Header />
      <SearchCart />
    </div>
  );
}
export default CartFather;
