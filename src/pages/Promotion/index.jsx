import React from "react";
import Header from "../../components/Header";
import SearchPromotion from "../../components/SearchPromotion";
import "./styles.scss";
function Promotion(props) {
  return (
    <div className="promotion">
      <Header />
      <SearchPromotion />
    </div>
  );
}
export default Promotion;
