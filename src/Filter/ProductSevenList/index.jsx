import React from "react";
import ProductSeven from "../ProductSeven";
import "./styles.scss";
function ProductSevenList({ productSevenList }) {
  return (
    <ul className="productseven-list">
      {productSevenList.map((productSeven) => (
        <li key={productSeven.id}>
          <ProductSeven productSeven={productSeven} />
        </li>
      ))}
    </ul>
  );
}
export default ProductSevenList;
