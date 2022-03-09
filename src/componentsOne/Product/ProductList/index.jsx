import React from "react";
import "./styles.scss";
import Product from "../Product";
function ProductList({ productList }) {
  return (
    <ul className="product-list">
      {productList.map((product) => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
export default ProductList;
