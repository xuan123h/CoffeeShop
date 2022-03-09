import React from "react";
import Header from "../../components/Header";
import ImageInformation from "../../components/ImageInformation";
import "./styles.scss";
function Information(props) {
  return (
    <div className="information">
      <Header />
      <ImageInformation />
    </div>
  );
}
export default Information;
