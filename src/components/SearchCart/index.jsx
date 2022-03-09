import React from "react";
import "./styles.scss";
import { FaSearch } from "react-icons/fa";
function SearchCart(props) {
  return (
    <div className="search-cart">
      <input type="text" placeholder="Search by phone" />
      <li>
        {" "}
        <FaSearch />{" "}
      </li>
    </div>
  );
}
export default SearchCart;
