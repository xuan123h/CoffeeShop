import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
function End(props) {
  return (
    <div className="end">
      <li>
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/15/58/smiley-150658_960_720.png"
          alt=""
        />
      </li>
      <li>
        <img
          src="http://streaming1.danviet.vn/upload/1-2017/images/2017-02-25/148800698862388-drooling-face-facebook-emojipedia.jpeg"
          alt=""
        />
      </li>
      <p>
        {" "}
        Cảm ơn bạn đã đặt hàng thành công. Chúng tôi sẽ giao hàng cho bạn trong
        thời gian sớm nhất{" "}
      </p>
      <button>
        {" "}
        <Link to="/product"> MUA TIẾP SẢN PHẨM </Link>{" "}
      </button>
    </div>
  );
}
export default End;
