import React from "react";
import "./styles.scss";
function ProductTwo({ productTwo }) {
  return (
    <div className="producttwo">
      <div className="producttwo__thumbnail">
        <img src={productTwo.thumbnailUrl} alt={productTwo.name} />
      </div>
      <p className="producttwo__name"> {productTwo.name} </p>
      <p className="producttwo__price"> {productTwo.price} </p>
      <button> MUA NGAY </button>
    </div>
  );
}
export default ProductTwo;
