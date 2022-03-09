import React from "react";
import "./styles.scss";
function ProductSix({ productSix }) {
  return (
    <div className="productsix">
      <div className="productsix__thumbnail">
        <img src={productSix.thumbnailUrl} alt={productSix.name} />
      </div>
      <p className="productsix__name"> {productSix.name}</p>
      <p className="productsix__price"> {productSix.price} </p>
      <button> MUA NGAY </button>
    </div>
  );
}
export default ProductSix;
