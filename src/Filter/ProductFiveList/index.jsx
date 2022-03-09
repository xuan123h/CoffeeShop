import React from "react";
import ProductFive from "../ProductFive";
import "./styles.scss";
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
