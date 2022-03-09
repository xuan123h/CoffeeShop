import React from "react";
import ProductFor from "../ProductFor";
import "./styles.scss";
function ProductForList({ productForList }) {
  return (
    <ul className="productfor-list">
      {productForList.map((productFor) => (
        <li key={productFor.id}>
          <ProductFor productFor={productFor} />
        </li>
      ))}
    </ul>
  );
}
export default ProductForList;
