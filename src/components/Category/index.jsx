import React, { useState } from "react";
import "./styles.scss";
function Category(props) {
  return (
    <div className="category">
      <div className="category__title">
        <h2> DANH MỤC </h2>
      </div>
      <div className="category__item">
        <ul>
          <li>
            <a href=""> HIỆN TẤT CẢ </a>
          </li>
          <li>
            <a href=""> TRÀ TRÁI CÂY </a>
          </li>
          <li>
            <a href=""> CÀ PHÊ ĐÁ XAY </a>
          </li>
          <li>
            <a href=""> CÀ PHÊ GÓI </a>
          </li>
          <li>
            <a href=""> BÁNH & SNACK </a>
          </li>
          <li>
            <a href=""> CÀ PHÊ MÁY </a>
          </li>
          <li>
            <a href=""> COLD BREW </a>
          </li>
          <li>
            <a href=""> CÀ PHÊ Ý </a>
          </li>
          <li>
            <a href=""> SỮA </a>
          </li>
          <li>
            <a href=""> TRÀ </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Category;
