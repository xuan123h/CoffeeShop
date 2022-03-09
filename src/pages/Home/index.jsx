import React from "react";
import GoogleMap from "../../components/GoogleMap";
import Header from "../../components/Header";
import ImageShow from "../../components/ImageShow";
import AutoPlay from "../../components/SliderSlick";
import Footer from "../../Footer";
import "./styles.scss";
function Home(props) {
  return (
    <div className="home">
      <Header />
      <AutoPlay />

      <ImageShow />
      <GoogleMap />
      <Footer />
    </div>
  );
}
export default Home;

// sưu tầm thêm
// {
//   <img src="https://highlandscoffee.com.vn/vnt_upload/weblink/HCO-7662-MOBILE-APP-QR-WEB-BANNER-VNE.jpg" alt=""/> */
// }
{
  /* <img src="https://highlandscoffee.com.vn/vnt_upload/weblink/HCO-7548-PHIN-SUA-DA-2019-TALENT-WEB_1.jpg" alt=""/> */
}
{
  /* <img src="https://highlandscoffee.com.vn/vnt_upload/weblink/web_1.png" alt=""/> */
}
{
  /* <img src="https://highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639_1.png" alt=""/> */
}
