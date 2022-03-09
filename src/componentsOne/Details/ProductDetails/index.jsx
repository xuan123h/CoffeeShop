import React from "react";
import "./styles.scss";
import Link from "react-router-dom";
function ProductDetails({ productDetails }) {
  return (
    <div className="productdetails">
      <div className="productdetails__thumbnail">
        <img src={productDetails.thumbnailUrl} alt={productDetails.name} />
      </div>
      <p className="productdetails__name">{productDetails.name}</p>
      <p className="productdetails__price">{productDetails.price}</p>
      <button>
        {" "}
        <Link to="/showpay"> MUA NGAY </Link>{" "}
      </button>
    </div>
  );
}
export default ProductDetails;
