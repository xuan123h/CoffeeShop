import React from "react";
import "./styles.scss";
import ProductOne from "../ProductOne";
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
