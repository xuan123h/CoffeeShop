import React from "react";
import ProductTwo from "../ProductTwo";
import "./styles.scss";
function ProductTwoList({ productTwoList }) {
  return (
    <ul className="producttwo-list">
      {productTwoList.map((productTwo) => (
        <li key={productTwo.id}>
          <ProductTwo productTwo={productTwo} />
        </li>
      ))}
    </ul>
  );
}
export default ProductTwoList;
