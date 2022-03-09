import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1770px;
  height: 451.25px;
  margin-top: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  margin-left: 320px;
`;

const ImageOne = styled.div``;
const ImgOne = styled.img`
  width: 573px;
  height: 573px;
  position: absolute;
  left: 300px;
`;
const Name = styled.a`
  position: absolute;
  margin-top: 600px;
  font-size: 16px;
  color: #191919;
`;
const Price = styled.h4`
  position: absolute;
  margin-top: 630px;
  font-size: 28px;
  color: #ea8025;
`;
const WrapperOne = styled.div`
  position: absolute;
  margin-top: 680px;
  left: 305px;
`;
const ButtonOne = styled.button`
  width: 282px;
  height: 40px;
  background-color: #e57905;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  box-shadow: inset 0 0 0 0 goldenrod;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: inset 300px 0 0 0 goldenrod;
    cursor: pointer;
  }
`;
const ButtonTwo = styled.button`
  width: 282px;
  height: 40px;
  background-color: #ffffff;
  color: #191919;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 goldenrod;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: inset 300px 0 0 0 goldenrod;
    cursor: pointer;
  }
`;

const ImageTwo = styled.div``;
const ImgTwo = styled.img`
  width: 573px;
  height: 573px;
  position: absolute;
  left: 900px;
`;
const NameTwo = styled.a`
  position: absolute;
  margin-left: 600px;
  margin-top: 600px;
  font-size: 16px;
  color: #191919;
`;
const PriceTwo = styled.h4`
  position: absolute;
  margin-left: 600px;
  margin-top: 630px;
  font-size: 28px;
  color: #ea8025;
`;
const WrapperTwo = styled.div`
  position: absolute;
  margin-left: 580px;
  margin-top: 680px;
`;
const ButtonThree = styled.button`
  width: 282px;
  height: 40px;
  background-color: #e57905;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  box-shadow: inset 0 0 0 0 goldenrod;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: inset 300px 0 0 0 goldenrod;
    cursor: pointer;
  }
`;
const ButtonFor = styled.button`
  width: 282px;
  height: 40px;
  background-color: #ffffff;
  color: #191919;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 goldenrod;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: inset 300px 0 0 0 goldenrod;
    cursor: pointer;
  }
`;
const ImgBonus = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 2900px;
  left: 940px;
`;
function PrommorionTet(props) {
  return (
    <Container>
      <Wrapper>
        <ImageOne>
          <ImgOne src="https://product.hstatic.net/1000075078/product/1640270462_combo-qua-tet-2022_a11c523513a847899608f9196886554e_large.jpg" />
          <Name> Combo Quà Tết 2022 </Name>
          <Price>249.000 đ</Price>
          <WrapperOne>
            <ButtonOne>
              {" "}
              <Link to="/boss"> Đặt giao tận nơi </Link>{" "}
            </ButtonOne>
            <ButtonTwo> Mua tại cửa hàng </ButtonTwo>
          </WrapperOne>
        </ImageOne>
        <ImageTwo>
          <ImgTwo src="https://product.hstatic.net/1000075078/product/giftset-tra-tearoma_5bb77a734c2447839a593f18ef27730b_large.jpg" />
          <NameTwo> Giftset Trà Tearoma </NameTwo>
          <PriceTwo> 169.000 đ </PriceTwo>
          <WrapperTwo>
            <ButtonThree> Đặt giao tận nơi </ButtonThree>
            <ButtonFor> Mua tại cửa hàng </ButtonFor>
          </WrapperTwo>
          <ImgBonus src="https://file.hstatic.net/1000075078/file/label_moi_6bc6fa8b361848c99da6cc0655223773.svg" />
        </ImageTwo>
      </Wrapper>
    </Container>
  );
}
export default PrommorionTet;
