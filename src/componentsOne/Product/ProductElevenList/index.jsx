import React from "react";
import "./styles.scss";
import ProductEleven from "../ProductEleven";
function ProductElevenList({ productElevenList }) {
  return (
    <ul className="producteleven-list">
      {productElevenList.map((productEleven) => (
        <li key={productEleven.id}>
          <ProductEleven productEleven={productEleven} />
        </li>
      ))}
    </ul>
  );
}
export default ProductElevenList;
