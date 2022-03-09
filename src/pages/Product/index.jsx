import React from "react";
import { Link } from "react-router-dom";
import Category from "../../components/Category";
import SliderH3 from "../../components/H3";
import Header from "../../components/Header";
import ImageProduct from "../../components/ImageProduct";
import Navbar from "../../components/Navbar";
import ProductDetailsFeature from "../../features/ProductDetailsFeature";
import "./styles.scss";
function Product(props) {
  return (
    <div className="product">
      <Header />
      <SliderH3 />
      <Category />
      <ImageProduct />
      <Navbar />
      <ProductDetailsFeature />
      <li>
        <a href="">
          {" "}
          <Link to="/shipper"> Chọn nhân viên giao hàng </Link>{" "}
        </a>
      </li>
      <li className="as">
        {" "}
        <Link to="/details"> Xem chi tiết về các sản phẩm </Link>{" "}
      </li>
    </div>
  );
}
export default Product;
