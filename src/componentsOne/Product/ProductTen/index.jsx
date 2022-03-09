import React from "react";
import "./styles.scss";
function ProductTen({ productTen }) {
  return (
    <div className="productten">
      <div className="productten__thumbnail">
        <img src={productTen.thumbnailUrl} alt={productTen.name} />
      </div>
      <p className="productten__name"> {productTen.name} </p>
      <p className="productten__price"> {productTen.price} </p>
      <button> MUA NGAY </button>
    </div>
  );
}
export default ProductTen;
