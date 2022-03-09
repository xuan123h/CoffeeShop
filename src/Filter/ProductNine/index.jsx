import React from "react";
import "./styles.scss";
function ProductNine({ productNine }) {
  return (
    <div className="productnine">
      <div className="productnine__thumbnail">
        <img src={productNine.thumbnailUrl} alt={productNine.name} />
      </div>
      <p className="productnine__name"> {productNine.name}</p>
      <p className="productnine__price"> {productNine.price} </p>
      <button> MUA NGAY </button>
    </div>
  );
}
export default ProductNine;
