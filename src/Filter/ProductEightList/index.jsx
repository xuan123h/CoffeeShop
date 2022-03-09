import React from "react";
import ProductEight from "../ProductEight";
import "./styles.scss";
function ProductEightList({ productEightList }) {
  return (
    <ul className="producteight-list">
      {productEightList.map((productEight) => (
        <li key={productEight.id}>
          <ProductEight productEight={productEight} />
        </li>
      ))}
    </ul>
  );
}
export default ProductEightList;
