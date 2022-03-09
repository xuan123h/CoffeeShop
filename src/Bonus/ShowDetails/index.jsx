import { Link } from "react-router-dom";
import React from "react";
import "./styles.scss";
function ShowDetails({ showDetails }) {
  return (
    <div className="showdetails">
      <div className="showdetails__thumbnail">
        <img src={showDetails.thumbnailUrl} alt={showDetails.name} />
      </div>
      <p className="showdetails__name">{showDetails.name}</p>
      <p className="showdetails__description">{showDetails.description}</p>
      <p className="showdetails__price">{showDetails.price}</p>
      <button>
        {" "}
        <Link to="/cart-item"> ĐẶT HÀNG </Link>{" "}
      </button>
    </div>
  );
}
export default ShowDetails;
