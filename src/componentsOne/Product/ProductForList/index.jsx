import React from "react";
import "./styles.scss";
import ProductFor from "../ProductFor";
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
