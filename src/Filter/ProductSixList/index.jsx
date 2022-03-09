import React from "react";
import ProductSix from "../ProductSix";
import "./styles.scss";
function ProductSixList({ productSixList }) {
  return (
    <ul className="productsix-list">
      {productSixList.map((productSix) => (
        <li key={productSix.id}>
          <ProductSix productSix={productSix} />
        </li>
      ))}
    </ul>
  );
}
export default ProductSixList;
