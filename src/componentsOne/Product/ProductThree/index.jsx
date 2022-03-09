import React from "react";
import "./styles.scss";
function ProductThree({ productThree }) {
  return (
    <div className="productthree">
      <div className="productthree__thumbnail">
        <img src={productThree.thumbnailUrl} alt={productThree.name} />
      </div>
      <p className="productthree__name"> {productThree.name} </p>
      <p className="productthree__price"> {productThree.price} </p>
      <button> MUA NGAY </button>
    </div>
  );
}
export default ProductThree;
