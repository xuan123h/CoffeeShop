import React from "react";
import "./styles.scss";
function ProductSeven({ productSeven }) {
  return (
    <div className="productseven">
      <div className="productseven__thumbnail">
        <img src={productSeven.thumbnailUrl} alt={productSeven.name} />
      </div>
      <p className="productseven__name"> {productSeven.name} </p>
      <p className="productseven__price"> {productSeven.price} </p>
      <button> MUA NGAY </button>
    </div>
  );
}
export default ProductSeven;
