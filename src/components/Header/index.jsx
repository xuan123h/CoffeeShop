import React from "react";
import "./styles.scss";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="header">
      <div className="header__logo">
        <li> Coffee Shop </li>
      </div>
      <div className="header__page">
        <ul>
          <li>
            <a href="">
              {" "}
              <Link to="/home"> Trang chủ </Link>{" "}
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <Link to="/product"> Sản phẩm </Link>{" "}
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <Link to="/cart"> Xem đơn đặt hàng </Link>{" "}
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <Link to="/promotion"> Mã giảm giá </Link>{" "}
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <Link to="/information"> Giới thiệu </Link>{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="header__icons">
        <li>
          {" "}
          <Link to="/account">
            <FaUserAlt />{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/cart-item">
            {" "}
            <FaShoppingCart />{" "}
          </Link>
        </li>
      </div>
      <div className="header__bonus">
        <li>
          <a href="">
            {" "}
            <Link to="/homeone"> Tết 2022 </Link>{" "}
          </a>
        </li>
        <li>
          <a href="">
            {" "}
            <Link to="/filterproduct"> Cửa hàng </Link>{" "}
          </a>
        </li>
        <li>
          <a href="">
            {" "}
            <Link to="/showpay"> Thanh toán nhanh </Link>{" "}
          </a>
        </li>
        <li>
          <a href="">
            {" "}
            <Link to="/searchproduct"> Tìm kiếm nhanh </Link>
          </a>
        </li>
        <li>
          <a href="">
            {" "}
            <Link to="/homeNew"> Sản phẩm mới </Link>
          </a>
        </li>
      </div>
    </div>
  );
}
export default Header;
