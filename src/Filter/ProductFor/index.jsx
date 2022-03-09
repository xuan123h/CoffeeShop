import React from "react";
import "./styles.scss";
function ProductFor({ productFor }) {
  return (
    <div className="productfor">
      <div className="productfor__thumbnail">
        <img src={productFor.thumbnailUrl} alt={productFor.name} />
      </div>
      <p className="productfor__name"> {productFor.name}</p>
      <p className="productfor__price"> {productFor.price} </p>
      <button> MUA NGAY </button>
    </div>
  );
  s;
}
export default ProductFor;
