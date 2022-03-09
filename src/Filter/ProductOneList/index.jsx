import React from "react";
import ProductOne from "../ProductOne";
import "./styles.scss";
function ProductOneList({ productOneList }) {
  return (
    <ul className="productone-list">
      {productOneList.map((productOne) => (
        <li key={productOne.id}>
          <ProductOne productOne={productOne} />
        </li>
      ))}
    </ul>
  );
}
export default ProductOneList;
