import React from "react";
import "./styles.scss";
import ProductFive from "../ProductFive";
function ProductFiveList({ productFiveList }) {
  return (
    <ul className="productfive-list">
      {productFiveList.map((productFive) => (
        <li key={productFive.id}>
          <ProductFive productFive={productFive} />
        </li>
      ))}
    </ul>
  );
}
export default ProductFiveList;
