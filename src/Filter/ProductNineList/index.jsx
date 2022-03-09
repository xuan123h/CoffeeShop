import React from "react";
import ProductNine from "../ProductNine";
import "./styles.scss";
function ProductNineList({ productNineList }) {
  return (
    <ul className="productnine-list">
      {productNineList.map((productNine) => (
        <li key={productNine.id}>
          <ProductNine productNine={productNine} />
        </li>
      ))}
    </ul>
  );
}
export default ProductNineList;
