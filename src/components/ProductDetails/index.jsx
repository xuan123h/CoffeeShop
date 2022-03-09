import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ProductDetails({ productDetails }) {
  const handleClick = () => {
    toast.success("🦄 Bạn đã mua hàng thành công !", {
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
    <div className="productdetails">
      <div className="productdetails__thumbnail">
        <img src={productDetails.thumbnailUrl} alt={productDetails.name} />
      </div>
      <p className="productdetails__name">{productDetails.name}</p>
      <p className="productdetails__price">{productDetails.price}</p>
      <button onClick={handleClick}>
        {" "}
        {/* <Link to="/details"> MUA NGAY </Link>{" "} */}
        <Link to="/details"> MUA NGAY </Link>
      </button>
      <ToastContainer
      // position="top-right"
      // autoClose={5000}
      // hideProgressBar={false}
      // newestOnTop={false}
      // closeOnClick
      // rtl={false}
      // pauseOnFocusLoss
      // draggable
      // pauseOnHover
      />
    </div>
  );
}
export default ProductDetails;
