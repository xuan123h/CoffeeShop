import React from "react";
import ProductThree from "../ProductThree";
import "./styles.scss";
function ProductThreeList({ productThreeList }) {
  return (
    <ul className="productthree-list">
      {productThreeList.map((productThree) => (
        <li key={productThree.id}>
          <ProductThree productThree={productThree} />
        </li>
      ))}
    </ul>
  );
}
export default ProductThreeList;
