import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderH3 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="one">
        <Slider {...settings}>
          <div>
            <h3>
              {" "}
              Thoải mái đổi mua hàng để nhận nhiều phần quà cực hấp dẫn !{" "}
            </h3>
          </div>
          <div>
            <h3>
              Chúng tôi lấy khách hàng, nhân viên và cộng đồng làm trọng tâm cho
              mọi quyết định
            </h3>
          </div>
          <div>
            <h3>
              Tận hưởng các đặc quyền chỉ dành riêng cho thành viên Kim Cương
              Tham gia ngay
            </h3>
          </div>
          <div>
            <h3>
              Coffee Shope đồng hành cùng bạn trên chặng đường thưởng thức cà
              phê thật
            </h3>
          </div>
          <div>
            <h3>
              Chúng tôi lấy khách hàng, nhân viên và cộng đồng làm trọng tâm cho
              mọi quyết định
            </h3>
          </div>
          <div>
            <h3>
              Tận hưởng các đặc quyền chỉ dành riêng cho thành viên Kim Cương
              Tham gia ngay
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
