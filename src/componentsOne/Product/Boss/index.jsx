import React from "react";
import styled from "styled-components";
import Header from "../../Product/Header";
import Image from "../../Product/Image";
import Navbar from "../../Product/Navbar";
import ProductFeatureBonus from "../../../featuresOne/ProductFeatureBonus";
import Footer from "../../../componentsOne/Footer";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

function Boss(props) {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Image />
        <Navbar />
      </Wrapper>
      <ProductFeatureBonus />
      <Footer />
    </Container>
  );
}
export default Boss;
