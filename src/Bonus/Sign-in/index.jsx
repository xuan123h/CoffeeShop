// Đăng ký
import React from "react";
import "./styles.scss";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
function Signin(props) {
  return (
    <div className="account">
      <div className="account__signin">
        <h3 className="sign"> Đăng ký </h3>
        <br />
        <br />
        <input className="name" type="text" placeholder="Họ và tên" />
        <br />
        <input className="email" type="text" placeholder="Email" />
        <br />
        <div className="account__signin-item">
          <input type="text" placeholder="Nhập mật khẩu" />
          <li>
            {" "}
            <FaEyeSlash />{" "}
          </li>
        </div>
        <button>
          {" "}
          <Link to="/account"> Đăng ký </Link>{" "}
        </button>
      </div>
    </div>
  );
}
export default Signin;
