import React from "react";
import "./styles.scss";
import ProductNine from "../ProductNine";
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
