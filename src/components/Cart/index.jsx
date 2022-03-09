import React from "react";
import "./styles.scss";
function CartItem(props) {
  return (
    <div className="cart">
      <div className="cart__left">
        <div className="cart__left-top">
          <h3> Giỏ hàng </h3>
          <p> 1 Sản phẩm </p>
        </div>
        <div className="cart__left-bottom">
          <table>
            <thead>
              <th> </th>
              <th> TÊN THỨC UỐNG </th>
              <th> KÍCH CỠ </th>
              <th> SỐ LƯỢNG </th>
              <th> ĐƠN GIÁ </th>
            </thead>
            <tbody>
              <td> ✘ </td>
              <td> CARAMEL MACCHIATO </td>
              <td>
                <select name="" id="">
                  {" "}
                  M <option value=""> L </option>
                  <option value=""> Cốc to </option>
                  <option value=""> Cốc nhỏ </option>
                </select>
              </td>
              <td>
                {" "}
                <input type="number" value="1" />
              </td>
              <td> 54,000 VND </td>
            </tbody>
          </table>
        </div>
      </div>
      <div className="cart__right">
        <h4> Tóm tắt đơn hàng </h4>
        <h6> MÃ GIẢM GIÁ </h6>
        <br />
        <input type="text" />
        <br />
        <input type="text" placeholder="ÁP DỤNG" />
        <br />
        <br />
        <div className="cart__right-total">
          <p> TẠM TÍNH </p>
          <p> 54,000 VND </p>
        </div>
      </div>
      <button> THANH TOÁN </button>
    </div>
  );
}
export default CartItem;
