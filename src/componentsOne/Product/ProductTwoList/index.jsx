import React from "react";
import "./styles.scss";
import ProductTwo from "../ProductTwo";
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
