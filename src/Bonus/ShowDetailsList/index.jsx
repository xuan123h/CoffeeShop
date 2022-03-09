import React from "react";
import ShowDetails from "../ShowDetails";
import "./styles.scss";
function ShowDetailsList({ showDetailsList }) {
  return (
    <ul className="showdetails-list">
      {showDetailsList.map((showDetails) => (
        <li key={showDetails.id}>
          <ShowDetails showDetails={showDetails} />
        </li>
      ))}
    </ul>
  );
}
export default ShowDetailsList;
