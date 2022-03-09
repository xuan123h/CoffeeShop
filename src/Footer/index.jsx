import React from "react";
import "./styles.scss";
function Footer(props) {
  return (
    <div className="footer">
      <h4> Liên hệ với chúng tôi </h4>
      <div className="footer__top">
        <li> Số điện thoại : 0965275847 </li>
        <br />
        <li> Facebook : Văn Xuân </li>
      </div>
      <div className="footer__bottom">
        <p> @ 2022 - Được tạo ra bởi Nhà hàng Coffee Shop </p>
      </div>
    </div>
  );
}
export default Footer;
