import React from "react";
import "./styles.scss";
import ProductThree from "../ProductThree";
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
