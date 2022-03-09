import React from "react";
import "./styles.scss";
function ProductFive({ productFive }) {
  return (
    <div className="productfive">
      <div className="productfive__thumbnail">
        <img src={productFive.thumbnailUrl} alt={productFive.name} />
      </div>
      <p className="productfive__name"> {productFive.name} </p>
      <p className="productfive__price"> {productFive.price} </p>
      <button> MUA NGAY </button>
    </div>
  );
}
export default ProductFive;
