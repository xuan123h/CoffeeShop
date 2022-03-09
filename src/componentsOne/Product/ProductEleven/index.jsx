import React from "react";
import "./styles.scss";
function ProductEleven({ productEleven }) {
  return (
    <div className="producteleven">
      <div className="producteleven__thumbnail">
        <img src={productEleven.thumbnailUrl} alt={productEleven.name} />
      </div>
      <p className="producteleven__name"> {productEleven.name} </p>
      <p className="producteleven__price"> {productEleven.price} </p>
      <button> MUA NGAY </button>
    </div>
  );
}
export default ProductEleven;
