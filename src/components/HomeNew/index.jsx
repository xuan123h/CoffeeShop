import React from "react";
import ProductsNew from "../../components/ProductsNew";
import NavbarNew from "../NavbarNew";
import "./styles.scss";
const HomeNew = () => {
  return (
    <div className="hero">
      <NavbarNew />
      <div className="card bg-dark text-white border-0 mt-5">
        <img
          src="https://thecoffeeshopvn.herokuapp.com/static/img/short_banner.jpg"
          className="card-img"
          alt="Background"
          height="650px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-2 mt-5 me-1 ">
              CÀ PHÊ MỚI NHẤT
            </h5>
            <p className="card-text lead fs-2">
              CÓ ĐỦ CÁC LOẠI CHO ĐẾN HƯƠNG VỊ
            </p>
          </div>
        </div>
      </div>
      <ProductsNew />
    </div>
  );
};

export default HomeNew;
