import React from "react";
import "./styles.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaAccusoft } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import { Link } from "react-router-dom";
function Pay(props) {
  return (
    <div className="pay">
      <h2> HOÀN THÀNH ĐƠN HÀNG </h2>
      <div className="pay__googlemap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125389.86924285012!2d106.68329633433888!3d10.854602571262992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d85e042bf04b%3A0xbb26baec1664394d!2zVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1641902170894!5m2!1svi!2s"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <br />
      <div className="pay__address">
        <li>
          {" "}
          <FaMapMarkerAlt />{" "}
        </li>
        <input type="text" placeholder="Địa chỉ" />
      </div>
      <div className="pay__call">
        <div className="pay__call-one">
          <li>
            {" "}
            <FaUser />{" "}
          </li>
          <input type="text" placeholder="Tên đầy đủ người đặt hàng" />
        </div>
        <div className="pay__call-two">
          <li>
            {" "}
            <FaPhoneSquare />{" "}
          </li>
          <input type="text" placeholder="Số điện thoại" />
        </div>
      </div>
      <div className="pay__note">
        <input type="text" placeholder="Note" />
      </div>
      <br />
      <br />
      <div className="pay__icons">
        <li>
          {" "}
          <FaUser /> Select Product{" "}
        </li>
        <p> ----------------- </p>
        <li>
          {" "}
          <FaAccusoft /> Fill order{" "}
        </li>
        <p> ----------------- </p>
        <li>
          {" "}
          <FaSmileBeam /> Done{" "}
        </li>
      </div>
      <button>
        {" "}
        <Link to="/end"> Thanh toán </Link>{" "}
      </button>
    </div>
  );
}
export default Pay;

// Hình ảnh đẹp
{
  /* <img src="http://kenh14cdn.com/2017/15101610-242073229546585-5735138227702988800-n-1485101477256.jpg" alt=""/> */
}
