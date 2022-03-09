import { Link } from "react-router-dom";
import React from "react";
import "./styles.scss";
function Product({ product }) {
  return (
    <div className="product">
      <div className="product__thumbnail">
        <img src={product.thumbnailUrl} alt={product.name} />
      </div>
      <p className="product__name"> {product.name} </p>
      <p className="product__price"> {product.price} </p>
      <button>
        {" "}
        <Link to="/bossbonus"> MUA NGAY </Link>{" "}
      </button>
    </div>
  );
}
export default Product;
