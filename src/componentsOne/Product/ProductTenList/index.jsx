import React from "react";
import "./styles.scss";
import ProductTen from "../ProductTen";
function ProductTenList({ productTenList }) {
  return (
    <ul className="productten-list">
      {productTenList.map((productTen) => (
        <li key={productTen.id}>
          <ProductTen productTen={productTen} />
        </li>
      ))}
    </ul>
  );
}
export default ProductTenList;
