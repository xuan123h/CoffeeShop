import React from "react";
import "./styles.scss";
function ProductOne({ productOne }) {
  return (
    <div className="productone">
      <div className="productone__thumbnail">
        <img src={productOne.thumbnailUrl} alt={productOne.name} />
      </div>
      <p className="productone__name"> {productOne.name}</p>
      <p className="productone__price"> {productOne.price} </p>
      <button> MUA NGAY </button>
    </div>
  );
}
export default ProductOne;
