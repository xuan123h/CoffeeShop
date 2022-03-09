import React from "react";
import ImageOne from "../componentsOne/ImageOne";
import Logo from "../componentsOne/Logo";
import Information from "../componentsOne/Information";
import Tea from "../componentsOne/Tea";
import ImageTwo from "../componentsOne/ImageTwo";
import PromotionTet from "../componentsOne/PromotionTet";
import Footer from "../componentsOne/Footer";
function HomeOne(props) {
  return (
    <>
      <Logo />
      <ImageOne />
      <Information />
      <Tea />
      <ImageTwo />
      <PromotionTet />
      <Footer />
    </>
  );
}
export default HomeOne;
