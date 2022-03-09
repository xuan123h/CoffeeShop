import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div>
            <img
              width="1850px"
              src="https://minio.thecoffeehouse.com/image/admin/1641465675_web-app-hungkhoi-20-deli-tch.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              width="1850px"
              src="https://minio.thecoffeehouse.com/image/admin/1200x480_248936.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              width="1850px"
              src="https://minio.thecoffeehouse.com/image/admin/1640976701_web-mua-1-tang-1-latte-tch.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              width="1850px"
              src="https://minio.thecoffeehouse.com/image/admin/1640977489_web-chao2022-tch.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              width="1850px"
              src="https://minio.thecoffeehouse.com/image/admin/1642179040_bannerhomeweb-giam20pt.jpeg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
