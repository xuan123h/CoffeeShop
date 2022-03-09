import React, { useState } from "react";
import "./styles.scss";
import { FaSearch } from "react-icons/fa";
function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar__img">
        <img
          src="https://thecoffeeshopvn.herokuapp.com/static/img/mapbox-marker-icon-20px-orange.png"
          alt=""
        />
      </div>
      <div className="navbar__restaurant">
        <select name="" id="">
          {" "}
          Chi Nhánh Quận 1 - 115 Hai Bà Trưng Bến Nghe, Quận 1, Hồ Chí Minh{" "}
          <option>
            Chi Nhánh Quận 1 - 115 Hai Bà Trưng Bến Nghe, Quận 1, Hồ Chí Minh{" "}
          </option>
          <option value="">
            {" "}
            Chi Nhánh Thủ Đức - Số 1, Võ Văn Ngân, Linh Chiểu, Thủ Đức{" "}
          </option>
          <option value="">
            {" "}
            Chi Nhánh Quận 5 - Số 53, Lê Hồng Phong, Quận 5, Hồ Chí Minh{" "}
          </option>
        </select>
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Tìm sản phẩm" />
        <li>
          {" "}
          <FaSearch />{" "}
        </li>
      </div>
    </div>
  );
}
export default Navbar;
