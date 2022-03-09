import React from "react";
import Shipper from "../Shipper";
import "./styles.scss";
function ShipperList({ shipperList }) {
  return (
    <ul className="shipper-list">
      {shipperList.map((shipper) => (
        <li key={shipper.id}>
          <Shipper shipper={shipper} />
        </li>
      ))}
    </ul>
  );
}
export default ShipperList;
