import React from "react";
import "./styles.scss";
function ImageInformation(props) {
  return (
    <div className="image-information">
      <div className="image-information__one">
        <h2> CÀ PHÊ </h2>
        <p>
          {" "}
          Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được
          trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết
          rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những
          dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.
        </p>
        <img
          src="https://thecoffeeshopvn.herokuapp.com/static/img/coffeecup_tranpa.png"
          alt=""
        />
      </div>
      <div className="image-information__two">
        <h2> TAKE AWAY </h2>
        <p>
          Thuận tiện cho số đông những người cần cà phê mỗi sáng nhưng lại eo
          hẹp về thời gian cũng như hòa nhập vào nhịp sống của cộng đồng thì sự
          xuất hiện của hình thức cà phê “take away” lại rất được lòng đại bộ
          phận tín đồ của cà phê bởi những tiện ích mà nó mang lại.
        </p>
        <img
          src="https://thecoffeeshopvn.herokuapp.com/static/img/coffeefast_tranpa.png"
          alt=""
        />
      </div>
      <div className="image-information__three">
        <h2> CÀ PHÊ TÚI </h2>
        <p>
          {" "}
          Cà phê sạch được hiểu đơn giản là loại cà phê được tạo ra từ 100% cà
          phê, không trộn lẫn bất kỳ loại hương liệu, hóa chất hay tạp chất nào
          khác.Nói như vậy không có nghĩa là cà phê sạch là loại cà phê ngon
          nhất, tuyệt vời nhất có thể làm bạn hài lòng mà chỉ muốn nhấn mạnh
          rằng cà phê sạch thật sự “tốt” cho sức khỏe...{" "}
        </p>
        <img
          src="https://thecoffeeshopvn.herokuapp.com/static/img/coffeebag_tranpa.png"
          alt=""
        />
      </div>
      <div className="image-information__for">
        <h2> BÁNH MÌ </h2>
        <p>
          {" "}
          Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh
          mì ngon, giòn, nóng hổi tại Highlands Coffee. Một kết hợp hoàn hảo
          giữa lớp nhân chua, cay, mặn, ngọt quyện với lớp vỏ bánh mì giòn tan,
          mịn màng tạo ra tầng tầng lớp lớp dư vị cho thực khách.{" "}
        </p>
        <img
          src="https://thecoffeeshopvn.herokuapp.com/static/img/breadcoffee_tranpa.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default ImageInformation;
