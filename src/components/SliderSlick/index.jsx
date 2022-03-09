import React, { Component } from "react";
import Slider from "react-slick";
import "./styles.scss";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div className="css">
        <h2>Cà Phê Thơm Ngon</h2>
        <Slider {...settings}>
          <div>
            <img
              width="2200px"
              height="1000px"
              src="https://thecoffeeshopvn.herokuapp.com/static/img/slider3.png"
              alt=""
            />
          </div>
          <div>
            <img
              width="2200px"
              height="1000px"
              src="https://thecoffeeshopvn.herokuapp.com/static/img/slider2.png"
              alt=""
            />
          </div>
          <div>
            <img
              width="2200px"
              height="1000px"
              src="https://thecoffeeshopvn.herokuapp.com/static/img/slider3.png"
              alt=""
            />
          </div>
          <div>
            <img
              width="2200px"
              height="1000px"
              src="https://thecoffeeshopvn.herokuapp.com/static/img/slider2.png"
              alt=""
            />
          </div>
          <div>
            <img
              width="2200px"
              height="1000px"
              src="https://thecoffeeshopvn.herokuapp.com/static/img/slider3.png"
              alt=""
            />
          </div>
          <div>
            <img
              width="2200px"
              height="1000px"
              src="https://thecoffeeshopvn.herokuapp.com/static/img/slider2.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
