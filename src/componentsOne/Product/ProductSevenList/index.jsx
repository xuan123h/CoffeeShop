import React from "react";
import "./styles.scss";
import ProductSeven from "../ProductSeven";
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
