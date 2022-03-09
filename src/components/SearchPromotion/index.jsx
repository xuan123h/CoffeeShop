import React from "react";
import "./styles.scss";
import { FaSearch } from "react-icons/fa";
function SearchPromotion(props) {
  return (
    <div className="search-promotion">
      <input type="text" placeholder="Search by coupon event" />
      <li>
        {" "}
        <FaSearch />{" "}
      </li>
    </div>
  );
}
export default SearchPromotion;
