import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
function Shipper({ shipper }) {
  return (
    <div className="shipper">
      <div className="shipper__thumbnail">
        <img src={shipper.thumbnailUrl} alt={shipper.name} />
      </div>
      <p className="shipper__name"> Tên : {shipper.name}</p>
      <p className="shipper__price"> Phí ship : {shipper.price}</p>
      <p className="shipper__order"> Đã chọn : {shipper.order}</p>
      <p className="shipper__old"> Tuổi : {shipper.old}</p>
      <p className="shipper__address"> Địa chỉ : {shipper.address}</p>
      <p className="shipper__hotline"> Số điện thoại : {shipper.hotline}</p>
      <button>
        {" "}
        <Link to="/end"> Chọn nhân viên </Link>{" "}
      </button>
    </div>
  );
}
export default Shipper;
