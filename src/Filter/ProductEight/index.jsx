import React from "react";
import "./styles.scss";
function ProductEight({ productEight }) {
  return (
    <div className="producteight">
      <div className="producteight__thumbnail">
        <img src={productEight.thumbnailUrl} alt={productEight.name} />
      </div>
      <p className="producteight__name"> {productEight.name}</p>
      <p className="producteight__price"> {productEight.price} </p>
      <button> MUA NGAY </button>
    </div>
  );
}
export default ProductEight;
