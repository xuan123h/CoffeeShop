import React from "react";
import ProductDetails from "../../../components/ProductDetails";
import "./styles.scss";
function ProductDetailsList({ productDetailsList }) {
  return (
    <ul className="productdetails-list">
      {productDetailsList.map((productDetails) => (
        <li key={productDetails.id}>
          <ProductDetails productDetails={productDetails} />
        </li>
      ))}
    </ul>
  );
}
export default ProductDetailsList;
