import React from "react";
import "./styles.scss";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Account(props) {
  const handleClick = () => {
    toast.success("🦄 Bạn đã đăng nhập thành công !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };
  return (
    <div className="account">
      <div className="account__signup">
        <h3> Đăng nhập </h3>
        <br />
        <br />
        <input type="text" placeholder="Email" />
        <br />
        <div className="account__signup-item">
          <input type="text" placeholder="Mật khẩu" />
          <li>
            {" "}
            <FaEyeSlash />{" "}
          </li>
        </div>
        <button onClick={handleClick}>
          {" "}
          <Link to="/product"> Đăng nhập </Link>{" "}
        </button>
        <br />
        <div className="account__signup-bottom">
          <li>
            {" "}
            <FaGoogle />{" "}
          </li>
          <p> Login with google </p>
        </div>
      </div>
      <h3>
        {" "}
        <Link to="/sign-in"> Đăng ký </Link>{" "}
      </h3>
      <li>
        {" "}
        <FaTimes />{" "}
      </li>
    </div>
  );
}
export default Account;
