import React from "react";
import "./styles.scss";
import ProductSix from "../ProductSix";
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
